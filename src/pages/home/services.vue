<template>
    <div class="w-full">
        <!-- Mini Hero Section with Background Image -->
        <div ref="heroSection" class="w-full h-96 relative overflow-hidden bg-cover bg-center opacity-0" style="background-image: url('../../assets/home/landing.png');">
            <!-- Dark Overlay -->
            <div class="absolute inset-0 ">
                <div class="absolute inset-0 bg-black/40"></div>
                <img src="../../assets/services/service.png" alt="Banner" class="w-full h-full object-cover " loading="lazy">
            </div>

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
        <div ref="servicesSection" class="bg-white w-full py-20 px-6 opacity-0">
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
                <div ref="featuresSection" class="mt-20 pt-20 border-t border-gray-200 opacity-0">
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

    <!-- Service Benefits Section -->
    <div ref="benefitsSection" class="bg-gray-50 w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Service Benefits</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the advantages of using our microservices platform
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Benefit 1 -->
                <div class="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightning Fast Performance</h3>
                        <p class="text-gray-600">Optimized microservices architecture ensures minimal latency and maximum throughput for your applications.</p>
                    </div>
                </div>

                <!-- Benefit 2 -->
                <div class="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                        <p class="text-gray-600">Built-in security features including encryption, authentication, and compliance with industry standards.</p>
                    </div>
                </div>

                <!-- Benefit 3 -->
                <div class="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Scalable Infrastructure</h3>
                        <p class="text-gray-600">Automatically scale your services based on demand with our intelligent load balancing and resource management.</p>
                    </div>
                </div>

                <!-- Benefit 4 -->
                <div class="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
                        <p class="text-gray-600">Comprehensive dashboards and alerts keep you informed about your service health and performance metrics.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Service Architecture Section -->
    <div ref="architectureSection" class="bg-white w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Modern Microservices Architecture</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Built on cutting-edge technology stack for reliability and performance
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Architecture Feature 1 -->
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Containerized Services</h3>
                    <p class="text-gray-600">Docker and Kubernetes for consistent deployment across environments</p>
                </div>

                <!-- Architecture Feature 2 -->
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">RESTful APIs</h3>
                    <p class="text-gray-600">Well-documented APIs with OpenAPI specification and versioning</p>
                </div>

                <!-- Architecture Feature 3 -->
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Event-Driven</h3>
                    <p class="text-gray-600">Message queues and event streaming for asynchronous communication</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Use Cases Section -->
    <div ref="useCasesSection" class="bg-gradient-to-br from-gray-50 to-green-50 w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Industry</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our microservices platform adapts to your specific business needs
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Use Case 1 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">🛒</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">E-Commerce</h3>
                    <p class="text-sm text-gray-600">Build scalable online stores with cart, payment, and order management services.</p>
                </div>

                <!-- Use Case 2 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">🏥</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
                    <p class="text-sm text-gray-600">Secure patient data management with HIPAA-compliant authentication and storage.</p>
                </div>

                <!-- Use Case 3 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">💰</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">FinTech</h3>
                    <p class="text-sm text-gray-600">Process transactions securely with PCI-DSS compliant payment services.</p>
                </div>

                <!-- Use Case 4 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">📱</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">SaaS Platforms</h3>
                    <p class="text-sm text-gray-600">Multi-tenant architecture with user management and subscription billing.</p>
                </div>

                <!-- Use Case 5 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">🎓</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                    <p class="text-sm text-gray-600">Learning management systems with user profiles and notification services.</p>
                </div>

                <!-- Use Case 6 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <div class="text-3xl mb-3">🚀</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Startups</h3>
                    <p class="text-sm text-gray-600">Rapid MVP development with pre-built microservices and easy scaling.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Service Status Monitoring Section -->
    <div ref="monitoringSection" class="bg-white w-full py-20 px-6 opacity-0">
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
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()

// Section refs
const heroSection = ref(null)
const servicesSection = ref(null)
const featuresSection = ref(null)
const benefitsSection = ref(null)
const architectureSection = ref(null)
const useCasesSection = ref(null)
const monitoringSection = ref(null)

