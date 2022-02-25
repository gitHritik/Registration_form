const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique : true,
        require:true
        
    },
    password:{
        type:String,
        unique : true,
        require:true
        
    },
    confirmpassword:{
        type:String,
        unique : true,
        require:true
        
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const User = mongoose.model("User",userSchema);
module.exports = User