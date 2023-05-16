module.exports = {
	env: {
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 8,
		project: "./tsconfig.json",
	},
	plugins: [
		"@typescript-eslint",
	],
	rules: {
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/explicit-function-return-type": ["error", {allowExpressions: true}],
		"@typescript-eslint/explicit-member-accessibility": ["error", {accessibility: "no-public"}],
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/indent": ["error", "tab", {SwitchCase: 1}],
		"@typescript-eslint/member-ordering": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extra-parens": ["error", "all", {
			enforceForArrowConditionals: false,
			nestedBinaryExpressions: false,
		}],
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-use-before-define": ["error", {functions: false}],
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "error",
		"accessor-pairs": "error",
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {arraysInArrays: true}],
		"array-callback-return": "error",
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": ["error", "as-needed"],
		"block-spacing": "error",
		"brace-style": "error",
		"camelcase": "off",
		"class-methods-use-this": "warn",
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": ["error"],
		"comma-style": "error",
		"computed-property-spacing": "error",
		"consistent-this": ["error", "self"],
		"curly": ["error", "multi-line", "consistent"],
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": ["error", "always", {null: "ignore"}],
		"func-call-spacing": "off", // Replaced in typescript-eslint
		"func-names": "off",
		"function-paren-newline": ["error", "multiline-arguments"],
		"generator-star-spacing": "error",
		"implicit-arrow-linebreak": "off",
		"indent": "off", // Replaced in typescript-eslint
		"key-spacing": "error",
		"keyword-spacing": "error",
		"linebreak-style": ["error", "unix"],
		"lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
		"max-classes-per-file": "warn",
		"max-statements-per-line": "error",
		"multiline-ternary": ["error", "always-multiline"],
		"new-cap": "warn",
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "warn",
		"no-bitwise": "warn",
		"no-caller": "error",
		"no-confusing-arrow": ["error", {allowParens: true}],
		"no-console": "error",
		"no-div-regex": "error",
		"no-dupe-class-members": "off", // Dupe class members are needed for overloads in TS.
		"no-duplicate-imports": ["error", {includeExports: true}],
		"no-else-return": ["error", {allowElseIf: false}],
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-parens": "off", // Replaced in typescript-eslint
		"no-floating-decimal": "error",
		"no-implicit-coercion": ["error", {boolean: false}],
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-misleading-character-class": "error",
		"no-mixed-operators": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-path-concat": "error",
		"no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
		"no-proto": "error",
		"no-return-assign": ["error", "always"],
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off", // Replaced in typescript-eslint
		"no-template-curly-in-string": "warn",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": ["error", {allowAfterSuper: true, allowAfterThis: true}],
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", {defaultAssignment: false}],
		"no-unused-expressions": "error",
		"no-use-before-define": "off", // Replaced in typescript-eslint
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "off", // Replaced in typescript-eslint
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": "error",
		"object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
		"object-shorthand": "error",
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": "off",
		"padded-blocks": ["error", "never"],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": ["error", "as-needed"],
		"quotes": "error",
		"require-atomic-updates": "off",
		"rest-spread-spacing": "error",
		"semi": "off", // Replaced in typescript-eslint
		"semi-spacing": "error",
		"semi-style": "error",
		"sort-imports": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"strict": ["error", "never"],
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": "error",
	},
};
