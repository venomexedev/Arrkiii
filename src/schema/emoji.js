const { Schema, model } = require("mongoose");

const emojiSchema = new Schema({
  id: { type: String, required: true },
  guildName: { type: String, required: true, default: "Arrkiii" },
  emojiLength: { type: Number, required: true, default: 0 },
  emojis: { type: Array, required: true, default: [] },
});

module.exports = model("Emoji", emojiSchema);
