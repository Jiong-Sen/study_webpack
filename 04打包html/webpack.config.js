
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //  入口起点
  entry: './src/index.js',
  output: {
    //输出文件名
    filename: 'built.js',
    //输出路径
    path: resolve(__dirname, 'build')
  },
  //  loader配置
  module: {
    rules: [

      {
        //匹配哪些文件
        test: /\.css$/,
        use: [
          //use执行顺序:从右到左/依次执行 先css后style
          // 创建style标签,将js中的样式资源插入进行,添加到head中
          'style-loader',
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 创建style标签,将js中的样式资源插入进行,添加到head中
          'style-loader',
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader',
          // 将less编译成css文件
          'less-loader',
        ]
      }
    ]
  },
  plugins: [
    //  详细plugins配置
    // html-webpack-plugin 
    // 功能:创建一个空的HTML,自动引入打包的所有资源
    // 需求:需要有结构的HTML
    new HtmlWebpackPlugin({
      // copy HTMl文件 并自动引入
      template: './src/index.html'
    })
  ],
  mode: 'development',
  //  mode:'production',
}