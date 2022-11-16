const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
id: { type: String, require: true, unique: true },
name: { type: String },
bot: { type: Boolean},
announcement: { type: String },
permit: { type: String,  default: "false"},
times: { type: String,  default: "0"},
ban: { type: String,  default: "false"},
haig: { type: String,  default: "false"}
})
const sck1 =  mongoose.model("Sck1", UserSchema)
module.exports = { sck1 }