// Hero Section Animation
const animateHeroSection = () => {
  if (!heroSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(heroSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate breadcrumbs
  tl.fromTo(
    heroSection.value.querySelector('nav'),
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate heading and text
  tl.fromTo(
    heroSection.value.querySelectorAll('h1, p'),
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.2, duration: 0.7 },
    '-=0.4'
  )
}

// Services Section Animation
const animateServicesSection = () => {
  if (!servicesSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(servicesSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    servicesSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate service cards
  const serviceCards = servicesSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    serviceCards,
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: 'back.out(1.3)' },
    '-=0.4'
  )
  
  // Animate icons with rotation
  const icons = servicesSection.value.querySelectorAll('.grid > div > div:first-child')
  tl.fromTo(
    icons,
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, stagger: 0.1, duration: 0.6, ease: 'elastic.out(1, 0.6)' },
    '-=0.7'
  )
}

// Features Section Animation
const animateFeaturesSection = () => {
  if (!featuresSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(featuresSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    featuresSection.value.querySelector('h3'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate stat cards
  const stats = featuresSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    stats,
    { y: 40, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: 'back.out(1.5)' },
    '-=0.4'
  )
}

// Benefits Section Animation
const animateBenefitsSection = () => {
  if (!benefitsSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(benefitsSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    benefitsSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate benefit cards
  const benefits = benefitsSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    benefits,
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.12, duration: 0.7 },
    '-=0.4'
  )
}

// Architecture Section Animation
const animateArchitectureSection = () => {
  if (!architectureSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(architectureSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    architectureSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate architecture features
  const features = architectureSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    features,
    { y: 50, opacity: 0, rotateY: -15 },
    { y: 0, opacity: 1, rotateY: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.4)' },
    '-=0.4'
  )
  
  // Animate icons with bounce
  const icons = architectureSection.value.querySelectorAll('.w-16.h-16')
  tl.fromTo(
    icons,
    { scale: 0, rotation: 360 },
    { scale: 1, rotation: 0, stagger: 0.2, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
    '-=0.8'
  )
}

// Use Cases Section Animation
const animateUseCasesSection = () => {
  if (!useCasesSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(useCasesSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    useCasesSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate use case cards
  const cards = useCasesSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    cards,
    { y: 40, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: 'back.out(1.3)' },
    '-=0.4'
  )
}

// Monitoring Section Animation
const animateMonitoringSection = () => {
  if (!monitoringSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(monitoringSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    monitoringSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate CTA section
  const cta = monitoringSection.value.querySelector('.bg-gradient-to-r')
  if (cta) {
    tl.fromTo(
      cta,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.4'
    )
  }
}

// Setup Intersection Observers
onMounted(() => {
  const observerOptions = { threshold: 0.1 }
  
  const createObserver = (ref, animationFunc) => {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationFunc()
          entry.target.observer?.unobserve(entry.target)
        }
      })
    }, observerOptions)
  }
  
  const heroObserver = createObserver(heroSection, animateHeroSection)
  const servicesObserver = createObserver(servicesSection, animateServicesSection)
  const featuresObserver = createObserver(featuresSection, animateFeaturesSection)
  const benefitsObserver = createObserver(benefitsSection, animateBenefitsSection)
  const architectureObserver = createObserver(architectureSection, animateArchitectureSection)
  const useCasesObserver = createObserver(useCasesSection, animateUseCasesSection)
  const monitoringObserver = createObserver(monitoringSection, animateMonitoringSection)
  
  nextTick(() => {
    // Animate hero immediately
    if (heroSection.value) {
      animateHeroSection()
    }
    
    // Observe all other sections
    const sections = [
      { ref: servicesSection, observer: servicesObserver },
      { ref: featuresSection, observer: featuresObserver },
      { ref: benefitsSection, observer: benefitsObserver },
      { ref: architectureSection, observer: architectureObserver },
      { ref: useCasesSection, observer: useCasesObserver },
      { ref: monitoringSection, observer: monitoringObserver }
    ]
    
    sections.forEach(({ ref, observer }) => {
      if (ref.value) {
        observer.observe(ref.value)
      }
    })
  })
})
</script>

<style scoped>
</style>

