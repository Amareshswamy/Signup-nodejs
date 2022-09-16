const express = require('express')
const bodyparser =  require('body-parser')
const path = require('path')
const exp = require('constants')
const port = 5500

const users_collection1 = require('./userdatabase/userdata')
require("./userdatabase/mongoose_connection")

const app = express()



app.use(bodyparser.urlencoded(
    {
        extended:true
    })
)

app.use(express.json())

let mainfolder = path.join(__dirname,"../");

app.get('/',(req,res)=>{
    res.send('home page');
    console.log(__dirname)
    console.log(mainfolder)
})

app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/index.html")
})

app.post("/register",(req,res)=>{
    //console.log(req.body);
    let req_userdata = new users_collection1(req.body);
   // console.log(req_userdata);
   req_userdata.save();
   res.send('regestration sucessfully')
})

app.listen(port,()=>{
    console.log('listening to port ' + port)
})