const mongoose=require("mongoose");

const connect=()=>{
    console.log("I am Connected Happy happy.")
  return  mongoose.connect("mongodb+srv://parul:paru@cluster0.wxrv6.mongodb.net/BookSystem?retryWrites=true&w=majority")
}


module.exports=connect;