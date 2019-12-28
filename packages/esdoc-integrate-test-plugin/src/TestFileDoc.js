// hack: depends on esdoc internal class
const FileDoc = require('esdoc/src/Doc/FileDoc');

/**
 * Doc class for test code file.
 */
class TestFileDoc extends FileDoc {
  /** set ``testFile`` to kind. */
  _$kind() {
    this._value.kind = 'testFile';
  }
}

module.exports = TestFileDoc;
