module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            modules: true,
        },
    },
    plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'etc', 'no-only-tests', 'boundaries'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'react-app',
        'react-app/jest',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules', 'dist'],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
        'boundaries/elements': [
            {
                type: 'root',
                pattern: 'src/*.{ts,tsx}',
                mode: 'file',
            },
            {
                type: 'components',
                pattern: 'src/components/**/*',
                mode: 'file',
            },
            {
                type: 'hooks',
                pattern: 'src/hooks',
                mode: 'folder',
            },
            {
                type: 'utils',
                pattern: 'src/utils/*.ts',
                mode: 'file',
            },
            {
                type: 'routes',
                pattern: 'src/{routes,paths}',
                mode: 'folder',
            },
            {
                type: 'pages',
                pattern: ['src/*/pages/*.tsx'],
                mode: 'file',
            },
        ],
        'boundaries/ignore': ['**/*.spec.{ts,tsx}'],
    },
    rules: {
        'boundaries/no-unknown-files': 'error',
        'boundaries/element-types': [
            'error',
            {
                default: 'allow',
                message: '${file.type} is not allowed to import ${dependency.type}',
                rules: [
                    {
                        from: ['root'],
                        allow: ['pages'],
                        disallow: ['components'],
                    },
                    {
                        from: ['components'],
                        disallow: ['pages'],
                        allow: ['utils'],
                    },
                ],
            },
        ],
        'boundaries/external': [
            'error',
            {
                default: 'allow',
                rules: [
                    {
                        from: ['utils'],
                        disallow: ['react'],
                    },
                    {
                        from: ['components'],
                        allow: ['react'],
                        disallow: [['react-router-dom', { specifiers: ['useHistory', 'Switch', 'Route'] }]],
                    },
                ],
            },
        ],

        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'max-params': ['error', 5],
        'no-console': 'warn',
        'no-warning-comments': ['error', { terms: ['fixme'], location: 'anywhere' }],
        'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
        'space-before-blocks': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: ['break', 'continue', 'return'] },
            { blankLine: 'always', prev: ['const', 'let'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
            // example of directive - "use strict"
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'any', prev: 'directive', next: 'directive' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
        ],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: 'react(-dom)?',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/no-direct-mutation-state': 'error',
        'react/no-deprecated': 'error',
        'react/no-unsafe': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        quotes: ['error', 'single', { avoidEscape: true }],
        'quote-props': ['warn', 'as-needed'],
        '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',

                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',

                    'constructor',

                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ],
            },
        ],
        // https://github.com/cartant/eslint-plugin-etc
        'etc/prefer-interface': ['warn', { allowLocal: true }],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
                'ts-expect-error': false,
            },
        ],
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
    },
    overrides: [
        {
            files: ['*.spec.{js,jsx,ts,tsx}'],
            rules: {
                'no-only-tests/no-only-tests': 'error',
            },
        },
        {
            files: ['*.{js,jsx}'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
