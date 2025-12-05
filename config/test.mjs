import globals from "globals";

export default [
	{
		files: ["**/*.test.ts", "**/*.spec.ts", "**/test/**/*.ts"],
		languageOptions: {
			globals: {
				...globals.mocha,
			},
		},
		rules: {
			// Allow test files to play more loosely with types.
			"@typescript-eslint/explicit-function-return-type": "off",

			// Allow non-null assertions in tests.
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
			// Unit tests may need unbound method references for sinon.
			"@typescript-eslint/unbound-method": "off",

			// Test files may need to make stub classes, which don't need their own files.
			"max-classes-per-file": "off",

			// Allow test declarations to exceed max line length.
			"max-len": [
				"error",
				{
					code: 100,
					ignorePattern:
						"^\\s*(?:x?it|specify|describe|context)(?:\\.skip)?\\(",
				},
			],

			// Prevent `only` from being left on a test or test group.
			"no-restricted-properties": [
				"error",
				{ object: "it", property: "only" },
				{ object: "specify", property: "only" },
				{ object: "describe", property: "only" },
				{ object: "context", property: "only" },
			],

			// Unit tests may need to access 'private' members.
			"no-underscore-dangle": "off",

			// Needed for chai, which implements some assertions as getters.
			"no-unused-expressions": "off",

			// Non-arrow callbacks are recommended by mocha docs.
			"prefer-arrow-callback": "off",
		},
	},
];
