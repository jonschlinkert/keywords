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

function pad(arr) {
  return ['\n' ].concat(arr) //.map(clean)
    .reduce(function(acc, key, i) {
      key = key.split(' ');
      acc = acc.concat(key);
      return acc;
    }, []).sort()
    .join('\n   ' + log.sep + ' ');
}

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


pkg.keywords = keywords(add, remove);
fs.writeFileSync(localPkg, JSON.stringify(pkg, null, 2));

console.log();

if ((add && add.length) || (remove && remove.length)) {
  log.inform('updated', pad(pkg.keywords));
}

console.log();

log.success('  Done.');
