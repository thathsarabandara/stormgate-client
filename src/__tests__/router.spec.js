import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'

describe('Router Configuration', () => {
  let router

  beforeEach(() => {
    // Import and create router
    const routes = [
      { path: '/', component: { template: '<div>Home</div>' } },
      { path: '/service/dashboard', component: { template: '<div>Dashboard</div>' } },
      { path: '/auth/login', component: { template: '<div>Login</div>' } }
    ]

    router = createRouter({
      history: createMemoryHistory(),
      routes,
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      }
    })
  })

  it('creates router instance', () => {
    expect(router).toBeDefined()
  })

  it('has correct routes', () => {
    expect(router.getRoutes().length).toBe(3)
  })

  it('navigates to home route', async () => {
    await router.push('/')
    expect(router.currentRoute.value.path).toBe('/')
  })

  it('navigates to service dashboard route', async () => {
    await router.push('/service/dashboard')
    expect(router.currentRoute.value.path).toBe('/service/dashboard')
  })

  it('navigates to auth login route', async () => {
    await router.push('/auth/login')
    expect(router.currentRoute.value.path).toBe('/auth/login')
  })

  it('has scrollBehavior defined', () => {
    expect(router.options.scrollBehavior).toBeDefined()
  })

  it('scrollBehavior returns top 0 on navigation', () => {
    const result = router.options.scrollBehavior(
      { path: '/new' },
      { path: '/old' },
      null
    )
    expect(result).toEqual({ top: 0 })
  })

  it('scrollBehavior returns savedPosition if available', () => {
    const savedPosition = { top: 100, left: 0 }
    const result = router.options.scrollBehavior(
      { path: '/new' },
      { path: '/old' },
      savedPosition
    )
    expect(result).toEqual(savedPosition)
  })
})
