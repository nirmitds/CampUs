import React, { useEffect, useState } from "react";
import axios from "axios";
import API  from "../api";

function MyRequests(){

const [requests,setRequests] = useState([]);

const token = localStorage.getItem("token");

/* LOAD MY REQUESTS */

useEffect(()=>{

axios.get(`${API}/exchange/my-requests`,{
headers:{
Authorization:`Bearer ${token}`
}
})
.then(res=>{
setRequests(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);


/* DELETE REQUEST */

const handleDelete = async(id)=>{

try{

await axios.delete(`${API}/exchange/${id}`,{
headers:{
Authorization:`Bearer ${token}`
}
});

setRequests(prev =>
prev.filter(req => req._id !== id)
);

}catch(err){

console.log(err);

}

};


/* TYPE ICON */

const getIcon = (type)=>{

if(type==="buy") return "🛒";
if(type==="rent") return "📦";
if(type==="exchange") return "🔁";

return "📚";

};


/* UI */

return(

<div style={pageStyle}>

<h2 style={title}>My Requests</h2>

{requests.length===0 && (

<div style={emptyBox}>
No requests created yet
</div>

)}

<div style={grid}>

{requests.map(req=>(

<div key={req._id} style={card}>

<div style={icon}>
{getIcon(req.type)}
</div>

<h3 style={itemTitle}>
{req.title}
</h3>

<p style={desc}>
{req.description}
</p>

<p style={meta}>
Type: {req.type}
</p>

<p style={meta}>
Category: {req.category}
</p>

<p style={status}>
Status: {req.status}
</p>

<button
style={deleteBtn}
onClick={()=>handleDelete(req._id)}
>
Delete
</button>

</div>

))}

</div>

</div>

)

}

export default MyRequests;


/* ================= STYLES ================= */

const pageStyle={
padding:"25px"
}

const title={
marginBottom:"20px"
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}

const card={
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
}

const icon={
fontSize:"26px",
marginBottom:"10px"
}

const itemTitle={
marginBottom:"8px"
}

const desc={
color:"#475569"
}

const meta={
marginTop:"5px",
fontSize:"14px"
}

const status={
marginTop:"5px",
fontWeight:"600",
color:"#2563eb"
}

const deleteBtn={
marginTop:"15px",
background:"#ef4444",
border:"none",
color:"white",
padding:"8px 14px",
borderRadius:"6px",
cursor:"pointer"
}

const emptyBox={
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"
}