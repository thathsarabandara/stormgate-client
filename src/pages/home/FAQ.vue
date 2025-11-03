<template>
    <div class="w-full">
        <!-- Mini Hero Section with Background Image -->
        <div ref="heroSection" class="w-full h-96 relative overflow-hidden bg-cover bg-center opacity-0" style="background-image: url('../../assets/home/landing.png');">
            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-black/40">
                <div class="absolute inset-0 bg-black/40"></div>
                <img src="../../assets/faq/faq.png" alt="Banner" class="w-full h-full object-cover " loading="lazy"></img>
            </div>

            <div class="max-w-6xl mx-auto relative z-10 h-full flex flex-col justify-center px-6">
                <!-- Breadcrumbs -->
                <div class="animate-in fade-in slide-in-from-left-8 duration-800 mb-6">
                    <nav class="flex items-center gap-2 text-sm">
                        <router-link to="/" class="text-white hover:text-green-300 transition-colors font-medium">Home</router-link>
                        <span class="text-white/60">/</span>
                        <span class="text-white/80 font-medium">FAQ</span>
                    </nav>
                </div>

                <!-- Hero Content -->
                <div class="space-y-4 animate-in fade-in slide-in-from-left-8 duration-800 delay-100 max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-white">
                        Frequently Asked Questions
                    </h1>
                    <p class="text-xl text-white/90 leading-relaxed">
                        Find answers to common questions about our microservices platform and get the support you need.
                    </p>
                </div>
            </div>
        </div>
    <!-- FAQ Content Section -->
    <div ref="faqSection" class="bg-white w-full py-16 px-6 opacity-0">
        <div class="max-w-3xl mx-auto">
            <!-- FAQ Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions about Stormgate and get the help you need.
                </p>

                <!-- Simple Search Bar -->
                <div class="mt-8 max-w-xl mx-auto">
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Search questions..."
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                        <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- FAQ List -->
            <div ref="faqList" class="space-y-4 opacity-0">
                <!-- FAQ Item 1 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq1"
                        :class="openFAQ === 'faq1' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">What is Stormgate?</span>
                        <svg
                            :class="openFAQ === 'faq1' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq1' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Stormgate is a comprehensive microservices platform providing enterprise-grade solutions for authentication, profile management, notifications, cart services, order processing, and payment systems.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq2"
                        :class="openFAQ === 'faq2' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">How do I get started?</span>
                        <svg
                            :class="openFAQ === 'faq2' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq2' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Simply sign up for a free account, choose your plan, and start integrating our microservices. We provide comprehensive documentation and support.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq3"
                        :class="openFAQ === 'faq3' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">Is there a free plan?</span>
                        <svg
                            :class="openFAQ === 'faq3' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq3' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Yes! Our free Starter plan includes up to 1,000 requests per month, basic authentication, profile management, and email support.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq4"
                        :class="openFAQ === 'faq4' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">What services do you offer?</span>
                        <svg
                            :class="openFAQ === 'faq4' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq4' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            We offer Authentication, Profile Service, Notification Service, Cart Service, Order Service, and Payment Service - all scalable, secure, and easy to integrate.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 5 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq5"
                        :class="openFAQ === 'faq5' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">How secure are your services?</span>
                        <svg
                            :class="openFAQ === 'faq5' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq5' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            All services include enterprise-grade security with OAuth 2.0, JWT tokens, MFA support, and industry compliance. We maintain 99.9% uptime.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 6 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq6"
                        :class="openFAQ === 'faq6' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">Do you provide API documentation?</span>
                        <svg
                            :class="openFAQ === 'faq6' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq6' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Yes! We provide comprehensive API documentation with interactive examples, code samples in multiple languages, and integration guides.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 7 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq7"
                        :class="openFAQ === 'faq7' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">How can I contact support?</span>
                        <svg
                            :class="openFAQ === 'faq7' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq7' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Contact us via email (hello@stormgate.com), phone (+94 11 2 123 456), or our support portal. Enterprise clients get 24/7 support.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 8 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq8"
                        :class="openFAQ === 'faq8' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">What payment methods do you accept?</span>
                        <svg
                            :class="openFAQ === 'faq8' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq8' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Secure processing through Stripe.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 9 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq9"
                        :class="openFAQ === 'faq9' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">Can I upgrade or downgrade my plan?</span>
                        <svg
                            :class="openFAQ === 'faq9' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq9' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            Yes! You can upgrade or downgrade anytime. Changes take effect immediately with prorated billing for the current month.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 10 -->
                <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 hover:shadow-sm transition-all">
                    <button
                        data-faq-button
                        data-faq-id="faq10"
                        :class="openFAQ === 'faq10' ? 'focus:ring-green-500' : ''"
                        class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset"
                    >
                        <span class="text-lg font-medium text-gray-900">What is your uptime guarantee?</span>
                        <svg
                            :class="openFAQ === 'faq10' ? 'rotate-180' : ''"
                            class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div :class="openFAQ === 'faq10' ? 'block' : 'hidden'" class="px-6 pb-4">
                        <p class="text-gray-600 leading-relaxed">
                            We guarantee 99.9% uptime for all services. Enterprise clients receive dedicated support managers and service level agreements.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Contact Section -->
            <div ref="contactSection" class="mt-16 text-center bg-gray-50 rounded-2xl p-8 opacity-0">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
                <p class="text-gray-600 mb-6 max-w-xl mx-auto">
                    Can't find the answer you're looking for? Our support team is here to help you with any questions or issues.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Contact Support
                    </button>
                    <button class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
                        Schedule Demo
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ Categories Section -->
    <div ref="categoriesSection" class="bg-gray-50 w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find answers organized by topic for quick access
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Category 1 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                        <svg class="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Getting Started</h3>
                    <p class="text-gray-600 mb-4">Learn the basics of setting up and using Stormgate</p>
                    <span class="text-green-600 font-semibold text-sm group-hover:underline">8 Articles →</span>
                </div>

                <!-- Category 2 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                        <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Security & Privacy</h3>
                    <p class="text-gray-600 mb-4">Understand our security measures and data protection</p>
                    <span class="text-blue-600 font-semibold text-sm group-hover:underline">12 Articles →</span>
                </div>

                <!-- Category 3 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                        <svg class="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Billing & Pricing</h3>
                    <p class="text-gray-600 mb-4">Questions about plans, payments, and invoices</p>
                    <span class="text-purple-600 font-semibold text-sm group-hover:underline">10 Articles →</span>
                </div>

                <!-- Category 4 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                        <svg class="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">API & Integration</h3>
                    <p class="text-gray-600 mb-4">Technical guides for developers and integrations</p>
                    <span class="text-orange-600 font-semibold text-sm group-hover:underline">15 Articles →</span>
                </div>

                <!-- Category 5 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
                        <svg class="w-6 h-6 text-pink-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Troubleshooting</h3>
                    <p class="text-gray-600 mb-4">Solutions to common issues and error messages</p>
                    <span class="text-pink-600 font-semibold text-sm group-hover:underline">14 Articles →</span>
                </div>

                <!-- Category 6 -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                        <svg class="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Performance</h3>
                    <p class="text-gray-600 mb-4">Optimize your services for better performance</p>
                    <span class="text-indigo-600 font-semibold text-sm group-hover:underline">9 Articles →</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Popular Resources Section -->
    <div ref="resourcesSection" class="bg-white w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Popular Resources</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Quick access to our most helpful guides and documentation
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Resource 1 -->
                <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Quick Start Guide</h3>
                        <p class="text-gray-600 text-sm">Get up and running with Stormgate in under 10 minutes</p>
                    </div>
                </div>

                <!-- Resource 2 -->
                <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">API Documentation</h3>
                        <p class="text-gray-600 text-sm">Complete reference for all our microservices APIs</p>
                    </div>
                </div>

                <!-- Resource 3 -->
                <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Best Practices</h3>
                        <p class="text-gray-600 text-sm">Learn how to optimize your microservices implementation</p>
                    </div>
                </div>

                <!-- Resource 4 -->
                <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                    <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Video Tutorials</h3>
                        <p class="text-gray-600 text-sm">Step-by-step video guides for common tasks</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const openFAQ = ref(null)

