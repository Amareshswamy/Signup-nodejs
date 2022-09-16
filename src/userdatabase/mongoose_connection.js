const mongoose = require('mongoose')
const users_collection1 = require('./userdata')

mongoose.connect('mongodb://localhost:27017/signupform')
        .then(() => { console.log('connection successful') })
        .catch((err) => { console.log(err) })