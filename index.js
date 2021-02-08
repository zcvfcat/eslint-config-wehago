module.exports = {
  extends: [
    'google',
    // 'plugin:@typescript-eslint/recommended',
    // './config/@typescript-eslint.js',
    './config/eslint.js',
    './config/babel.js',
    // './config/prettier.js',
  ],
  plugins: ['babel', 'prettier'],
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
        project: 'tsconfig.json',
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
