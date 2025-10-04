import express from 'express';
import mongoose from 'mongoose';
import ('dotenv').config();


let app=express();
app.use(express.json())   

// Mogoose connection


app.use('/register',userRouter)


 app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port')
})

