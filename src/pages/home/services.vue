<template>
    <div class="w-full">
        <!-- Mini Hero Section with Background Image -->
        <div class="w-full h-96 relative overflow-hidden bg-cover bg-center" style="background-image: url('../../assets/home/landing.png');">
            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-black/40"></div>

            <div class="max-w-6xl mx-auto relative z-10 h-full flex flex-col justify-center px-6">
                <!-- Breadcrumbs -->
                <div class="animate-in fade-in slide-in-from-left-8 duration-800 mb-6">
                    <nav class="flex items-center gap-2 text-sm">
                        <router-link to="/" class="text-white hover:text-green-300 transition-colors font-medium">Home</router-link>
                        <span class="text-white/60">/</span>
                        <span class="text-white/80 font-medium">Services</span>
                    </nav>
                </div>

                <!-- Hero Content -->
                <div class="space-y-4 animate-in fade-in slide-in-from-left-8 duration-800 delay-100 max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-white">
                        Our Services
                    </h1>
                    <p class="text-xl text-white/90 leading-relaxed">
                        Comprehensive microservices solutions designed to scale your business and accelerate your growth.
                    </p>
                </div>
            </div>
        </div>

        <!-- Services Content Section -->
        <div class="bg-white w-full py-20 px-6">
            <div class="max-w-6xl mx-auto">
                <!-- Section Header -->
                <div class="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-800">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Microservices We Provide</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Powerful, scalable microservices designed to meet all your business needs
                    </p>
                </div>

                <!-- Services Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Service 1: Authentication Service -->
                    <div class="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in slide-in-from-left-8 duration-800">
                        <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Authentication</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Secure user authentication with OAuth 2.0, JWT tokens, and MFA support.
                        </p>
                    </div>

                    <!-- Service 2: Profile Service -->
                    <div class="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in zoom-in duration-800 delay-100">
                        <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Profile Service</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Manage user profiles with customizable fields and preferences.
                        </p>
                    </div>

                    <!-- Service 3: Notification Service -->
                    <div class="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in slide-in-from-right-8 duration-800 delay-200">
                        <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Notification</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Real-time notifications via email, SMS, and push notifications.
                        </p>
                    </div>

                    <!-- Service 4: Cart Service -->
                    <div class="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in slide-in-from-left-8 duration-800 delay-300">
                        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Cart Service</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Manage shopping carts with persistent storage and sync.
                        </p>
                    </div>

                    <!-- Service 5: Order Service -->
                    <div class="group p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in zoom-in duration-800 delay-400">
                        <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Order Service</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Complete order management with tracking and fulfillment.
                        </p>
                    </div>

                    <!-- Service 6: Payment Service -->
                    <div class="group p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg hover:shadow-xl transition-all hover:scale-100 animate-in fade-in slide-in-from-right-8 duration-800 delay-500">
                        <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-600 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Payment Service</h3>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Secure payment processing with multiple payment methods.
                        </p>
                    </div>
                </div>

                <!-- Additional Features -->
                <div class="mt-20 pt-20 border-t border-gray-200">
                    <div class="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-800 delay-600">
                        <h3 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Stormgate?</h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center animate-in fade-in zoom-in duration-800 delay-700">
                            <div class="text-4xl font-bold text-green-500 mb-2">99.9%</div>
                            <p class="text-gray-600">Uptime SLA</p>
                        </div>
                        <div class="text-center animate-in fade-in zoom-in duration-800 delay-800">
                            <div class="text-4xl font-bold text-green-500 mb-2">24/7</div>
                            <p class="text-gray-600">Support & Monitoring</p>
                        </div>
                        <div class="text-center animate-in fade-in zoom-in duration-800 delay-900">
                            <div class="text-4xl font-bold text-green-500 mb-2">Auto</div>
                            <p class="text-gray-600">Scaling & Load Balancing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Service Status Monitoring Section -->
    <div class="bg-gradient-to-br from-gray-50 to-green-50 w-full py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-800">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Complete Service Monitoring</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Get comprehensive real-time monitoring and health status for all your microservices when you choose Stormgate
                </p>
                <div class="mt-6">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105">
                        Start Monitoring Your Services
                    </button>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 text-center text-white animate-in fade-in slide-in-from-bottom-4 duration-800 delay-600">
                <h3 class="text-2xl font-bold mb-4">Get Real-Time Monitoring for Your Services</h3>
                <p class="text-lg mb-6 opacity-90">
                    Join thousands of businesses who trust Stormgate for comprehensive microservice monitoring and management
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                        Start Free Trial
                    </button>
                    <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all hover:scale-105">
                        View Pricing
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>

