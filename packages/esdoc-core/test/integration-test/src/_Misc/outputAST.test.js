const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('config outputAST:', ()=>{
  it('does not generate AST', ()=>{
    const outDir = fs.readdirSync(path.resolve(__dirname, '../../out'));
    assert(outDir.includes('ast') === false)
  });
});
