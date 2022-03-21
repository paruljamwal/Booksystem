const {register,login}=require("../model/authmodel");
const express=require("express");
const router=express.Router();

router.post("",async(req,res)=>{
    try{
        const register= await usermodel.create(req.body);
        return res.status(202).send({register:register});
    }
    catch(err){
        return res.status(404).send({message:"Somthing went wrong please try sometime later"});
    }
 
})


router.post("",async(req,res)=>{
    try{
        const login= await authmodel.create(req.body);
        return res.status(202).send({login:login});
    }
    catch(err){
        return res.status(404).send({message:"Somthing went wrong please try sometime later"});
    }
})





module.exports=router;