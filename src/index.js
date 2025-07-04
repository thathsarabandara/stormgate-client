import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './components/layout/MainLayout.vue'
import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import AuthService from './pages/service/AuthService.vue'
import ProfileService from './pages/service/ProfileService.vue'
import NotificationService from './pages/service/NotificationService.vue'
import CartService from './pages/service/CartService.vue'
import OrderService from './pages/service/OrderService.vue'
import PaymentService from './pages/service/PaymentService.vue'
import ForgotPassword from './pages/auth/ForgotPassword.vue'
import ForgotPasswordOTP from './pages/auth/ForgotPasswordOTP.vue'
import OTPVerify from './pages/auth/OTPVerify.vue'
import ResetPassowrd from './pages/auth/ResetPassword.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },

  {
    path: '/auth',
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'forgot-password-otp', component: ForgotPasswordOTP },
      { path: 'reset-password', component: ResetPassowrd },
      { path: 'otp-verify', component: OTPVerify }
    ],
  },
  {
    path: '/',
    component: MainLayout,  
    children: [
      { path: 'dashboard', component: Dashboard },
      {
        path: 'service',
        children: [
          { path: 'auth-service', component: AuthService },
          { path: 'profile-service', component: ProfileService },
          { path: 'notification-service', component: NotificationService },
          { path: 'cart-service', component: CartService },
          { path: 'order-service', component: OrderService },
          { path: 'payment-service', component: PaymentService },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'font-bold underline',
})

export default router
