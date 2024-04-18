import { Order } from "../models/order.js";

export const getOrders=async(req,res,next)=>{
    try {
        const getAll=await Order.find()
        res.status(200).json(getAll)
    } catch (error) {
        next(error)
    }
}

export const createOrder=async(req,res,next)=>{
    const {item,restaurant,contact,location,amount}=req.body
    try {
        const addOrder=await Order.create({item,restaurant,contact,location,amount})
        res.status(201).json(addOrder)
    } catch (error) {
        next(error)
    }
}