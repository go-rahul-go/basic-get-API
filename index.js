const dbconnect = require("./database/mongoDbConnector");
const express = require("express");

const app=express();
app.set('view engine','ejs')

app.get("/",async (req,resp)=>{
    let result = await dbconnect();
    let data = await result.find({brand:"apple"}).toArray();

   resp.render("index", {data});
})



app.listen(5000);