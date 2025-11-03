<template>
    <div class="bg-gradient-to-br from-white via-green-50 to-emerald-50 w-full min-h-screen flex justify-center items-center pt-20 relative overflow-hidden">
        <!-- Animated Background Shapes -->
        <div class="absolute inset-0 pointer-events-none">
            <!-- Glowing Blob 1 -->
            <div class="absolute top-0 left-1/4 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style="animation-duration: 5s;"></div>
            
            <!-- Glowing Blob 2 -->
            <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style="animation-duration: 6s; animation-delay: 1s;"></div>
            
            <!-- Floating Circle 1 -->
            <div class="absolute top-20 left-10 w-24 h-24 border-2 border-green-300 rounded-full opacity-50" style="animation: float 8s ease-in-out infinite;"></div>
            
            <!-- Floating Circle 2 -->
            <div class="absolute bottom-32 right-20 w-32 h-32 border-2 border-emerald-200 rounded-full opacity-40" style="animation: float 10s ease-in-out infinite reverse;"></div>
            
            <!-- Animated Dots -->
            <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full opacity-60" style="animation: float 6s ease-in-out infinite;"></div>
            <div class="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-emerald-400 rounded-full opacity-50" style="animation: float 7s ease-in-out infinite; animation-delay: 1s;"></div>
            
            <!-- Floating Line -->
            <div class="absolute top-1/2 left-1/3 w-40 h-0.5 bg-gradient-to-r from-green-400 to-transparent opacity-30" style="animation: slideAcross 8s ease-in-out infinite;"></div>
        </div>

        <div class="flex flex-col lg:flex-row w-11/12 md:w-10/12 gap-8 lg:gap-16 items-center relative z-10">
            <!-- Left Content Section -->
            <div class="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
                <div class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-in fade-in duration-800 delay-100">
                    ✨ Microservices Platform
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-in fade-in slide-in-from-left-8 duration-800">
                    Manage your Business with 
                    <span class="text-green-500 animate-pulse block sm:inline" style="animation-duration: 2.5s;">Stormgate</span>
                </h1>
                
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-800 delay-100 max-w-2xl mx-auto lg:mx-0">
                    Deploy, scale, and manage microservices with ease. Stormgate is your all-in-one solution for modern business operations.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-200 justify-center lg:justify-start">
                    <button class="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 active:scale-95 overflow-hidden text-sm sm:text-base">
                        <span class="relative z-10">Get Started</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button class="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 text-sm sm:text-base">
                        Learn More
                    </button>
                </div>
            </div>

            <!-- Right Image Section -->
            <div class="w-full lg:w-2/3 flex justify-center animate-in fade-in slide-in-from-right-8 duration-800 mt-8 lg:mt-0">
                <div class="relative w-full max-w-xl lg:max-w-none">
                    <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <img 
                        src="../../assets/home/landing.png" 
                        alt="Banner"
                        class="relative w-full h-auto rounded-6xl transition-shadow hover:scale-105 transform duration-700"                        loading="lazy"
                    >
                </div>
            </div>
        </div>
    </div>
     <!-- Stats Section -->
     <div class="bg-white w-full py-12 sm:py-16 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <!-- Active Users Stat -->
                <div class="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg hover:scale-105 transition-transform animate-in fade-in zoom-in slide-in-from-bottom-8 duration-1000">
                    <div class="text-4xl font-bold text-green-600 mb-2 animate-in fade-in duration-1000 delay-200">{{ activeUsers }}K+</div>
                    <div class="text-gray-600 font-semibold text-center animate-in fade-in duration-1000 delay-300">Active Users</div>
                    <div class="text-sm text-gray-500 mt-2 text-center animate-in fade-in duration-1000 delay-400">Growing daily</div>
                </div>

                <!-- Current Microservices Stat -->
                <div class="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg hover:scale-105 transition-transform animate-in fade-in zoom-in slide-in-from-bottom-8 duration-1000 delay-100">
                    <div class="text-4xl font-bold text-blue-600 mb-2 animate-in fade-in duration-1000 delay-300">{{ microservices }}+</div>
                    <div class="text-gray-600 font-semibold text-center animate-in fade-in duration-1000 delay-400">Microservices</div>
                    <div class="text-sm text-gray-500 mt-2 text-center animate-in fade-in duration-1000 delay-500">Fully integrated</div>
                </div>

                <!-- Uptime Stat -->
                <div class="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg hover:scale-105 transition-transform animate-in fade-in zoom-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <div class="text-4xl font-bold text-purple-600 mb-2 animate-in fade-in duration-1000 delay-400">{{ uptime }}%</div>
                    <div class="text-gray-600 font-semibold text-center animate-in fade-in duration-1000 delay-500">Uptime</div>
                    <div class="text-sm text-gray-500 mt-2 text-center animate-in fade-in duration-1000 delay-600">Guaranteed reliability</div>
                </div>

                <!-- Projects Deployed Stat -->
                <div class="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg hover:scale-105 transition-transform animate-in fade-in zoom-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <div class="text-4xl font-bold text-orange-600 mb-2 animate-in fade-in duration-1000 delay-500">{{ projectsDeployed }}K+</div>
                    <div class="text-gray-600 font-semibold text-center animate-in fade-in duration-1000 delay-600">Projects Deployed</div>
                    <div class="text-sm text-gray-500 mt-2 text-center animate-in fade-in duration-1000 delay-700">Worldwide</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Metrics Section -->
    <div class="bg-white w-full py-12 sm:py-16 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <!-- Left Column - Text Content -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Real-time Service Metrics</h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Monitor your microservices with comprehensive, real-time metrics. Track uptime, response times, and system health at a glance.
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-700">Real-time uptime monitoring with 99.9% accuracy</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-700">Detailed latency metrics and response time analysis</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-700">Customizable dashboards for your team's needs</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-gray-700">Instant alerts for any service disruptions</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Right Column - Image -->
                <div class="w-full lg:w-1/2">
                    <div class="relative rounded-xl">
                        <img 
                            src="../../assets/home/metrics.png" 
                            alt="Service Metrics Dashboard" 
                            class="w-full h-auto transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        >
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Customers Section -->
    <div class="bg-gradient-to-r from-gray-50 to-white w-full pt-12 sm:py-16 px-4 sm:px-6">
        <div class="flex flex-col items-center justify-start mx-auto -mb-18">
            <!-- Section Header -->
            <div class="text-center animate-in fade-in slide-in-from-top-4 duration-800">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Trusted by Leading Companies</h2>
                <p class="text-base sm:text-lg text-gray-600">Join thousands of businesses using Stormgate</p>
            </div>

            <!-- Map Image -->
            <div class="flex justify-center items-center max-w-6xl rounded-xl overflow-hidden  animate-in fade-in duration-1000">
                <img src="../../assets/home/map.png" alt="Customer Locations Map" class="w-full h-auto">
            </div>
        </div>
            <!-- Customers Carousel -->
            <div class="relative overflow-hidden">
                <div class="relative h-[500px] overflow-hidden">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
                        <div class="relative w-full h-full flex items-center">
                            <!-- First Row (Moving Left) -->
                            <div class="flex space-x-8 animate-marquee whitespace-nowrap">
                                <div v-for="(customer, index) in customers" :key="'first-' + index" class="flex-shrink-0 w-80">
                                    <div class="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                        <div class="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                                            <img :src="customer.logo" :alt="customer.name" class="w-20 h-20 object-contain">
                                        </div>
                                        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ customer.name }}</h3>
                                        <p class="text-gray-600 text-center text-sm mb-4">{{ customer.description }}</p>
                                        <div class="flex gap-1">
                                            <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Duplicate for seamless loop -->
                            <div class="flex space-x-8 animate-marquee2 whitespace-nowrap absolute left-full">
                                <div v-for="(customer, index) in customers" :key="'second-' + index" class="flex-shrink-0 w-80">
                                    <div class="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                        <div class="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                                            <img :src="customer.logo" :alt="customer.name" class="w-20 h-20 object-contain">
                                        </div>
                                        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ customer.name }}</h3>
                                        <p class="text-gray-600 text-center text-sm mb-4">{{ customer.description }}</p>
                                        <div class="flex gap-1">
                                            <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- Newsletter Section -->
    <div class="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 w-full py-20 px-6 relative overflow-hidden">
        <!-- Background Animation Elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style="animation-duration: 4s;"></div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style="animation-duration: 5s; animation-delay: 1s;"></div>
        </div>

        <div class="max-w-2xl mx-auto text-center relative z-10">
            <!-- Header -->
            <div class="animate-in fade-in slide-in-from-top-8 duration-800 mb-8">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Stay Updated</h2>
                <p class="text-lg text-white/90">Get the latest news and updates about Stormgate delivered to your inbox.</p>
            </div>

            <!-- Newsletter Form -->
            <div class="animate-in fade-in slide-in-from-bottom-8 duration-800 delay-200">
                <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 mb-6">
                    <input 
                        v-model="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        class="flex-1 px-6 py-4 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all duration-300 hover:bg-white"
                        required
                    >
                    <button 
                        type="submit"
                        class="group relative px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/50 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                        <span class="relative z-10">Subscribe</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>

                <!-- Success Message -->
                <transition name="fade">
                    <div v-if="subscribeSuccess" class="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white/20 border border-white/40 rounded-lg px-6 py-3 text-white font-semibold backdrop-blur-sm">
                        ✓ Thank you for subscribing! Check your email for confirmation.
                    </div>
                </transition>

                <!-- Privacy Note -->
                <p class="text-white/80 text-sm mt-6">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div class="animate-in fade-in zoom-in duration-800 delay-300">
                    <div class="text-3xl font-bold text-white">50K+</div>
                    <div class="text-white/80 text-sm">Subscribers</div>
                </div>
                <div class="animate-in fade-in zoom-in duration-800 delay-400">
                    <div class="text-3xl font-bold text-white">Weekly</div>
                    <div class="text-white/80 text-sm">Updates</div>
                </div>
                <div class="animate-in fade-in zoom-in duration-800 delay-500">
                    <div class="text-3xl font-bold text-white">100%</div>
                    <div class="text-white/80 text-sm">Spam-free</div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Customer data
