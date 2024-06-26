import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  restaurant: {type: String, required: true},
  image: {type:String, required:false}
});

export const Menu = model("Menu", menuSchema, "menu");
