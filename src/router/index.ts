import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        component: () => import("@/views/Home/index.vue")
    },
    {
        path: "/about",
        component: () => import("@/views/About/index.vue")
    },
    {
        path: "/",
        redirect: "/home"
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
