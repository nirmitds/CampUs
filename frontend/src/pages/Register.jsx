import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/campus.png";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const numbersOnly = (v)=> v.replace(/[^0-9]/g,"");

/* REGISTER */

const handleRegister = async()=>{

try{

await axios.post(
"http://localhost:5000/auth/register",
{
name,
username,
email,
phone,
password
}
);

alert("Account created successfully");

navigate("/");

}catch(err){

alert(err.response?.data?.message || "Registration failed");

}

};

return(

<div style={pageStyle}>

<div style={cardStyle}>

{/* HEADER */}

<div style={headerStyle}>

<img src={logo} alt="Campus" style={logoStyle}/>

<div>
<h3 style={{margin:0}}>CampUs</h3>
<p style={tagline}>Connecting Students Together</p>
</div>

</div>

<h2 style={title}>Register</h2>

<p style={subtitle}>
Create your campus account
</p>

{/* NAME */}

<input
style={inputStyle}
placeholder="Full Name"
onChange={(e)=>setName(e.target.value)}
/>

{/* USERNAME */}

<input
style={inputStyle}
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>

{/* EMAIL */}

<input
style={inputStyle}
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

{/* PHONE */}

<input
style={inputStyle}
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(numbersOnly(e.target.value))}
maxLength={10}
/>

{/* PASSWORD */}

<div style={{position:"relative"}}>

<input
style={passwordInput}
type={showPassword ? "text":"password"}
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<span
style={eyeStyle}
onClick={()=>setShowPassword(!showPassword)}
>
👁
</span>

</div>

{/* REGISTER BUTTON */}

<button
style={buttonStyle}
onClick={handleRegister}
>
Register
</button>

<p style={switchText}>

Already have an account?

<span
style={linkStyle}
onClick={()=>navigate("/")}
>
 Sign in
</span>

</p>

</div>

</div>

)

}

export default Register;


/* ================= STYLES ================= */

const pageStyle={
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f1f5f9"
}

const cardStyle={
width:"380px",
background:"white",
padding:"35px",
borderRadius:"12px",
boxShadow:"0 15px 35px rgba(0,0,0,0.08)",
boxSizing:"border-box"
}

const headerStyle={
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

const title={
textAlign:"center",
marginBottom:"5px"
}

const subtitle={
textAlign:"center",
color:"#6b7280",
marginBottom:"20px"
}

const inputStyle={
width:"100%",
padding:"12px",
borderRadius:"8px",
border:"1px solid #e5e7eb",
fontSize:"14px",
boxSizing:"border-box",
marginBottom:"12px"
}

const passwordInput={
...inputStyle,
paddingRight:"40px"
}

const eyeStyle={
position:"absolute",
right:"12px",
top:"50%",
transform:"translateY(-50%)",
cursor:"pointer"
}

const buttonStyle={
width:"100%",
padding:"12px",
background:"#3b82f6",
color:"white",
border:"none",
borderRadius:"8px",
cursor:"pointer",
fontWeight:"500"
}

const switchText={
marginTop:"20px",
textAlign:"center"
}

const linkStyle={
color:"#2563eb",
cursor:"pointer",
marginLeft:"5px"
}