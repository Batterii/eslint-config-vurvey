# @batterii/eslint-config-vurvey
Contains base [ESLint][eslint] configurations for all Vurvey TypeScript projects. These
configurations are [extended][eslint-ext] by environment-specific configurations in the
following packages:

- [eslint-config-vurvey-node][eslint-config-vurvey-node] for Node.js projects.
- [eslint-config-vurvey-react][eslint-config-vurvey-react] for React projects.

Any rules which should be enforced in both of our application environments should be configured in
this package, instead of being repeated in one of the above.


## Modules
This package contains three modules, described below. For simplicity and for ESLint support, they
are written as CommonJS modules in plain JavaScript.

### index
This module contains the base configuration, containing rules which will be enforced in all
TypeScript files in all Vurvey-related repositories. With this package installed, this base config
can be eferenced within a child configuration like so:

```yaml
extends: "@batterii/eslint-config-vurvey"
```

### test.js
This module extends the base configuration with changes for automated test files written in
[Mocha][mocha], using [Chai][chai] for assertions and [Sinon][sinon] for test doubles.

This `test` config mostly relaxes rules from the base config instead of adding more restrictions.
This is because such test code has a different purpose than production-ready code, so we need not be
as strict with it.

With this package installed, this `test` config can be referenced within a child configuration like
so:

```yaml
extends: "@batterii/eslint-config-vurvey/test"
```

### meta.js
This module contains configuration intended to be used for linting this project and other ESLint
config projects. It does not extend the base configuration and instead is only concerned with rules
for laying out and organizing our linter config files.


With this package installed, this `meta` config can be referenced within a child configuration like
so:

```yaml
extends: "@batterii/eslint-config-vurvey/meta"
```


## Proposing Changes
Linter rules like these are a team effort-- especially ones that are re-used between two different
teams working in two very different environments. All developers subject to these rules should feel
free to propose changes so that we can arrive a set of common rules that work for everyone. To do
this, simply open a pull request and give other affected devs the opportunity to discuss in
comments.

For organization and tracking purposes, pull requests to this repo should focus on changing a
small number of rules at a time. This will help keep discussion focused on individual conventions
and concerns.


## Publishing
`npm version` and `npm publish` can be used to publish this package as normal. These should be run
in the latest `main` branch by someone with write access to the package on NPM. When doing so, a
`prepublishOnly` script will automatically push the verison number commmit and tag to the
GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rules changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by ESLint's `--fix` flag.

If a breaking release of this package is made, breaking releases of these dependent packages should
be made as well:

- [eslint-config-vurvey-node][eslint-config-vurvey-node]
- [eslint-config-vurvey-react][eslint-config-vurvey-react]

Doing this will enable developers of affected repositories to upgrade to the breaking version and
address the new errors when they are able.


## Peer Dependencies
ESLint's developer guide for [shareable configs][eslint-share] recommends that such configs
declare the ESLint version they need-- as well as versions for any plugins-- as
[peer dependencies][peer-deps] rather than as direct dependencies. This expresses compatibility
limitations while still ultimately leaving control over ESLint and its plugins to the repositories
where ESlint will actually be run.

For more information about this approach, see [this Node.js blog post][peer-deps-blog] on the
subject.


[chai]: https://www.chaijs.com/
[eslint]: https://eslint.org/
[eslint-config-vurvey-node]: https://github.com/Batterii/eslint-config-vurvey-node
[eslint-config-vurvey-react]: https://github.com/Batterii/eslint-config-vurvey-react
[eslint-ext]: https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/developer-guide/shareable-configs
[mocha]: https://mochajs.org/
[peer-dependencies]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[semver]: https://semver.org/
[sinon]: https://sinonjs.org/
