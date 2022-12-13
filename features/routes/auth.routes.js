const express = require("express");
const router=express.Router();
const UserModel=require('../model/user.model');

router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
       let user=await UserModel.findOne({email});
       if(user){
        res.status(401).json({message:'User already exists'});
       }else{
        let newUser=await UserModel.create({name,email,password});
        res.json({message:'Account created successfully',newUser});
       }
    }catch(e){
        res.status(500).json({message:e.message});
    }
})
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
       let user=await UserModel.findOne({email,password});
       if(user){
        res.status(201).json({message:'User is successfully logged in',id:user._id});
       }else{
        res.status(401).json({message:'Invalid Credentials'});
       }
    }catch(e){
        res.status(500).json({message:e.message});
    }
})
router.post('/logout',async(req,res)=>{

})
module.exports=router