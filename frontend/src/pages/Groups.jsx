import React from "react";

function Groups(){

return(

<div style={container}>

<h1>Study Groups</h1>

<div style={card}>
<h3>Cyber Security Group</h3>
<p>Discuss security concepts and assignments</p>
<button style={button}>Join</button>
</div>

<div style={card}>
<h3>React Developers</h3>
<p>Share frontend knowledge</p>
<button style={button}>Join</button>
</div>

</div>

);

}

export default Groups;

const container={maxWidth:"900px",margin:"auto"}

const card={
background:"white",
padding:"20px",
marginBottom:"15px",
borderRadius:"10px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)"
}

const button={
background:"#3b82f6",
color:"white",
border:"none",
padding:"8px 14px",
borderRadius:"6px"
}