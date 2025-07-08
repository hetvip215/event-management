import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User} from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const register=asyncHandler(async(req,res)=>{
    try{
    const {username,password,role}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser= new User({username,password:hashedPassword,role});
    await newUser.save();
    res
        .status(201)
        .json({message: `User got registered with username ${username}`})
    }catch(error){
        throw new ApiError(500, "Something went wrong while registering the user")
    }
})

const login=asyncHandler(async(req,res)=>{
    try{
    const {username,password}=req.body;
    const user=await User.findOne({username});

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

    const isMatch= await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(400).json({message : `Invalid credentials`})
    }

    const token=jwt.sign(
        {id:user._id,role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )
    res.status(200).json({token});

    }catch(error){
        throw new ApiError(500, "Something went wrong")
    }
})

export{
    register,
    login
}