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
                        <span class="text-white/80 font-medium">Pricing</span>
                    </nav>
                </div>

                <!-- Hero Content -->
                <div class="space-y-4 animate-in fade-in slide-in-from-left-8 duration-800 delay-100 max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-white">
                        Pricing Plans
                    </h1>
                    <p class="text-xl text-white/90 leading-relaxed">
                        Transparent, flexible pricing designed to scale with your business needs and budget.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Pricing Content Section -->
    <div class="bg-white w-full py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-800">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Start free and scale as you grow. All plans include our core microservices with 99.9% uptime SLA.
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Starter Plan -->
                <div class="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-xl transition-all animate-in fade-in slide-in-from-left-8 duration-800">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-green-500">$0</span>
                            <span class="text-gray-600">/month</span>
                        </div>
                        <p class="text-gray-600 mb-8">Perfect for getting started with basic microservices</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Up to 1,000 requests/month</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Basic Authentication Service</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Profile Management</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Email Support</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span class="text-gray-400">Advanced Analytics</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span class="text-gray-400">Custom Integrations</span>
                        </div>
                    </div>

                    <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                        Get Started Free
                    </button>
                </div>

                <!-- Professional Plan (Popular) -->
                <div class="relative bg-white border-2 border-green-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-in fade-in zoom-in duration-800 delay-100 scale-105">
                    <!-- Popular Badge -->
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>

                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-green-500">$49</span>
                            <span class="text-gray-600">/month</span>
                        </div>
                        <p class="text-gray-600 mb-8">Ideal for growing businesses with advanced needs</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Up to 100,000 requests/month</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">All Core Services Included</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Real-time Notifications</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Advanced Analytics</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Priority Support</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span class="text-gray-400">Custom Integrations</span>
                        </div>
                    </div>

                    <button class="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                        Start Professional Trial
                    </button>
                </div>

                <!-- Enterprise Plan -->
                <div class="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-xl transition-all animate-in fade-in slide-in-from-right-8 duration-800 delay-200">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-green-500">$199</span>
                            <span class="text-gray-600">/month</span>
                        </div>
                        <p class="text-gray-600 mb-8">Full-featured solution for large-scale operations</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Unlimited requests</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">All Services + Custom APIs</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Advanced Security & Compliance</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Custom Integrations</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">Dedicated Support Manager</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-700">SLA Guarantee</span>
                        </div>
                    </div>

                    <button class="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                        Contact Sales
                    </button>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="text-center animate-in fade-in slide-in-from-bottom-4 duration-800 delay-300">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Have questions about our pricing? We're here to help you choose the right plan for your needs.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105">
                        View FAQ
                    </button>
                    <button class="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>


