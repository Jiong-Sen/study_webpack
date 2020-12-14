/**
 * 入口文件
 * 1.运行指令:
 * -o(输出)
 * 开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
 *   webpack ./src/index.js入口开始打包 输出到 ./build/built.js
 * 生产环境：webpack./src/index.js-o./build/built.js--mode=production
 * webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js整体打包环境，是生产环境
 * 
 * 2.结论:
 * webpack能处理html,js,json ,不能处理cs/img等其他资源
 * 2.生产环境比开发环境多一个压缩js代码
 * 3.生产环境和开发环境将es6模块变异成浏览器能识别的module
 */
import './index.css'
import data from './data.json';
 console.log(data);
function add(x, y) {
  return x + y
}
console.log(add(1, 2))