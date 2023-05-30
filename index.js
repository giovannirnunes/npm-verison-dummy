#!/usr/bin/env node
const pack = require('./package.json');

function main() {
  console.log(pack.version);
}

main();
