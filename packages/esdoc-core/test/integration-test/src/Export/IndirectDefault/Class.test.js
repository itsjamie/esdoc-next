const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/IndirectDefault/Class:', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/IndirectDefault/Class.js~TestExportIndirectDefaultClass');
    assert.equal(doc.export, true);
  });
});
