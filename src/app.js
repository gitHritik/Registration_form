const express = require("express");
const async = require("hbs/lib/async");
const User = require("../src/modal/users")
const { resetWatchers } = require("nodemon/lib/monitor/watch");

const app =express();
const port = process.env.PORT || 3000
const path = require("path");
require("./db/conn")
const staticPath = path.join(__dirname,"../public")

app.use(express.urlencoded({extended:false}))

app.use(express.static(staticPath))
app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/index",async (req,res)=>{
    try {
        const password = req.body.password;
        const cppassword = req.body.confirmpassword;
        if(password === cppassword){
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render("index")
        }else{
            res.send("Password is not matching")
        }
    } catch (error) {
        res.status(501).send(error)
    }
})


app.listen(port,(req,res)=>{
    console.log(`Server is listening to ${port}`);
})
