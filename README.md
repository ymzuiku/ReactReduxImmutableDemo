# 此项目是一个使用 redux+immutable 的记录

## Babel 清晰记录

1. 安装 babel-cli, 用于调用babel

2.安装babel-preset-env编译es6-es7语法, 它带代替了所有的babel-preset-2015\2016

3.安装babel-preset-react 编译JSX

4.安装babel-preset-stage-0 编译 {…args} 等语法

以上一共:
yarn add —dev babel-preset-env babel-preset-react babel-preset-stage-0

5.配置根目录.babelrc (直接放在package.json里不起效果)
{
  "presets": ["env", "react", "stage-0"]
}
