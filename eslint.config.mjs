import js from "@eslint/js";

export default [
	{
		...js.configs.recommended,
		languageOptions: {
			ecmaVersion: 2020,
		},
		ignores: ["eslint.config.mjs", "legacy-config/*"],
	},
];
