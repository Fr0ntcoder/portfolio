import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '',
		component: () => import('../layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../views/MainPage.vue')
			}
		]
	}
]

export const router = createRouter({
	history: createWebHistory(import.meta.env.APP_URL),
	routes
})
