const mongoose = require("mongoose");

const MemberModel = mongoose.model(
	"member",
	{
		name: String,
		email: String,
		address: String,
		createDate: Date,
	},
	"member"
);

module.exports = MemberModel;
