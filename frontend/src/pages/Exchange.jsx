import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../api";

function Exchange(){

const user = JSON.parse(localStorage.getItem("user"));
const currentUser = user?.username || "guest";

const [coins,setCoins] = useState(user?.coins || 100);

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [category,setCategory]=useState("electronics");

const [type,setType]=useState("buy");

const [price,setPrice]=useState("");
const [coinsRequired,setCoinsRequired]=useState("");
const [exchangeItem,setExchangeItem]=useState("");

const [requests,setRequests]=useState([]);

const [activeTab,setActiveTab]=useState("exchange");

const badWords=["fuck","shit","bitch","ass","idiot"];


/* VALIDATION */

const containsBadWord = (text)=>{
const lower=text.toLowerCase();
return badWords.some(word=>lower.includes(word));
};

const numbersOnly = (value)=>{
return value.replace(/[^0-9]/g,"");
};


/* LOAD DATA */

useEffect(()=>{
loadRequests();
},[]);

const loadRequests = async()=>{

try{

const res = await axios.get(`${API}/exchange/all`);
setRequests(res.data);

}catch(err){
console.log(err);
}

};


/* CREATE REQUEST */

const handleAdd = async () => {

if (!title.trim() || !description.trim()) {
alert("Title and description required");
return;
}

if(containsBadWord(title) || containsBadWord(description)){
alert("Please avoid inappropriate words");
return;
}

try {

const token = localStorage.getItem("token");

await axios.post(
`${API}/exchange/create`,
{
title,
description,
category,
type,
price,
coinsRequired,
exchangeItem
},
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

loadRequests();

setTitle("");
setDescription("");
setPrice("");
setCoinsRequired("");
setExchangeItem("");

}catch(err){

console.log(err);
alert("Failed to create request");

}

};


/* ACCEPT */

const handleAccept = async(req)=>{

try{

const token = localStorage.getItem("token");

await axios.put(
`${API}/exchange/accept/${req._id}`,
{},
{headers:{Authorization:`Bearer ${token}`}}
);

if(req.coinsRequired){
setCoins(prev=>prev-Number(req.coinsRequired));
}

loadRequests();

}catch(err){
console.log(err);
}

};


/* CONTACT OWNER */

const handleContact = (phone)=>{

if(!phone){
alert("Phone number not available");
return;
}

alert(`Contact Owner: ${phone}`);

};


/* DELETE */

const handleDelete = async(id)=>{

try{

const token = localStorage.getItem("token");

await axios.delete(
`${API}/exchange/${id}`,
{headers:{Authorization:`Bearer ${token}`}}
);

loadRequests();

}catch(err){
console.log(err);
}

};


/* FILTER REQUESTS */

const myRequests = requests.filter(
req => req.ownerUsername === currentUser
);

const allRequests = requests;


return(

<div style={pageStyle}>

{/* HEADER */}

<div style={headerRow}>

<h2>Campus Marketplace</h2>

<div style={tabs}>

<button
style={activeTab==="exchange"?activeTabBtn:tabBtn}
onClick={()=>setActiveTab("exchange")}
>
Add Requests
</button>

<button
style={activeTab==="my"?activeTabBtn:tabBtn}
onClick={()=>setActiveTab("my")}
>
My Requests
</button>

<button
style={activeTab==="all"?activeTabBtn:tabBtn}
onClick={()=>setActiveTab("all")}
>
All Requests
</button>

</div>

</div>


<div style={userInfo}>
Logged in as: {currentUser}
<br/>
Coins: <span style={coinText}>{coins}</span>
</div>


{/* CREATE REQUEST */}

{activeTab==="exchange" && (

<div style={formBox}>

<div style={row}>

<input
placeholder="Item Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
style={inputStyle}
/>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
style={inputStyle}
>
<option value="buy">Buy</option>
<option value="rent">Rent</option>
<option value="exchange">Exchange</option>
</select>

</div>

<textarea
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
style={textAreaStyle}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
style={inputStyle}
>
<option value="electronics">Electronics</option>
<option value="books">Books</option>
<option value="clothing">Clothing</option>
<option value="furniture">Furniture</option>
<option value="other">Other</option>
</select>


{/* BUY */}

{type==="buy" &&(

<div style={row}>

<input
placeholder="Price ₹"
value={price}
onChange={(e)=>setPrice(numbersOnly(e.target.value))}
style={inputStyle}
/>

<input
placeholder="Coins Required"
value={coinsRequired}
onChange={(e)=>setCoinsRequired(numbersOnly(e.target.value))}
style={inputStyle}
/>

</div>

)}


{/* RENT */}

{type==="rent" &&(

<input
placeholder="Coins Required"
value={coinsRequired}
onChange={(e)=>setCoinsRequired(numbersOnly(e.target.value))}
style={inputStyle}
/>

)}


{/* EXCHANGE */}

{type==="exchange" &&(

<input
placeholder="Item wanted for exchange"
value={exchangeItem}
onChange={(e)=>setExchangeItem(e.target.value)}
style={inputStyle}
/>

)}

<button style={addBtn} onClick={handleAdd}>
Add Request
</button>

</div>

)}



{/* MY REQUESTS */}

{activeTab==="my" && (

<>

<h3>My Requests</h3>

{myRequests.map(req=>(

<div key={req._id} style={card}>

<h4>{req.title}</h4>

<p>{req.description}</p>

<p>Category: {req.category}</p>

{req.price && <p>Price: ₹{req.price}</p>}

{req.coinsRequired && <p>Coins: {req.coinsRequired}</p>}

{req.exchangeItem && <p>Exchange with: {req.exchangeItem}</p>}

<p>Status: {req.status}</p>

<button
style={dangerBtn}
onClick={()=>handleDelete(req._id)}
>
Delete
</button>

</div>

))}

</>

)}



{/* ALL REQUESTS */}

{activeTab==="all" && (

<>

<h3>All Requests</h3>

{allRequests.map(req=>(

<div key={req._id} style={card}>

<h4>{req.title}</h4>

<p>{req.description}</p>

<p>Owner: {req.ownerUsername}</p>

<p>Type: {req.type}</p>

<p>Category: {req.category}</p>

{req.price && <p>Price: ₹{req.price}</p>}

{req.coinsRequired && <p>Coins: {req.coinsRequired}</p>}

{req.exchangeItem && <p>Exchange with: {req.exchangeItem}</p>}

{req.status==="Open" && req.ownerUsername!==currentUser &&(

<button
style={primaryBtn}
onClick={()=>handleAccept(req)}
>
Accept
</button>

)}

{req.status==="Accepted" && req.ownerUsername!==currentUser &&(

<button
style={primaryBtn}
onClick={()=>handleContact(req.phone)}
>
Contact Owner
</button>

)}

</div>

))}

</>

)}

</div>

);

}


/* STYLES */

const pageStyle={padding:"25px"};

const headerRow={
display:"flex",
justifyContent:"space-between",
alignItems:"center"
};

const tabs={display:"flex",gap:"10px"};

const tabBtn={
padding:"8px 14px",
border:"1px solid #ccc",
borderRadius:"6px",
background:"white",
cursor:"pointer"
};

const activeTabBtn={
padding:"8px 14px",
borderRadius:"6px",
background:"#2563eb",
color:"white",
border:"none"
};

const userInfo={marginBottom:"15px"};

const coinText={color:"#2563eb"};

const formBox={
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)",
marginBottom:"20px"
};

const row={display:"flex",gap:"20px",marginBottom:"10px"};

const inputStyle={
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc",
flex:1
};

const textAreaStyle={
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc",
width:"100%",
marginBottom:"10px"
};

const addBtn={
width:"100%",
background:"#2563eb",
color:"white",
padding:"10px",
border:"none",
borderRadius:"6px",
cursor:"pointer"
};

const card={
background:"white",
padding:"15px",
borderRadius:"10px",
marginBottom:"15px",
boxShadow:"0 3px 10px rgba(0,0,0,0.05)"
};

const primaryBtn={
background:"#2563eb",
color:"white",
padding:"6px 12px",
border:"none",
borderRadius:"6px",
cursor:"pointer"
};

const dangerBtn={
background:"#ef4444",
color:"white",
padding:"6px 12px",
border:"none",
borderRadius:"6px",
cursor:"pointer"
};

export default Exchange;