var http = require('http');
var shot = require ('shot');

var request = {
  method: 'GET',
  url: '/'
}

function handler (req, res) {
  console.log(req);
  res.end();
}

http.createServer(handler).listen(3000);

shot.inject(handler, request, function (res) {
  console.log('THE RESPONSE');
  console.log(res);
})