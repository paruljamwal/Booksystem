
const app=require("./index");
const connect=require("../src/config/db");
app.listen(1112,async()=>{
    try{
       await connect();
    }
    catch(err){
        console.log(err);
        }
    console.log("Listining port 1112");
})