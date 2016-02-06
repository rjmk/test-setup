var bl = require('bl')

exports.collect = function (stream, cb) {
  stream.pipe(bl(function (err, data) {
    cb(data.toString())
  }))
}