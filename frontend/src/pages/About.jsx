import React from "react";

function About(){

return(

<div style={container}>

<h1 style={title}>About CampUs</h1>

<p style={subtitle}>
Integrated University Support Platform
</p>

<section style={section}>

<h2>Project Overview</h2>

<p>
CampUs is a full-stack university service platform designed to create
a centralized digital ecosystem for students, faculty, administrators,
and external service providers.
</p>

<p>
The platform integrates academic services, emergency systems,
peer-to-peer item exchange, and administrative requests in a single dashboard.
</p>

</section>

<section style={section}>

<h2>Project Objectives</h2>

<ul>
<li>Centralize university services</li>
<li>Provide faster emergency response</li>
<li>Enable student-to-student collaboration</li>
<li>Implement coin-based incentive system</li>
<li>Improve academic and administrative workflows</li>
</ul>

</section>

<section style={section}>

<h2>Key Features</h2>

<ul>
<li>Smart student dashboard</li>
<li>Academic request management</li>
<li>Student service exchange</li>
<li>Emergency support system</li>
<li>Coin wallet and rewards</li>
<li>Real-time notifications</li>
<li>Analytics monitoring</li>
</ul>

</section>

<section style={section}>

<h2>Technology Stack</h2>

<p>
Frontend: React.js  
Backend: Node.js & Express.js  
Database: MongoDB / PostgreSQL  
Security: JWT Authentication & RBAC  
Deployment: Docker
</p>

</section>

<section style={section}>

<h2>Project Team</h2>

<p>
Team Name: Transformers
</p>

<ul>
<li>Nirmit Dudeja</li>
<li>Bhanuri Dinesh</li>
<li>Dhruv Aggarwal</li>
<li>Dhruv Kapil</li>
<li>Akshat Gangwal</li>
</ul>

<p>
Faculty Mentor: Mr. Pratik Raj Verma
</p>

</section>

<section style={section}>

<h2>Expected Impact</h2>

<ul>
<li>Faster emergency response</li>
<li>Improved student satisfaction</li>
<li>Better communication between faculty and students</li>
<li>Peer-to-peer collaboration</li>
<li>Transparent request tracking</li>
</ul>

</section>

</div>

)

}

export default About;


/* STYLES */

const container={
maxWidth:"900px",
margin:"auto",
background:"white",
padding:"40px",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
}

const title={
fontSize:"34px",
marginBottom:"10px"
}

const subtitle={
color:"#64748b",
marginBottom:"30px"
}

const section={
marginBottom:"35px",
lineHeight:"1.6"
}