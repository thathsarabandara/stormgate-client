import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './components/layout/MainLayout.vue'
import AdminLayout from './components/layout/AdminLayout.vue'
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
import Home from './pages/home/Home.vue'
import LandingLayout from './components/layout/LandingLayout.vue'
import Services from './pages/home/services.vue'
import Pricing from './pages/home/pricing.vue'
import About from './pages/home/About.vue'
import FAQ from './pages/home/FAQ.vue'
import UserProfile from './pages/user-profile/UserProfile.vue'
import ApiKeys from './pages/user-profile/ApiKeys.vue'
import ApiSandbox from './pages/user-profile/ApiSandbox.vue'
import Billing from './pages/user-profile/Billing.vue'
import AdminLogin from './pages/admin/AdminLogin.vue'
import AdminDashboard from './pages/admin/AdminDashboard.vue'
import UserManagement from './pages/admin/UserManagement.vue'
import SystemMonitoring from './pages/admin/SystemMonitoring.vue'
import BillingUsage from './pages/admin/BillingUsage.vue'
import AuditLogs from './pages/admin/AuditLogs.vue'

const routes = [
  { path: '/',
    component: LandingLayout,
    children: [
      { path: '', component: Home },
      { path: 'services', component: Services },
      { path: 'pricing', component: Pricing },
      { path: 'about', component: About },
      { path: 'faq', component: FAQ },
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
    ],
   },
  {
    path: '/service',
    component: MainLayout,  
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'auth-service', component: AuthService },
      { path: 'profile-service', component: ProfileService },
      { path: 'notification-service', component: NotificationService },
      { path: 'cart-service', component: CartService },
      { path: 'order-service', component: OrderService },
      { path: 'payment-service', component: PaymentService },
      { path: 'profile', component: UserProfile },
      { path: 'api-keys', component: ApiKeys },
      { path: 'api-sandbox', component: ApiSandbox },
      { path: 'billing', component: Billing },
    ],
  },

  {
    path: '/admin/login',
    component: AdminLogin
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'users', component: UserManagement },
      { path: 'monitoring', component: SystemMonitoring },
      { path: 'billing', component: BillingUsage },
      { path: 'audit-logs', component: AuditLogs },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'font-bold underline',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
