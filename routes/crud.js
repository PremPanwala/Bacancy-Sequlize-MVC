const express=require('express');
const customer=require('../model/customer');
var router=express.Router();
const {getAllCustomers,getSingleCustomer,updateCustomer,deleteCustomer,addCustomer}=require('../controller/customer-controller')
router.get("/customers",getAllCustomers)
router.post("/customer/:id",getSingleCustomer)

router.post("/updatecustomer/:id",updateCustomer)

router.post("/deletecustomer/:id",deleteCustomer)


router.post("/add",addCustomer)


module.exports=router;