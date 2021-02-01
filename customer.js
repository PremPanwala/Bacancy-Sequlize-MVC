const sequelize=require('sequelize');
const connection=new sequelize('employeedb','root','prem0131',{
    dialect:'mysql'
})
const  customer=connection.define('customer',{
    name:sequelize.STRING,
    email:sequelize.STRING,
    password:sequelize.STRING
})
module.exports=customer;