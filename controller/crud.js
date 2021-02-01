const express=require('express');
const customer=require('../model/customer');
var router=express.Router();


router.get("/customers",async (req,res,next)=>{
    console.log("get requrest arriverd")
    const c1= customer.findAll();
    await c1.then((data,err)=>{
        if(data)
        {
            res.send(data)
        }
        else{
            res.send(err)
        }

    })    
})
router.post("/customer/:id",async(req,res,next)=>{
    console.log("Finding single customer");
    console.log(req.params.id)
     const c1=customer.findByPk(req.params.id)
     await c1.then((data,err)=>{
         if(data)
         {
             res.send(data)
         }
         else{
             res.send(err)
         }
     })
})

router.post("/updatecustomer/:id",async(req,res,next)=>{
    console.log(req.params.id);
    const c1= customer.update({name:req.body.name},{where:{
        id:req.params.id
    }})
    await c1.then((data,err)=>{
        if(data)
        {
            res.send(data)
        }
        else{
            res.send(err)
        }
    })
})

router.post("/deletecustomer/:id",async(req,res,next)=>{
    console.log(req.params.id);
    const c1= customer.destroy({where:{
        id:req.params.id
    }})
    await c1.then((data,err)=>{
        if(data)
        {
            res.send(data)
        }
        else{
            res.send(err)
        }
    })
})


router.post("/add",async (req,res,next)=>{
    console.log(req.body.name)
    
var name=req.body.name;
var email=req.body.email;
var password=req.body.password;

  const c1=customer.create({name:name,email:email,password:password})
  await c1.then((data,err)=>{
      if(data)
      {
          res.send(data)
      }
      else{
          res.send(err)
      }
  })
  
})
module.exports=router;