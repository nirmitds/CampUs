import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function StudentDashboard(){

const { user } = useContext(AuthContext);
const navigate = useNavigate();

const [hover,setHover] = useState(null);

return(

<div>

{/* HEADER */}

<div style={headerRow}>

<h2 style={title}>Dashboard</h2>

<div style={userInfo}>
<span>Welcome: <b>{user?.username}</b></span>
<span style={coins}>Coins: {user?.coins}</span>
</div>

</div>

{/* DASHBOARD GRID */}

<div style={grid}>

<div
style={{
...cardButton,
...(hover==="exchange"?hoverCard:{})
}}
onMouseEnter={()=>setHover("exchange")}
onMouseLeave={()=>setHover(null)}
onClick={()=>navigate("/student/exchange")}
>
🔁
<p>Exchange</p>
</div>


<div
style={{
...cardButton,
...(hover==="academic"?hoverCard:{})
}}
onMouseEnter={()=>setHover("academic")}
onMouseLeave={()=>setHover(null)}
onClick={()=>navigate("/student/academic")}
>
📚
<p>Academic</p>
</div>

<div
style={{
...cardButton,
...(hover==="emergency"?hoverCard:{})
}}
onMouseEnter={()=>setHover("emergency")}
onMouseLeave={()=>setHover(null)}
onClick={()=>navigate("/student/emergency")}
>
🚨
<p>Emergency</p>
</div>

<div
style={{
...cardButton,
...(hover==="wallet"?hoverCard:{})
}}
onMouseEnter={()=>setHover("wallet")}
onMouseLeave={()=>setHover(null)}
onClick={()=>navigate("/student/wallet")}
>
💰
<p>Wallet</p>
</div>

<div
style={{
...cardButton,
...(hover==="profile"?hoverCard:{})
}}
onMouseEnter={()=>setHover("profile")}
onMouseLeave={()=>setHover(null)}
onClick={()=>navigate("/student/profile")}
>
👤
<p>My Profile</p>
</div>

</div>

</div>

);

}

export default StudentDashboard;


/* STYLES */

const headerRow={
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"18px"
}

const title={
fontSize:"30px",
fontWeight:"700"
}

const userInfo={
display:"flex",
gap:"20px",
fontSize:"18px",
fontWeight:"600"
}

const coins={
color:"#2563eb",
fontWeight:"700"
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"25px"
}

const cardButton={
background:"white",
padding:"35px",
borderRadius:"16px",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
textAlign:"center",
cursor:"pointer",
fontSize:"22px",
fontWeight:"600",
transition:"all 0.25s ease",
display:"flex",
flexDirection:"column",
alignItems:"center",
gap:"10px"
}

const hoverCard={
transform:"scale(1.08)",
boxShadow:"0 20px 45px rgba(0,0,0,0.18)"
}