const customers = ref([
  {
    name: 'E-Mentor',
    description: 'Leading Learning Management Platform',
    logo: new URL('../../assets/home/customers/ementor.png', import.meta.url).href
  },
  {
    name: 'Health Sphere',
    description: 'Leading Healthcare solutions',
    logo: new URL('../../assets/home/customers/healthsphere.png', import.meta.url).href
  },
  {
    name: 'Big Cart',
    description: 'Leading E-commerce platform',
    logo: new URL('../../assets/home/customers/bigcart.png', import.meta.url).href
  },
  {
    name: 'Chefza',
    description: 'Leading restaurant management platform',
    logo: new URL('../../assets/home/customers/chefza.png', import.meta.url).href
  },
  {
    name: 'Sixteen Clothing',
    description: 'Leading fashion e-commerce platform',
    logo: new URL('../../assets/home/customers/sixteenclothing.png', import.meta.url).href
  },
  {
    name: 'StormGate',
    description: 'Leading microservices platform',
    logo: new URL('../../assets/home/customers/stromgate.png', import.meta.url).href
  }
])

const activeUsers = ref(0)
const microservices = ref(0)
const uptime = ref(0)
const projectsDeployed = ref(0)
const email = ref('')
const subscribeSuccess = ref(false)

const animateCounter = (target, duration = 2000) => {
  return new Promise((resolve) => {
    const start = 0
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
        resolve()
      }
      return current
    }, 16)
  })
}

