'use strict';
const globals = require('globals');

module.exports = {
	globals: {
		DEBUG: 'readonly',
		...globals.node,
		...globals.nodeBuiltin,
		...globals.commonjs
	},
	extends: [ '@nineteen84/ts' ]
};