<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-50">
    <AdminSidebar class="fixed z-10" />
    <div class="ml-6 lg:ml-16 w-full">
      <AdminNavbar />
      <main class="p-4 sm:p-6">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '../../components/admin/AdminSidebar.vue'
import AdminNavbar from '../../components/admin/AdminNavbar.vue'
import Footer from '../../components/Footer/Footer.vue'
</script>
