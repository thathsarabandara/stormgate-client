<template>
    <LandingNavbar  class="fixed top-0 left-0 right-0 z-50"/>
    <main>
        <router-view />
    </main>
    <LandingFooter />
  </template>
  
  <script setup>
  import LandingNavbar from '../Navbar/LandingNavbar.vue';
  import LandingFooter from '../Footer/LandingFooter.vue';
  </script>
  
  
