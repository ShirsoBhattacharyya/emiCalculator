const {Schema,model}=require('mongoose');

const EMISchema=new Schema({
    loan_amount:{type:Number,required:true},
    annual_interest_rate:{type:Number,required:true},
    tenure:{type:Number,required:true}
})
const EMIModel=model('emi',EMISchema);
module.exports=EMIModel;