// Section refs
const heroSection = ref(null)
const faqSection = ref(null)
const faqList = ref(null)
const contactSection = ref(null)
const categoriesSection = ref(null)
const resourcesSection = ref(null)

const toggleFAQ = (faqId) => {
  openFAQ.value = openFAQ.value === faqId ? null : faqId
}

// Hero Section Animation
const animateHeroSection = () => {
  if (!heroSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(heroSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    heroSection.value.querySelector('nav'),
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 },
    '-=0.3'
  )
  
  tl.fromTo(
    heroSection.value.querySelectorAll('h1, p'),
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.2, duration: 0.7 },
    '-=0.4'
  )
}

// FAQ Section Animation
const animateFaqSection = () => {
  if (!faqSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(faqSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    faqSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  const searchBar = faqSection.value.querySelector('.relative')
  tl.fromTo(
    searchBar,
    { y: 20, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.3)' },
    '-=0.4'
  )
}

// FAQ List Animation
const animateFaqList = () => {
  if (!faqList.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(faqList.value, {
    opacity: 1,
    duration: 0.5
  })
  
  const faqItems = faqList.value.querySelectorAll('.border')
  tl.fromTo(
    faqItems,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.08, duration: 0.6 },
    '-=0.3'
  )
}

// Contact Section Animation
const animateContactSection = () => {
  if (!contactSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.fromTo(
    contactSection.value,
    { y: 40, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.3)' }
  )
  
  tl.fromTo(
    contactSection.value.querySelectorAll('h3, p'),
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.6'
  )
  
  tl.fromTo(
    contactSection.value.querySelectorAll('button'),
    { y: 20, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.4)' },
    '-=0.4'
  )
}

// Categories Section Animation
const animateCategoriesSection = () => {
  if (!categoriesSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(categoriesSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    categoriesSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  const categoryCards = categoriesSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    categoryCards,
    { y: 50, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: 'back.out(1.4)' },
    '-=0.4'
  )
  
  const icons = categoriesSection.value.querySelectorAll('.w-12.h-12')
  tl.fromTo(
    icons,
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, stagger: 0.1, duration: 0.6, ease: 'elastic.out(1, 0.6)' },
    '-=0.7'
  )
}

// Resources Section Animation
const animateResourcesSection = () => {
  if (!resourcesSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(resourcesSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    resourcesSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  const resourceCards = resourcesSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    resourceCards,
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.12, duration: 0.7 },
    '-=0.4'
  )
}

onMounted(() => {
  // Add click listeners to FAQ buttons
  const faqButtons = document.querySelectorAll('[data-faq-button]')
  faqButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const faqId = e.currentTarget.dataset.faqId
      toggleFAQ(faqId)
    })
  })

  // Setup Intersection Observers for animations
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
  const faqSectionObserver = createObserver(faqSection, animateFaqSection)
  const faqListObserver = createObserver(faqList, animateFaqList)
  const contactObserver = createObserver(contactSection, animateContactSection)
  const categoriesObserver = createObserver(categoriesSection, animateCategoriesSection)
  const resourcesObserver = createObserver(resourcesSection, animateResourcesSection)
  
  nextTick(() => {
    if (heroSection.value) {
      animateHeroSection()
    }
    
    const sections = [
      { ref: faqSection, observer: faqSectionObserver },
      { ref: faqList, observer: faqListObserver },
      { ref: contactSection, observer: contactObserver },
      { ref: categoriesSection, observer: categoriesObserver },
      { ref: resourcesSection, observer: resourcesObserver }
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
/* FAQ Animation */
.rotate-180 {
    transform: rotate(180deg);
}
</style>
