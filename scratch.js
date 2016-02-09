var http = require('http');
var hyperquest = require ('hyperquest');

function handler (req, res) {
  console.log(req);
  res.end();
}

var server = http.createServer(handler).listen(3000);

hyperquest('http://localhost:3000/', function (err, res) {
  console.log('>>>>>>>>>> THE RESPONSE');
  console.log(res);
  console.log('>>>>>>>>>> END OF RESPONSE')

  // if you prefer, remove this and close your server manually with
  // ctrl-c
  server.close()
})

