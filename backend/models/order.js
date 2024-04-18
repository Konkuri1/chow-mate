import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  item: { type: String, required: true },
  restaurant: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

export const Order = model("Order", orderSchema, "order");
