<template>
  <div class="w-full flex flex-col justify-center items-center min-h-screen bg-green-50">
    <div class="flex flex-col xl:flex-row justify-center items-center rounded-xl bg-white w-7/12">
      <!-- Image Section -->
      <div class="w-1/2 overflow-hidden rounded-l-lg">
        <img
          class="hidden md:block w-full h-full lg:w-[550px] lg:h-[650px] object-cover rounded-lg transform transition ease-in-out duration-300 hover:scale-110"
          src="../../assets/Login.png"
          alt="login"
        />
      </div>

      <!-- Form Section -->
      <div class="flex flex-col justify-center items-center my-6 w-1/2">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center items-center drop-shadow-lg">
              <img class="w-12 h-12 object-cover md:m-1 md:mx-4 md:w-56 md:h-20" src="../../assets/Banner.png" alt="logo" />
          </div>
          <h1 class="font-semibold text-lg md:text-xl text-center mb-4">Your Gateway to StormGate Microservices <br /> Fast, Secure, And Reliable</h1>
        </div>

        <!-- Error Message -->
        <p v-if="error" class="text-red-500 text-xs text-center mb-4">{{ error }}</p>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center">
          <AuthInput
            label="Email"
            type="email"
            v-model="email"
            :error="emailError"
            placeholder="Enter your email....."
            @input="validateEmailInput"
          />

          <AuthInput
            label="Password"
            type="password"
            v-model="password"
            :error="passwordError"
            placeholder="Enter your Password....."
            @input="validatePasswordInput"
          />

          <div class="flex justify-start items-start mb-4">
            <input type="checkbox" id="terms" class="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
            <label for="terms" class="ml-2 text-sm text-gray-700">Remember me</label>
          </div>

          <button
            type="submit"
            class="w-48 border lg:w-96 bg-green-500 text-white rounded-sm p-2 text-sm md:text-lg font-bold hover:bg-white hover:text-green-500 hover:border border-green-500 transition ease-in-out"
          >
            Login ➜
          </button>

          <p class="text-gray-500 text-sm m-2">
            Forgot Password ?
            <RouterLink to="/auth/forgot-password" class="text-blue-500 underline hover:text-green-500">Reset Password</RouterLink>
          </p>
        </form>

        <!-- OAuth Section -->
        <div class="flex flex-col justify-center item-center">
          <div class="flex justify-center items-center m-2">
            <div class="h-0.5 w-24 bg-gray-300"></div>
            <p class="font-bold mx-3 text-gray-500 text-sx md:text-sm">SIGN UP WITH</p>
            <div class="h-0.5 w-24 bg-gray-300"></div>
          </div>

          <div class="flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-2 my-4">
            <OAuthBtn src="https://img.icons8.com/ios-filled/50/google-logo.png" label="Google" @click="handleGoogleAuth" />
            <OAuthBtn src="https://img.icons8.com/ios-filled/50/facebook-f.png" label="Facebook" @click="handleFacebookAuth" />
            <OAuthBtn src="https://img.icons8.com/ios-filled/50/mac-os.png" label="Apple" @click="handleAppleAuth" />
          </div>

          <p class="text-gray-500 text-sm mb-4">
            Not Registered ?
            <RouterLink to="/auth/register" class="text-blue-500 underline hover:text-orange-500">Register</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import AuthInput from '../Auth-Input/AuthInput.vue'
import OAuthBtn from '../o-auth-btn/OAuthBtn.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const emailError = ref('')
const passwordError = ref('')
const router = useRouter()

// Validation Functions
const validateEmail = (value: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(value)
}

const validatePassword = (value: string) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  return regex.test(value)
}

const validateEmailInput = () => {
  if (!email.value) {
    emailError.value = 'Field is required'
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
  } else {
    emailError.value = ''
  }
}

const validatePasswordInput = () => {
  if (!password.value) {
    passwordError.value = 'Password is required'
  } else if (!validatePassword(password.value)) {
    passwordError.value = 'At least 8 charac., one upp. letter, one symbol, one number'
  } else {
    passwordError.value = ''
  }
}

// Auth Handlers
const handleGoogleAuth = () => {}
const handleFacebookAuth = () => {}
const handleAppleAuth = () => {}

const handleSubmit = async () => {
  error.value = ''
  emailError.value = ''
  passwordError.value = ''

  if (!email.value || !password.value) {
    error.value = 'All Fields are Required!'
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
  } else if (!validatePassword(password.value)) {
    passwordError.value = 'Password must be at least 8 characters, contain at least one uppercase letter, one symbol, and one number'
  } else {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login',
        { email: email.value, password: password.value },
        { withCredentials: true }
      )
      email.value = ''
      password.value = ''
      router.push('/teacher/mentor')
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style scoped>
</style>
