const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/NewExpression/WithObjectProperty:', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/NewExpression/WithObjectProperty.js~TestExportNewExpressionProperty');
    assert.equal(doc.export, true);
  });
});
