<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="border-2 border-green-500 bg-white rounded-lg py-16 px-8 shadow-lg">
      <div class="flex flex-col justify-center items-center p-4">
        <div class="flex justify-center items-center drop-shadow-lg">
          <RouterLink to="/">
            <img class="w-44 h-12 md:w-56 md:h-20 object-cover mx-4" src="../../assets/Banner.png" alt="logo" />
          </RouterLink>
        </div>

        <h1 class="text-black font-bold text-2xl mb-2">Forgot Password <br/>OTP Verification</h1>
        <p class="text-sm text-gray-500 mb-4">Enter the OTP sent to your email</p>

        <div class="flex justify-center items-center my-6">
          <input
            v-for="(digit, index) in otp"
            :key="index"
            v-model="otp[index]"
            type="text"
            maxlength="1"
            class="w-12 h-12 text-center text-lg rounded-lg border-2 border-green-500 focus:ring-2 ring-green-700 mx-1"
            @input="handleInput(index, $event)"
            @keydown.backspace="handleBackspace(index, $event)"
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <p v-if="success" class="text-green-500 text-sm">{{ success }}</p>

        <p class="text-sm text-gray-500">OTP Expires In: <span class="text-green-500 font-bold">{{ formatTime(timeLeft) }}</span></p>
        <p class="text-sm text-gray-500">Didn't receive a code?</p>

        <button @click="handleResend" class="text-sm text-green-500 hover:underline mt-2">Resend Code</button>

        <button
          @click="handleSubmit"
          :disabled="loading || timeLeft === 0"
          class="border-2 border-green-500 rounded-lg text-green-500 font-bold text-xl w-56 h-10 mt-4 hover:bg-green-500 hover:text-white"
        >
          {{ loading ? 'Verifying...' : 'Verify' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const otp = ref(['', '', '', '', '', '']);
const error = ref('');
const success = ref('');
const loading = ref(false);
const timeLeft = ref(600);
let timer = null;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

onMounted(() => {
  timer = window.setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--;
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});

const handleResend = async () => {
  timeLeft.value = 600;
  otp.value = ['', '', '', '', '', ''];
  try {
    await axios.get('http://localhost:5000/auth/resendotp', { withCredentials: true });
    success.value = 'OTP Resent!';
  } catch (err) {
    console.error(err);
    error.value = 'Error resending OTP. Please try again later.';
  }
};

const handleInput = (index, e) => {
  const input = e.target;
  const value = input.value;
  if (!/^[0-9]?$/.test(value)) return;
  otp.value[index] = value;

  if (value && index < 5) {
    const nextInput = document.querySelector(`#otp-${index + 1}`);
    nextInput?.focus();
  }
};

const handleBackspace = (index, e) => {
  if (e.key === 'Backspace' && !otp.value[index] && index > 0) {
    const prevInput = document.querySelector(`#otp-${index - 1}`);
    prevInput?.focus();
  }
};

const handleSubmit = async () => {
  const enteredOtp = otp.value.join('');
  if (enteredOtp.length !== 6) {
    error.value = 'Please enter all digits';
    return;
  }
  loading.value = true;
  error.value = '';

  try {
    const response = await axios.post('http://localhost:5000/auth/verifyotp', { otp: enteredOtp }, { withCredentials: true });
    if (response.status === 200) {
      router.push('/learner');
    } else {
      error.value = 'Invalid OTP, please try again.';
    }
  } catch (err) {
    console.error(err);
    error.value = 'Error verifying OTP. Please try again later.';
  } finally {
    loading.value = false;
  }
};
</script>
