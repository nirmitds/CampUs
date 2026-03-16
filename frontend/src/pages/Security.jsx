import React from "react";

function Security(){

return(

<div style={container}>

<h1>Campus Security</h1>

<p>
If you feel unsafe or notice suspicious activity,
contact campus security immediately.
</p>

<button style={button}>
Call Security
</button>

</div>

);

}

export default Security;

const container={maxWidth:"800px",margin:"auto"}

const button={
background:"#ef4444",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px",
marginTop:"20px"
}