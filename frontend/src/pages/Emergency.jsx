import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Emergency(){

const navigate = useNavigate();
const [hover,setHover] = useState(null);

return(

<div style={pageStyle}>

<h2 style={titleStyle}>Emergency</h2>

<div style={grid}>

{/* CAMPUS SECURITY */}

<div
style={{
...card,
...(hover==="security"?hoverCard:{})
}}
onMouseEnter={()=>setHover("security")}
onMouseLeave={()=>setHover(null)}
>

<h3>Campus Security</h3>

<p>Call campus security for emergencies</p>

<button
style={btn}
onClick={()=>navigate("/student/security")}
>
Call
</button>

</div>


{/* MEDICAL */}

<div
style={{
...card,
...(hover==="medical"?hoverCard:{})
}}
onMouseEnter={()=>setHover("medical")}
onMouseLeave={()=>setHover(null)}
>

<h3>Medical Help</h3>

<p>Contact campus medical services</p>

<button
style={btn}
onClick={()=>navigate("/student/medical")}
>
Call
</button>

</div>


{/* REPORT ISSUE */}

<div
style={{
...card,
...(hover==="report"?hoverCard:{})
}}
onMouseEnter={()=>setHover("report")}
onMouseLeave={()=>setHover(null)}
>

<h3>Report Issue</h3>

<p>Report suspicious activity</p>

<button
style={btn}
onClick={()=>navigate("/student/report")}
>
Report
</button>

</div>


{/* SUPPORT */}

<div
style={{
...card,
...(hover==="support"?hoverCard:{})
}}
onMouseEnter={()=>setHover("support")}
onMouseLeave={()=>setHover(null)}
>

<h3>Student Support</h3>

<p>Get help from student support</p>

<button
style={btn}
onClick={()=>navigate("/student/support")}
>
Contact
</button>

</div>

</div>

</div>

)

}

export default Emergency;


/* ================= STYLES ================= */

const pageStyle={
padding:"25px"
}

const titleStyle={
marginBottom:"20px",
fontSize:"28px"
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"22px"
}

const card={
background:"white",
padding:"28px",
borderRadius:"14px",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
transition:"all 0.25s ease"
}

const hoverCard={
transform:"scale(1.05)",
boxShadow:"0 18px 40px rgba(0,0,0,0.18)"
}

const btn={
marginTop:"15px",
background:"#ef4444",
border:"none",
color:"white",
padding:"8px 16px",
borderRadius:"6px",
cursor:"pointer"
}