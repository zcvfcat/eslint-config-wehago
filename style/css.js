module.exports = {
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested', 'inside-block', 'blockless-after-same-name-blockless', 'blockless-after-blockless'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',

    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,
    'declaration-block-trailing-semicolon': null,
    indentation: 2,
  },
};
