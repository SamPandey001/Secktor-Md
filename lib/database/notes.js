const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
note: { type: String, default: "false"}

})
const notes =  mongoose.model("notes", NotesSchema)
module.exports = { notes }