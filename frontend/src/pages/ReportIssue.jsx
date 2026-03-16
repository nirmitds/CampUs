import React from "react";

function ReportIssue(){

return(

<div style={container}>

<h1>Report Suspicious Activity</h1>

<textarea
placeholder="Describe the issue..."
style={textarea}
/>

<button style={button}>
Submit Report
</button>

</div>

);

}

export default ReportIssue;

const container={maxWidth:"800px",margin:"auto"}

const textarea={
width:"100%",
height:"120px",
padding:"10px",
marginBottom:"10px"
}

const button={
background:"#ef4444",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px"
}