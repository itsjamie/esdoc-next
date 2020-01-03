const assert = require('assert');
const {find} = require('./util.js');

describe('test/package.json:', ()=>{
  it('has package json', ()=>{
    const doc = find('longname', /\/package\.json$/);
    const obj = JSON.parse(doc.content);
    assert.equal(obj.name, '@itsjamie/esdoc-test');
    assert.equal(obj.version, '1.2.3');
  });
});
