const fs = require('fs');

function find(key, ...values) {
  if (values.length === 1) {
    // eslint-disable-next-line array-callback-return, consistent-return
    return global.docs.find((doc) => {
      if (typeof values[0] === 'string') return doc[key] === values[0];
      if (values[0] instanceof RegExp) return doc[key].match(values[0]);
    });
  }

  const results = [];
  for (const value of values) {
    // eslint-disable-next-line array-callback-return, consistent-return
    const result = global.docs.find(doc => {
      if (typeof value === 'string') return doc[key] === value;
      if (value instanceof RegExp) return doc[key].match(value);
    });

    results.push(result);
  }

  return results;
}

function file(filePath) {
  return fs.readFileSync(filePath).toString();
}

exports.find = find;
exports.file = file;
