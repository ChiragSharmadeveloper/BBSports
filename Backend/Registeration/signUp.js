import jwt from 'jsonwebtoken';
import userDetails from '../model/userModel.js';


let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const signUp=async (req,res)=>{
    try{
    const{firstname,lastname,phoneno,email,houseno,street,city,state,pincode}=req.body;
        if(!firstname) res.status(404).send({message:"Please enter your firstname"})
            if(!phoneno)res.status(404).send({message:"Please enter your Phone Number"})
                if(!email)res.status(404).send({message:"Please enter your Email "})
                    if(!houseno)res.status(404).send({message:"Please enter your House details"})
                        if(!street)res.status(404).send({message:"Please enter your Street details"})
                            if(!city)res.status(404).send({message:"Please enter your city"})
                                if(!state)res.status(404).send({message:"Please enter your State"})
                                    if(!pincode)res.status(404).send({message:"Please enter your Pincode"})

             //emailregex
    if(!emailRegex.test(email)) return res.status(400).send({message:"invalid email"})

        //checking through number if user exist or not
        let existUser=await userDetails.findOne({phoneno})
        if(existUser) res.status(400).send({message:"Your phone number is already registered"})

         //entering new user details if not existed
        let newUser=await userDetails.create({firstname,lastname,phoneno,email,houseno,street,city,state,pincode})
        res.status(201).send({message:"Thank you for joining Babita Bhardwaj Sports", newUser:newUser})

    }catch(err){
        console.log(err)
        res.status(500).send({message:err.message})
    }
}


export const logIn=async(req,res)=>{

    
}