module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: [
        '@zattoo',
        '@zattoo/eslint-config/rules/jest',
        '@zattoo/eslint-config/rules/jsdoc',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
    },
};
