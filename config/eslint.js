module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    $: true,
  },
  rules: {
    'eqeqeq': 'error', // 비교시 삼항연산자만 사용 여부
    'no-extra-semi': 'error', // 불필요한 세미콜론 허용여부
    'indent': ['error', 2], // 인덴트 2
    'no-unused-vars': ['warn'], // 안 쓰는 변수 의 경우 warn
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }], // {a:1} -> { a:1 }
    'quote-props': 'off', // {'a': 1} or { a: 1 }
    'eol-last': 'off', // semicolon과 호환씨 문제
    'require-jsdoc': 'off', // jsx와 호환안됨
    'valid-jsdoc': 'off', // jsdoc 문서 작성시 오류 죽이기
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }], // 콤마 스페이스
  },
};
