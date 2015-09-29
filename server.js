var http = require("http");
var handler = require("./handler");
var port = process.env.PORT || 4000;
var app = http.createServer(handler);

app.listen(port);
console.log('Server running on port', port);