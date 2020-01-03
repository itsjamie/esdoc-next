const assert = require('assert');
const path = require('path');

describe('test standard plugin:', ()=>{
  it('dynamically load plugins', ()=>{
    const plugins = require('../spy-plugin.js').testTargetPlugins;

    assert.deepEqual(plugins, [
      {name: './src/Plugin.js', option: {
        brand: {
          title: 'My Library'
        },
        manual: {
          files: ['./test/manual/overview.md']
        },
        test: {
          source: "./test/test",
          includes: ["Test.js$"]
        }
      }},
      {name: './test/spy-plugin.js'},
      {name: '@itsjamie/esdoc-lint-plugin'},
      {name: '@itsjamie/esdoc-coverage-plugin'},
      {name: '@itsjamie/esdoc-accessor-plugin'},
      {name: '@itsjamie/esdoc-type-inference-plugin'},
      {name: '@itsjamie/esdoc-external-ecmascript-plugin'},
      {name: '@itsjamie/esdoc-brand-plugin', option: {title: 'My Library'}},
      {name: '@itsjamie/esdoc-undocumented-identifier-plugin'},
      {name: '@itsjamie/esdoc-unexported-identifier-plugin'},
      {name: '@itsjamie/esdoc-integrate-manual-plugin', option: {
        coverage: true,
        files: ['./test/manual/overview.md']
      }},
      {name: '@itsjamie/esdoc-integrate-test-plugin', option: {
        source: "./test/test",
        interfaces: ["describe", "it", "context", "suite", "test"],
        includes: ["Test.js$"],
        excludes: ["\\.config\\.js$"]
      }},
      {name: '@itsjamie/esdoc-publish-html-plugin'},
    ]);

  });
});
