const { Schema, model } = require("mongoose");

const GameSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  amount: { type: String, required: true },
  rating: { type: String, required: true },
  age: { type: String, required: true },
  platform: [String],
  selected: { type: Boolean, required: true },
});

module.exports = model("Game", GameSchema);
