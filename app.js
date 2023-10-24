const express = require("express")
const ejs = require("ejs")
const bp = require("body-parser")

const app = express()

app.use(bp.urlencoded({ extended: true }))

app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/home",(req,res)=>{
    res.render("home")
})
app.post("/home",(req,res)=>{
    var name = req.body.name
    var email = req.body.email
    var addr = req.body.address
    var city = req.body.city
    var gen = req.body.gender
    var amu = req.body.amu

    console.log(name);
    console.log(email);
    console.log(addr);
    console.log(city);
    console.log(gen);
    console.log(amu);
    res.redirect("/home")
})


app.listen(3000,()=>{
    console.log("sERVER is running");
})