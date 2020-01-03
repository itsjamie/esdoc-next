const {readDoc, assert, findParent} = require('./../../util.js');

/** @test {VariableDoc#@_name} */
describe('test export variable', ()=> {
  const doc = readDoc('variable/index.html');

  it('has default import path with direct variable definition.', ()=> {
    findParent(doc, '[id="static-variable-testExportVariable1"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import testExportVariable1 from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with direct variable definition.', ()=>{
    findParent(doc, '[id="static-variable-testExportVariable2"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable2} from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('is not documented with direct variable definition', ()=> {
    try {
      findParent(doc, '[id="static-variable-testExportVariable3"]', '[data-ice="detail"]', ()=>{});
    } catch (e) {
      return;
    }
    assert(false);
  });

  it('has named import path with none doc comment', ()=>{
    findParent(doc, '[id="static-variable-testExportVariable4"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable4} from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });

    findParent(doc, '[id="static-variable-testExportVariable5"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable5} from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with indirect variable definition.', ()=>{
    findParent(doc, '[id="static-variable-testExportVariable6"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable6} from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with unknown type.', ()=>{
    findParent(doc, '[id="static-variable-testExportVariable7"]', '[data-ice="detail"]', (doc)=>{
      assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable7} from '@itsjamie/esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });
});
