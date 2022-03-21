const express=require("express");
const usercontroller=require("./controller/Userscontroller");
const bookcontroller=require("./controller/bookcontroller");
const commentcontroller=require("./controller/comments");
const {register,login}=require("./controller/authcontroller");
const app=express();

app.use(express);
app.use(express.json());
app.post("/user",usercontroller);
app.post("/book",bookcontroller);
app.post("/comment",commentcontroller);
app.post("/auth",{register,login})
module.exports=app;