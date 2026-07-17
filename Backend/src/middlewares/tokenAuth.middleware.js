const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authDashboard = async(req,res,next)=>{

    console.log(req.cookies);

    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"No token"
        });
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                message:"User not found"
            });
        }
        req.user={id:decoded.id};
        next();
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token or no user found"
        });
    }
}
module.exports={authDashboard};