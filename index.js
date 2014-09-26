/*!
 * keywords <https://github.com/jonschlinkert/keywords>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var normalize = require('normalize-keywords');
var pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = function keywords(add, omit) {
  return normalize(pkg.keywords || [], {
    omit: omit,
    add: add
  });
};