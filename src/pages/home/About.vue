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
                        <span class="text-white/80 font-medium">About</span>
                    </nav>
                </div>

                <!-- Hero Content -->
                <div class="space-y-4 animate-in fade-in slide-in-from-left-8 duration-800 delay-100 max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-white">
                        About Stormgate
                    </h1>
                    <p class="text-xl text-white/90 leading-relaxed">
                        Leading the future of microservices with innovative solutions that power businesses worldwide.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- About Content Section -->
    <div class="bg-white w-full py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Company Story Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <!-- Left Content -->
                <div class="space-y-6 animate-in fade-in slide-in-from-left-8 duration-800">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Founded in 2020, Stormgate emerged from a simple vision: to democratize enterprise-grade microservices for businesses of all sizes. What started as a small team of passionate engineers has grown into a global platform powering thousands of applications worldwide.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        We believe that every business deserves access to scalable, reliable, and secure microservices infrastructure. Our mission is to bridge the gap between complex enterprise solutions and the growing needs of modern businesses.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <div class="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span class="font-semibold">Lightning Fast</span>
                        </div>
                        <div class="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            <span class="font-semibold">Enterprise Security</span>
                        </div>
                        <div class="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                            </svg>
                            <span class="font-semibold">99.9% Uptime</span>
                        </div>
                    </div>
                </div>

                <!-- Right Image Placeholder -->
                <div class="relative animate-in fade-in slide-in-from-right-8 duration-800 delay-100">
                    <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div class="text-center text-gray-500">
                            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class="font-semibold">Company Image</p>
                            <p class="text-sm">Team collaboration or office space</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Team Section -->
            <div class="mb-20">
                <div class="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-800">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our diverse team of engineers, designers, and strategists work together to build the future of microservices.
                    </p>
                </div>

                <!-- Team Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Team Member 1 -->
                    <div class="text-center animate-in fade-in zoom-in duration-800">
                        <div class="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
                            <div class="text-blue-600">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
                        <p class="text-green-600 font-semibold mb-1">CEO & Co-Founder</p>
                        <p class="text-gray-600 text-sm">15+ years in enterprise software</p>
                    </div>

                    <!-- Team Member 2 -->
                    <div class="text-center animate-in fade-in zoom-in duration-800 delay-100">
                        <div class="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
                            <div class="text-green-600">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
                        <p class="text-green-600 font-semibold mb-1">CTO & Co-Founder</p>
                        <p class="text-gray-600 text-sm">Ex-Google, microservices expert</p>
                    </div>

                    <!-- Team Member 3 -->
                    <div class="text-center animate-in fade-in zoom-in duration-800 delay-200">
                        <div class="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
                            <div class="text-purple-600">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Aisha Patel</h3>
                        <p class="text-green-600 font-semibold mb-1">Head of Engineering</p>
                        <p class="text-gray-600 text-sm">Distributed systems specialist</p>
                    </div>

                    <!-- Team Member 4 -->
                    <div class="text-center animate-in fade-in zoom-in duration-800 delay-300">
                        <div class="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
                            <div class="text-orange-600">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">David Kim</h3>
                        <p class="text-green-600 font-semibold mb-1">VP of Product</p>
                        <p class="text-gray-600 text-sm">Product strategy & UX design</p>
                    </div>
                </div>
            </div>

            <!-- Values Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Image Placeholder -->
                <div class="relative animate-in fade-in slide-in-from-left-8 duration-800 order-2 lg:order-1">
                    <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div class="text-center text-gray-500">
                            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                            <p class="font-semibold">Office Environment</p>
                            <p class="text-sm">Modern workspace or company culture</p>
                        </div>
                    </div>
                </div>

                <!-- Right Content -->
                <div class="space-y-8 animate-in fade-in slide-in-from-right-8 duration-800 delay-100 order-1 lg:order-2">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <p class="text-lg text-gray-600 mb-8">
                            The principles that guide everything we do and drive us to create exceptional solutions for our customers.
                        </p>
                    </div>

                    <!-- Values List -->
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                                <p class="text-gray-600">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Customer Obsessed</h3>
                                <p class="text-gray-600">Every decision we make is driven by what creates the most value for our customers and their success.</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Reliability & Trust</h3>
                                <p class="text-gray-600">We build systems that businesses can depend on, with enterprise-grade security and 99.9% uptime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact & Location Section -->
    <div class="bg-gray-50 w-full py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-800">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Located at the University of Sri Jayewardenepura, our office serves as a hub for innovation and collaboration in the heart of Nugegoda.
                </p>
            </div>

            <!-- Map and Contact Info Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Map Section -->
                <div class="relative animate-in fade-in slide-in-from-left-8 duration-800">
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                        <!-- Google Map Embed -->
                        <div class="aspect-video relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9027205678536!2d79.91685491477233!3d6.902604994999166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2506b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sUniversity%20of%20Sri%20Jayewardenepura!5e0!3m2!1sen!2slk!4v1699999999999!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                class="absolute inset-0">
                            </iframe>

                            <!-- Map Overlay for Customization -->
                            <div class="absolute top-4 left-4 bg-white rounded-lg shadow-md px-3 py-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <span class="text-sm font-semibold text-gray-900">Stormgate Office</span>
                                </div>
                            </div>
                        </div>

                        <!-- Address Card -->
                        <div class="p-6 bg-gray-50 border-t border-gray-200">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 mb-1">Stormgate Headquarters</h3>
                                    <p class="text-gray-600 mb-1">University of Sri Jayewardenepura</p>
                                    <p class="text-gray-600 mb-1">Gangodawilla, Nugegoda</p>
                                    <p class="text-gray-600">Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8 animate-in fade-in slide-in-from-right-8 duration-800 delay-100">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                        <p class="text-lg text-gray-600 mb-8">
                            Ready to transform your business with our microservices? We'd love to hear from you and discuss how we can help scale your operations.
                        </p>
                    </div>

                    <!-- Contact Methods -->
                    <div class="space-y-6">
                        <!-- Phone -->
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                                <p class="text-gray-600">+94 11 2 123 456</p>
                                <p class="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM UTC+5:30</p>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                                <p class="text-gray-600">hello@stormgate.com</p>
                                <p class="text-sm text-gray-500">We respond within 24 hours</p>
                            </div>
                        </div>

                        <!-- Office Hours -->
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-1">Office Hours</h4>
                                <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM UTC+5:30</p>
                                <p class="text-sm text-gray-500">Weekend support available for enterprise clients</p>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-1">Follow Us</h4>
                                <div class="flex gap-3">
                                    <a href="#" class="text-gray-600 hover:text-green-600 transition-colors">
                                        <span class="sr-only">LinkedIn</span>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-green-600 transition-colors">
                                        <span class="sr-only">Twitter</span>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-green-600 transition-colors">
                                        <span class="sr-only">GitHub</span>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Call to Action -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center w-full mt-12">
                        <h4 class="text-xl font-bold mb-2">Ready to Get Started?</h4>
                        <p class="text-green-100 mb-4">Schedule a demo and see how Stormgate can transform your business.</p>
                        <button class="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                            Schedule Demo
                        </button>
                    </div>
        </div>
    </div>
</template> 
<script setup>
</script>

<style scoped>
</style>

