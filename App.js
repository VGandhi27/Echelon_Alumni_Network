const express =require('express')
const app=express()
const mongoose =require('mongoose')

const PORT=5000
//QudGMPWf1qqvV7Ke

const{MONGOURI}=require('./keys')

require('./models/User')

app.use(express.json())
app.use(require('./routes/auth'))



mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error in connection",err)
})

app.listen(PORT,()=>{
    console.log("server is running",PORT)
})  