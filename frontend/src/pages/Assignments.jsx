import React from "react";

function Assignments(){

return(

<div style={container}>

<h1>Assignments</h1>

<div style={card}>
<h3>Database Management</h3>
<p>Submit ER Diagram Assignment</p>
<button style={button}>Upload</button>
</div>

<div style={card}>
<h3>Web Development</h3>
<p>Create React Login Page</p>
<button style={button}>Submit</button>
</div>

</div>

);

}

export default Assignments;

const container={maxWidth:"900px",margin:"auto"}

const card={
background:"white",
padding:"20px",
marginBottom:"15px",
borderRadius:"10px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)"
}

const button={
background:"#2563eb",
color:"white",
border:"none",
padding:"8px 14px",
borderRadius:"6px",
cursor:"pointer"
}