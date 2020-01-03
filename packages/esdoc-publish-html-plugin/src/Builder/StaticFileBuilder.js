const path = require('path');
const DocBuilder = require('./DocBuilder.js');

/**
 * Static file output builder class.
 */
class StaticFileBuilder extends DocBuilder {
  exec(writeFile, copyDir) {
    copyDir(path.resolve(this._template, 'css'), './css');
    copyDir(path.resolve(this._template, 'script'), './script');
    copyDir(path.resolve(this._template, 'image'), './image');
  }
}

module.exports = StaticFileBuilder;