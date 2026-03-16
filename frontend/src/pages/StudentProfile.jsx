import React, { useState } from "react";

function StudentProfile(){

const user = JSON.parse(localStorage.getItem("user"));

const [image,setImage] = useState(null);

const handleImage = (e)=>{
const file = e.target.files[0];
if(file){
setImage(URL.createObjectURL(file));
}
};

return(

<div style={page}>

<div style={card}>

{image ? (

<img src={image} style={profileImg}/>

):(

<div style={avatar}>
{user?.username?.charAt(0).toUpperCase()}
</div>

)}

<input type="file" accept="image/*" capture="environment" onChange={handleImage}/>

<h2>{user?.username}</h2>

<p>{user?.email}</p>

<p>Phone: {user?.phone}</p>

<p>Role: {user?.role}</p>

<p>Coins: {user?.coins}</p>

</div>

</div>

);

}

export default StudentProfile;

const page={
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"80vh"
};

const card={
background:"white",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
textAlign:"center"
};

const avatar={
width:"80px",
height:"80px",
borderRadius:"50%",
background:"#2563eb",
color:"white",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"28px",
margin:"auto"
};

const profileImg={
width:"90px",
height:"90px",
borderRadius:"50%",
objectFit:"cover"
};