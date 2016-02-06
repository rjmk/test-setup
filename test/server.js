var test = require('tape');
var wreck = require('wreck');
var server = require('../server.js');
var collect = require('../utils').collect

test('Home page', function (t) {
  wreck.get('http://localhost:4000', function (err, res) {
    t.equal(res.statusCode, 200);
    t.end();
  });
});

test('Going to /name/richard returns an h1 with Richard inside', function (t) {
  wreck.get('http://localhost:4000/name/richard', function (err, res) {
    collect(res, function (body) {
      t.ok(body.match('<h1>Richard</h1>'));
      t.end();
    })
  })
});

test('teardown', function (t) {
  server.close()
  t.end()
})
