import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'goods',
        component: () => import(/* webpackChunkName: "goods" */ '../views/Goods/Goods.vue')
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: () => import(/* webpackChunkName: "ratings" */ '../views/Ratings/Ratings.vue')
    },
    {
        path: '/seller',
        name: 'seller',
        component: () => import(/* webpackChunkName: "seller" */ '../views/Seller/Seller.vue')
    },
]

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active',
})

export default router
