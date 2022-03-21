const commentmodel=require("../model/Usermodel");
const express=require("express");
const router=express.Router();

router.post("",async(req,res)=>{
    try{
        const Comment= await commentmodel.create(req.body);
        return res.status(202).send({Comments:Comment});
    }
    catch(err){
        return res.status(404).send({message:"Somthing went wrong please try sometime later"});
    }
 
});






module.exports=router;