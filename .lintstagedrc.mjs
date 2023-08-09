const cmd = 'eslint --cache --report-unused-disable-directives';

// 数组可以顺序执行多个命令,比sh的&&跨平台性好
// 可以写glob *.{[cmt]s?(x)}, 但下面写多组可以并发执行提高效率
export default {
	'*.cjs': [cmd],
	'*.mjs': [cmd],
	'*.js': [cmd],
	// '*.jsx': [cmd],
	// '*.ts': [cmd],
	// '*.tsx': [cmd],
	// '*.vue': [cmd]
};