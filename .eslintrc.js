module.exports = {
    parser: './eslintCustomParser.js',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
    },
    extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-curly-spacing': 0,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-space-before-closing': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'import/no-unresolved': 0,
        'react/jsx-handler-names': 0,
        'react-native/no-unused-styles': 0,
        'react/jsx-wrap-multilines': [2, { assignment: false }],
        'class-methods-use-this': [0],
        'sort-imports': 0,
        'newline-per-chained-call': 0,
        'max-len': [1, 120],
        'no-console': 1,
        'react/jsx-sort-props': 0,
        'react/sort-prop-types': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-unused-vars': 0,
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
            },
        },
    ],
    env: {
        es6: true,
    },
    settings: {
        react: {
            version: '16.6.3',
        },
        'import/extensions': ['.js'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.android.js', '.ios.js', '.json', '.ts', '.tsx'],
            },
        },
    },
    globals: {
        __DEV__: true,
    },
}