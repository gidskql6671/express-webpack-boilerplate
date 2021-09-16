# Webpack boilerplate

Webpack으로 파일들을 빌드할 수 있도록 설계된 Boilerplate



## Spec
### entry & output
- entry : `./src/main.js`
- output : `../backend/public/`
    - publicPath : `/static/`

### Loader
- `style-loader` or `mini-css-extract-plugin`
    - dev : `style-loader`
    - prod : `mini-css-extract-plugin`
- `css-loader`
- `sass-loader`

- `babel-loader`

### Asset
사진(png, svg, jpg, gif) asset에 대해서는 `asset` 모듈을 사용해서 처리하도록 함.

### Plugin
- html-webpack-plugin
- mini-css-extract-plugin

### Devtools
- inline-source-map
- devServer
    - port 9000
    - proxy : 3000 port로 적용 - 백엔드 서버를 3000포트로 열자.

### babel
- preset : `@babel/preset-env`
- plugins : `@babel/plugin-transform-runtime` & `corejs@3`