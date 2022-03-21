const bookmodel=require("../model/Bookmodel");
const express=require("express");
const router=express.Router();


router.post("",async(req,res)=>{
    try{
        const bookcover= await bookmodel.create(req.body);
        return res.status(202).send({Bookcover:bookcover});
    }
    catch(err){
        return res.status(404).send({message:"Somthing went wrong please try sometime later"});
    }
});

router.get("",async(req,res)=>{
    try{
        const bookcover= await bookmodel.find({}).lean().exec();
        return res.status(202).send({Bookcover:bookcover});
    }
    catch(err){
        return res.status(404).send({message:"Somthing went wrong please try sometime later"});
    }
})




module.exports=router;