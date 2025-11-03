<template>
  <div ref="heroSection" class="bg-gradient-to-br from-white via-green-50 to-emerald-50 w-full min-h-screen flex justify-center items-center pt-20 relative overflow-hidden opacity-0">
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
                <div class="scroll-animation inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full" style="transition-delay: 100ms">
                    ✨ Microservices Platform
                </div>
                
                <h1 class="scroll-animation text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" style="transition-delay: 200ms">
                    Manage your Business with 
                    <span class="text-green-500 animate-pulse block sm:inline" style="animation-duration: 2.5s;">Stormgate</span>
                </h1>
                
                <p class="scroll-animation text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0" style="transition-delay: 300ms">
                    Deploy, scale, and manage microservices with ease. Stormgate is your all-in-one solution for modern business operations.
                </p>

                <div class="scroll-animation flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start" style="transition-delay: 400ms">
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
            <div class="scroll-animation w-full lg:w-2/3 flex justify-center mt-8 lg:mt-0" style="transition-delay: 200ms">
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
     <div ref="statsSection" class="bg-white w-full py-12 sm:py-16 px-4 sm:px-6 opacity-0">
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
    <div ref="metricsSection" class="bg-white w-full py-12 sm:py-16 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
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
    
    <!-- Database Error Logs Section -->
    <div ref="dbErrorSection" class="bg-gray-50 w-full py-12 sm:py-16 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                <!-- Right Column - Text Content -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Database Error Logging</h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Track and resolve database issues with detailed error logging. Monitor row-level errors and failed transactions in real-time.
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span class="text-gray-700">Real-time monitoring of database errors and failed transactions</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span class="text-gray-700">Detailed row-level error information and stack traces</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span class="text-gray-700">Visual query builder to filter and search error logs</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span class="text-gray-700">Proactive alerts for critical database issues</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Left Column - Image -->
                <div class="w-full lg:w-1/2">
                    <div class="relative ">
                        <img 
                            src="../../assets/home/service_details.png" 
                            alt="Database Error Logs Dashboard" 
                            class="w-full h-auto transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- How It Works Section -->
    <div ref="howItWorksSection" class="bg-gradient-to-b from-gray-50 to-white w-full py-16 sm:py-20 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Get started in minutes with our simple three-step process</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <!-- Connection Lines (hidden on mobile) -->
                <div class="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 opacity-30" style="width: 66%; margin: 0 auto;"></div>
                
                <!-- Step 1 -->
                <div class="relative flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg relative z-10">
                        <span class="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
                    <p class="text-gray-600">Create your account in seconds. No credit card required to get started.</p>
                </div>

                <!-- Step 2 -->
                <div class="relative flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg relative z-10">
                        <span class="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Configure</h3>
                    <p class="text-gray-600">Set up your microservices with our intuitive dashboard and configuration tools.</p>
                </div>

                <!-- Step 3 -->
                <div class="relative flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 shadow-lg relative z-10">
                        <span class="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Deploy</h3>
                    <p class="text-gray-600">Launch your services with one click and scale effortlessly as you grow.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Key Features Section -->
    <div ref="featuresSection" class="bg-white w-full py-16 sm:py-20 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Your Business</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Discover how our platform can transform your business operations with these powerful features</p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <!-- Feature 1 -->
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                    <p class="text-gray-600">Experience blazing fast performance with our optimized microservices architecture.</p>
                </div>

                <!-- Feature 2 -->
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Enterprise Security</h3>
                    <p class="text-gray-600">Bank-grade security with end-to-end encryption and compliance certifications.</p>
                </div>

                <!-- Feature 3 -->
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Easy Integration</h3>
                    <p class="text-gray-600">Seamlessly connect with your existing tools and workflows using our APIs.</p>
                </div>

                <!-- Feature 4 -->
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                    <p class="text-gray-600">Round-the-clock technical support from our team of experts.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Customers Section -->
    <div ref="customersSection" class="bg-gradient-to-r from-gray-50 to-white w-full pt-12 sm:py-16 px-4 sm:px-6 opacity-0">
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

    <!-- Testimonials Section -->
    <div ref="testimonialsSection" class="bg-white w-full py-16 sm:py-20 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from businesses that trust Stormgate</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6 italic">"Stormgate transformed how we manage our microservices. The deployment process is seamless and the monitoring tools are top-notch."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold mr-3">
                            SJ
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Sarah Johnson</p>
                            <p class="text-sm text-gray-600">CTO, TechCorp</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6 italic">"The best investment we made this year. Our deployment time decreased by 70% and our team is more productive than ever."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold mr-3">
                            MC
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Michael Chen</p>
                            <p class="text-sm text-gray-600">Lead Developer, StartupHub</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-6 italic">"Outstanding platform with excellent support. Stormgate made scaling our infrastructure effortless and cost-effective."</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold mr-3">
                            EP
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Emily Parker</p>
                            <p class="text-sm text-gray-600">VP Engineering, CloudScale</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Integration Partners Section -->
    <div ref="integrationsSection" class="bg-gray-50 w-full py-16 sm:py-20 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Connect with the tools you already use and love</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <!-- Integration logos -->
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">🐳</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">☸️</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">🔧</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">📊</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">🔐</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">
                    <div class="text-4xl grayscale group-hover:grayscale-0 transition-all">☁️</div>
                </div>
            </div>

            <div class="text-center mt-10">
                <a href="#" class="text-green-600 hover:text-green-700 font-semibold inline-flex items-center group">
                    View all integrations
                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    
    <!-- Blog Section -->
    <div ref="blogSection" class="bg-white w-full py-16 sm:py-20 px-4 sm:px-6 opacity-0">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Latest From Our Blog</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Insights, tips, and updates to help you get the most out of our platform</p>
            </div>

            <!-- Blog Carousel -->
            <div class="relative">
                <!-- Navigation Buttons -->
                <button 
                    @click="scrollCarousel('left')"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <div class="overflow-hidden">
                    <div 
                        ref="carousel"
                        class="flex space-x-6 pb-8 transition-transform duration-300 ease-out"
                        :style="{ transform: `translateX(${carouselOffset}px)` }"
                    >
                        <BlogPostCard
                            v-for="(post, index) in blogPosts"
                            :key="index"
                            :image="post.image"
                            :alt-text="post.altText"
                            :category="post.category"
                            :date="post.date"
                            :title="post.title"
                            :excerpt="post.excerpt"
                            :url="post.url"
                            :tag-variant="post.tagVariant"
                            class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                        />
                    </div>
                </div>

                <button 
                    @click="scrollCarousel('right')"
                    class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- View All Button -->
            <div class="text-center mt-10">
                <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
                    View All Articles
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import BlogPostCard from '../../components/Blog/BlogPostCard.vue'

