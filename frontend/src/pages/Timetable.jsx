import React from "react";

function Timetable(){

return(

<div style={container}>

<h1>Class Timetable</h1>

<table style={table}>

<thead>
<tr>
<th>Day</th>
<th>Subject</th>
<th>Time</th>
</tr>
</thead>

<tbody>

<tr>
<td>Monday</td>
<td>Cyber Security</td>
<td>10:00 - 11:30</td>
</tr>

<tr>
<td>Tuesday</td>
<td>Web Development</td>
<td>12:00 - 1:30</td>
</tr>

<tr>
<td>Wednesday</td>
<td>Database</td>
<td>9:00 - 10:30</td>
</tr>

</tbody>

</table>

</div>

);

}

export default Timetable;

const container={maxWidth:"900px",margin:"auto"}

const table={
width:"100%",
background:"white",
borderCollapse:"collapse",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)"
}