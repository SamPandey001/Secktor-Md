const mongoose = require('mongoose')
const CardSchema = new mongoose.Schema({
id: { type: String ,default: "secfork" },
count: { type: String,default:"0"},
})
const card =mongoose.model("card", CardSchema)
module.exports = { card }