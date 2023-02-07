import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/myUser'
  },
  {
    path: '/myUser',
    name: 'myUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myUser.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
