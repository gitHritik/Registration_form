const mongoose = require("mongoose")
 mongoose.connect("mongodb://localhost:27017/newform",{
    useNewUrlParser  : true
}).then(()=>{
    console.log("Mongoose connected successfully");
}).catch((error)=>{
    console.log(error);
})





