const express=require('express');
const cors = require("cors");
const Connect=require('./config/db');
const authRouter=require('./features/routes/auth.routes');
const userRouter=require('./features/routes/user.routes');
const emiRouter=require('./features/routes/emi.routes');
const server=express();
const PORT=process.env.PORT||8080;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/auth',authRouter);
server.use('/user',userRouter);
server.use('/emi',emiRouter);

server.get('/',(req,res)=>{
    res.json('Welcome to EMI Calculator API');
})

server.listen(PORT,async()=>{
    await Connect();
    console.log(`Server started on port ${PORT}`);
})