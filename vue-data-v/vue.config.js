const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
	chainWebpack: config => {
		config.resolve.symlinks(true); // 修复热更新失效
		// 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
		config.plugin("html").tap(args => {
			// 修复 Lazy loading routes Error
			args[0].chunksSortMode = "none";
			return args;
		});
		config.resolve.alias // 添加别名
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@components', resolve('src/components'))
			.set('@views', resolve('src/views'))
			.set('@store', resolve('src/store'));
	},
}