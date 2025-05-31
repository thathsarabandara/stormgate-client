<template>
  <div class="flex">
    <Sidebar  />
    <main class="">
      <Navbar />
      <div class="bg-gray-100">
        <router-view />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../Navbar/Navbar.vue';
import Footer from '../Footer/Footer.vue';
</script>

