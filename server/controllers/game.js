const MemberModel = require("../models/member");

module.exports = (app) => {
	app.post("/register", async (req, res) => {
		console.log(req.body);
		const newMember = new MemberModel({
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			createDate: Date.now(),
		});

		const result = await newMember.save();
		res.json({ result });
	});
};
