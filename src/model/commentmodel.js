const mongoose=require("../config/db");

const commentschema=mongoose.Schema({
    body:{type:String,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    book_id:{type:mongoose.Schema.Types.ObjectId,ref:"book",require:true}


},{
    timestamps:true,
    versionKey:false
})