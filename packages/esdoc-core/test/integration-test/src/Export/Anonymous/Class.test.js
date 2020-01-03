const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/Anonymous/class:', ()=>{
  it('is exported', ()=>{
    const doc = find('longname', 'src/Export/Anonymous/Class.js~Class');
    assert.equal(doc.export, true);
  });
});
