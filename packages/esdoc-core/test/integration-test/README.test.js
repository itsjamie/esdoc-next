const assert = require('assert');
const {find, file} = require('./util.js');

describe('test/README.md', ()=>{
  it('has README', ()=>{
    const doc = find('longname', /\/README.md$/);
    assert.equal(doc.kind, 'index');
    assert.equal(doc.content, file(doc.longname));
  });
});
