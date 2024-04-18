import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Menu = model("Menu", menuSchema, "menu");
