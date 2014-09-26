/*!
 * keywords <https://github.com/jonschlinkert/keywords>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var keywords = require('./');

describe('keywords', function () {
  it('should keywords', function () {
    var actual = keywords('foo');
    actual.should.equal('foo');
    actual.should.have.property('bar');
  });
});