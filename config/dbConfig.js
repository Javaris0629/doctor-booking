const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE)

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoDB is connected")
})

connection.on("error", (error) => {
    console.log("Error in MongoDB connection", error)
})

module.exports = mongoose;