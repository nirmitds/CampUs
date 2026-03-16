require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dns = require("dns");

const User = require("./models/user");
const Request = require("./models/Request");
const { verifyToken } = require("./middleware/auth");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors({
origin: "http://localhost:5173",
credentials: true
}));

app.use(express.json());

dns.setServers(["8.8.8.8","8.8.4.4"]);

/* ================= DATABASE ================= */

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("✅ MongoDB Connected");
})
.catch(err=>{
console.log("❌ MongoDB Connection Error");
console.error(err);
});

/* ================= TEST ROUTE ================= */

app.get("/",(req,res)=>{
res.send("🚀 CampUs Backend Running");
});



/* =====================================================
                    AUTH SYSTEM
===================================================== */


/* REGISTER */

app.post("/auth/register", async (req,res)=>{

try{

const {name,username,email,password,phone} = req.body;

const existingUser = await User.findOne({
$or:[
{username},
{email}
]
});

if(existingUser){
return res.status(400).json({
message:"User already exists"
});
}

const hashedPassword = await bcrypt.hash(password,10);

const user = new User({
name,
username,
email,
password:hashedPassword,
phone,
coins:100,
role:"student"
});

await user.save();

res.json({
message:"Account created successfully"
});

}catch(err){

console.error(err);

res.status(500).json({
message:"Registration failed"
});

}

});


/* LOGIN */

app.post("/auth/login", async (req,res)=>{

try{

const {username,password} = req.body;

const user = await User.findOne({
$or:[
{username},
{email:username}
]
});

if(!user){
return res.status(400).json({
message:"User not found"
});
}

const passwordMatch = await bcrypt.compare(password,user.password);

if(!passwordMatch){
return res.status(400).json({
message:"Invalid password"
});
}

const token = jwt.sign({

id:user._id,
username:user.username,
role:user.role,
coins:user.coins

},
process.env.JWT_SECRET,
{
expiresIn:"7d"
});

res.json({
token
});

}catch(err){

console.error(err);

res.status(500).json({
message:"Login failed"
});

}

});



/* =====================================================
                    EXCHANGE SYSTEM
===================================================== */


/* CREATE REQUEST */

app.post("/exchange/create", verifyToken, async (req,res)=>{

try{

const {title,type,description,category} = req.body;

if(!title || !description){
return res.status(400).json({
message:"Title and description required"
});
}

const newRequest = await Request.create({

title,
type,
description,
category,

ownerUsername:req.user.username,

status:"Open",
acceptedBy:null

});

res.json(newRequest);

}catch(err){

console.error(err);

res.status(500).json({
message:"Server error"
});

}

});


/* GET ALL REQUESTS */

app.get("/exchange/all", async (req,res)=>{

try{

const requests = await Request.find()
.sort({createdAt:-1});

res.json(requests);

}catch(err){

console.error(err);

res.status(500).json({
message:"Server error"
});

}

});


/* ACCEPT REQUEST */

app.put("/exchange/accept/:id", verifyToken, async (req,res)=>{

try{

const request = await Request.findById(req.params.id);

if(!request){
return res.status(404).json({
message:"Request not found"
});
}

if(request.ownerUsername === req.user.username){
return res.status(400).json({
message:"Cannot accept your own request"
});
}

request.status = "Accepted";
request.acceptedBy = req.user.username;

await request.save();

res.json(request);

}catch(err){

console.error(err);

res.status(500).json({
message:"Server error"
});

}

});


/* DELETE REQUEST */

app.delete("/exchange/:id", verifyToken, async (req,res)=>{

try{

const request = await Request.findById(req.params.id);

if(!request){
return res.status(404).json({
message:"Request not found"
});
}

if(request.ownerUsername !== req.user.username){
return res.status(403).json({
message:"Not allowed"
});
}

await Request.findByIdAndDelete(req.params.id);

res.json({
message:"Request deleted"
});

}catch(err){

console.error(err);

res.status(500).json({
message:"Server error"
});

}

});


/* MY REQUESTS */

app.get("/exchange/my-requests", verifyToken, async (req,res)=>{

try{

const requests = await Request.find({
ownerUsername:req.user.username
});

res.json(requests);

}catch(err){

console.error(err);

res.status(500).json({
message:"Server error"
});

}

});


/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`🚀 CampUs server running on port ${PORT}`);
});