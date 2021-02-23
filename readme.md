# eslint-config-wehago

## 설치

- 패키지 매니저 npm일 경우
  > `npm i -D eslint-config-wehago`  
- 패키지 매니저 yarn일 경우
  > `yarn add -D eslint-config-wehago`

## 설정

### `1`. eslint 바라보는 package.json, .eslintrc, .eslintrc.js 에서 정의

`1-1`, `1-2` 둘 중 하나만 넣어주세요.

#### `1-1`. package.json 사용

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
  - _*리액트가 아닐 경우*_ extends 아래와 같이 변경 부탁드립니다.  
    `wehago/react` -> `wehago`

### `1-2`. 루트에서 .eslintrc 설정

- `${root}/.eslintrc`

  ```json
  {
    "extends": ["wehago/react"],
    "rules": {
      ...rules
    }
  }
  ```

### `2`. 문서 포매터 변경

prettier의 경우 문서의 논리만 정하는 포맷팅 기능을 가짐  
 eslint의 경우 코드를 실행하지 않고 분석, 포맷팅 기능도 가짐

- `${root}/.vscode/settings.json`

  ```json
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    // "editor.formatOnSave": true,
    // "eslint.format.enable": true,
    // "[javascript]": {
    //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    // "[typescript]":{
    //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    // "[javascriptreact]": {
    //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    // "[typescriptreact]":{
    //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    // "editor.codeActionsOnSave": {
    //   "source.fixAll.eslint": true
    // },
  }
  ```

  - html, css, 기타의 경우 prettier를 사용
  - js, ts 의 경우 eslint를 사용
  - 해당부분 prettier로 정렬하는것이 맞는거 같습니다.
  - autoSave도 하실 분은 하는것이 맞는거 같습니다.

### `3`. prettier 추가

- `${root}/package.json`

  ```json
  {
    ...
    "prettier":"eslint-config-wehago/prettierrc"
  }
  ```

### `4`. 설치 후 autofix

- ${root}에서 terminal 열기

  - src 폴더 위로 전부 autofix

  ```bash
  eslint --ext .jsx,.js,.tsx,.ts src/ --fix
  ```

## webpack 설정

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
