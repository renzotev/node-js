var express = require("express");
var app 	= (express());
var server 	= require("http").createServer(app);
var io 		= require("socket.io").listen(server);

var cons 	= require("consolidate");

server.listen(3000);

app.engine(".html", cons.jade);
app.set("view engine", "html");

app.use(express.static("./public"));

app.get("/", function() {
	res.render("index", {
		titulo : "applicacion grip"
	});
});