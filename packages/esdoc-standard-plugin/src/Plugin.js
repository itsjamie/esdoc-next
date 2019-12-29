class Plugin {
  onHandlePlugins(ev) {
    const option = ev.data.option || {};
    const plugins = [
      {name: '@itsjamie/esdoc-lint-plugin', option: option.lint},
      {name: '@itsjamie/esdoc-coverage-plugin', option: option.coverage},
      {name: '@itsjamie/esdoc-accessor-plugin', option: option.accessor},
      {name: '@itsjamie/esdoc-type-inference-plugin', option: option.typeInference},
      {name: '@itsjamie/esdoc-external-ecmascript-plugin'},
      {name: '@itsjamie/esdoc-brand-plugin', option: option.brand},
      {name: '@itsjamie/esdoc-undocumented-identifier-plugin', option: option.undocumentIdentifier},
      {name: '@itsjamie/esdoc-unexported-identifier-plugin', option: option.unexportedIdentifier},
      {name: '@itsjamie/esdoc-integrate-manual-plugin', option: option.manual},
      {name: '@itsjamie/esdoc-integrate-test-plugin', option: option.test},
      {name: '@itsjamie/esdoc-publish-html-plugin'}
    ];

    const existPluginNames = ev.data.plugins.map(plugin => plugin.name);
    for (const plugin of plugins) {
      if (existPluginNames.includes(plugin.name)) continue;
      if (plugin.option === undefined) delete plugin.option;
      ev.data.plugins.push(plugin);
    }
  }
}

module.exports = new Plugin();
