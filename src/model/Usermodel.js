const { default: mongoose } = require("mongoose");
const express=require("../config/db");
 const userschema=mongoose.Schema({
     firstName:{type:String,require:true,minlength:3,maxlength:30},
     lastName:{type:String,minlength:3,maxlength:30},
     age:{type:Number,require:true},
     email:{type:String,require:true,unique:true},
     profileImage:{type:String,require:true}
     
 },
 {
     timestamps:true,
     versionKey:false
 });

 const usermodel=mongoose.model("user",userschema);

 module.exports=usermodel;