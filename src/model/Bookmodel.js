const { default: mongoose } = require("mongoose");
const express=require("../config/db");

const bookschema=mongoose.Schema({
    likes:{type:Number},
    coverImage:{type:String,require:true},
    content:{type:String,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
},
{
    timestamps:true,
    versionKey:false
})

const bookmodel=mongoose.model("book",bookschema);

module.exports=bookmodel;