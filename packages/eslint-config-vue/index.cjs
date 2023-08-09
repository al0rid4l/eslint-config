'use strict';

module.exports = {
	extends: [
		'plugin:vue/vue3-recommended',
		'@nineteen84/browser'
	],
	overrides: [{
		files: ['*.vue'],
		parser: 'vue-eslint-parser',
		parserOptions: {
			parser: '@typescript-eslint/parser'
		}
	}]
};