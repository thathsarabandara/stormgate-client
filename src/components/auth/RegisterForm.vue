<template>
  <div class="w-full flex justify-center items-center min-h-screen bg-green-50">
    <div class="flex flex-col xl:flex-row justify-between items-center bg-white rounded-lg">
        <div class="w-1/2 overflow-hidden rounded-lg">
            <img
                class="hidden transistion transform easy-in-out duration-300 hover:scale-125 md:block w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[730px] object-cover rounded-l-lg"
                src="../../assets//Register.png"
                alt="register"
            />
        </div>
      
      <div class="flex flex-col justify-center items-center mx-8">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center items-center drop-shadow-lg">
            <a href="">
              <img
                class="w-12 h-12 object-cover md:m-1 md:mx-4 md:w-56 md:h-20"
                src="../../assets/Banner.png"
                alt="logo"
              />
            </a>
          </div>
          <h1 class="text-inter font-bold text-lg md:text-xl text-center mb-4">
            Build faster, deploy smarter<br /> 
          </h1>
        </div>

        <p v-if="error" class="text-red-500 text-xs text-center mb-4">{{ error }}</p>

        <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-full max-w-md">
          <AuthInput
            label="Username"
            type="text"
            v-model="username"
            :error="usernameError"
            placeholder="Enter your Username....."
            @input="validateUsername"
          />
          <AuthInput
            label="Email"
            type="email"
            v-model="email"
            :error="emailError"
            placeholder="Enter your email....."
            @input="validateEmail"
          />
          <AuthInput
            label="Password"
            type="password"
            v-model="password"
            :error="passwordError"
            placeholder="Enter your Password....."
            @input="validatePassword"
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
            :error="confirmPasswordError"
            placeholder="Enter your Confirm Password...."
            @input="validateConfirmPassword"
          />

          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              v-model="isChecked"
              @change="validateCheckbox"
              class="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label for="terms" class="ml-2 text-sm text-gray-600">
              I agree to the
              <a href="/" class="text-green-500 hover:underline">Terms & Conditions</a>
            </label>
          </div>
          <p v-if="checkedError" class="text-red-500 text-xs mb-4">{{ checkedError }}</p>

          <button
            :disabled="isSubmitting"
            type="submit"
            class="lg:w-96 border bg-green-500 text-white rounded-sm p-2 text-sm md:text-lg font-bold hover:bg-white hover:text-green-500 hover:border border-green-500 transition ease-in-out disabled:opacity-50"
          >
            {{ isSubmitting ? 'Registering...' : 'Register ➜' }}
          </button>
        </form>

        <div class="flex flex-col justify-center item-center mt-6 w-full max-w-md">
          <div class="flex justify-center items-center m-2">
            <div class="h-0.5 w-24 bg-gray-300"></div>
            <p class="font-bold mx-3 text-gray-500 text-center text-xs md:text-sm">SIGN IN WITH</p>
            <div class="h-0.5 w-24 bg-gray-300"></div>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-2 my-4">
            <OAuthBtn
              src="https://img.icons8.com/ios-filled/50/google-logo.png"
              label=" Google "
              @click="handleGoogleAuth"
            />
            <OAuthBtn
              src="https://img.icons8.com/ios-filled/50/facebook-f.png"
              label="Facebook"
              @click="handleFacebookAuth"
            />
            <OAuthBtn
              src="https://img.icons8.com/ios-filled/50/mac-os.png"
              label=" Apple"
              @click="handleAppleAuth"
            />
          </div>
          <p class="text-gray-500 text-sm mb-4">
            Already Registered ?
            <router-link to="/auth/login" class="text-blue-500 underline hover:text-green-500">
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import AuthInput from '../Auth-Input/AuthInput.vue'
import OAuthBtn from '../o-auth-btn/OAuthBtn.vue'

const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isChecked = ref(false);

const error = ref('');
const usernameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const checkedError = ref('');

const isSubmitting = ref(false);

const validateUserName = (val: string) => {
  const usernameRegex = /^[A-Za-z\d]{8,}$/;
  return usernameRegex.test(val);
};

const validateEmail = (val: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(val);
};

const validatePassword = (val: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(val);
};

function validateUsername() {
  if (!username.value) {
    usernameError.value = 'Field is required';
  } else if (!validateUserName(username.value)) {
    usernameError.value = 'Username must contain at least 8 characters!';
  } else {
    usernameError.value = '';
  }
}

function validateEmailField() {
  if (!email.value) {
    emailError.value = 'Field is required';
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address';
  } else {
    emailError.value = '';
  }
}

function validateEmailWrapper() {
  validateEmailField();
}

function validateEmailOnInput() {
  validateEmailField();
}

function validateEmailCheck() {
  validateEmailField();
}

function validatePasswordField() {
  if (!password.value) {
    passwordError.value = 'Password is required';
  } else if (!validatePassword(password.value)) {
    passwordError.value =
      'At least 8 charac., one upp. letter, one symbol, one number';
  } else {
    passwordError.value = '';
  }
}

function validatePasswordWrapper() {
  validatePasswordField();
}

function validateConfirmPassword() {
  if (!confirmPassword.value) {
    confirmPasswordError.value = 'Confirm password is required';
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Confirmed Password Not matching';
  } else {
    confirmPasswordError.value = '';
  }
}

function validateCheckbox() {
  if (!isChecked.value) {
    checkedError.value = 'You must agree to the terms and conditions';
  } else {
    checkedError.value = '';
  }
}

async function handleSubmit() {
  error.value = '';
  validateUsername();
  validateEmailField();
  validatePasswordField();
  validateConfirmPassword();
  validateCheckbox();

  if (
    usernameError.value ||
    emailError.value ||
    passwordError.value ||
    confirmPasswordError.value ||
    checkedError.value
  ) {
    error.value = 'Please fix the errors above before submitting.';
    return;
  }

  isSubmitting.value = true;

  try {
    const registerData = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const response = await axios.post(
      'http://localhost:5000/auth/register',
      registerData,
      { withCredentials: true }
    );

    alert('Form submitted successfully');
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    isChecked.value = false;

    router.push('/teacher/auth/verifyuser');
  } catch (err: any) {
    if (err.response?.data?.message) {
      error.value = err.response.data.message;
    } else {
      error.value = 'Form submission failed!';
    }
  } finally {
    isSubmitting.value = false;
  }
}

function handleGoogleAuth() {
  alert('Google Auth not implemented yet');
}
function handleFacebookAuth() {
  alert('Facebook Auth not implemented yet');
}
function handleAppleAuth() {
  alert('Apple Auth not implemented yet');
}
</script>

<style scoped>
/* Optional: add your custom styles here */
</style>
