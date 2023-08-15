// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
'use strict';

module.exports = {
	extends: ['@commitlint/config-angular'],
	rules: {
		'type-enum': [
			2,
			'always', [
				'build',
				'ci',
				'chore',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			]
		]
	},
	prompt: {
		scopes: ['deps', 'docs', 'workflow', 'ci']
	}
};