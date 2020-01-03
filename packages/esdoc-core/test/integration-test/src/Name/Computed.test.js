const assert = require('assert');
const {find} = require('../../util');

describe('test/Name/Computed:', ()=>{
  it('has member computed name', ()=>{
    const doc = find('longname', 'src/Name/Computed.js~TestNameComputed#[foo.bar]');
    assert(doc);
  });

  it('has method computed name', ()=>{
    const doc = find('longname', "src/Name/Computed.js~TestNameComputed#[foo.baz]");
    assert(doc);
  });
});
