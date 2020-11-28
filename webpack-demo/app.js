require("dotenv").config();

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function rootPage(req, res) {
  res.render("index");
});

app.listen(PORT, function listenOn() {
  console.log(`listening on ${PORT}`);
});
