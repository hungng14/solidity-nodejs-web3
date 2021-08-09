const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost/myapp",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.error("Connect failed to database");
		} else {
			console.log("Connect to database succesfully");
		}
	}
);

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
app.use(cors());
require("./controllers/game")(app);

const server = require("http").Server(app);

const io = require("socket.io")(server);

app.get("/", (req, res) => {
	console.log("hello");
	res.send("Hello there");
});

server.listen(8888, () => {
	console.log("Server is running at port 8888");
});
