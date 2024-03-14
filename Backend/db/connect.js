const mongoose = require("mongoose");

const uri = "mongodb+srv://Divine_ansh:Wtkw4qg4TzaIZLni@cluster0.9zlwya3.mongodb.net/";

const connectDB = ()=>{
    // console.log("connect db");
    return mongoose.connect(uri);
};




module.exports = connectDB;