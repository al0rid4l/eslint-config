'use strict';
const globals = require('globals');

module.exports = {
	globals: {
		DEBUG: 'readonly',
		...globals.browser,
		...globals.worker,
		...globals.serviceworker
	},
	extends: [ '@nineteen84/ts' ],
	parserOptions: {
		jsx: true
	},
	rules: {
		'jsx-quotes': [ 'error', 'prefer-single' ]
	}
};