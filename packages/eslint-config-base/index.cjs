'use strict';
const core = require('@nineteen84/eslint-config-rules');
const style = require('@nineteen84/eslint-config-rules/style.cjs');

module.exports = {
	env: {
		es2022: true
	},
	parser: 'espree',
	parserOptions: {
		// jsx: true,
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	plugins: [
		'regexp',
		'security-node'
	],
	extends: [
		'eslint:recommended',
		'plugin:regexp/recommended',
		'plugin:security-node/recommended',
		'plugin:security/recommended'
	],
	rules: {
		...core,
		...style
	}
};