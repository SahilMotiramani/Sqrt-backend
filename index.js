const express=require("express");
const cors=require("cors");
const fs=require("fs");

const app=express();
app.use(cors());
app.get("/find",(req,res)=>{
    let num=req.query.number;
    let n=parseFloat(num);
    let r=n**0.5;
    let data="num = "+n+" result = "+r+" Date = "+new Date().toString()+"\n";
    fs.appendFile("result.txt",data,(err)=>{
        if(err)    console.log(err);
    });
    let msg="square root = "+r.toFixed(2);
    res.json({"msg":msg});
});
app.listen(9000,()=>{console.log("server is listening on 9000");});