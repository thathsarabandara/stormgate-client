<template>
  <footer class="bg-white border-t border-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
        <!-- Copyright Text -->
        <p class="text-xs sm:text-sm text-gray-500 font-medium text-center md:text-left mb-3 md:mb-0">
          © 2025 - Stormgate. Designed by Storm. All rights reserved
        </p>
        
        <!-- Footer Links -->
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600 font-medium"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { label: "FAQ's", path: "/faq" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-conditions" }
];
</script>
