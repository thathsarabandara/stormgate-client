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
    <div class="bg-white w-full py-16 px-6">
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
            <div class="space-y-4">
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
            <div class="mt-16 text-center bg-gray-50 rounded-2xl p-8">
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
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const openFAQ = ref(null)

const toggleFAQ = (faqId) => {
  openFAQ.value = openFAQ.value === faqId ? null : faqId
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
})
</script>

<style scoped>
/* FAQ Animation */
.rotate-180 {
    transform: rotate(180deg);
}
</style>
