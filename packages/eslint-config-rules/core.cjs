module.exports = {
	'no-constant-binary-expression': 'warn',
	'no-duplicate-imports': 'warn',
	'no-new-native-nonconstructor': 'error',
	'no-unmodified-loop-condition': 'warn',
	'require-atomic-updates': 'error',
	/* code style */
	camelcase: ['error', {
		properties: 'always',
		ignoreDestructuring: true
	}],
	'consistent-return': 'warn',
	'default-case': 'error',
	'default-case-last': 'error',
	eqeqeq: ['error', 'always', { null: 'ignore' }],
	'func-name-matching': 'error',
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],
	'guard-for-in': 'warn',
	'logical-assignment-operators': ['warn', 'always'],
	'new-cap': ['error', {
		capIsNew: false,
		properties: false
	}],
	'no-extra-boolean-cast': 'off',
	'no-floating-decimal': 'error',
	'no-lonely-if': 'error',
	'no-new-object': 'error',
	'no-param-reassign': ['error', {
		props: true
	}],
	'no-undefined': 'error',
	'no-unneeded-ternary': 'error',
	'no-useless-concat': 'error',
	'object-shorthand': ['error', 'always', {
		avoidQuotes: true
	}],
	'prefer-exponentiation-operator': 'error',
	'prefer-object-has-own': 'error',
	'prefer-template': 'error',
	'radix': 'error',
};