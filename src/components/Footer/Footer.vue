<template>
  <div class="flex justify-between items-center bg-white p-3">
    <p class="font-bold text-xs text-gray-500 ml-16">
      © 2025 - Stormgate. Designed by Storm. All rights reserved
    </p>
    <div class="flex justify-between items-center space-x-2 mr-4">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="text-xs text-gray-500"
      >
        <span class="ml-3 text-black ">{{ link.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const links = [
  { label: "FAQ's", path: "/faq" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms and Conditions", path: "/terms-conditions" }
];
</script>
