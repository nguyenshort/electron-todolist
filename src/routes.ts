import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/index.vue')
    }
]

// Tạo router name, deep loop
const extendRoutes = (_routes: RouteRecordRaw[]) => {
    _routes.forEach((record) => {
        // tạo router name, xoá '/' ở đầu và thay thế còn lại = '-'
        record.name = record.path.replace(/\//, '').replaceAll('/', '-')
        // deep loop
        if (record.children) {
            record.children = extendRoutes(record.children)
        }
    })
    return _routes
}

routes = extendRoutes(routes)

// 404 Handle
routes.push({
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/error/index.vue')
})

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
