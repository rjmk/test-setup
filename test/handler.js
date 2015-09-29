var shot = require("shot");
var handler = require("../handler");
var test = require("tape");

test("Home page", function (t) {
  var request = {
    method: "GET",
    url: "/"
  };

  shot.inject(handler, request, function (res) {
    t.equal(res.statusCode, 200);
    t.end();
  });

});

test("Going to /name/richard returns an h1 with Richard inside", function (t) {
  var request = {
    method: "GET",
    url: "/name/richard"
  };

  shot.inject(handler, request, function (res) {
    t.ok(res.payload.match('<h1>Richard</h1>'));
    t.end();
  })
});
