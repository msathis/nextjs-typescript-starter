const BabelParser = require('babel-eslint/lib')
const typescriptEstree = require('@typescript-eslint/parser')

exports.parseForESLint = function(code, options) {
    if (typeof options.filePath === 'string') {
        if (
            options.filePath.endsWith('.ts') ||
            options.filePath.endsWith('.tsx')
        ) {
            options.parserOptions = {
                ...options.parserOptions,
                project: './tsconfig.json',
            }
            return typescriptEstree.parseForESLint(code, options)
        }
    }

    return BabelParser.parseForESLint(code, options)
}

exports.parse = function(code, options) {
    if (typeof options.filePath === 'string') {
        if (
            options.filePath.endsWith('.ts') ||
            options.filePath.endsWith('.tsx')
        ) {
            options.parserOptions = {
                ...options.parserOptions,
                project: './tsconfig.json',
            }
            return typescriptEstree.parse(code, options)
        }
    }

    return BabelParser.parse(code, options)
}
