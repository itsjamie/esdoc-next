const path = require('path');
const {taffy} = require('taffydb');
const IceCap = require('ice-cap').default;
const DocBuilder = require('./Builder/DocBuilder');
const StaticFileBuilder = require('./Builder/StaticFileBuilder.js');
const IdentifiersDocBuilder = require('./Builder/IdentifiersDocBuilder.js');
const IndexDocBuilder = require('./Builder/IndexDocBuilder.js');
const ClassDocBuilder = require('./Builder/ClassDocBuilder.js');
const SingleDocBuilder = require('./Builder/SingleDocBuilder.js');
const FileDocBuilder = require('./Builder/FileDocBuilder.js');
const SearchIndexBuilder = require('./Builder/SearchIndexBuilder.js');
const SourceDocBuilder = require('./Builder/SourceDocBuilder.js');
const TestDocBuilder = require('./Builder/TestDocBuilder.js');
const TestFileDocBuilder = require('./Builder/TestFileDocBuilder.js');
const ManualDocBuilder = require('./Builder/ManualDocBuilder.js');

class Plugin {
  onHandleDocs(ev) {
    this._docs = ev.data.docs;
  }

  onPublish(ev) {
    this._option = ev.data.option || {};
    this._template = typeof this._option.template === 'string'
      ? path.resolve(process.cwd(), this._option.template)
      : path.resolve(__dirname, './Builder/template');
    this._exec(this._docs, ev.data.writeFile, ev.data.copyDir, ev.data.readFile);
  }

  _exec(tags, writeFile, copyDir, readFile) {
    IceCap.debug = !!this._option.debug;

    const data = taffy(tags);

    //bad hack: for other plugin uses builder.
    DocBuilder.createDefaultBuilder = () => {
      return new DocBuilder(this._template, data, tags);
    };

    let coverage = null;
    try {
      coverage = JSON.parse(readFile('coverage.json'));
    } catch (e) {
      // nothing
    }

    new IdentifiersDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new IndexDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new ClassDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new SingleDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new FileDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new StaticFileBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new SearchIndexBuilder(this._template, data, tags).exec(writeFile, copyDir);
    new SourceDocBuilder(this._template, data, tags).exec(writeFile, copyDir, coverage);
    new ManualDocBuilder(this._template, data, tags).exec(writeFile, copyDir, readFile);

    const existTest = tags.find(tag => tag.kind.indexOf('test') === 0);
    if (existTest) {
      new TestDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
      new TestFileDocBuilder(this._template, data, tags).exec(writeFile, copyDir);
    }
  }
}

module.exports = new Plugin();
