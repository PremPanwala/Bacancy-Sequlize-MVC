const express=require('express');
const app=express();
const sequelize=require('sequelize');
const customer=require('./model/customer');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
const crud=require('./routes/crud')
app.use('/',crud);
app.post("/demo",()=>{
    console.log("HI BRO HOW ARE NYOU")
})
const connection=new sequelize('employeedb','root','prem0131',{
    dialect:'mysql'
})
connection.authenticate().then(()=>{
    console.log("Autnetication Successful!!!!")
})
connection.sync().then(()=>{
   
    app.listen(3000,()=>{
        console.log("Server Started")
    });
})
