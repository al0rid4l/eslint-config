'use strict';

module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'@nineteen84/browser'
	],
	settings: {
		react: {
			version: 'detect'
		}
	}
};