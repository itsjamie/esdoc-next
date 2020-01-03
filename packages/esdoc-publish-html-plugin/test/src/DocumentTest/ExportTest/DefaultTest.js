const {readDoc, assert} = require('./../../util.js');

/**
 * @test {AbstractDoc#@_export}
 * @test {ClassDocBuilder@_buildClassDoc}
 */
describe('TestExportDefault', ()=> {
  const doc = readDoc('class/src/Export/Default.js~TestExportDefault.html');
  it('has default import path.', ()=> {
    assert.includes(doc, '.header-notice [data-ice="importPath"]', `import TestExportDefault from '@itsjamie/esdoc-test-fixture/src/Export/Default.js'`);
  });
});
