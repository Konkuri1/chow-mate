import { Restaurant } from "../models/restaurant.js";

export const getRestaurants=async(req,res,next)=>{
try {
   const getAll=await Restaurant.find(s) 
   res.status(200).json(getAll)
} catch (error) {
    next(error)
}
}


export const addRestaurant=async(req,res,next)=>{
    const{resName,email,contact,location,image}=req.body
    try {
       const createRestaurant=await Restaurant.create({
        resName,email,contact,location,image
       }) 
       res.status(201).json(createRestaurant)
    } catch (error) {
       next(error) 
    }
}