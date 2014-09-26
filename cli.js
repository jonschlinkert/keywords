#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var diff = require('arr-diff');
var log = require('verbalize');
var argv = require('minimist')(process.argv.slice(2));
var localPkg = path.join(process.cwd(), 'package.json');
var keywords = require('./');
var pkg = require(localPkg);

log.runner = 'keywords';

var add = argv.add || argv.a || argv._;
var remove = argv.remove || argv.r;

var addMsg;
var removeMsg;

if (typeof add === 'string') {
  add = add.split(',');
}

if (typeof remove === 'string') {
  remove = remove.split(',');
}

console.log();

if (add && add.length) {
  log.inform('adding', add);
}
if (remove && remove.length) {
  log.inform('removing', remove);
}

pkg.keywords = keywords(add, remove);
fs.writeFileSync(localPkg, JSON.stringify(pkg, null, 2));
log.success('  Done.');
