# hukx

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![npm](https://img.shields.io/npm/v/hukx.svg)

Piper for Node.js express apps.

## Installation 
```sh
npm i hukx --save
```

## Usage
### Javascript
```javascript
// Import express and instanciate router
const express = require('express')
const router = express.Router()

// Import hukx and create a instance
const { hukx, piperOf } = require('hukx')
const piper = piperOf(router)

// Define a route with a pipe
piper.get('/', hukx.pipe(
  ... // Rxjs operators
))

// Export router
module.exports = router
```

## Author
Udesh Kumarasinghe - [UdeshUK][1] on GitHub, [ThatUdeshUK][2] on Twitter

## License
Apache 2.0. See the [LICENSE][3] file for details.

[1]: https://github.com/UdeshUK
[2]: https://twitter.com/ThatUdeshUK
[3]: https://github.com/UdeshUK/huk/blob/master/LICENSE.txt
