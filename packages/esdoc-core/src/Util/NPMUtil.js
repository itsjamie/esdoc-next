const path = require('path');
const fs = require('fs-extra');

/**
 * Node Package Manager(npm) util class.
 */
class NPMUtil {
  /**
   * find ESDoc package.json object.
   * @returns {Object} package.json object.
   */
  static findPackage() {
    let packageObj = null;
    try {
      const packageFilePath = path.resolve(__dirname, '../../package.json');
      const json = fs.readFileSync(packageFilePath, {encode: 'utf8'});
      packageObj = JSON.parse(json);
    } catch (e) {
      const packageFilePath = path.resolve(__dirname, '../../../package.json');
      const json = fs.readFileSync(packageFilePath, {encode: 'utf8'});
      packageObj = JSON.parse(json);
    }

    return packageObj;
  }
}

module.exports = NPMUtil;
