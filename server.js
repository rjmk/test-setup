var http = require("http");
var handler = require("./handler.js");
var app = module.exports = http.createServer(handler);

app.listen(4000);
console.log('Server running on port 4000');