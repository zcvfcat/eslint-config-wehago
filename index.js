module.exports = {
  extends: [
    'google',
    './config/eslint.js',
    './config/babel.js',
    './config/prettier.js',
    './config/jest.js',
  ],
  plugins: ['babel', '@typescript-eslint', 'prettier', 'jest'],
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
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        // project: './tsconfig.json',
        ecmaFeatures: {
          globalReturn: true,
          jsx: true,
        },
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:jest/recommended'],
      env: { 'jest/globals': true },
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
