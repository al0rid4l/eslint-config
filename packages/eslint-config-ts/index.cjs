'use strict';

const process = require('node:process');
const style = require('@nineteen84/eslint-config-rules');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json';

const offRules = Object.keys(style).reduce((o, k) => ({ ...o, [k]: 'off' }), {});

module.exports = {
	overrides: [{
		files: ['*.ts'],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			tsconfigRootDir: process.cwd(),
			project: [tsconfig]
		},
		rules: offRules
	}, {
		files: ['*.js', '*.cjs', '*.mjs'],
		extends: ['plugin:@typescript-eslint/disable-type-checked'],
	}],
	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'@nineteen84/base',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked'
	],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': ['error', {
			default: 'generic'
		}],
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter'
		}],
		'@typescript-eslint/consistent-type-exports': ['error', {
			fixMixedExportsWithInlineTypeSpecifier: true
		}],
		'@typescript-eslint/consistent-type-imports': ['error', {
			prefer: 'type-imports',
			fixStyle: 'separate-type-imports'
		}],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-member-accessibility': ['error', {
			accessibility: 'explicit' 
		}],
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'default',
			format: ['camelCase'],
			leadingUnderscore: 'allow',
			trailingUnderscore: 'allow',
		}, {
			selector: 'variable',
			format: ['camelCase', 'UPPER_CASE'],
			leadingUnderscore: 'allow',
			trailingUnderscore: 'allow'
		}, {
			selector: 'typeLike',
			format: ['PascalCase'],
		}, {
			selector: 'memberLike',
			modifiers: ['private'],
			format: ['camelCase'],
			leadingUnderscore: 'require'
		}, {
			selector: [
				'classProperty',
				'objectLiteralProperty',
				'typeProperty',
				'classMethod',
				'objectLiteralMethod',
				'typeMethod',
				'accessor',
				'enumMember'
			],
			format: null,
			modifiers: ['requiresQuotes']
		}, {
			selector: 'variable',
			modifiers: ['destructured'],
			format: null
		}],
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-inferrable-types': ['error', {
			ignoreParameters: true,
			ignoreProperties: true
		}],
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {
			allowComparingNullableBooleansToTrue: true,
			allowComparingNullableBooleansToFalse: true
		}],
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/parameter-properties': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-readonly-parameter-types': 'warn',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'warn',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/typedef': ['error', {
			arrowParameter: true,
			parameter: true,
			propertyDeclaration: true
		}],
		'@typescript-eslint/unified-signatures': 'error',

		
		// code style
		'@typescript-eslint/block-spacing': ['error', 'always'],
		'@typescript-eslint/brace-style': ['error', '1tbs', {
			allowSingleLine: true
		}],
		'@typescript-eslint/comma-spacing': ['error', {
			before: false,
			after: true
		}],
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1
		}],
		'@typescript-eslint/key-spacing': 'error',
		'@typescript-eslint/keyword-spacing': ['error', {
			before: true,
			after: false
		}],
		'@typescript-eslint/quotes': ['error', 'single', {
			avoidEscape: true
		}],
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/space-before-blocks': ['error', 'always'],
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}],
		'@typescript-eslint/space-infix-ops': ['error', {
			int32Hint: true
		}],
		


		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-shadow': ['error', {
			hoist: 'never'
		}],
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'local',
				args: 'none'
			}
		],
		'@typescript-eslint/no-use-before-define': ['error', {
			functions: false,
			classes: false,
			variables: true,
			allowNamedExports: false
		}],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/require-await': 'error'
	}
};