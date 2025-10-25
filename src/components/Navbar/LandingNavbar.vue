<template>
    <nav class="bg-white shadow-md w-7/12 mx-auto rounded-2xl">
        <div class="flex justify-between items-center px-4 py-3 md:px-6 gap-4">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <img src="../../assets/Banner.png" alt="Banner" class="h-10 w-auto">
            </div>

            <!-- Desktop Navigation Links -->
            <div class="hidden md:flex items-center gap-1">
                <RouterLink
                    v-for="links in navLinks"
                    :key="links.path"
                    :to="links.path"
                    class="px-3 py-2 text-sm font-medium text-black hover:text-green-500 transition-colors"
                    >
                    <span class="font-semibold "> {{ links.label }}</span>
                </RouterLink>
            </div>

            <!-- Desktop Auth Buttons -->
            <div class="hidden md:flex items-center gap-3">
                <a href="" class="px-4 py-2 text-sm font-semibold text-green-500 hover:text-green-600 transition-colors">Login</a>
                <a href="" class="px-4 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors">Register</a>
            </div>

            <!-- Mobile Hamburger Menu Button -->
            <button
                @click="isMenuOpen = !isMenuOpen"
                class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-green-500 focus:outline-none transition-colors"
                aria-label="Toggle menu"
                >
                <svg
                    v-if="!isMenuOpen"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                    v-else
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div
            v-if="isMenuOpen"
            class="md:hidden bg-white border-t border-gray-200"
            >
            <div class="px-2 pt-2 pb-3 space-y-1">
                <RouterLink
                    v-for="links in navLinks"
                    :key="links.path"
                    :to="links.path"
                    class="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-green-500 hover:bg-gray-100 transition-colors"
                    @click="isMenuOpen = false"
                    >
                    {{ links.label }}
                </RouterLink>
            </div>
            <div class="px-2 py-3 border-t border-gray-200 space-y-2">
                <a href="" class="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-gray-100 transition-colors">Login</a>
                <a href="" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-600 transition-colors text-center">Register</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
</script>