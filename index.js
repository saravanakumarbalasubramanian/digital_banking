// initialize mongoose
require('dotenv').config();
// initializing the express
const express = require("express");
// assiginig the express to our const 
const append = express();
// initialize the json to the append
append.use(express.json());
// importing dotenv
const mongoose = require("mongoose");
// initiallize mongoose
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connection established 🛢️"));


// import API's
const newAcc = require("./API/NewAccount");
const accdetails = require("./API/AccDetails");
// initializing Routes
append.use('/newaccount', newAcc);
append.use('/accstatements', accdetails);

// initialize the local port 
append.listen(5000, () => console.log("local host connection established 🚀"));
