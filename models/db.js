// imports
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
})

const db = mongoose.model("name", schema);

module.exports = db;