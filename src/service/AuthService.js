import http from './http'

export default {
  async login(email, password) {
    const response = await http.post('/auth/login', { email, password })
    return response.data
  },

  async register(email, password, tenantId) {
    const response = await http.post('/auth/register', { email, password, tenantId })
    return response.data
  },
}
