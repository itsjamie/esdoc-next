const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/NewExpression/WithOriginalExport', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/NewExpression/WithOriginalExport.js~TestExportNewExpressionWithOriginalExported');
    assert.equal(doc.export, true);
  });
});
