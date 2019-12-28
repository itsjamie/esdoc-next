const fs = require('fs-extra');
const {Plugin} = require('../Plugin/Plugin.js');
const babel = require('@babel/parser');

/**
 * ECMAScript Parser class.
 *
 * @example
 * let ast = ESParser.parse('./src/foo.js');
 */
class ESParser {
  /**
   * parse ECMAScript source code.
   * @param {string} filePath - source code file path.
   * @returns {AST} AST of source code.
   */
  static parse(filePath) {
    let code = fs.readFileSync(filePath, {encode: 'utf8'}).toString();
    code = Plugin.onHandleCode(code, filePath);
    if (code.charAt(0) === '#') code = code.replace(/^#!/, '//');

    let parserOption = {sourceType: 'module', plugins: []};
    let parser = (code) => {
      return babel.parse(code, parserOption);
    };

    ({parser, parserOption} = Plugin.onHandleCodeParser(parser, parserOption, filePath, code));

    let ast = parser(code);

    ast = Plugin.onHandleAST(ast, filePath, code);

    return ast;
  }
}

module.exports = ESParser;
