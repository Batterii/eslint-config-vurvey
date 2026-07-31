# @batterii/eslint-config-vurvey

Contains base [Oxlint][oxlint] configurations for all Vurvey TypeScript projects. These
configurations are extended by environment-specific configurations in the
following packages:

- @batterii/eslint-config-vurvey (this package) for Node.js projects.
- [@batterii/eslint-config-vurvey-react][react-config] for React projects.

Any rules which should be enforced in both of our application environments-- as well as in
environment-agnostic projects-- should be configured in this package.

## Usage

1. Create a .oxlintrc.json
2. Extend the .oxlintrc.json from your repo

```json
{
  "extends": ["node_modules/@batterii/eslint-config-vurvey/oxlint/.oxlintrc.json"],
  "rules": {
    "additional": "rules"
  }
}
```

## Scripts

```json
{
  "scripts": {
    "lint": "oxlint .",
    "lintf": "oxlint . --fix"
  }
}
```

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

Note that Lint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rule changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by Lint's `--fix` flag.

If a breaking release of this package is made, breaking releases of all dependent
environment-specific config packages should be made as well. Doing this will enable developers of
affected repositories to upgrade to the breaking versions and address the new errors when they are
able.

## Note on Peer Dependencies

We use peer dependencies rather than direct dependencies. This expresses compatibility
limitations while still ultimately leaving control over Oxlint and its plugins to the repositories
where Oxlint will actually be run.

For more information about this approach, see [this Node.js blog post][peer-deps-blog] on the
subject.

[oxlint]: https://oxc.rs/
[peer-deps]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[react-config]: https://github.com/Batterii/eslint-config-vurvey-react
[semver]: https://semver.org/
