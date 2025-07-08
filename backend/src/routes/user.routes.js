import express from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { authorizeRoles } from "../middlewares/role.middleware.js"
const router = express.Router()

//Only admin can access this route
router.get("/admin",verifyJWT,authorizeRoles("admin"), (req,res)=>{
    res.json({message: "Welcome Admin!!"})
})

//All can access this route
router.get("/user",verifyJWT,authorizeRoles("admin","user"),(req,res)=>{
    res.json({message: "Welcome User!!"})
})


export default router