const assert = require('assert');
const {find} = require('../../util');

describe('test/Example/Example:', ()=>{
  it('has example', ()=>{
    const doc = find('longname', 'src/Example/Example.js~TestExample');
    assert.deepEqual(doc.examples, [
      "console.log(1)",
      "<caption>this is caption</caption>\nconsole.log(2)"
    ]);
  });
});
