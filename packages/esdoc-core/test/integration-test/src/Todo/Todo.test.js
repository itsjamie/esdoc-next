const assert = require('assert');
const {find} = require('../../util');

describe('test/Todo/Todo:', ()=>{
  it('hash todo', ()=>{
    const doc = find('longname', 'src/Todo/Todo.js~TestTodo');
    assert.deepEqual(doc.todo, ['this is first todo.', 'this is second todo.']);
  });
});
