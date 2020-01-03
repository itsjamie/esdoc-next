const assert = require('assert');
const {find} = require('../../util');

describe('test/_Misc/Exclude:', ()=>{
  it('not exist', ()=>{
    const doc = find('longname', 'src/_Misc/Exclude.js~TestExclude');
    assert.equal(doc, null);
  });
});
