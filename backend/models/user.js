import { Schema, model } from "mongoose";
import bcrypt, { hash } from "bcrypt"

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.signup=async function(userName,email,password){
    //check if email exists
    const emailExists=await this.findOne({email})
    if(emailExists){
        throw new Error("email already go home")
    }
    else{
        //hash password
        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)
        const user=await this.create({userName,email,password:hash})
        return user
    }

}

export const User = model("User", userSchema, "user");
