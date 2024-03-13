const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/Tasty_Hub";

const connectDB = ()=>{
    // console.log("connect db");
    return mongoose.connect(uri);
};




module.exports = connectDB;