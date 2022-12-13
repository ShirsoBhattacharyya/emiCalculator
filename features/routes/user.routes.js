const express = require("express");
const router=express.Router();
const UserModel=require('../model/user.model');

router.get('/:id',async(req,res)=>{
    const {id}=req.params;
    let user=await UserModel.findById({_id:id});
    try{
        res.json({message:'success',response:user});
    }catch(e){
        res.status(500).json({message:e.message});
    }
})
module.exports=router;