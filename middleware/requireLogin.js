const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const mongoose=require('mongoose')
const User=mongoose.model("User")



module.export=(req,res,next)=>{
    const {authorization}=req.headers
    //authorization ====Bearer
    if(!authorization){
      return res.status(401).json({error:"You must be logged in"})

    }
   const token= authorization.replace("Bearer","")
  jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
        return res.status(401).json({error:"You must be logged in"})
    }

    const {_id}=payload
    User.findById(_id).then(userdata=>{
        req.user=userdata
    })
    next()
  })
}