import userDetails from "../model/userModel.js";

export const createUser=(req,res)=>{
    const{firstname,lastname,phoneno,email,houseno,street,city,state,pincode}=req.body;
     
    const newUser=new userDetails({
        firstname,
        lastname,
        phoneno,
        email,
        houseno,
        street,
        city,
        state,
        pincode
        
    })
    newUser.save()
    res.send({message:"user Created successfully",newUser:newUser})
}