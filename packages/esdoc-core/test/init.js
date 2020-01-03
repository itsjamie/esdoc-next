const fs = require('fs');
const path = require('path');
const ESDocCLI = require('@itsjamie/esdoc-cli');

function cli(configPath) {
  const cliPath = path.resolve('./src/cli.js');
  const argv = ['node', cliPath];

  if (configPath) {
    configPath = path.resolve(configPath);
    argv.push('-c', configPath);
    console.log(`== start == ${configPath}`);
  }

  const cli = new ESDocCLI(argv);
  cli.exec();
  console.log(`== finish ==`);
}

cli('./test/integration-test/esdoc.json');
global.docs = JSON.parse(fs.readFileSync('./test/integration-test/out/index.json').toString());
