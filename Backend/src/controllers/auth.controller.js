const userModel=require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

registerUser = async(req,res)=>{

    const{username,email,password}=req.body;
    
    if(!username||!email||!password){
        return res.status(400).json({message:"All fields are required"});
    }

    const isUserExist =await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserExist){
         return res.status(409).json({message:"User Already Exist"});
    }

    const hash=await bcrypt.hash(password,10)

    const user =await userModel.create({
        username,
        email,
        password:hash
    })

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET);

    res.cookie("token", token, {
    httpOnly:true,
    secure:false,
    sameSite:"lax",
    maxAge:7*24*60*60*1000
    });//cookie

    res.status(201).json({
        mssg:"User created Successfully",
        user
    })

}

loginUser=async(req,res)=>{
    
    const{userNameEmail,password}=req.body;

    if(!userNameEmail||!password){
        return res.status(400).json({message:"All fields Required"});
    }

    const login=await userModel.findOne({
        $or:[
            {username:userNameEmail},
            {email:userNameEmail}
        ]
    })

    if(!login){
       return res.status(404).json({message:"User not Exist"});
    }

    const isPasswordValid=await bcrypt.compare(password,login.password)//passsword comapre

     if(!isPasswordValid){//not psasword compared
        return res.status(401).send("Invalid Password")
    }

    const token=jwt.sign({
        id:login._id
    },process.env.JWT_SECRET);

    res.cookie("token", token, {
    httpOnly:true,
    secure:false,
    sameSite:"lax",
    maxAge:7*24*60*60*1000
    });//cookie

    res.status(200).json({
    mssg:"User login successfully",
    login
    })

    

}
module.exports={ registerUser , loginUser };