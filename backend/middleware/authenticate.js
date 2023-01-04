const jwt=require('jsonwebtoken')
const User=require('../model/userSchema')
const authenticate=async(req,res,next)=>{
try{
    console.log(req.Cookies)
    const token=req.Cookies.jwtToken;
    console.log(token)
    
//     const verifyToken=jwt.verify(token,process.env.SECRET_KEY)

// const rootUser=await User.findOne({_id:verifyToken._id,"Tokens.token":token});
// if(!rootUser){
//     throw new Error('User not found')
// }
// req.token=token;
// req.rootUser=rootUser
// req.userID=rootUser._id;
// next()

}catch(err){
    res.status(401).send(' User not found')
    console.log(err)
}
}
module.exports=authenticate