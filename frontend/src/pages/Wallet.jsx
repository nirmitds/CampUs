import React from "react";

function Wallet(){

const user = JSON.parse(localStorage.getItem("user"));

return(

<div style={pageStyle}>

<h2 style={titleStyle}>Wallet</h2>

<div style={walletCard}>

<h3>Campus Coins</h3>

<div style={coinValue}>
{user?.coins || 0}
</div>

<p style={coinDesc}>
Use coins for campus exchanges and rewards
</p>

</div>

<div style={section}>

<h3>Recent Activity</h3>

<div style={activityBox}>
No transactions yet
</div>

</div>

</div>

)

}

export default Wallet;


/* ================= STYLES ================= */

const pageStyle={
padding:"25px"
}

const titleStyle={
marginBottom:"20px"
}

const walletCard={
background:"white",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 5px 15px rgba(0,0,0,0.08)",
maxWidth:"400px"
}

const coinValue={
fontSize:"40px",
fontWeight:"700",
color:"#2563eb",
marginTop:"10px"
}

const coinDesc={
color:"#64748b",
marginTop:"10px"
}

const section={
marginTop:"40px"
}

const activityBox={
background:"white",
padding:"20px",
borderRadius:"10px",
marginTop:"10px",
boxShadow:"0 3px 10px rgba(0,0,0,0.05)"
}