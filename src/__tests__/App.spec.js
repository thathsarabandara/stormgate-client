import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true,
          ScrollToTop: true
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('has main element with bg-gray-100', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true,
          ScrollToTop: true
        }
      }
    })
    const main = wrapper.find('main')
    expect(main.classes()).toContain('bg-gray-100')
  })

  it('includes ScrollToTop component', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true,
          ScrollToTop: { template: '<div class="scroll-to-top"></div>' }
        }
      }
    })
    expect(wrapper.find('.scroll-to-top').exists()).toBe(true)
  })

  it('includes router-view', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: { template: '<div class="router-view"></div>' },
          ScrollToTop: true
        }
      }
    })
    expect(wrapper.find('.router-view').exists()).toBe(true)
  })
})
