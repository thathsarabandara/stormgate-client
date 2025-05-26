import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'font-bold underline',
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('access_token')
//   if (to.path === '/dashboard' && !token) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
