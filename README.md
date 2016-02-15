# j2c-plugin-prefix-legacy [![npm][npm_img]][npm_url] ![.min.gz][size_img]

[![Join the chat at https://gitter.im/j2css/j2c][gitter_img]][gitter_url]
[![Build Status][trav_img]][trav_url]
[![Coverage Status][cov_img]][cov_url]
[![Dependency Status][deps_img]][deps_url]
[![bitHound Score][bithound_img]][bithound_url]

[trav_img]: https://travis-ci.org/j2css/j2c-plugin-prefix-legacy.svg?branch=master
[trav_url]: https://travis-ci.org/j2css/j2c-plugin-prefix-legacy
[cov_img]: https://codecov.io/github/j2css/j2c-plugin-prefix-legacy/coverage.svg?branch=master
[cov_url]: https://codecov.io/github/j2css/j2c-plugin-prefix-legacy?branch=master
[npm_img]: https://img.shields.io/npm/v/j2c-plugin-prefix-legacy.svg
[npm_url]: https://npmjs.com/package/j2c-plugin-prefix-legacy
[size_img]: https://badges.herokuapp.com/size/npm/j2c/dist/j2c-plugin-prefix-legacy.global.min.js.gz?label=.min.gz
[deps_img]: https://david-dm.org/j2css/j2c-plugin-prefix-legacy.svg
[deps_url]: https://david-dm.org/j2css/j2c-plugin-prefix-legacy
[bithound_img]: https://www.bithound.io/github/j2css/j2c-plugin-prefix-legacy/badges/score.svg
[bithound_url]: https://www.bithound.io/github/j2css/j2c-plugin-prefix-legacy/
[gitter_img]: https://badges.gitter.im/Join%20Chat.svg
[gitter_url]: https://gitter.im/j2css/j2c

[![Build Status](https://travis-ci.org/j2css/j2c-plugin-prefix-legacy.svg?branch=master)](https://travis-ci.org/j2css/j2c-plugin-prefix-legacy)
[![codecov.io](https://codecov.io/github/j2css/j2c-plugin-prefix-legacy/coverage.svg?branch=master)](https://codecov.io/github/j2css/j2c-plugin-prefix-legacy?branch=master)

Brings back the prefix tooling of `j2c` `v0.11.0-`.

**This is not the PrefixFree- and AutoPrefixer-based plugin**. That one is still in the works (building this one helped sanding off the rough edges of the plugin system).

## Usage:


```SH
$ npm install j2c-plugin-prefix-legacy
```

...possibly using the `--save` flag to put it in the dependencies of your `package.json`

Then

```JS
var j2c = require('j2c')() // create a new instance.
j2c.use(require('j2c-plugin-prefix-legacy'))

// use your fresh `j2c` instance here.
```

## License

MIT License

Copyright (c) 2016, Pierre-Yves Gérardy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
