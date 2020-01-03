const path = require('path');
const ESDocCLI = require('@itsjamie/esdoc-cli');

function cli() {
  const cliPath = path.resolve('./node_modules/@itsjamie/esdoc-cli/cli.js');
  const argv = ['node', cliPath, '-c', './test/fixture/esdoc.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
}

cli();
