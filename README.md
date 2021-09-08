# express webpack boilerplate

Webpack으로 프론트엔드 파일들을 빌드할 수 있도록 설계된 Express Boilerplate



## Spec
### entry & output
- entry : `./client-src/js/main.js`
- output : `./dist/bundle.js`
    - publicPath : `/static`

### Loader
- style-loader
- css-loader
- sass-loader

- babel-loader

### Plugin
- HtmlWebpackPlugin

### Devtools
- inline-source-map
- devServer
    - port 9000
    - proxy : 3000 port로 적용
