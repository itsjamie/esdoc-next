const assert = require('assert');
const { find } = require('../../util');

describe('test/Abstract/Abstract', ()=>{
  it('is abstract', ()=>{
    const doc = find('longname', 'src/Abstract/Abstract.js~TestAbstract#methodAbstract');
    assert.equal(doc.abstract, true);
  });
});
