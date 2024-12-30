const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  bot: { type: Boolean },
  announcement: { type: String },
  permit: { type: String, default: "false" },
  afk: { type: String, default: "false" },
  afktime: { type: Number, default: 0 },
  times: { type: Number, default: 0 },
  ban: { type: String, default: "false" },
  haig: { type: String, default: "false" },
  messages: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  groupMessages: { type: Map, of: Number, default: {} }, // Store group-specific message counts
});

const sck1 = mongoose.model("Sck1", UserSchema);
module.exports = { sck1 };
