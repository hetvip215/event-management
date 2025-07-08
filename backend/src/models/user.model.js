import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"],
    },
},{
    timestamps:true,
});
export const User= mongoose.model("User",userSchema);