var test = require('tape');
var hyperquest = require('hyperquest');
var concat = require('concat-stream')
var server = require('../server.js');

test('Home page', function (t) {
  hyperquest('http://localhost:4000', function (err, res) {
    t.equal(res.statusCode, 200);
    t.end();
  });
});

test('Going to /name/richard returns an h1 with Richard inside', function (t) {
  hyperquest('http://localhost:4000/name/richard', function (err, res) {
    res.pipe(concat(function (payload) {
      t.ok(payload.toString().match('<h1>Richard</h1>'));
      t.end();
    }))
  })
});

test('teardown', function (t) {
  server.close()
  t.end()
})
