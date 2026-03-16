import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Academic(){

const navigate = useNavigate();
const [hover,setHover] = useState(null);

return(

<div style={pageStyle}>

<h2 style={title}>Academic</h2>

<div style={grid}>

{/* NOTES */}

<div
style={{
...card,
...(hover==="notes"?hoverCard:{})
}}
onMouseEnter={()=>setHover("notes")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>📚</div>

<h3>Notes</h3>

<p>Access study materials and lecture notes</p>

<button style={btn} onClick={()=>navigate("/student/notes")}>
Open
</button>

</div>


{/* ASSIGNMENTS */}

<div
style={{
...card,
...(hover==="assignments"?hoverCard:{})
}}
onMouseEnter={()=>setHover("assignments")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>📝</div>

<h3>Assignments</h3>

<p>Check and submit your assignments</p>

<button style={btn} onClick={()=>navigate("/student/assignments")}>
Open
</button>

</div>


{/* TIMETABLE */}

<div
style={{
...card,
...(hover==="timetable"?hoverCard:{})
}}
onMouseEnter={()=>setHover("timetable")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>📅</div>

<h3>Timetable</h3>

<p>View your class schedule</p>

<button style={btn} onClick={()=>navigate("/student/timetable")}>
Open
</button>

</div>


{/* RESULTS */}

<div
style={{
...card,
...(hover==="results"?hoverCard:{})
}}
onMouseEnter={()=>setHover("results")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>📊</div>

<h3>Results</h3>

<p>View your academic results</p>

<button style={btn} onClick={()=>navigate("/student/results")}>
Open
</button>

</div>


{/* DOUBT HELP */}

<div
style={{
...card,
...(hover==="doubts"?hoverCard:{})
}}
onMouseEnter={()=>setHover("doubts")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>❓</div>

<h3>Doubt Help</h3>

<p>Ask questions or get mentor help</p>

<button style={btn} onClick={()=>navigate("/student/doubts")}>
Open
</button>

</div>


{/* STUDY GROUP */}

<div
style={{
...card,
...(hover==="groups"?hoverCard:{})
}}
onMouseEnter={()=>setHover("groups")}
onMouseLeave={()=>setHover(null)}
>

<div style={icon}>👥</div>

<h3>Study Groups</h3>

<p>Join groups for collaborative learning</p>

<button style={btn} onClick={()=>navigate("/student/groups")}>
Open
</button>

</div>

</div>

</div>

)

}

export default Academic;


/* ================= STYLES ================= */

const pageStyle={
padding:"25px"
}

const title={
marginBottom:"20px",
fontSize:"28px"
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
gap:"22px"
}

const card={
background:"white",
padding:"28px",
borderRadius:"14px",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
textAlign:"center",
transition:"all 0.25s ease",
cursor:"pointer"
}

const hoverCard={
transform:"scale(1.06)",
boxShadow:"0 18px 40px rgba(0,0,0,0.18)"
}

const icon={
fontSize:"34px",
marginBottom:"12px"
}

const btn={
marginTop:"15px",
background:"#2563eb",
border:"none",
color:"white",
padding:"8px 16px",
borderRadius:"6px",
cursor:"pointer"
}