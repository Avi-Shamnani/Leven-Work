const mongoose = require("mongoose");

// Connection String 
mongoose.connect(`127.0.0.1:27017/levelwork`);

// making the client schema
const clientSchema = mongoose.Schema({
    name: String,
    email : String,
    phone : Number,
    business : String,
    services : String,
    location : String,
    description : String
})

// finally making the schema 
// the model name will be pluralized and got saved
module.exports = mongoose.model("client", clientSchema);