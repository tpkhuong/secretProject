require("dotenv").config();

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

/*
__dirname only cares about where this file is or what directory this file is located.
*/
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function rootPage(req, res) {
  var title = "I love Everything about programming. Let's go!";
  res.render("index", { title });
});

app.listen(PORT, function listenOn() {
  console.log(`listening on ${PORT}`);
});
