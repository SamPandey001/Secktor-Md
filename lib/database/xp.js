const mongoose = require('mongoose');
const fSchema = new mongoose.Schema({
level: { type: String, default: "false"}
})
const RandomXP =  mongoose.model("RandomXP", fSchema)
module.exports = { RandomXP }