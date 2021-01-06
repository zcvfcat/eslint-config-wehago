# eslint-config-wehago

> [VSCODE ESLINT EXTENSION](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 필수 다운로드  
> GOOGLE ESLINT 참고 [shareable config](https://github.com/google/eslint-config-google.git)  
> GOOGLE STYLE [Google JavaScript style guide (ES2015+ version)](https://google.github.io/styleguide/jsguide.html)  
> REACT-APP ESLINT 참고 [shareable config](https://www.npmjs.com/package/eslint-config-react-app)  
> 참고자료 [POIEMAWEB](https://poiemaweb.com/eslint)

- eslint-config-wehago 설치

  - 패키지 매니저 npm일 경우

    >`npm i -D eslint-config-wehago`

  - 패키지 매니저 yarn일 경우
  
    >`yarn add -D eslint-config-wehago`

## 사용법

### # 1 eslint 바라보는 package.json, .eslintrc, .eslintrc.js 에서 정의
  
  `#1-1`, `#1-2` 둘 중 하나만 넣어주세요.

#### # 1 - 1 package.json 사용

- `${root}/package.json`
  - 기존 설정들이 있을 경우 (create-react-app 앱)

  ```json
  {
    ...
    "eslintConfig": {
      "extends": [
        ...(기존에 있는 eslint 설정),
        "wehago/react"
      ],
      "rules":{
        ...rules
      }
    }
  }
  ```

  - create-react-app으로 만든 경우 [create-react-app shareable eslint 공식문서](https://create-react-app.dev/docs/setting-up-your-editor/#extending-or-replacing-the-default-eslint-config)
  - *_리액트가 아닐 경우_* extends 아래와 같이 변경 부탁드립니다.  
    `wehago/react` -> `wehago`

#### # 1 - 2 루트에서 .eslintrc 설정

- `${root}/.eslintrc`

  ```json
  {
    "extends": ["wehago/react"],
    "rules": {
      ...rules
    }
  }
  ```

### # 2 문서 포매터 변경

  prettier의 경우 문서의 논리만 정하는 포맷팅 기능을 가짐  
  eslint의 경우 코드를 실행하지 않고 분석, 포맷팅 기능도 가짐

- `${root}/.vscode/settings.json`

  ```json
  {
    "editor.formatOnSave": true,
    "eslint.format.enable": true,
    "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[typescript]":{
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[typescriptreact]":{
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
  }
  ```

  - html, css, 기타의 경우 prettier를 사용
  - js, ts 의 경우 eslint를 사용

### # 3 prettier 추가

- `${root}/package.json`

  ```json
  {
    ...
    "prettier":"eslint-config-wehago/prettierrc"
  }
  ```

### # 4 설치 후 autofix

- ${root}에서 terminal 열기
  - src 폴더 위로 전부 autofix  

  ```bash
  eslint --ext .jsx,.js,.tsx,.ts src/ --fix
  ```

## webpack 사용시

- webpack eslint plugin 설치

  ```bash
  npm i -D eslint-webpack-plugin
  ```

- webpack.config.js

  ```js
  const ESLintPlugin = require('eslint-webpack-plugin')

  module.exports = {
    ...webpack.config,
    plugins: [
      ...webpack.plugins
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        eslintPath: require.resolve('eslint'),
        cache: false,
        baseConfig: {
          extends: [require.resolve('eslint-config-wehago')],
          rules: {

          },
        },
      }),
    ],
  }
  ```

## 추가사항 내용

- 상대경로 -> 절대경로 설정(baseUrl)

eslint 혼자서는 설정을 할 수 없음

소스의 컴파일이 필요하기 때문 vscode 툴기준으로

타입스크립트 : ${root}/tsconfig.json  
자바스크립트 : ${root}/jsconfig.json  

위의 파일을 만든 후

  ```json
  {
    "compilerOptions": {
      ...
      "baseUrl": "src",
    }
  }
  ```

webpack의 경우 : ${root}/${webpack.config.js}  [configuration resolve](https://webpack.js.org/configuration/resolve/)  

  ```js
  const path = require('path');

  module.exports = {
    //...
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  };
  ```

webpack에서 babel을 사용 할 경우 : ${root}/${.babelrc or config} [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)

```json
{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"]
    }]
  ]
}
```

## .eslintrc.js 옵션 분석

`.eslintrc.js`

```js
module.exports = {
  extends: ['google',"./index"], // rules를 가져와서 추가하겠다. ,eslint-config-${name}로 시작할 경우 `eslint-config-` 생략 가능
  plugins: ['babel', '@typescript-eslint', 'prettier'], // rules를 정의하는 구문 분석 플러그인 
  parserOptions: { // 구문 분석기 옵션
    parser: 'babel-eslint', // babel-eslint 구문 분석기를 쓰는 이유 // https://poiemaweb.com/eslint#8-babel-eslint
    ecmaVersion: 2021, // ecmaVersion 버전까지의 문법을 허용
    sourceType: 'module', // script를 module로 만들 것이냐 script로 만들 것이냐? <script type="module"/>
    ecmaFeatures: { // 문법 추가적인 내용
      jsx: true, // jsx 허용, react 사용시 jsx 활성화 필요
      ...
    },
  },
  overrides: [ // 특정한 파일을 분석하고 싶은 경우
    {
      files: ['*.ts', '*.tsx'], // 해당 파일
      extends: ['plugin:@typescript-eslint/recommended'], // ts의 경우 기존 extends와 현재 extends를 추가
      parserOptions: { 
        parser: '@typescript-eslint/parser', // typscript 구문 분석기
        // project: './tsconfig.json', // ts compiler 추가 // default `./tsconfig.json`,
        ecmaFeatures: {
          jsx: true, // jsx 허용
        },
      },
    },
  ],
  settings: { // 공용 설정 추가
    'import/resolver': { // eslint-plugin-import 이 쓰는 공용 설정 https://github.com/benmosher/eslint-plugin-import/blob/master/README.md
      ...
    },
  },
};

```
