import React from "react";

function Support(){

return(

<div style={container}>

<h1>Student Support</h1>

<p>
Need help with academic or campus services?
Contact student support team.
</p>

<button style={button}>
Contact Support
</button>

</div>

);

}

export default Support;

const container={maxWidth:"800px",margin:"auto"}

const button={
background:"#ef4444",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px"
}