const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URL;

const connectDB = ()=>{
     console.log("connect db");
    return mongoose.connect(mongoUrl);
};




module.exports = connectDB;