const mongoose = require("mongoose");

const NewModel = mongoose.Schema({
    name: {
        type:String,
        requried: true,
    },
    age: {
        type:String,
        requried: true,
        minLength:2,
    },
    aadharNumber: {
        type: Number,
        requried: true,
        min:20,
    },
    pancardnumber: {
        type:String,
        requried:true,
        minLength:10
    },
});

const NewAccModel = mongoose.model("newaccount", NewModel);

module.exports = NewAccModel;