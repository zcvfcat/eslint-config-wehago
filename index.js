module.exports = {
  extends: [
    'google',
    'plugin:@typescript-eslint/recommended',
    './config/@typescript-eslint.js',
    './config/eslint.js',
    './config/babel.js',
    './config/prettier.js',
  ],
  plugins: ['babel', '@typescript-eslint', 'prettier'],
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
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
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
