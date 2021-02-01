const express=require('express');
const customer=require('./customer');
var router=express.Router();


router.get("/customers",async (req,res,next)=>{
    console.log("get requrest arriverd")
    await customer.findAll().then((customer)=>{
        console.log(customer);
        res.status(200).send(customer)
    }).catch((er)=>{
        console.log(er)
    })
    
})
router.post("/customer/:id",async(req,res,next)=>{
    console.log("Finding single customer");
    console.log(req.params.id)
    await customer.findByPk(req.params.id).then((customer)=>{
        console.log(customer);
        res.status(200).send(customer)
    }).catch((e)=>{
        console.log(e)
    })
})

router.post("/updatecustomer/:id",async(req,res,next)=>{
    console.log(req.params.id);
    await customer.update({name:req.body.name},{where:{
        id:req.params.id
    }}).then((customer)=>{
        res.status(200).send(customer);
    }).catch((err)=>{
        console.log(err)
    })
})

router.post("/deletecustomer/:id",async(req,res,next)=>{
    console.log(req.params.id);
    await customer.destroy({where:{
        id:req.params.id
    }}).then((customer)=>{
        res.status(200).send(customer);
    }).catch((err)=>{
        console.log(err)
    })
})


router.post("/add",async (req,res,next)=>{
    console.log(req.body.name)
    
var name=req.body.name;
var email=req.body.email;
var password=req.body.password;

await  customer.create({name:name,email:email,password:password}).then(()=>{
    console.log("Done")
}).catch((err)=>{
    console.log(err);
})
return res.status(200).send("Insertion Done Successfully");
})
module.exports=router;