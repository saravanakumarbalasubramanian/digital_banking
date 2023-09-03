// initialize mongoose
const mongoose = require("mongoose");

// create schema
const accSchema = mongoose.Schema({
    name: String,
    accounttype : String,
    accountnumber: Number, 
    phonenumber: Number,
    aadharnumber:Number,
    pancardnumber:String,
    IFSCcode : String,
    branch: String,
    bankbalance : String,
});

// convert schema to model
const accDetail = mongoose.model("allaccount",accSchema);

// export
module.exports = accDetail;