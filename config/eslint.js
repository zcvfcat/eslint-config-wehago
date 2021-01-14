module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  root: true,
  globals: {
    $: true,
  },
  rules: {
    eqeqeq: 'warn', // 비교시 삼항연산자만 사용 여부
    'no-extra-semi': 'warn', // 불필요한 세미콜론 허용여부
    'arrow-parens': 'off', // a => {}, (a)=>{} 변경
    indent: ['off', 2], // indent: ['error', 2], // 인덴트 2
    'no-unused-vars': ['warn'], // 안 쓰는 변수 의 경우 warn
    // 'object-curly-spacing': ['warn', 'always', { objectsInObjects: false }], // {a:1} -> { a:1 }
    'object-curly-spacing': 'off', // {a:1} -> { a:1 }
    'space-before-function-paren': 'off', // 함수 사이 공백
    'quote-props': 'off', // {'a': 1} or { a: 1 }
    'eol-last': 'off', // semicolon과 호환씨 문제
    'require-jsdoc': 'off', // jsx와 호환안됨
    'valid-jsdoc': 'off', // jsdoc 문서 작성시 오류 죽이기
    // 'max-len': [
    //   'error',
    //   {
    //     code: 350,
    //     tabWidth: 2,
    //     ignoreUrls: true,
    //   },
    // ],
    'max-len': 'off',
    'comma-spacing': ['warn', { before: false, after: true }], // 콤마 스페이스
    'new-cap': 'off', // 변수명 자유롭게
    'space-infix-ops': ['warn', { int32Hint: false }], // 중위 연산자
    camelcase: 'off', // 카멜케이스
    'operator-linebreak': 'off', // 중위 연산자
    semi: 'off', // 세미콜론
    'key-spacing': 'off', // key: value -> key : value
  },
};
