const mongoose = require("mongoose");

const GameModel = mongoose.model("Games", {
	name: String,
});

module.exports = GameModel;
