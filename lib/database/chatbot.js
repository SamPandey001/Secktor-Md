const mongoose = require('mongoose');
const ChatBotSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
worktype: { type: String, default: "false"}
})
const chatbot =  mongoose.model("chatbot", ChatBotSchema)
module.exports = { chatbot }