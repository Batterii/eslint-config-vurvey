# @batterii/eslint-config-vurvey
Contains base [ESLint][eslint] configurations for all Vurvey TypeScript projects. These
configurations are [extended][eslint-ext] by environment-specific configurations in the
following packages:

- [@batteriii/eslint-config-vurvey-node][node-config] for Node.js projects.
- [@batteriii/eslint-config-vurvey-react][react-config] for React projects.

Any rules which should be enforced in both of our application environments-- as well as in
environment-agonistic projects-- should be configured in this package.


## Usage
Most of our projects should use one of the environment-specific configuration packages described
above, instead of using this package directly. See those environent-specific configurations for more
information.

### Environment-Agnostic Projects
Some Vurvey repositories-- notably those containing utilities packaged for re-use both within
Node.js and within React apps-- don't need any environment-specific configuration and should just
use this package directly for their linter configuration. To do so, first install this package and
its peer dependencies as dev dependencies. Then, create a file called `.eslintrc.yaml` at the root
of the repository with the following contents:

```yaml
extends: "@batterii/eslint-config-vurvey"
```

Finally, create scripts in your `package.json` for running the linter:

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts",
		"lintfix": "eslint . --ext .ts"
	}
}
```

Running these scripts will lint all files in the repo with a `.ts` extension.

If needed on a per-project basis, you can make changes to the configuration within the project's
`.eslintrc.yaml` file. As a general rule, however, shareable configuration should be preferred to
help ensure code style consistency between different repositories.

### Creating New Environment-Specific Configs
In the event that we need to create additional environment-specific configurations, we can do so
by creating a new repo for it and installing this package as a dependency. Then, create a file
called `.eslintrc.yaml` with the following contents:

```yaml
extends: "@batterii/eslint-config-vurvey/meta"
```

This establishes linter rules for linting the config files themselves. You'll want to create scripts
in your `package.json` for running them:

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts",
		"lintfix": "eslint . --ext .ts"
	}
}
```

Running these scripts will lint all files in the new repo with a `.js` extension, which should
include all the config files you create.

Next, create a file called `test.js` with the following contents:

```js
module.exports = {
	extends: "@batterii/eslint-config-vurvey/test",
};
```

Finally, create a file called `index.js` with the following contents:

```js
module.exports = {
	extends: [
		"@batterii/eslint-config-vurvey/base",
	],
	overrides: [{
		extends: "./test.js",
		files: ["*.test.ts"],
	}],
};

```

You can edit either of these files to make environment-specific changes to the base config.
`index.js` should be used for the main config, and `test.js` should include overrides specific to
test files. If your test files may have different extensions than the ones listed in `index.js`,
you'll want to make sure to add these to the `files` array under `overrides`.

If you add any rules which rely on ESLint plugins, these plugins should be listed as peer
dependencies instead of direct dpeendencies. See the
[Note on Peer Dependencies][#note-on-peer-dependencies] below for more information.

Once you're done setting up the configs yourself, you should add a `README.md` file detailing the
purpose, usage, and organization of your config repo, similar to the ones that exist in our other
environment-specific config repos.


## Modules
This package contains four modules, described below. For simplicity and for ESLint support, they
are written as CommonJS modules in plain JavaScript.

### base.js
This module contains the base configuration, containing rules which will be enforced in all
TypeScript files in all Vurvey-related repositories, unless modified by a derviced config.

### test.js
This module contains overrides which will be applied to the base config for linting automated test
files with the `.test.ts` or `spec.ts` extensions. This `test` config mostly relaxes rules from the
base config instead of adding more restrictions. This is because such test code has a different
purpose than production-ready code, so we need not be as strict with it.

### index.js
This module extends `base.js` and adds the overrides from `test.js` for files with the `.test.ts`
and `.spec.ts` extensions. It is intended as a convenience to be used for environment-agnostic
projects and should not be changed to contain any rule definitions of its own. It should also not
be extended by other configs.

### meta.js
This module contains configuration used for linting this project and other ESLint config projects.
It does not extend the base configuration and instead is only concerned with rules for laying out
and organizing our linter config files. It should not be extended by other configs.


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
`preversion` script will lint the repo and a `prepublishOnly` script will automatically push the
verison number commmit and tag to the GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rules changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by ESLint's `--fix` flag.

If a breaking release of this package is made, breaking releases of all dependent
environment-specific config packages should be made as well. Doing this will enable developers of
affected repositories to upgrade to the breaking versions and address the new errors when they are
able.


## Note on Peer Dependencies
ESLint's developer guide for [shareable configs][eslint-share] recommends that such configs
declare the ESLint version they need-- as well as versions for any plugins-- as
[peer dependencies][peer-deps] rather than as direct dependencies. This expresses compatibility
limitations while still ultimately leaving control over ESLint and its plugins to the repositories
where ESlint will actually be run.

For more information about this approach, see [this Node.js blog post][peer-deps-blog] on the
subject.


[eslint]: https://eslint.org/
[eslint-ext]: https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/developer-guide/shareable-configs
[node-config]: https://github.com/Batterii/eslint-config-vurvey-node
[peer-deps]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[react-config]: https://github.com/Batterii/eslint-config-vurvey-react
[semver]: https://semver.org/
