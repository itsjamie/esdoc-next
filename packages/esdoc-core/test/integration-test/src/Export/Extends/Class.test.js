const assert = require('assert');
const {find} = require('../../../util');

describe('test/Export/Extends/class', ()=>{
  it('is not exported that inner class', ()=>{
    const doc = find('longname', 'src/Export/Extends/Class.js~TestExportExtendsClassInner');
    assert.equal(doc.export, false);
  });

  it('is exported that outer class', ()=>{
    const doc = find('longname', 'src/Export/Extends/Class.js~TestExportExtendsClass');
    assert.equal(doc.export, true);
  });
});
