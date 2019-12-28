const path = require('path');
const fs = require('fs');
const ESDocCLI = require('@itsjamie/esdoc-cli/cli.js');

function cli() {
  const cliPath = path.resolve('./node_modules/@itjamie/esdoc-cli/cli.js');
  const argv = ['node', cliPath, '-c', './test/esdoc.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
  global.docs = JSON.parse(fs.readFileSync('./test/out/index.json').toString());
}

cli();
