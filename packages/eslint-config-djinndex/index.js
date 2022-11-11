module.exports = {
  extends: ['turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // '@next/next/no-html-link-for-pages': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/prefer-default-export': 'off',
    // 'import/no-default-export': 'error',
    'react/jsx-key': 'off',
  },
};
