module.exports = {
  extends: [
    'google',
    './config/eslint.js',
    './config/babel.js',
  ],
  plugins: ['babel'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      extends: ['./config/@typescript-eslint.js'],
      plugins: ['@typescript-eslint/eslint-plugin'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          globalReturn: true,
          jsx: true,
        },
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
