module.exports = {
	env: {
		commonjs: true,
		es6: true,
	},
	extends: "eslint:recommended",
	rules: {
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": "error",
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": "error",
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": ["error", {after: true, before: false}],
		"comma-style": "error",
		"curly": ["error", "multi-line", "consistent"],
		"eol-last": "error",
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"max-len": ["error", {code: 100}],
		"object-curly-newline": "error",
		"object-curly-spacing": "error",
		"object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
		"padded-blocks": ["error", "never"],
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": "error",
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"sort-keys": "error",
	},
};
