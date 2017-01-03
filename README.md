# find-dev-ip [![Build Status](https://travis-ci.org/zizther/find-dev-ip.png?branch=master)](https://travis-ci.org/zizther/find-dev-ip)

Find a suitable IP host to view local websites on.

## Command line
Install it globally to use on the command line (use `sudo` only if necessary):

`npm install -g find-dev-ip`

then run:

`find-dev-ip`

>  "http://192.168.1.46"

## In your project
`npm install find-dev-ip`

```javascript
var devip = require('find-dev-ip');
devip(); // [ "192.168.1.76", "192.168.1.80" ] or false if nothing found (ie, offline user)
```

## Contributing
In lieu of a formal style-guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Run lint & tests with `gulp`.

## License
Licensed under the MIT license.
