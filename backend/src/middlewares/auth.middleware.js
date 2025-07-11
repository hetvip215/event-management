import jwt from "jsonwebtoken"

export const verifyJWT=(req,res,next)=>{
    let token;
    const authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token= authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message : "No token,authorization denied"})
        }
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decode;
            console.log("The decoded user is : ",req.user);
            next();
        }catch(error){
            res.status(400).json({message:"Token is not valid"})
        }
    }else{
        return res.status(401).json({message : "No token,authorization denied"})
    }
}

