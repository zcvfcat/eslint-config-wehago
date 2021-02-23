# WEHAGO 용 LINT, FORMATTER

## 설치

- 패키지 매니저 npm일 경우
  > `npm i -D eslint-config-wehago`  
- 패키지 매니저 yarn일 경우
  > `yarn add -D eslint-config-wehago`

## 설정

### `1`. eslint 정의

`1-1`, `1-2` 둘 중 하나만 넣어주세요.

- _*리액트가 아닐 경우*_ extends `wehago/react` -> `wehago` 변경 부탁드립니다.  

### `1-1`. package.json 사용

- `${root}/package.json`

  ```json
  {
    "eslintConfig": {
      "extends": ["wehago/react"]
    }
  }
  ```

### `1-2`. 루트에서 .eslintrc 설정

- `${root}/.eslintrc`

  ```json
  {
    "extends": ["wehago/react"],
  }
  ```

### `2`. default formatter 변경

- `${root}/.vscode/settings.json`

  ```json
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

### `3`. formatter 설정

- `${root}/package.json`

  ```json
  {
    "prettier":"eslint-config-wehago/prettierrc"
  }
  ```

### `4`. 설치 후 autofix

- ${root}에서 terminal 열기

  - src 폴더 위로 전부 autofix

  ```bash
  eslint --ext .jsx,.js,.tsx,.ts src/ --fix
  ```

## WEBPACK 설정

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