// Scroll animation setup
const animatedElements = ref([])
const observer = ref(null)

// Initialize Intersection Observer
const initObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp')
        observer.value.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Observe all elements with the 'scroll-animation' class
  document.querySelectorAll('.scroll-animation').forEach(el => {
    observer.value.observe(el)
  })
}

const heroSection = ref(null)
const statsSection = ref(null)
const metricsSection = ref(null)
const howItWorksSection = ref(null)
const featuresSection = ref(null)
const customersSection = ref(null)
const testimonialsSection = ref(null)
const integrationsSection = ref(null)
const blogSection = ref(null)
const dbErrorSection = ref(null)

// Hero Section Animation
const animateHeroSection = () => {
  if (!heroSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Fade in the entire section
  tl.to(heroSection.value, {
    opacity: 1,
    duration: 0.3
  })
  
  // Animate badge
  tl.fromTo(
    heroSection.value.querySelector('.scroll-animation:first-of-type'),
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
  )
  
  // Animate heading
  tl.fromTo(
    heroSection.value.querySelector('h1'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.3'
  )
  
  // Animate paragraph
  tl.fromTo(
    heroSection.value.querySelector('p'),
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    '-=0.4'
  )
  
  // Animate buttons
  tl.fromTo(
    heroSection.value.querySelectorAll('button'),
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
    '-=0.3'
  )
  
  // Animate hero image
  tl.fromTo(
    heroSection.value.querySelector('img'),
    { scale: 0.9, opacity: 0, y: 30 },
    { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.6)' },
    '-=0.6'
  )
}

// Stats Section Animation
const animateStatsSection = () => {
  if (!statsSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(statsSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate stat cards with stagger
  const statCards = statsSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    statCards,
    { y: 50, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 0.7,
      ease: 'back.out(1.5)'
    },
    '-=0.3'
  )
  
  // Animate numbers with counter effect
  statCards.forEach((card, index) => {
    const number = card.querySelector('.text-4xl')
    if (number) {
      const finalText = number.textContent
      const numValue = parseInt(finalText)
      
      gsap.fromTo(number,
        { textContent: 0 },
        {
          textContent: numValue,
          duration: 1.5,
          delay: index * 0.1,
          snap: { textContent: 1 },
          onUpdate: function() {
            number.textContent = Math.floor(this.targets()[0].textContent) + finalText.replace(/[0-9]/g, '')
          }
        }
      )
    }
  })
}

// Features Section Animation
const animateFeaturesSection = () => {
  if (!featuresSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(featuresSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate section header
  tl.fromTo(
    featuresSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.6
    },
    '-=0.3'
  )
  
  // Animate feature cards
  const featureCards = featuresSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    featureCards,
    { y: 40, opacity: 0, rotateY: -15 },
    {
      y: 0,
      opacity: 1,
      rotateY: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'back.out(1.3)'
    },
    '-=0.4'
  )
  
  // Animate icons with bounce
  const icons = featuresSection.value.querySelectorAll('.grid > div > div:first-child')
  tl.fromTo(
    icons,
    { scale: 0, rotation: -180 },
    {
      scale: 1,
      rotation: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)'
    },
    '-=0.8'
  )
}

// How It Works Section Animation
const animateHowItWorksSection = () => {
  if (!howItWorksSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(howItWorksSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    howItWorksSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate connection line
  tl.fromTo(
    howItWorksSection.value.querySelector('.absolute.h-0\\.5'),
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 0.3, duration: 0.8 },
    '-=0.3'
  )
  
  // Animate step circles and content
  const steps = howItWorksSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    steps,
    { y: 40, opacity: 0, scale: 0.8 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.2, duration: 0.7, ease: 'back.out(1.5)' },
    '-=0.6'
  )
}

// Customers Section Animation
const animateCustomersSection = () => {
  if (!customersSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(customersSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    customersSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.6
    },
    '-=0.3'
  )
  
  // Animate map image
  tl.fromTo(
    customersSection.value.querySelector('img'),
    { scale: 0.95, opacity: 0, y: 20 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8
    },
    '-=0.4'
  )
}

// Testimonials Section Animation
const animateTestimonialsSection = () => {
  if (!testimonialsSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(testimonialsSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    testimonialsSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate testimonial cards
  const cards = testimonialsSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    cards,
    { y: 50, opacity: 0, rotateX: -10 },
    { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.2)' },
    '-=0.4'
  )
}

// Integrations Section Animation
const animateIntegrationsSection = () => {
  if (!integrationsSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(integrationsSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    integrationsSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate integration icons
  const icons = integrationsSection.value.querySelectorAll('.grid > div')
  tl.fromTo(
    icons,
    { scale: 0, rotation: 180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(1.7)' },
    '-=0.4'
  )
}

// Blog Section Animation
const animateBlogSection = () => {
  if (!blogSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.to(blogSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate header
  tl.fromTo(
    blogSection.value.querySelectorAll('.text-center > *'),
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  
  // Animate blog cards
  const cards = blogSection.value.querySelectorAll('[class*="flex-shrink-0"]')
  if (cards.length > 0) {
    tl.fromTo(
      cards,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
      '-=0.4'
    )
  }
}

const animateMetricsSection = () => {
  if (!metricsSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Fade in the section
  tl.to(metricsSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate text content
  tl.fromTo(
    metricsSection.value.querySelectorAll('h2, p, li'),
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.6,
      ease: 'back.out(1.2)'
    },
    '-=0.3'
  )
  
  // Animate image with a subtle bounce
  tl.fromTo(
    metricsSection.value.querySelector('img'),
    { scale: 0.95, opacity: 0, y: 20 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    },
    '-=0.5'
  )
}

const animateDbErrorSection = () => {
  if (!dbErrorSection.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Fade in the section
  tl.to(dbErrorSection.value, {
    opacity: 1,
    duration: 0.5
  })
  
  // Animate text content
  tl.fromTo(
    dbErrorSection.value.querySelectorAll('h2, p, li'),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.2)'
    },
    '-=0.3'
  )
  
  // Animate image
  tl.fromTo(
    dbErrorSection.value.querySelector('img'),
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    },
    '-=0.5'
  )
}

onMounted(() => {
  initObserver()
  // Re-run observer setup when route changes (for SPA navigation)
  window.addEventListener('popstate', initObserver)
  
  // Animate database error section when it comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateDbErrorSection()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  
  // Observe both sections for animation
  const observerOptions = { threshold: 0.1 }
  
  const errorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateDbErrorSection()
        errorObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetricsSection()
        metricsObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Create observers for all sections
  const createSectionObserver = (sectionRef, animationFunc) => {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationFunc()
          entry.target.observer?.unobserve(entry.target)
        }
      })
    }, observerOptions)
  }
  
  const heroObserver = createSectionObserver(heroSection, animateHeroSection)
  const statsObserver = createSectionObserver(statsSection, animateStatsSection)
  const howItWorksObserver = createSectionObserver(howItWorksSection, animateHowItWorksSection)
  const featuresObserver = createSectionObserver(featuresSection, animateFeaturesSection)
  const customersObserver = createSectionObserver(customersSection, animateCustomersSection)
  const testimonialsObserver = createSectionObserver(testimonialsSection, animateTestimonialsSection)
  const integrationsObserver = createSectionObserver(integrationsSection, animateIntegrationsSection)
  const blogObserver = createSectionObserver(blogSection, animateBlogSection)
  
  nextTick(() => {
    // Animate hero immediately on mount
    if (heroSection.value) {
      animateHeroSection()
    }
    
    // Observe all sections
    const sections = [
      { ref: statsSection, observer: statsObserver },
      { ref: metricsSection, observer: metricsObserver },
      { ref: howItWorksSection, observer: howItWorksObserver },
      { ref: featuresSection, observer: featuresObserver },
      { ref: customersSection, observer: customersObserver },
      { ref: testimonialsSection, observer: testimonialsObserver },
      { ref: integrationsSection, observer: integrationsObserver },
      { ref: blogSection, observer: blogObserver },
      { ref: dbErrorSection, observer: errorObserver }
    ]
    
    sections.forEach(({ ref, observer }) => {
      if (ref.value) {
        observer.observe(ref.value)
      }
    })
  })
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
  window.removeEventListener('popstate', initObserver)
})

// Carousel functionality
const carousel = ref(null);
const carouselOffset = ref(0);
const cardWidth = 384; // Width of each card + gap (384px = 1/3 of max-w-6xl + gap)

const scrollCarousel = (direction) => {
  const container = carousel.value;
  if (!container) return;
  
  const containerWidth = container.offsetWidth;
  const maxOffset = container.scrollWidth - containerWidth;
  
  if (direction === 'left') {
    carouselOffset.value = Math.min(0, carouselOffset.value + cardWidth);
  } else {
    carouselOffset.value = Math.max(-maxOffset, carouselOffset.value - cardWidth);
  }
};

// Blog posts data
const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    altText: 'Microservices Architecture',
    category: 'Architecture',
    date: 'October 28, 2025',
    title: 'Scaling Microservices: Best Practices',
    excerpt: 'Learn how to effectively scale your microservices architecture for optimal performance and reliability.',
    url: '#',
    tagVariant: 'green'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    altText: 'Database Optimization',
    category: 'Database',
    date: 'October 21, 2025',
    title: 'Optimizing Database Performance',
    excerpt: 'Discover advanced techniques to improve your database performance and reduce query times.',
    url: '#',
    tagVariant: 'blue'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    altText: 'DevOps Practices',
    category: 'DevOps',
    date: 'October 14, 2025',
    title: 'Modern DevOps Best Practices',
    excerpt: 'Implement these DevOps strategies to streamline your development and deployment processes.',
    url: '#',
    tagVariant: 'purple'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    altText: 'Cloud Security',
    category: 'Security',
    date: 'October 7, 2025',
    title: 'Cloud Security in 2025',
    excerpt: 'Stay ahead with the latest cloud security trends and best practices for your business.',
    url: '#',
    tagVariant: 'red'
  }
];

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
/* Scroll animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

.scroll-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-animation.animate-fadeInUp {
  opacity: 1;
  transform: translateY(0);
}
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