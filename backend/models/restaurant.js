import { Schema,model } from "mongoose";

const restaurantSchema=new Schema({
    resName:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    location:{type:String,required:true},
    image:{type:String,required:false},
})

export const Restaurant=model("Restaurant",restaurantSchema,'restaurant')