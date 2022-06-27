// eslint-disable-next-line no-undef
module.exports = {
    parserOptions: {
        "parser": "babel-eslint",
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    env: {
        "node": true,
        "commonjs": true
    },
    rules: {
        "strict": 0,
        'vue/no-v-html': ['off'],
        'vue/no-template-shadow': ['off'],
        'vue/html-indent': ['error', 4],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/component-definition-name-casing': ['error', 'kebab-case'],
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/html-self-closing': [
            'error', {
                html: {
                    normal: 'never',
                    void: 'always',
                },
            },
        ],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['warn', 'always'],
        'keyword-spacing': 'warn',
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
            },
        },
    ],
};
