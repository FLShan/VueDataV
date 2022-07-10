import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

import globalRoutes from "./globalRoutes.js";
import mainRoutes from "./mainRoutes.js";
console.log(globalRoutes)
const router = createRouter({
	history: createWebHashHistory(),
	scrollBehavior: () => ({
		y: 0,
	}),
	isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
	routes: globalRoutes.concat(mainRoutes),
})

export default router;