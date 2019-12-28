const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/IndirectDefault/Function:', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/IndirectDefault/Function.js~testExportIndirectDefaultFunction');
    assert.equal(doc.export, true);
  });
});
