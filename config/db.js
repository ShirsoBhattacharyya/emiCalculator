const mongoose=require('mongoose');

const Connect=()=>{
    return mongoose.connect('mongodb+srv://emi:emi@cluster0.nuv1ynm.mongodb.net/emicalculator');
}
module.exports=Connect;