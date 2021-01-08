module.exports = {
  extends: [
    'react-app',
    './index.js',
    './config/jsx-a11y.js',
    './config/react-hooks.js',
    './config/react.js',
  ],
  plugins: ['babel', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    /**
     * eslint: Possible Errors
     */
    'for-direction': 'error', // 올바를 for 계산구문 사용여부
    'getter-return': 'error', // get 구문 내에 return 누락 방지
    'no-async-promise-executor': 'error', // 비동기 함수 promise 사용 강제
    'no-await-in-loop': 'error', // 루프 내에서 await 사용여부
    'no-compare-neg-zero': 'error', // 음수 0 비교여부
    'no-cond-assign': 'error', // 조건문에서 할당 연산자 사용 여부
    'no-console': 'warn', // console 사용 여부
    'no-constant-condition': 'error', // 조건문에서 상수 사용여부
    'no-control-regex': 'error', // 정규식에서 제어문자 허용 여부
    'no-debugger': 'warn', // debugger 사용 여부
    'no-dupe-args': 'error', // 함수 인수 중복 사용여부
    'no-dupe-else-if': 'error', // else if 구문 내 중복 사용여부
    'no-dupe-keys': 'error', // 중복키 사용여부
    'no-duplicate-case': 'error', // 중복 라벨(switch case) 사용여부
    'no-empty': 'error', // 빈 블록 사용여부
    // 'no-empty-character-class': 'error', // 정규식 내에 빈 문자열 허용여부
    'no-ex-assign': 'error', // catch 파라미터 재할당 여부
    'no-extra-boolean-cast': 'error', // 불필요한 bool 사용여부
    // 'no-extra-parens': 'error', // 불필요한 괄호 허용여부
    'no-extra-semi': 'error', // 불필요한 세미콜론 허용여부
    'no-func-assign': 'error', // 함수 재할당 선언 금지여부
    'no-import-assign': 'error', // import 항목 재할당 금지여부
    'no-inner-declarations': 'error', // 중첨된 블록 내 변수 또는 함수 선언여부
    'no-invalid-regexp': 'error', // RegExp 생성자에 유효하지 않은 정규식 문자열 허용 여부
    'no-irregular-whitespace': 'error', // 불규칙한 공백 허용여부
    // 'no-loss-of-precision': 'error', // 정밀도 잃은 숫자 리터널 금지
    // 'no-misleading-character-class': 'error', // 문자 클래스 구문에서 여러 코드 포인트로 만들어진 문자를 허용 여부
    'no-obj-calls': 'error', // 전역 객체 속성을 함수로 호출 사용 금지
    'no-promise-executor-return': 'error', // promise 함수 내에 return 사용 금지
    'no-prototype-builtins': 'error', // Object.prototypes 직접 사용금지
    'no-regex-spaces': 'error', // 정규식 내 스페이스 허용 여부
    'no-setter-return': 'error', // set 구문 내 return 사용 금지
    'no-sparse-arrays': 'error', // 희소 배열 사용여부
    'no-template-curly-in-string': 'error', // 일반 문자열에서 템플릿 리터럴 자리 표시 자 구문 허용 안 함
    'no-unexpected-multiline': 'error', // 혼동되는 여러 줄 식 (예기치 않은 여러 줄 없음)을 허용 여부
    'no-unreachable': 'error', // 하나의 반복만 허영하는 루프 사용여부
    'no-unreachable-loop': 'error', // 하나의 반복 만 허용하는 본문이있는 루프 허용 안 함
    'no-unsafe-finally': 'error', // finally 구문 내 return 사용 금지
    // 'no-unsafe-negation': 'error', // 관계 연산자의 왼쪽 피연산자를 부정하는 것을 허용 여부
    // 'no-unsafe-optional-chaining': 'error', // undefined값이 허용되지 않는 컨텍스트에서 선택적 체인 사용을 허용 금지
    // 'no-useless-backreference': 'error', // 정규식에서 쓸모없는 역 참조 금지
    // 'require-atomic-updates': 'error', // await OR yield 내에 경합 상태로 이어질 수있는 할당을 허용
    'use-isnan': 'error', // NaN 함수로 확인만 사용여부
    'valid-typeof': 'error', // 유효한 표현식 비교 사용여부

    /**
     * eslint : est Practices
     */
    // 'accessor-pairs': 'error', // object, class 내 getter/setter 로 접근여부
    'array-callback-return': 'error', // 배열메서드 내의 return 누락금지
    // 'block-scoped-var': 'error', // var 블록범위 취급 여부
    // 'class-methods-use-this': 'error', // 클래스 메서드 사용 강제 여부
    'complexity': 'error', // 순환 복잡성 제한 사용여부
    'consistent-return': 'error', // retrun 값이 일관되게 반환되는 여부
    'curly': 'error', // 중괄호 규칙
    'default-case': 'error', // switch문 default 케이스 필수 사용 여부
    'default-case-last': 'error', // switch문 defualt 맨 아래 지정
    'default-param-last': 'error', // 파라미터 기본변수 앞쪽에 배치
    'dot-location': ['error', 'property'], // 개행 시 점 위치는 앞에 위치
    'dot-notation': 'error', // 점 표기법
    'eqeqeq': 'error', // 비교시 삼항연산자만 사용 여부
    'grouped-accessor-pairs': 'error', // get, set 구문 정렬
    // 'guard-for-in': 'error', // for in루프에서 결과를 필터링하지 않고 루프 를 사용하여 발생할 수있는 예기치 않은 동작을 방
    'max-classes-per-file': 'error', // 한파일 내에 하나 이상의 클래스 선언 불가
    'no-alert': 'warn', // alert, confirm, prompt 사용여부
    'no-caller': 'error', // caller/callee 사용금지
    'no-case-declarations': 'error', // switch문 내에서 선언 금지
    'no-constructor-return': 'error', // 생성자 내 return 사용 금지
    'no-div-regex': 'error', // 나눗셈처럶 보이는 정규식 사용 금지
    'no-else-return': 'error', // else 전 반환 금지여부
    'no-empty-function': 'error', // 빈 함수 허용여부
    'no-empty-pattern': 'error', // 빈 구조화패턴 허용여부
    // 'no-eq-null': 'error', // null 비교 허용 안함
    'no-eval': 'error', // eval 금지
    'no-extend-native': 'error', // 기본 개체 확장 허용 안 함
    'no-extra-bind': 'error', // 불필요한 bind 함수 사용 금지
    'no-extra-label': 'error', // 불필요한 라벨 허용여부
    'no-fallthrough': 'error', // case break 필수 여부
    'no-floating-decimal': 'error', // 부동소수점 금지
    'no-global-assign': 'error', // 기본 개체 할당 금지
    'no-implicit-coercion': 'error', // 더 짧은 유동표기법 금지
    'no-implicit-globals': 'error', // 전역 범위 변수 선언 금지
    'no-implied-eval': 'error', // 함축된 eval 사용 금지
    'no-invalid-this': 'error', // 유효하지 않은 this 사용 금지
    'no-iterator': 'error', // iterator 사용 금지
    'no-labels': 'error', // 라벨 사용 금지
    'no-lone-blocks': 'error', // 불필요한 블록 사용 금지
    'no-loop-func': 'error', // 반복문 내 함수 선언 금지
    // 'no-magic-numbers': 'error', // 명시적인 의미없이 코드에서 여러 번 나타나는 숫자 사용금지
    'no-multi-spaces': 'error', // 2개 이상의 space 금지
    'no-multi-str': 'error', // 여러줄 문자열 금지
    'no-new': 'error', // 함수생성자 금지여부
    'no-new-func': 'error', // new 함수 금지
    'no-new-wrappers': 'error', // new 기본 wrapper 사용 금지
    // 'no-nonoctal-decimal-escape': 'error', // 문자열 리터럴에서 시퀀스 금지
    // 'no-octal': 'error', // 8진수 리터럴 사용 금지
    // 'no-octal-escape': 'error', // 문자열 리터럴에서 8 진수 이스케이프 시퀀스 사용 금지
    'no-param-reassign': 'error', // 함수 파라미터 재 할당 금지여부
    'no-proto': 'error', // __proto 사용 금지
    'no-redeclare': 'error', // 변수 재선언 금지
    // 'no-restricted-properties': 'error', // 특정 개체 속성 허용 안함
    'no-return-assign': 'error', // return 에 할당 허용 안함
    'no-return-await': 'error', // return에 await 허용 안함
    // 'no-script-url': 'error', // 스크립트 url 허용 안함
    'no-self-assign': 'error', // 자체 할당 허용 안함
    'no-self-compare': 'error', // 자체 비교 허용 안함
    'no-sequences': 'error', // 쉼표 연산자 사용 안함
    'no-throw-literal': 'error', // throw 항목 제한
    'no-unmodified-loop-condition': 'error', // 루프 조건은 수정이 되지 않는 것으로
    'no-unused-expressions': 'error', // 사용하지 않는 식 허용 금지
    'no-unused-labels': 'error', // 사용하지 않는 라벨 허용 금지
    'no-useless-call': 'error', // 불필요한 call, apply 사용 금지
    'no-useless-catch': 'error', // 불필요한 catch 사용 금지
    'no-useless-concat': 'error', // 불필요한 문자열 연결 금지
    'no-useless-escape': 'error', // 불필요한 escape 사용 금지
    'no-useless-return': 'error', // 중복 return 사용 금지
    'no-void': 'error', // void 연산자 사용 금지
    // 'no-warning-comments': 'error', // 경고 주석 사용 금지
    'no-with': 'error', // with 사용 금지
    // 'prefer-named-capture-group': 'error', // 정규식에서 명명 된 캡처 그룹 사용 제안
    'prefer-promise-reject-errors': 'error', // promise문 내의 reject Error 개체 사용
    'prefer-regex-literals': 'error', // RegExp 내에서 사용할 수 있는 정규식만 사용
    'radix': 'error', // parseInt 등의 함수에서 사용 진수 필수 선언
    'require-await': 'error', // async, await 같이 사용 필수
    // 'require-unicode-regexp': 'error', // RegExp 유니코드 필수 사용
    // 'vars-on-top': 'error', // 변수 상단 선언
    // 'wrap-iife': 'error', // wrap-iife
    'yoda': 'error', // 비교구문일 경우 변수가 앞쪽에 사용

    /**
     * eslint: Strict Mode
     */
    // 'strict': 'error', // 엄격지시문 사용

    /**
     * Variables
     */
    'array-bracket-newline': ['error', 'consistent'], // 배열 대괄호 줄바꿈
    'array-bracket-spacing': 'error', // 배열 공백 허용
    'array-element-newline': ['error', 'consistent'], // 배열 요소 중간 줄바꿈
    'block-spacing': 'error', // 블럭 내부 공백 허용
    'brace-style': 'error', // 중괄호 스타일 지정
    'camelcase': 'error', // 카멜케이스 사용
    // 'capitalized-comments': 'error', // 주석 첫글자의 대소문자 사용
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }], // 후행쉼표 사용
    'comma-spacing': 'error', // 쉼표 앞 뒤 공백
    'comma-style': 'error', // 줄바꿈 시 쉼표 위치
    'computed-property-spacing': 'error', // 속성 내 공백 허용 여부
    // 'consistent-this': 'error', //consistent-this
    // 'eol-last': 'error', // 파일 끝 줄바꿈 사용여부
    'func-call-spacing': 'error', // 함수와 파라미터 사이의 공백
    'func-name-matching': 'error', // 변할당 된 변수 또는 속성의 이름과 함수가 동일해야함.
    'func-names': 'error', // 함수 이름 필수 사용
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true,
    }], // 함수 스타일
    'function-call-argument-newline': ['error', 'consistent'], // 함수선언 줄바꿈 스티알
    'function-paren-newline': ['error', 'consistent'], // 함수 파라미터 줄바꿈 스타일
    // 'id-denylist': 'error', // 지정된 식별자만 허용
    // 'id-length': 'error', // 짧은 식별자 체크
    // 'id-match': 'error', // id-match
    // 'implicit-arrow-linebreak': 'error', // 화살표형 함수 위치 지정
    // 'indent': ['error', 2], // 일관된 들여쓰기
    // 'jsx-quotes:': ['error', 'prefer-single'], // jsx 문자열 사용 따옴표
    'key-spacing': ['error', {
      'beforeColon': false,
    }], // object key 공백
    'keyword-spacing': ['error', {
      'before': true,
    }], // 키워드 공백
    // 'line-comment-position': ['error', { 'position': 'above' }], // 주석 위치
    // 'linebreak-style': ['error', 'unix'], // 일관된 줄바꿈
    // 'lines-around-comment': 'error', // 주석 근처 줄 바꿈
    'lines-between-class-members': 'error', // 클래스 사이 공백
    // 'max-depth': 'error', // 깊이 제한
    // 'max-len': 'error', // 라인의 문자 길이 제한
    // 'max-lines': 'error', // 파일 내의 라인 수 제한
    // 'max-lines-per-function': 'error', // 함수 내의 라인 수 제한
    // 'max-nested-callbacks': 'error', // callback 개수 제한
    // 'max-params': 'error', // 파라미터 갯수 제한
    // 'max-statements': 'error', // 함수 내 변수 선언 갯수 제한
    // 'max-statements-per-line': 'error', // 한줄에 허용하는 구문 갯수 제한
    // 'multiline-comment-style': 'error', // 하나의 주석 라인 수 제한
    // 'multiline-ternary': 'error', // 삼항연산자 줄바꿈 허용
    // 'new-cap': 'error', // new-cap
    // 'new-parens': 'error', // new-parens
    // 'newline-per-chained-cal': 'error', // 메서드 체인 호출 줄바꿈
    // 'no-array-constructor': 'error', // array 생성자 금지
    // 'no-bitwise': 'error', // 비트연산자 허용
    // 'no-continue': 'error', // continue 구문 사용 제한
    // 'no-inline-comments': 'error', // no-inline-comments
    'no-lonely-if': 'error', // if 문을 else 블록의 유일한 문으로 허용여부
    // 'no-mixed-operators': 'error', // 연산자 섞어 사용 금지
    // 'no-mixed-spaces-and-tabs': 'error', // 들여쓰기 스페이스바, 탭 혼합사용 금지
    'no-multi-assign': 'error', // 연결 할당식 금지 여부
    'no-multiple-empty-lines': 'error', // 여러개의 빈줄 허용 안함
    'no-negated-condition': 'error', // 부정 조건 사용 안함
    'no-nested-ternary': 'error', // 중첩 삼항연산자 금지 여부
    'no-new-object': 'error', // Ojbect 생성자 금지
    'no-plusplus': 'error', // ++, -- 사용 금지
    // 'no-restricted-syntax': 'error', // 지정된 구문 허용 안함
    'no-tabs': 'error', // 모든 탭 허용 안함
    // 'no-ternary': 'error', // 삼항연산자 허용 안함
    'no-trailing-spaces': 'error', // 줄 끝에 후행 공백 허용 안함
    // 'no-underscore-dangle': 'error', // 식별자 밑줄 허용여부
    'no-unneeded-ternary': 'error', // 불필요한 삼항연산자 금지
    'no-whitespace-before-property': 'error', // 속성 앞에 공백 금지
    // 'nonblock-statement-body-position': 'error', // 한줄 코드 위치 강제
    'object-curly-newline': ['error', {
      'ObjectExpression': 'always',
      'ObjectPattern': {
        'multiline': true,
      },
      'ImportDeclaration': 'never',
      'ExportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
    }],
    'object-curly-spacing': ['error', 'always'], // object 내 중괄호 일관된 간격 적용
    'object-property-newline': 'error', // object 내 속성 줄바꿈
    // 'one-var': 'error', // 여러 변수 선언 시 함께 선언
    'one-var-declaration-per-line': 'error', // 변수 선언 주위에 줄 바꿈
    'operator-assignment': 'error', // 연산자 할당 시 약어 사용 금지
    // 'operator-linebreak': 'error', // 연산자 일관된 줄바꿈
    // 'padded-blocks': 'error', // 블록 내의 시작과 끝애 빈 줄 사용
    // 'padding-line-between-statements': 'error', // 라인 사이 빈 줄 사용
    // 'prefer-exponentiation-operator': 'error', // Math.pow 사용 금지
    // 'prefer-object-spread': 'error', // Object.assign 개체확산구문
    'quote-props': 'error', // Object 키값 따옴표 사용
    'quotes': ['error', 'single'], // 문자열 묶음 일관된 사용
    'semi': 'error', // 세미콜론 사용여부
    'semi-spacing': 'error', // 세미콜론 공백 사용여부
    'semi-style': 'error', // 세미콜론 위치 적용
    // 'sort-keys': 'error', // object 키값 정렬
    // 'sort-vars': 'error', // 변수 정렬
    'space-before-blocks': 'error', // 블록 전 공간 빈줄 사용
    'space-before-function-paren': ['error', 'never'], // 함수 괄호 앞 공백 사용 여부
    'space-in-parens': 'error', // 괄호 안에 공백 허용
    // 'space-infix-ops': 'error', // 중위 연산자 공백 필수
    // 'space-unary-ops': 'error', // 단항연산자 공백 사용
    'spaced-comment': 'error', // 주석 공백 사용
    'switch-colon-spacing': 'error', // switch 문의 콜론 주위에 공백 적용
    'template-tag-spacing': 'error', // 템플릿 태그와 해당 리터럴 사이의 간격 체크
    // 'unicode-bom': 'error', // 유니코드 바이트 순서 표시
    // 'wrap-regex': 'error', // 래핑 할 정규식 리터럴 필요
    'arrow-body-style': 'error', // 화살표 함수 본문 중괄호 사용 필수
    'arrow-parens': 'error', // 화살표 함수 괄호 필수
    'arrow-spacing': 'error', // 화살표 함수 공백 필수
    'constructor-super': 'error', // 생성자 내 super 생성자 호출 확인
    // 'generator-star-spacing': 'error', // 생성기 함수 주위 간격 적용
    'no-class-assign': 'error', // class 선언 의 변수 수정 금지
    'no-confusing-arrow': 'error', // 비교와 혼동될 수 있는 화살표 기능 허용 안함
    'no-const-assign': 'error', // const 변수 수정 금지
    'no-dupe-class-members': 'error', // 클래스 멤버 중복 이름 허용 안함
    'no-duplicate-imports': 'error', // 중복 import 금지 여부
    // 'no-new-symbol': 'error', // stmbol 생성자 사용 금지
    // 'no-restricted-exports': 'error', // export 지정된 이름 허용 안함
    // 'no-restricted-imports': 'error', // 특정 import 사용 금지
    'no-this-before-super': 'error', // this 사용 후 super 선언금지
    'no-useless-computed-key': 'error', // 불필요 속성키 사용 제한
    'no-useless-constructor': 'error', // 불필요 constructor 사용 제한
    'no-useless-rename': 'error', // 같은 이름으로 변경하는 것 불허용
    'no-var': 'error', // var 사용 금지
    // 'object-shorthand': 'error', // 객체 리터럴 속기 구문 필요
    // 'prefer-arrow-callback': 'error', // callback에 화살표 함수 허용
    'prefer-const': 'error', // const 선호
    // 'prefer-destructuring': 'error', // 배열 및 객체에서 구조 분해 선호
    'prefer-numeric-literals': 'error', // 다른 진수 비교 시 parse 함수 사용
    'prefer-rest-params': 'error', // 나머지 매개변수 사용여부
    // 'prefer-spread': 'error', // apply 확산 구문 대체
    'prefer-template': 'error', // 문자열 연결 사용 금지 여부
    // 'require-yield': 'error', // 생성기 함수 yield 필수 사용
    'rest-spread-spacing': 'error', //  반복 가능한 구조를 개별 부분 간격 적용
    // 'sort-imports': 'error', // import 정렬
    // 'symbol-description': 'error', // symbol-description
    // 'template-curly-spacing': 'error', // template 간격 적용
    // 'yield-star-spacing': 'error', // yield * 위치 지정
    /**
     * react-lint
     */
    // 'react/boolean-prop-naming': 'error', // bool 변수 이름 앞에 is 사용여부
    'react/button-has-type': 'error', // button 태그 type 명시 필수여부
    'react/jsx-closing-bracket-location': 'error', // JSX 닫는 대괄호 확인
    'react/jsx-closing-tag-location': 'error', // JSX Tag 닫는 위치 확인
    'react/jsx-handler-names': 'error', // 이벤트 핸들러 이름 지정 규칙 (접두사 확인)
    'react/jsx-no-duplicate-props': 'error', // 중복 속성 사용 금지
    'react/jsx-no-undef': 'error', // jsx에 선언되지 않은 변수 허용 안함
    'react/jsx-no-useless-fragment': 'error', // 불필요한 조각 허용 안함
    'react/jsx-one-expression-per-line': 'error', // 라인당 하나의 jsx
    'react/jsx-props-no-multi-spaces': 'error', // jsx 사이에 여러 공백을 허용하지 않음
    'react/jsx-sort-default-props': 'error', // defaultProps 알파벳순 정렬
    'react/jsx-sort-props': 'error', // props 알파벳순 정렬
    'react/jsx-uses-vars': 'error', // 사용된변수가 미사용으로 잘 못 표시되지 않도록 방지
    'react/jsx-wrap-multilines': 'error', // 여러줄 jsx 주위에 괄호 누락 방지
    'react/no-access-state-in-setstate': 'error', // this.setState 내에서 this.state 사용 방지
    'react/no-array-index-key': 'error', // 키에서 배열인덱스 사용 방지
    'react/no-danger': 'error', // dangerous JSX 사용 금지
    'react/no-deprecated': 'error', // 더 이상사용되지 않는 메서드 사용방지
    'react/no-did-mount-set-state': 'error', // componentDidMount에서 setState 사용 방지
    'react/no-direct-mutation-state': 'error', // state 직접적 변경 허용 금지
    'react/no-find-dom-node': 'error', // findDOMNode 사용금지
    'react/no-is-mounted': 'error', // isMounted 사용금지
    'react/no-multi-comp': 'error', // 파일당 여러 구성 요소 정의 방지
    'react/no-redundant-should-component-update': 'error', // pure Component 사용 시 shouldComponentUpdate 사용방지
    'react/no-typos': 'error', // 일반적인 오타 방지
    'react/no-unknown-property': 'error', // 정의되지 않은 속성 사용 금지
    'react/no-unsafe': 'error', // unsafe 라이프사이클 메서드 사용 금지
    'react/no-will-update-set-state': 'error', // componentWillUpdate 에서 setState 사용 금지
    'react/no-unused-prop-types': 'error', // 사용하지 않는 PropTypes 정의 방지
    'react/no-unused-state': 'error', // 미사용 상태 정의 방지
    'react/prefer-read-only-props': 'error', // props는 읽기전용
    'react/prefer-stateless-function': 'error', // 순수한 함수로 작성되도록 상태 비 저장 React 구성요소 적용
    'react/prop-types': 'error', // 누락된 Props 유효성 검사 방지
    'react/react-in-jsx-scope': 'error', // jsx 사용 시 React 누락 방지
    'react/require-render-return': 'error', // render 함수 내의 return 누락 방지
    'react/self-closing-comp': 'error', // 하위요소가 없는 JSX에 대한 추가닫기 태그방지
    'react/sort-comp': 'warn', // 메서드 정렬 순서 지정
    'react/style-prop-object': 'error', // style 값을 object 형식으로 적용
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ], // propType 선언을 알파벳 순 정렬
    'react/jsx-equals-spacing': ['error', 'never'],
    // '@typescript-eslint/indent': ['error', 2],
    'space-infix-ops': ['error', { 'int32Hint': false }],
  },
};
