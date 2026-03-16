const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

type:{
type:String,
required:true
},

description:{
type:String,
required:true
},

category:{
type:String,
default:"other"
},

ownerUsername:{
type:String,
required:true
},

status:{
type:String,
default:"Open"
},

acceptedBy:{
type:String,
default:null
}

},{
timestamps:true
});

module.exports = mongoose.model("Request", requestSchema);