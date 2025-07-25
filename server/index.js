const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Test')

app.get('/getUsers',(req,res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(2000,() => {
    console.log("Server is running on port 2000");
})