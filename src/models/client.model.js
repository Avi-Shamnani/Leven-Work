const mongoose = require("mongoose");

// Connection String with MongoDB URI format
mongoose.connect('mongodb://127.0.0.1:27017/levenwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

// making the client schema
const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    business: String,
    services: String,
    location: String,
    description: String
});

// finally making the schema
module.exports = mongoose.model("Client", clientSchema);
