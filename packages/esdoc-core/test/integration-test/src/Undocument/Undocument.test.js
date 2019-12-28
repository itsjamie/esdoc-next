const assert = require('assert');
const {find} = require('../../util');

describe('test/Undocument/Undocument:', ()=>{
  it('has undocument', ()=>{
    const doc = find('longname', 'src/Undocument/Undocument.js~TestUndocument');
    assert.deepEqual(doc.undocument, true);
  });
});
