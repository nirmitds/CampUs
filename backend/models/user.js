const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

username:{
type:String,
required:true,
unique:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

phone:{
type:String,
required:true
},

coins:{
type:Number,
default:100
},

role:{
type:String,
default:"student"
}

},{timestamps:true});

module.exports = mongoose.model("User",userSchema);