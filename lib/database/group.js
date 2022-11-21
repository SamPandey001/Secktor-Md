const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th" },
goodbye:{ type: String, default: "*Another one bits dust.*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
economy: { type: String, default: "false" },
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
