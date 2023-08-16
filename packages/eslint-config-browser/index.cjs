'use strict';
const globals = require('globals');
const style = require('@nineteen84/eslint-config-rules');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json';

const offRules = Object.keys(style).reduce((o, k) => ({ ...o, [k]: 'off' }), {});

module.exports = {
	globals: {
		DEBUG: 'readonly',
		...globals.browser,
		...globals.worker,
		...globals.serviceworker
	},
	extends: ['@nineteen84/ts'],
	overrides: [{
		files: ['*.tsx'],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			tsconfigRootDir: process.cwd(),
			project: [tsconfig],
			ecmaFeatures: {
				jsx: true
			}
		},
		rules: offRules
	}, {
		files: ['*.js', '*.cjs', '*.mjs'],
		extends: ['plugin:@typescript-eslint/disable-type-checked'],
	}],
	rules: {
		'jsx-quotes': ['error', 'prefer-single']
	}
};