module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'prettier/react',
  ],
  plugins: ['jest'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
