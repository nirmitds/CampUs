import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/campus.png";

function StudentLayout() {

const navigate = useNavigate();
const [open,setOpen] = useState(false);
const [hover,setHover] = useState(null);

const logout=()=>{

const confirmLogout = window.confirm("Are you sure you want to logout?");
if(!confirmLogout) return;

localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/");

};

const closeSidebar=()=>setOpen(false);

const getLinkStyle=(name)=>({isActive})=>({

...linkStyle,

background:
isActive
? "#1e293b"
: hover === name
? "#1e293b"
: "transparent",

borderLeft:isActive
? "4px solid #3b82f6"
: "4px solid transparent",

fontSize:isActive ? "19px":"17px",

fontWeight:isActive ? "600":"400",

transform:
(isActive || hover === name)
? "scale(1.05)"
: "scale(1)"

});

return(

<div style={layoutStyle}>

{open &&(
<div
style={overlay}
onClick={()=>setOpen(false)}
/>
)}

{/* SIDEBAR */}

<div
style={{
...sidebarStyle,
transform:open?"translateX(0)":"translateX(-100%)"
}}
>

<h2 style={logoText}>CampUs</h2>

<div style={menuSection}>

<NavLink
onClick={closeSidebar}
style={getLinkStyle("dashboard")}
to="/student/dashboard"
end
onMouseEnter={()=>setHover("dashboard")}
onMouseLeave={()=>setHover(null)}
>
🏠 Dashboard
</NavLink>


<NavLink
onClick={closeSidebar}
style={getLinkStyle("exchange")}
to="/student/exchange"
onMouseEnter={()=>setHover("exchange")}
onMouseLeave={()=>setHover(null)}
>
🔁 Market
</NavLink>


<NavLink
onClick={closeSidebar}
style={getLinkStyle("academic")}
to="/student/academic"
onMouseEnter={()=>setHover("academic")}
onMouseLeave={()=>setHover(null)}
>
📚 Academic
</NavLink>

<NavLink
onClick={closeSidebar}
style={getLinkStyle("emergency")}
to="/student/emergency"
onMouseEnter={()=>setHover("emergency")}
onMouseLeave={()=>setHover(null)}
>
🚨 Emergency
</NavLink>

<NavLink
onClick={closeSidebar}
style={getLinkStyle("wallet")}
to="/student/wallet"
onMouseEnter={()=>setHover("wallet")}
onMouseLeave={()=>setHover(null)}
>
💰 Wallet
</NavLink>

<NavLink
onClick={closeSidebar}
style={getLinkStyle("profile")}
to="/student/profile"
onMouseEnter={()=>setHover("profile")}
onMouseLeave={()=>setHover(null)}
>
👤 My Profile
</NavLink>

<NavLink
onClick={closeSidebar}
style={getLinkStyle("about")}
to="/student/about"
onMouseEnter={()=>setHover("about")}
onMouseLeave={()=>setHover(null)}
>
ℹ️ About
</NavLink>   

</div>

<button style={logoutBtn} onClick={logout}>
🚪 Logout
</button>

</div>

{/* MAIN */}

<div style={mainArea}>

<div style={topbar}>

<button
style={menuButton}
onClick={()=>setOpen(!open)}
>
☰
</button>

<div style={topTitle}>
CampUs
</div>

<img src={logo} alt="Campus" style={logoStyle}/>

</div>

<div style={contentStyle}>
<Outlet/>
</div>

</div>

</div>

);

}

export default StudentLayout;


/* STYLES */

const layoutStyle={
display:"flex",
minHeight:"100vh",
width:"100%"
};

const overlay={
position:"fixed",
top:0,
left:0,
width:"100vw",
height:"100vh",
background:"rgba(0,0,0,0.4)",
backdropFilter:"blur(4px)",
zIndex:2000
};

const sidebarStyle={
width:"220px",
background:"#0f172a",
color:"white",
padding:"25px",
display:"flex",
flexDirection:"column",
position:"fixed",
top:0,
left:0,
height:"95.5vh",
transition:"transform 0.15s cubic-bezier(.4,0,.2,1)",
zIndex:2100,
boxShadow:"4px 0 20px rgba(0,0,0,0.3)"
};

const logoText={
marginBottom:"20px",
fontSize:"22px",
fontWeight:"900"
};

const menuSection={
display:"flex",
flexDirection:"column",
gap:"14px",
flex:1,
alignItems:"center"
};

const linkStyle={
color:"white",
textDecoration:"none",
fontSize:"17px",
padding:"12px 14px",
borderRadius:"8px",
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"10px",
width:"100%",
transition:"all 0.25s ease"
};

const logoutBtn={
background:"#ef4444",
border:"none",
padding:"12px",
color:"white",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"500"
};

const mainArea={
flex:1,
marginLeft: open ? "0" : "240px",
display:"flex",
flexDirection:"column"
};

const topbar={
height:"55px",
background:"white",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 20px",
boxShadow:"0 2px 10px rgba(0,0,0,0.08)",
position:"sticky",
top:0,
zIndex:990
};

const menuButton={
fontSize:"24px",
border:"none",
background:"none",
cursor:"pointer"
};

const topTitle={
fontWeight:"700",
fontSize:"25px"
};

const logoStyle={
width:"40px",
height:"40px",
objectFit:"contain"
};

const contentStyle={
padding:"30px",
background:"#f1f5f9",
flex:1,
overflowY:"auto"
};