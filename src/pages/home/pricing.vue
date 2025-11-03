<template>
    <div class="w-full">
        <!-- Mini Hero Section with Background Image -->
        <div ref="heroSection" class="w-full h-96 relative overflow-hidden bg-cover bg-center opacity-0" style="background-image: url('../../assets/home/landing.png');">
            <!-- Dark Overlay -->
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-black/40"></div>
                <img src="../../assets/pricing/pricing.png" alt="Banner" class="w-full h-full object-cover " loading="lazy">
            </div>

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
    <div ref="pricingSection" class="bg-white w-full py-20 px-6 opacity-0">
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
            <div ref="faqSection" class="text-center opacity-0">
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

    <!-- Pricing Comparison Table Section -->
    <div ref="comparisonSection" class="bg-gray-50 w-full py-20 px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Detailed Feature Comparison</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    See exactly what's included in each plan
                </p>
            </div>

            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-green-600 bg-green-50">Professional</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-sm text-gray-900">Monthly Requests</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">1,000</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-900 bg-green-50">100,000</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-sm text-gray-900">Storage</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">1 GB</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-900 bg-green-50">50 GB</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">500 GB</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-sm text-gray-900">Team Members</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">1</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-900 bg-green-50">10</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-sm text-gray-900">Support Response Time</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">48 hours</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-900 bg-green-50">4 hours</td>
                                <td class="px-6 py-4 text-center text-sm text-gray-600">1 hour</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Money Back Guarantee Section -->
    <div ref="guaranteeSection" class="bg-white w-full py-20 px-6 opacity-0">
        <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 text-center border border-green-100">
                <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h2>
                <p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Try Stormgate risk-free. If you're not satisfied, we'll refund your payment—no questions asked.
                </p>
                <div class="flex flex-wrap justify-center gap-8 mt-8">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <span class="text-gray-700 font-medium">No Setup Fees</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <span class="text-gray-700 font-medium">Cancel Anytime</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <span class="text-gray-700 font-medium">Instant Refund</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

// Section refs
const heroSection = ref(null)
const pricingSection = ref(null)
const faqSection = ref(null)
const comparisonSection = ref(null)
const guaranteeSection = ref(null)

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

// Pricing Section Animation
const animatePricingSection = () => {
  if (!pricingSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(pricingSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    pricingSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  const pricingCards = pricingSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    pricingCards,
    { y: 60, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(1.4)' },
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
    faqSection.value.querySelectorAll('h3, p'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  tl.fromTo(
    faqSection.value.querySelectorAll('button'),
    { y: 20, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.3)' },
    '-=0.4'
  )
}

// Comparison Section Animation
const animateComparisonSection = () => {
  if (!comparisonSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(comparisonSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  tl.fromTo(
    comparisonSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  tl.fromTo(
    comparisonSection.value.querySelector('.bg-white'),
    { y: 40, opacity: 0, scale: 0.98 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8 },
    '-=0.4'
  )
  
  const rows = comparisonSection.value.querySelectorAll('tbody tr')
  tl.fromTo(
    rows,
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.05, duration: 0.5 },
    '-=0.6'
  )
}

// Guarantee Section Animation
const animateGuaranteeSection = () => {
  if (!guaranteeSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(guaranteeSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  const card = guaranteeSection.value.querySelector('.bg-gradient-to-br')
  tl.fromTo(
    card,
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.3)' },
    '-=0.3'
  )
  
  tl.fromTo(
    card.querySelector('.w-20'),
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.6)' },
    '-=0.6'
  )
  
  const features = card.querySelectorAll('.flex.items-center.gap-3')
  tl.fromTo(
    features,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
    '-=0.5'
  )
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
  const pricingObserver = createObserver(pricingSection, animatePricingSection)
  const faqObserver = createObserver(faqSection, animateFaqSection)
  const comparisonObserver = createObserver(comparisonSection, animateComparisonSection)
  const guaranteeObserver = createObserver(guaranteeSection, animateGuaranteeSection)
  
  nextTick(() => {
    if (heroSection.value) {
      animateHeroSection()
    }
    
    const sections = [
      { ref: pricingSection, observer: pricingObserver },
      { ref: faqSection, observer: faqObserver },
      { ref: comparisonSection, observer: comparisonObserver },
      { ref: guaranteeSection, observer: guaranteeObserver }
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


