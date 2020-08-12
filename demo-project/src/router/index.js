import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        // 動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/coupons',
        name: 'Coupons',
        component: () => import('../views/Coupons.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'storages',
        component: () => import('../views/dashboard/Storages.vue')
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'product',
        component: () => import('../views/dashboard/Product.vue')
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
