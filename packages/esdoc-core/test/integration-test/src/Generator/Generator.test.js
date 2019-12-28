const assert = require('assert');
const {find} = require('../../util');

describe('test/Generator/Generator:', ()=>{
  it('is generator method', ()=>{
    const doc = find('longname', 'src/Generator/Generator.js~TestGeneratorClass#methodGenerator');
    assert.equal(doc.generator, true);
  });

  it('is generator function', ()=>{
    const doc = find('longname', 'src/Generator/Generator.js~testGeneratorFunction');
    assert.equal(doc.generator, true);
  });
});