const subscribeNewsletter = () => {
  if (email.value) {
    subscribeSuccess.value = true
    email.value = ''
    setTimeout(() => {
      subscribeSuccess.value = false
    }, 5000)
  }
}

onMounted(() => {
  // Delay animation start to match entrance animation
  setTimeout(() => {
    // Animate Active Users (12.5K)
    let currentUsers = 0
    const usersInterval = setInterval(() => {
      currentUsers += 0.5
      activeUsers.value = parseFloat(currentUsers.toFixed(1))
      if (currentUsers >= 12.5) {
        activeUsers.value = 12.5
        clearInterval(usersInterval)
      }
    }, 30)

    // Animate Microservices (48)
    let currentServices = 0
    const servicesInterval = setInterval(() => {
      currentServices += 1.2
      microservices.value = Math.floor(currentServices)
      if (currentServices >= 48) {
        microservices.value = 48
        clearInterval(servicesInterval)
      }
    }, 30)

    // Animate Uptime (99.9)
    let currentUptime = 0
    const uptimeInterval = setInterval(() => {
      currentUptime += 2.5
      uptime.value = parseFloat(currentUptime.toFixed(1))
      if (currentUptime >= 99.9) {
        uptime.value = 99.9
        clearInterval(uptimeInterval)
      }
    }, 30)

    // Animate Projects (2.3K)
    let currentProjects = 0
    const projectsInterval = setInterval(() => {
      currentProjects += 0.08
      projectsDeployed.value = parseFloat(currentProjects.toFixed(1))
      if (currentProjects >= 2.3) {
        projectsDeployed.value = 2.3
        clearInterval(projectsInterval)
      }
    }, 30)
  }, 800) // Start after entrance animation
})
</script>

<style scoped>
/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  animation-play-state: running;
}

.animate-marquee2 {
  animation: marquee 30s linear infinite 15s;
  animation-play-state: running;
}

/* Pause animation on hover */
.relative:hover .animate-marquee,
.relative:hover .animate-marquee2 {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-marquee,
  .animate-marquee2 {
    animation-duration: 40s;
  }
  
  .animate-marquee2 {
    animation-delay: 20s;
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-40px);
  }
}

@keyframes slideAcross {
  0%, 100% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(200%);
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>