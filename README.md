webpack学习笔记：

	一步一步创建自己的webpack项目

	1. npm init

	2. npm install plugins --save-dev并修改package.json
	   
	   见根目录中的package.json中的devDependencies部分

	3. 创建文件的结构及文件的内容

	4. 执行npm install安装相应的插件

	5. 执行webpack

	6. 执行webpack-dev-server启动devServer


注意的地方：

	1. loader: "html?attrs=img:src img:data-src"是按文件的目录生成对应的图片文件

	2. //loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'  --生成64位的加密文件

	 loader: 'url-loader?limit=1&name=[path][name].[ext]'  --小于8k保持原文件的目录结构

	3. 生成加载的css文件

	  new ExtractTextPlugin('css/[name].css')

	4. 生成加载的图片文件

	 new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
	        favicon: '', //favicon路径，通过webpack引入同时可以生成hash值
	        filename: '', //生成的html存放路径，相对于path
	        template: '', //html模板路径
	        inject: 'body', //js插入的位置，true/'head'/'body'/false
	        hash: true, //为静态资源生成hash值
	        chunks: ['', ''],//需要引入的chunk，不配置就会引入所有页面的资源
	        minify: { //压缩HTML文件    
	            removeComments: true, //移除HTML中的注释
	            collapseWhitespace: false //删除空白符与换行符
	        }
	})

   




