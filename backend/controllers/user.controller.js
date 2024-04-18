import { User } from "../models/user.js";

//create user
export const addUser=async(req,res,next)=>{
    const{userName,email,password}=req.body
    try {
        const createUser=await User.signup(userName,email,password)
        res.status(201).json("account successfully created")
        
    } catch (error) {
        next(error)
    }
}

//login

