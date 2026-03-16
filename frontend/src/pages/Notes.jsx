import React from "react";

function Notes(){

return(

<div style={container}>

<h1 style={title}>Study Notes</h1>

<p style={subtitle}>
Access lecture notes and study materials uploaded by faculty.
</p>

<div style={card}>
<h3>Computer Networks Notes</h3>
<p>Unit 1 - Introduction to Networking</p>
<button style={button}>Download</button>
</div>

<div style={card}>
<h3>Operating Systems</h3>
<p>Process Scheduling Notes</p>
<button style={button}>Download</button>
</div>

</div>

);

}

export default Notes;


/* STYLES */

const container={
maxWidth:"900px",
margin:"auto"
}

const title={
fontSize:"28px",
marginBottom:"10px"
}

const subtitle={
color:"#64748b",
marginBottom:"20px"
}

const card={
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)"
}

const button={
marginTop:"10px",
background:"#3b82f6",
color:"white",
border:"none",
padding:"8px 14px",
borderRadius:"6px",
cursor:"pointer"
}