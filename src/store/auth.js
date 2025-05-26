import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AuthService from '../service/AuthService'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const login = async (email, password) => {
    try {
      const data = await AuthService.login(email, password)
      localStorage.setItem('access_token', data.accessToken)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  const register = async (email, password, tenantId) => {
    try {
      await AuthService.register(email, password, tenantId)
      router.push('/login')
    } catch (error) {
      console.error('Registration failed', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    router.push('/login')
  }

  return { login, register, logout }
})
