import React from "react";

function Results(){

return(

<div style={container}>

<h1>Academic Results</h1>

<div style={card}>
<p>Cyber Security</p>
<b>A Grade</b>
</div>

<div style={card}>
<p>Web Development</p>
<b>A+</b>
</div>

<div style={card}>
<p>Database Systems</p>
<b>B+</b>
</div>

</div>

);

}

export default Results;

const container={maxWidth:"900px",margin:"auto"}

const card={
background:"white",
padding:"20px",
marginBottom:"15px",
borderRadius:"10px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)"
}