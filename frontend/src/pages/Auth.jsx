import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import logo from "../assets/campus.png";

function Auth(){

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [showPassword,setShowPassword] = useState(false);


/* LOGIN */

const handleLogin = async()=>{

try{

const res = await axios.post(
"http://localhost:5000/auth/login",
{
username,
password
}
);

const decoded = jwtDecode(res.data.token);

localStorage.setItem("token",res.data.token);
localStorage.setItem("user",JSON.stringify(decoded));

navigate("/student");

}catch(err){

alert(err.response?.data?.message || "Login failed");

}

};

return(

<div style={page}>

<div style={card}>

<div style={header}>

<img src={logo} style={logoStyle} alt="logo"/>

<div>
<h3 style={{margin:0}}>CampUs</h3>
<p style={tagline}>Connecting Students Together</p>
</div>

</div>

<h2 style={title}>Sign In</h2>

<p style={subtitle}>
Enter your credentials to continue
</p>

<input
style={input}
placeholder="Username or Email"
onChange={(e)=>setUsername(e.target.value)}
/>

<div style={passwordBox}>

<input
style={passwordInput}
type={showPassword ? "text":"password"}
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<span
style={eye}
onClick={()=>setShowPassword(!showPassword)}
>
👁
</span>

</div>

<button
style={button}
onClick={handleLogin}
>
Sign In
</button>

<p style={switchText}>

Don't have an account?

<span
style={link}
onClick={()=>navigate("/register")}
>
Create one
</span>

</p>

</div>

</div>

)

}

export default Auth;


/* STYLES */

const page={
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f1f5f9"
}

const card={
width:"380px",
background:"white",
padding:"40px",
borderRadius:"14px",
boxShadow:"0 20px 40px rgba(0,0,0,0.08)",
boxSizing:"border-box"
}

const header={
display:"flex",
alignItems:"center",
gap:"10px",
marginBottom:"20px"
}

const logoStyle={width:"40px"}

const tagline={
fontSize:"12px",
color:"#6b7280",
margin:0
}

const title={textAlign:"center"}

const subtitle={
textAlign:"center",
color:"#6b7280",
marginBottom:"20px"
}

const input={
width:"100%",
padding:"12px",
borderRadius:"8px",
marginBottom:"12px",
border:"1px solid #e5e7eb",
fontSize:"14px",
boxSizing:"border-box"
}

const passwordBox={position:"relative"}

const passwordInput={
...input,
paddingRight:"40px"
}

const eye={
position:"absolute",
right:"12px",
top:"37%",
transform:"translateY(-50%)",
cursor:"pointer"
}

const button={
width:"100%",
padding:"12px",
background:"#3b82f6",
color:"white",
border:"none",
borderRadius:"8px",
cursor:"pointer",
marginBottom:"10px"
}

const switchText={
textAlign:"center",
marginTop:"15px"
}

const link={
color:"#2563eb",
cursor:"pointer",
marginLeft:"5px"
}