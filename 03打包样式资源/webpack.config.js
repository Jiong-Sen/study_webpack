/**
 * webpackconfig.js webpack的配置文件
 * 运行webpack执行时,会加载里面配置
 * common js模块
 * 
 */
const {resolve} = require('path')

 module.exports = {
  //  入口起点
   entry:'./src/index.js',
   output:{
    //输出文件名
    filename:'built.js',
    //输出路径
    //dirname nodejs的变量，代表当前文件的目录绝对路径
    path:resolve(__dirname,'build')
   },
  //  loader配置
   module:{
     rules:[
      //  详细loader配置
      // 不同文件必须配置不同loader处理
      {
        //匹配哪些文件
        test:/\.css$/,
        use:[
          //use执行顺序:从右到左/依次执行 先css后style
          // 创建style标签,将js中的样式资源插入进行,添加到head中
          'style-loader',
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
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
   plugins:[
      //  详细plugins配置
   ],
   mode:'development',
  //  mode:'production',
 }