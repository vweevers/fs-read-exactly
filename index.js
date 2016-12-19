'use strict';

const open = require('fs-lotus')
    , fs = require('fs')

function readExactly (fdOrFile, pos, length, done) {
  if (typeof fdOrFile === 'string') {
    return open(fdOrFile, 'r', function (err, fd, close) {
      if (err) return done(err)
      readExactly(fd, pos, length, close.bind(null, done))
    })
  }

  fs.read(fdOrFile, Buffer(length), 0, length, pos, function (err, bytesRead, buf) {
    if (err) return done(err)

    if (bytesRead !== length) {
      const remainder = length - bytesRead
      const err = new Error(`End of file (expected at least ${remainder} more bytes)`)

      err.errno = 1
      err.code = 'EOF'

      return done(err)
    }

    done(null, buf)
  })
}

module.exports = readExactly
