import React from "react";

function Medical(){

return(

<div style={container}>

<h1>Medical Help</h1>

<p>
Contact campus medical services in case of illness or injury.
</p>

<button style={button}>
Call Medical Team
</button>

</div>

);

}

export default Medical;

const container={maxWidth:"800px",margin:"auto"}

const button={
background:"#ef4444",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px"
}