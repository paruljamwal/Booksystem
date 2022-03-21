const { default: mongoose } = require("mongoose");
const express=require("../config/db");
 const register=mongoose.Schema({
     firstName:{type:String,require:true},
     lastName:{type:String},
     password:{type:String,require:true},
     age:{type:Number,require:true},
     email:{type:String,require:true,unique:true},
     profileImage:{type:String,require:true}
     
 },
 {
     timestamps:true,
     versionKey:false
 });

 const usermodel=mongoose.model("register",register);

const login=mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
},
{
    timestamps:true,
    varsionKey:true
})

const loginmodel=mongoose.model("login",login);

 module.exports={register,login};