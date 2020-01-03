const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/NewExpression/WithIndirectExport', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/NewExpression/WithIndirectExport.js~testExportNewExpressionIndirect');
    assert.equal(doc.export, true);
  });
});
