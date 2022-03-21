const mongoose=require("../config/db");

const publishschema=mongoose.Schema({
      name:{type:String},
      book_id:{type:mongoose.Schema.Types.ObjectId,ref:"book",require:true}
},
{
    timestamps:true,
    versionKey:false
});


const publishmodel=mongoose.model("publish",publishschema);

module.exports=publishmodel;