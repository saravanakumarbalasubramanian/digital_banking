const mongoose = require("mongoose");

const NewModel = mongoose.Schema({
    name: String,
    age: Number,
    aadharNumber: Number,
    pancardnumber: String,
});

const NewAccModel = mongoose.model("newaccount", NewModel);

module.exports = NewAccModel;