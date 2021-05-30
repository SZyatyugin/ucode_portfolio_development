module.exports = {
    plugins: ['@babel', 'prettier'],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false,
        },
        babelOptions: {
            configFile: './babel.config.json',
        },
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'double'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'off',
        'babel/new-cap': 1,
        'babel/camelcase': 1,
        'babel/no-invalid-this': 1,
        'babel/object-curly-spacing': 1,
        'babel/quotes': 1,
        'babel/semi': 1,
        'babel/no-unused-expressions': 1,
        'babel/valid-typeof': 1,
    },
}
