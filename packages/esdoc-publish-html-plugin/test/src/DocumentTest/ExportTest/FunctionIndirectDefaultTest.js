const {readDoc, assert, findParent} = require('./../../util.js');

/** @test {FunctionDoc#@_name} */
describe('test export function indirect default', ()=> {
  const doc = readDoc('function/index.html');
  it('has default import path with indirect function definition', ()=>{
    findParent(doc, '[id="static-function-testExportFunctionIndirectDefault"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import testExportFunctionIndirectDefault from '@itsjamie/esdoc-test-fixture/src/Export/FunctionIndirectDefault.js'`);
    });
  });
});
