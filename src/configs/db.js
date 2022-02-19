const mongoose = require("mongoose");

module.exports = () => {
return mongoose.connect("mongodb+srv://madhan:mohan@cluster0.sj4nr.mongodb.net/auth?retryWrites=true&w=majority")
}

