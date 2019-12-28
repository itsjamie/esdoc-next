const assert = require('assert');
const {find} = require('../../util');

describe('test/Version/Version:', ()=>{
  it('has a version', ()=>{
    const doc = find('longname', 'src/Version/Version.js~TestVersion');
    assert.deepEqual(doc.version, '1.2.3');
  });
});
