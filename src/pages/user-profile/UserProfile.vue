<template>
  <div class="mx-4 mt-3 ">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Profile Settings</h1>
      <p class="text-sm text-gray-500 mt-1">Manage your account information and preferences</p>
    </div>

    <!-- Profile Card -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-4">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Avatar Section -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
              {{ getInitials(profile.name) }}
            </div>
            <button @click="openAvatarUpload" class="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition">
              <Icon icon="mdi:camera" class="text-xl" />
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-2">Click to upload photo</p>
        </div>

        <!-- Profile Info Form -->
        <div class="flex-1">
          <form @submit.prevent="saveProfile" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  v-model="profile.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  v-model="profile.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  v-model="profile.company"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  v-model="profile.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                v-model="profile.bio"
                rows="3"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            <div class="flex justify-end gap-3">
              <button type="button" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Cancel
              </button>
              <button type="submit" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Security Settings -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-4">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Security</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-semibold text-gray-800">Change Password</h3>
            <p class="text-sm text-gray-500">Update your password regularly to keep your account secure</p>
          </div>
          <button @click="showPasswordModal = true" class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            Change
          </button>
        </div>
        
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-semibold text-gray-800">Two-Factor Authentication</h3>
            <p class="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button @click="toggle2FA" :class="twoFactorEnabled ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400'" class="px-4 py-2 text-white rounded-lg transition">
            {{ twoFactorEnabled ? 'Enabled' : 'Disabled' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Preferences -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Preferences</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-semibold text-gray-800">Email Notifications</h3>
            <p class="text-sm text-gray-500">Receive email updates about your account activity</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="preferences.emailNotifications" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>

        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-semibold text-gray-800">Dark Mode</h3>
            <p class="text-sm text-gray-500">Switch between light and dark theme</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="preferences.darkMode" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Password Change Modal -->
    <div v-if="showPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Change Password</h3>
        <form @submit.prevent="changePassword" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input
              v-model="passwordForm.current"
              type="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              v-model="passwordForm.new"
              type="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input
              v-model="passwordForm.confirm"
              type="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div class="flex justify-end gap-3">
            <button type="button" @click="showPasswordModal = false" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const profile = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Tech Corp',
  phone: '+1 234 567 8900',
  bio: 'Full-stack developer passionate about building scalable applications.'
})

const twoFactorEnabled = ref(false)
const showPasswordModal = ref(false)

const preferences = ref({
  emailNotifications: true,
  darkMode: false
})

const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const saveProfile = () => {
  console.log('Saving profile:', profile.value)
  alert('Profile updated successfully!')
}

const openAvatarUpload = () => {
  console.log('Open avatar upload')
}

const toggle2FA = () => {
  twoFactorEnabled.value = !twoFactorEnabled.value
}

const changePassword = () => {
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    alert('Passwords do not match!')
    return
  }
  console.log('Changing password')
  showPasswordModal.value = false
  alert('Password changed successfully!')
}
</script>
