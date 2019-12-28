# Changelog

- Changed the repository into a monorepo with Lerna.
    - The main esdoc repo itself has been split into multiple repos
        - esdoc-cli
        - esdoc-core 
    - Plugins have been brought into the main repo.
- Switched internal code away from using Babel. There is great Javascript feature support in Node now. Modules are the only exception and using CommonJS isn't a huge burden for less process. 

Forked from https://github.com/DanielRuf/esdoc-next at commit SHA: 05005bd85da50db0d67d8604ff108de55e99d4d6