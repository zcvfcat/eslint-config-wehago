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
    camelcase: ['warn', { properties: 'never' }],
    'operator-linebreak': 'off', // 중위 연산자
    'key-spacing': 'off', // key: value -> key : value
    'no-multi-spaces': 'warn',
    'no-trailing-spaces': 'off', // 비어있는 공간이 필요할 경우가 있음
    'no-empty-function': 'off', // 비어있는 펑션이 필요함
    'no-use-before-define': 'off', // import react 버전업시 버그 발견 
    'no-multiple-empty-lines': ['warn', { 'max': 2, 'maxEOF': 0 }], // 코드 두줄 이상 띄우면 warn
    'eol-last': 'warn', // eol - 문장의 끝 한 칸 띄우기
    'semi': 'warn', // semi 넣기
    'semi-style': ['warn', 'last'], // semi는 뒤에
  },
};
