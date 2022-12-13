const express = require("express");
const router=express.Router();
const EMIModel=require('../model/emi.model');

router.post('/calculate',async(req,res)=>{
    const {loan_amount,annual_interest_rate,tenure}=req.body;
    // console.log(loan_amount,annual_interest_rate,tenure);
    try{
        let monthly_interest=((annual_interest_rate/12)/100);
        //Create monthly payment
        const x = Math.pow(1 + monthly_interest, tenure);
        const monthlyVal = (loan_amount * x * monthly_interest) / (x - 1);
        let total_repayment_value=(monthlyVal).toFixed(2)*tenure;
        let interest=total_repayment_value-loan_amount;
        res.json({message:'success',response:{emi:Math.round(monthlyVal),interest:Math.round(interest),totalpayment:Math.round(total_repayment_value)}})
    }catch(e){
        res.status(500).json({message:e.message});
    }
})
module.exports=router;