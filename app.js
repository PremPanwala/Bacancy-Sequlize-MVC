const express=require('express');
const app=express();
const sequelize=require('sequelize');
const customer=require('./model/customer');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//var router=express.Router();
const crud=require('./controller/crud')
app.use('/',crud);
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
