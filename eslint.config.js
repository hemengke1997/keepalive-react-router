import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off',
    'no-async-promise-executor': 'off',
    'style/jsx-quotes': ['error', 'prefer-single'],
    'style/quote-props': ['error', 'consistent'],
    'ts/no-require-imports': 'off',
    'ts/consistent-type-definitions': 'off',
    'unused-imports/no-unused-vars': 'off',
    'react-refresh/only-export-components': 'off',
    'no-console': 'off',
    'react-hooks-extra/no-unnecessary-use-prefix': 'off',
  },
  stylistic: {
    quotes: 'single',
    indent: 2,
  },
})
