module.exports = {
	'array-bracket-spacing': [ 'error', 'always' ],
	'arrow-spacing': 'error',
	'block-spacing': [ 'error', 'always' ],
	'brace-style': [ 'error', '1tbs', {
		allowSingleLine: true
	} ],
	// 'comma-dangle': ['warn', 'never'],
	'comma-spacing': [ 'error', {
		before: false,
		after: true
	} ],
	'comma-style': [ 'error', 'last' ],
	'dot-location': [ 'error', 'property' ],
	'function-call-argument-newline': [ 'error', 'never', ],
	'generator-star-spacing': [ 'error', {
		before: false,
		after: true
	} ],
	indent: [ 'error', 'tab', {
		SwitchCase: 1,
		VariableDeclarator: 1
	} ],
	// 'jsx-quotes': ['error', 'prefer-single'],
	'key-spacing': 'error',
	'keyword-spacing': [ 'error', {
		before: true,
		after: false
	} ],
	'linebreak-style': [ 'error', 'unix' ],
	'max-len': [ 'error', {
		code: 120
	} ],
	'newline-per-chained-call': 'error',
	'no-multi-spaces': 'error',
	'no-whitespace-before-property': 'error',
	'object-curly-newline': [ 'error', {
		multiline: true,
		consistent: true
	} ],
	'object-curly-spacing': [ 'error', 'always' ],
	'operator-linebreak': [ 'error', 'before' ],
	quotes: [ 'error', 'single', {
		avoidEscape: true
	} ],
	semi: [ 'error', 'always' ],
	'semi-spacing': [ 'error', {
		before: false,
		after: true
	} ],
	'space-before-blocks': [ 'error', 'always' ],
	'space-before-function-paren': [ 'error', {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always'
	} ],
	'space-infix-ops': [ 'error', {
		int32Hint: true
	} ],
	'space-unary-ops': [ 'error', {
		words: true,
		nonwords: false
	} ],
	'switch-colon-spacing': 'error',
	'unicode-bom': [ 'error', 'never' ],
	'yield-star-spacing': [ 'error', 'after' ],
	
	// ts fix
	'no-invalid-this': 'error',
	'no-loop-func': 'error',
	'no-shadow': [ 'error', {
		hoist: 'never'
	} ],
	'no-throw-literal': 'error',
	'no-unused-vars': [
		'error',
		{
			vars: 'local',
			args: 'none'
		}
	],
	'no-use-before-define': [ 'error', {
		functions: false,
		classes: false,
		variables: true,
		allowNamedExports: false
	} ],
	'no-useless-constructor': 'error',
	'no-implied-eval': 'error',
	'require-await': 'error'
};