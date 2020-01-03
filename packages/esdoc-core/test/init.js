const fs = require('fs');
const path = require('path');
const Esdoc = require('../src/index.js');

const config = fs.readFileSync('./test/integration-test/esdoc.json');
Esdoc.generate(JSON.parse(config));
global.docs = JSON.parse(fs.readFileSync('./test/integration-test/out/index.json').toString());
