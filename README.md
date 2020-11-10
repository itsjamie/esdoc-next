# ESDoc

ESDoc is a documentation generator for JavaScript.

<img class="screen-shot" src="https://raw.githubusercontent.com/esdoc/esdoc/master/manual/asset/image/top.png" width="500px" style="max-width: 500px; border: 1px solid rgba(0,0,0,0.1); box-shadow: 1px 1px 1px rgba(0,0,0,0.5);">

# Features
- Generates good documentation.
- Measures documentation coverage.
- Integrate test codes into documentation.
- Integrate manual into documentation.
- Parse ECMAScript proposals.

# Users
- Submit a PR if you switch to using this fork! :)

# Quick Start
```sh
# Move to a your project directory.
cd your-project/

# Install ESDoc and standard plugin.
npm install --save-dev @itsjamie/esdoc-core @itsjamie/esdoc-cli @itsjamie/esdoc-standard-plugin

# Create a configuration file.
echo '{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "@itsjamie/esdoc-standard-plugin"}]
}' > .esdoc.json

# Run ESDoc.
npx esdoc

# View a documentation
open ./docs/index.html
```

# License
MIT

# Author
[Ryo Maruyama@h13i32maru](https://twitter.com/h13i32maru)
