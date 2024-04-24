import { Schema, model } from "mongoose";
import bcrypt, { hash } from "bcrypt"

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  });

export const User = model("User", userSchema, "user");
