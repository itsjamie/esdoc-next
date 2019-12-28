const assert = require('assert');
const {find} = require('../../util');

describe('test/Ignore/Ignore:', ()=>{
  it('is ignored', ()=>{
    const doc = find('longname', 'src/Ignore/Ignore.js~TestIgnoreClass');
    assert.equal(doc.ignore, true);
  });
});
