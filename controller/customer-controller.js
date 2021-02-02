 const customer=require('../model/customer');
const schema=require('./customer-validate');
const Joi = require('joi');
   const getAllCustomers = async (req,res,next) => {
       try{
    console.log("get requrest arriverd")
    const c1=  await customer.findAll();
    if(c1)
    {
        res.send(c1) 
    }
    else{
        res.status(404).send("DATA NOT FOUND");
    }   
}
catch(e)
{
    console.log(e)
}
}
const getSingleCustomer=async(req,res,next)=>{
    try{
    console.log("Finding single customer");
    console.log(req.params.id)
     const c1=await customer.findByPk(req.params.id)
     if(c1)
    {
        res.send(c1) 
    }
    else{
        res.status(404).send("DATA NOT FOUND");
    } 
}catch(e)
{
    console.log(e)
}
}

const updateCustomer=async(req,res,next)=>{
    try{
    console.log(req.params.id);
    try {
        const value = await schema.validateAsync({name:req.body.name});
    }
    catch (err) {
       return res.send(err.details[0].message)
     }
    const c1= await customer.update({name:req.body.name},{where:{
        id:req.params.id
    }})
    console.log("this is console",c1)
    if(c1[0]===1)
    {
        res.status(200).send("DATA UPDATED SUCCESFULLY") 
    }
    else{
        res.status(404).send("NO RECORD FOUND MATCHING GIVEN ID");
    } 
}
catch(e)
{
    console.log(e)
}
}
const deleteCustomer=async(req,res,next)=>{
    try{
    console.log(req.params.id);
    const c1= await customer.destroy({where:{
        id:req.params.id
    }})
    if(c1===1)
    {
        res.status(200).send("DATA DELETED SUCCESFULLY") 
    }
    else{
        res.status(404).send("NO RECORD FOUND MATCHING GIVEN ID");
    } 
}
catch(e)
{
    console.log(e)
}
}
const addCustomer=async (req,res,next)=>{
    try{
    console.log(req.body.name)
let name=req.body.name;
let email=req.body.email;
let password=req.body.password;
try {
    const value = await schema.validateAsync({name:name,email:email,password:password});
}
catch (err) {
   return res.send(err.details[0].message)
 }
  const c1=await customer.create({name:name,email:email,password:password})
  if(c1) 
  {
      res.status(200).send("Insertion Successfull");
  }else{
      res.status(404).send("Insertion Unsuccesfull");
  }
}
catch(e)
{
    console.log(e)
}
}

module.exports={getAllCustomers,getSingleCustomer,updateCustomer,deleteCustomer,addCustomer};