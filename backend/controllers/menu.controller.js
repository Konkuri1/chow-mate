import { Menu } from "../models/menu.js";

export const getMenu=async(req,res,next)=>{
    try {
        const getAll=await Menu.find()
        res.status(200).json(getAll)
    } catch (error) {
        next(error)
    }
}

export const createMenu=async(req,res,next)=>{
    const {item,price}=req.body
    try {
        const addMenu=await Menu.create({item,price})
        res.status(201).json(addMenu)
    } catch (error) {
        next(error)
    }
}

export const deleteMenu=async(req,res,next)=>{
    try {
        let deleteOneMenu=await Menu.findByIdAndDelete({_id:req.params.id})
        res.status(200).json(deleteOneMenu,"menu deleted successfully")
    } catch (error) {
        next(error)
    }
}

