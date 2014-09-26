#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var log = require('verbalize');
var del = require('delete');
var argv = require('minimist')(process.argv.slice(2));

var localPkg = path.join(process.cwd(), 'package.json');
var pkg = require(localPkg);

var keywords = require('./');

var add = argv.add || argv.a || argv._;
var omit = argv.omit || argv.o;

if (typeof add === 'string') {
  add = add.split(',');
}

if (typeof omit === 'string') {
  omit = omit.split(',');
}

pkg.keywords = keywords(add, omit);

// del(path.join(process.cwd(), 'package.json'));
fs.writeFileSync(localPkg, pkg);
// console.log(pkg)
