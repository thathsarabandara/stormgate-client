import http from './http'

export default {
  async getMicroservices() {
    const response = await http.get('/microservices')
    return response.data
  },

  async getMicroserviceHealth(serviceId) {
    const response = await http.get(`/microservices/${serviceId}/health`)
    return response.data
  },

  async getMicroserviceData(serviceId) {
    const response = await http.get(`/microservices/${serviceId}/data`)
    return response.data
  }
}
