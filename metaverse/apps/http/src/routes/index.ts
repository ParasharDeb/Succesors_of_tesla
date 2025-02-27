import axios from "axios";
import { Router } from "express";
import { userrouter } from "./user";
import { spacerouter } from "./space";
import { adminrouter } from "./admin";

export const router = Router();
router.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    res.json({
        message:"you are signed up"
    }
    )
})
router.post("/signin",(req,res)=>{
    
    res.json({
        message:"you are logged in"
    })
})
router.get("/elements",(req,res)=>{
    res.json({
        message:"elements"
    })
})
router.get("/avatars",(req,res)=>{
    res.json({
        message:"avatars"
    })
})  
router.use("/user",userrouter);
router.use("/space",spacerouter);
router.use("/admin",adminrouter);