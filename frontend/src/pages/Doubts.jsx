import React from "react";

function Doubts(){

return(

<div style={container}>

<h1>Doubt Help</h1>

<textarea
placeholder="Ask your doubt here..."
style={textarea}
/>

<button style={button}>
Submit Question
</button>

</div>

);

}

export default Doubts;

const container={maxWidth:"900px",margin:"auto"}

const textarea={
width:"100%",
height:"120px",
padding:"10px",
marginBottom:"10px"
}

const button={
background:"#2563eb",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px"
}