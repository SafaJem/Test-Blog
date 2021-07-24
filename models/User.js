// require mongoose
const mongoose=require('mongoose')

// Create the user schema
const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
userName:{
    type:String ,
    required:true,
    unique:true 
},
email:{
    type:String ,
    required:true,
},
password:{
    type:String,
    required:true
}

})
module.exports=mongoose.model('users',userSchema)