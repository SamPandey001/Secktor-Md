const mongoose = require('mongoose');
const BlockSchema = new mongoose.Schema({
id: { type: String,required: true },
reason: { type: String, default: "No Reason" },
date: { type:  String, default: Date.now},
group: { type: String, default: "In Private chat" },
warnedby: { type: String, default: "false" }
})
const warndb =mongoose.model("warndb", BlockSchema)
module.exports = { warndb }