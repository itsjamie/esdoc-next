const assert = require('assert');
const {find} = require('../../util');

describe('test/Throws/Throws:', ()=>{
  it('throws errors', ()=>{
    const doc = find('longname', 'src/Throws/Throws.js~TestThrows#methodThrows');
    assert.deepEqual(doc.throws, [
      {types: ['TestThrowsError1'], description: ''},
      {types: ['TestThrowsError2'], description: 'throws error'}
    ]);
  });
});
