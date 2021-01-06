module.exports = {
  rules: {
    // "react/button-has-type": "off",
    // "react/default-props-match-prop-types": "off",
    // "react/destructuring-assignment": "off",
    // "react/display-name": "off",
    // "react/forbid-component-props": "off",
    // "react/forbid-dom-props": "off",
    // "react/forbid-elements": "off",
    // "react/forbid-foreign-prop-types": "off",
    // "react/forbid-prop-types": "off",
    // "react/function-component-definition": "off",
    // "react/jsx-boolean-value": "off",
    // "react/jsx-child-element-spacing": "off",
    // "react/jsx-closing-bracket-location": "off",
    // "react/jsx-closing-tag-location": "off",
    // "react/jsx-curly-brace-presence": "off",
    // "react/jsx-curly-newline": "off",
    // "react/jsx-curly-spacing": ["error", { when: "never", allowMultiline: false }],
    // "react/jsx-equals-spacing": ["error", "never"],
    // "react/jsx-filename-extension": "off",
    // "react/jsx-first-prop-new-line": "off",
    // "react/jsx-fragments": "off",
    // "react/jsx-handler-names": "off",
    // "react/jsx-indent-props": "off",
    // "react/jsx-key": "off",
    // "react/jsx-max-depth": "off",
    // "react/jsx-max-props-per-line": "off",
    // "react/jsx-no-bind": "off",
    // "react/jsx-no-comment-textnodes": "off",
    // "react/jsx-no-duplicate-props": "off",
    // "react/jsx-no-literals": "off",
    // "react/jsx-no-script-url": "off",
    // "react/jsx-no-target-blank": "off",
    // "react/jsx-no-undef": "off",
    // "react/jsx-no-useless-fragment": "off",
    // "react/jsx-pascal-case": "off",
    // "react/jsx-props-no-multi-spaces": "off",
    // "react/jsx-props-no-spreading": "off",
    // "react/jsx-sort-default-props": "off",
    // "react/jsx-sort-props": "off",
    // "react/jsx-space-before-closing": "off",
    // "react/jsx-tag-spacing": "off",
    // "react/jsx-uses-react": "off",
    // "react/jsx-uses-vars": "off",
    // "react/jsx-wrap-multilines": "off",
    // "react/no-access-state-in-setstate": "off",
    // "react/no-adjacent-inline-elements": "off",
    // "react/no-array-index-key": "off",
    // "react/no-children-prop": "off",
    // "react/no-danger-with-children": "off",
    // "react/no-danger": "off",
    // "react/no-deprecated": "off",
    // "react/no-did-mount-set-state": "off",
    // "react/no-did-update-set-state": "off",
    // "react/no-direct-mutation-state": "off",
    // "react/no-find-dom-node": "off",
    // "react/no-is-mounted": "off",
    // "react/no-multi-comp": "off",
    // "react/no-redundant-should-component-update": "off",
    // "react/no-render-return-value": "off",
    // "react/no-set-state": "off",
    // "react/no-string-refs": "off",
    // "react/no-this-in-sfc": "off",
    // "react/no-typos": "off",
    // "react/no-unescaped-entities": "off",
    // "react/no-unknown-property": "off",
    // "react/no-unsafe": "off",
    // "react/no-unused-prop-types": "off",
    // "react/no-unused-state": "off",
    // "react/no-will-update-set-state": "off",
    // "react/prefer-es6-class": "off",
    // "react/prefer-read-only-props": "off",
    // "react/prefer-stateless-function": "off",
    // "react/prop-types": "off",
    // "react/react-in-jsx-scope": "off",
    // "react/require-default-props": "off",
    // "react/require-optimization": "off",
    // "react/require-render-return": "off",
    // "react/self-closing-comp": "off",
    // "react/sort-comp": "off",
    // "react/sort-prop-types": "off",
    // "react/state-in-constructor": "off",
    // "react/static-property-placement": "off",
    // "react/style-prop-object": "off",
    // "react/void-dom-elements-no-children": "off",
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }], // 순수한 함수로 작성되도록 상태 비 저장 React 구성요소 적용
    'react/prefer-read-only-props': 'error', // props는 읽기전용
    'react/react-in-jsx-scope': 'error', // jsx 사용 시 React 누락 방지
    'react/require-render-return': 'error', // render 함수 내의 return 누락 방지
    'react/self-closing-comp': 'error', // 하위요소가 없는 JSX에 대한 추가닫기 태그방지
    'react/style-prop-object': 'error', // style 값을 object 형식으로 적용
    'react/no-unknown-property': 'error', // 정의되지 않은 속성 사용 금지
    'react/no-typos': 'error', // 일반적인 오타 방지
    'react/no-deprecated': 'error', // 더 이상사용되지 않는 메서드 사용방지
    'react/no-danger': 'error', // dangerous JSX 사용 금지
    'react/no-array-index-key': 'error', // 키에서 배열인덱스 사용 방지
    'react/no-access-state-in-setstate': 'error', // this.setState 내에서 this.state 사용 방지
    'react/jsx-wrap-multilines': ['error', { // 여러줄 jsx 주위에 괄호 누락 방지
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/jsx-uses-vars': 'error', // 사용된변수가 미사용으로 잘 못 표시되지 않도록 방지
    'react/jsx-no-undef': 'error', // jsx에 선언되지 않은 변수 허용 안함
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }], // 중복 속성 사용 금지
    'react/jsx-indent-props': ['error', 2], // jsx 속성 indent
    'react/jsx-handler-names': ['warn', { // 이벤트 핸들러 이름 지정 규칙 (접두사 확인)
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-closing-tag-location': 'error', // JSX Tag 닫는 위치 확인
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // 여는 태그가 포함 된 줄과 정렬
    'react/button-has-type': ['error', { // button 태그 type 명시 필수여부
      button: true,
      submit: true,
      reset: false,
    }],
    'react/boolean-prop-naming': ['off', { // bool 변수 이름 앞에 is 사용여부
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // 라인당 하나의 jsx
    'react/jsx-indent': ['error', 2], // jsx 태그 indent
  },
};
