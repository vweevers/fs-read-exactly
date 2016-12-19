# fs-read-exactly

**Read exactly n bytes of an fd or file**

[![npm status](http://img.shields.io/npm/v/fs-read-exactly.svg?style=flat-square)](https://www.npmjs.org/package/fs-read-exactly) [![node](https://img.shields.io/node/v/fs-read-exactly.svg?style=flat-square)](https://www.npmjs.org/package/fs-read-exactly) [![Travis build status](https://img.shields.io/travis/vweevers/fs-read-exactly.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/fs-read-exactly) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/fs-read-exactly.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/fs-read-exactly) [![Dependency status](https://img.shields.io/david/vweevers/fs-read-exactly.svg?style=flat-square)](https://david-dm.org/vweevers/fs-read-exactly)

## example

```js
const readExactly = require('fs-read-exactly')

readExactly('readme.md', 0, 15, function (err, chunk) {
  console.log(err) // null
  console.log(chunk.toString()) // '# fs-read-exact'
})

readExactly('readme.md', 0, 1e4, function (err, chunk) {
  console.log(err.code) // 'EOF'
})
```

## `readExactly(mixed, pos, length, callback)`

Where `mixed` is either a filename or a file descriptor.

## install

With [npm](https://npmjs.org) do:

```
npm install fs-read-exactly
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
