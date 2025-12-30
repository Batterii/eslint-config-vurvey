# @batterii/eslint-config-vurvey

Contains base [ESLint][eslint] configurations for all Vurvey TypeScript projects. These
configurations are [extended][eslint-ext] by environment-specific configurations in the
following packages:

- [@batteriii/eslint-config-vurvey-node][node-config] for Node.js projects.
- [@batteriii/eslint-config-vurvey-react][react-config] for React projects.

Any rules which should be enforced in both of our application environments-- as well as in
environment-agnostic projects-- should be configured in this package.

## Usage

Most of our projects should use one of the environment-specific configuration packages described
above, instead of using this package directly. See those environment-specific configurations for more
information.

### Environment-Agnostic Projects

Some Vurvey repositories-- notably those containing utilities packaged for re-use both within
Node.js and within React apps-- don't need any environment-specific configuration and should just
use this package directly for their linter configuration. To do so, first install this package and
its peer dependencies as dev dependencies:

```bash
npm install --save-dev @batterii/eslint-config-vurvey @eslint/js eslint typescript-eslint
```

Then, create a file called `eslint.config.mjs` at the root of the repository with the following contents:

```js
import vurveyConfig from "@batterii/eslint-config-vurvey";

export default vurveyConfig;
```

Finally, create scripts in your `package.json` for running the linter:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lintf": "eslint . --fix"
	}
}
```

Running these scripts will lint all files in the repo according to the configuration.

If needed on a per-project basis, you can make changes to the configuration within the project's
`eslint.config.mjs` file. As a general rule, however, shareable configuration should be preferred to
help ensure code style consistency between different repositories.

### Creating New Environment-Specific Configs

In the event that we need to create additional environment-specific configurations, we can do so
by creating a new repo for it and installing this package as a dependency. Then, create a file
called `eslint.config.mjs` for linting the config files themselves:

```js
import vurveyConfig from "@batterii/eslint-config-vurvey";
import { defineConfig } from "eslint/config";

export default vurveyConfig;
```

You'll want to create scripts in your `package.json` for running them:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lintf": "eslint . --fix"
	}
}
```

Next, create configuration files in a `config/` directory. Create a `config/index.mjs` file:

```js
import vurveyConfig from "@batterii/eslint-config-vurvey";
import globals from "globals";

export default [
	{
		files: [/*file names/extensions to lint with these rules*/],
		extends: [vurveyConfig]
		rules: {
			// Your environment specific rule overrides
		},
	},
];
```

If needed, create other configs and import them into `config/index.mjs`. However, each individual config should extend the vurveyConfig

If you add any rules which rely on ESLint plugins, these plugins should be listed as peer
dependencies instead of direct dependencies. See the
[Note on Peer Dependencies](#note-on-peer-dependencies) below for more information.

Once you're done setting up the configs yourself, you should add a `README.md` file detailing the
purpose, usage, and organization of your config repo, similar to the ones that exist in our other
environment-specific config repos.

## Modules

This package contains configuration modules in the `config/` directory, written as ES modules (`.mjs` files)
for use with ESLint's flat config system.

### config/base.mjs

This module contains the base configuration, containing rules which will be enforced in all
TypeScript files in all Vurvey-related repositories, unless modified by a derived config. It extends
the recommended configs from `@eslint/js` and `typescript-eslint`.

### config/test.mjs

This module contains overrides which will be applied for linting automated test files with the
`.test.ts` or `.spec.ts` extensions (and files in `test/` directories). This `test` config mostly
relaxes rules from the base config instead of adding more restrictions. This is because such test code
has a different purpose than production-ready code, so we need not be as strict with it.

### config/index.mjs

This module combines `base.mjs` and `test.mjs` configurations. It is intended as a convenience to be
used for environment-agnostic projects and should not be changed to contain any rule definitions of its own.

## Oxlint (Optional)

This package includes optional support for [Oxlint][oxlint], a Rust-based linter that is dramatically
faster than ESLint. While still in active development, Oxlint can be useful for quick linting during
development, though ESLint should still be used for full coverage and CI/CD pipelines.

### Installing Oxlint

Oxlint and its TypeScript plugin are listed as optional dependencies:

```bash
npm install --save-dev oxlint oxlint-tsgolint
```

### Using Oxlint

To use the provided Oxlint configuration, create a `.oxlintrc.json` file in your project root:

```json
{
	"extends": [
		"node_modules/@batterii/eslint-config-vurvey/oxlint/.oxlintrc.json"
	]
}
```

You can then add oxlint scripts to your `package.json`:

```json
{
	"scripts": {
		"oxlint": "oxlint"
	}
}
```

For more details on Oxlint integration and current limitations, see the [OXLINT.md documentation](documentation/OXLINT.md).

**Note:** Oxlint is completely optional and not required to use this package. Standard ESLint usage
remains the primary and recommended linting approach.

## Proposing Changes

Linter rules like these are a team effort-- especially ones that are re-used between two different
teams working in two very different environments. All developers subject to these rules should feel
free to propose changes so that we can arrive at a set of common rules that work for everyone. To do
this, simply open a pull request and give other affected devs the opportunity to discuss in
comments.

For organization and tracking purposes, pull requests to this repo should focus on changing a
small number of rules at a time. This will help keep discussion focused on individual conventions
and concerns.

## Publishing

`npm version` and `npm publish` can be used to publish this package as normal. These should be run
in the latest `main` branch by someone with write access to the package on NPM. When doing so, a
`preversion` script will lint the repo and a `prepublishOnly` script will automatically push the
version number commit and tag to the GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rule changes has the potential to produce new linter errors (not warnings) which cannot be
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
where ESLint will actually be run.

For more information about this approach, see [this Node.js blog post][peer-deps-blog] on the
subject.

### ESLint 9 and Flat Config

This package uses ESLint 9 with the new [flat config format][flat-config], which is the modern
standard for ESLint configuration. The flat config system provides better composability and more
predictable configuration merging compared to the legacy `.eslintrc` format.

Projects using this configuration should use ESLint 9 or later and adopt the flat config format
(`eslint.config.mjs` or `eslint.config.js`).

[eslint]: https://eslint.org/
[eslint-ext]: https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/latest/extend/shareable-configs
[flat-config]: https://eslint.org/docs/latest/use/configure/configuration-files
[node-config]: https://github.com/Batterii/eslint-config-vurvey-node
[oxlint]: https://oxc.rs/docs/guide/usage/linter.html
[peer-deps]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[react-config]: https://github.com/Batterii/eslint-config-vurvey-react
[semver]: https://semver.org/
