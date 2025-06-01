<template>
  <div class="flex flex-col justify-center items-center w-full bg-white rounded-xl">
    <div class="flex justify-between items-start w-full p-4">
      <p class="text-2xl text-start font-bold">Total API Requests</p>
      <p class="text-gray-500 p-4">Monthly</p>
    </div>

    <div class="flex flex-col justify-center items-center w-full p-4 space-x-6">
      <div class="flex justify-center items-center w-2/3 h-[250px]">
        <Doughnut :data="chartData" :options="chartOptions" />
      </div>

      <div class="flex flex-col space-y-2 w-full mt-5">
        <div
          v-for="(service, index) in services"
          :key="service"
          class="flex items-start space-x-3"
        >
          <div
            :style="{ backgroundColor: colors[index] }"
            class="w-4 h-4 rounded-full "
          ></div>
          <p class="text-gray-700 font-medium">{{ service }} Service: 
            <span class="font-bold text-gray-900">{{ requestCounts[index] }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const services = ['Auth', 'Profile', 'Notification', 'Cart', 'Order', 'Payment'];
const requestCounts = [5000, 3200, 4100, 2800, 3700, 2600];
const colors = ['#3b82f6', '#8b5cf6', '#facc15', '#ec4899', '#14b8a6', '#ef4444'];

const chartData = {
  labels: services,
  datasets: [
    {
      label: 'API Requests',
      backgroundColor: colors,
      data: requestCounts,
      borderWidth: 1
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: {
      display: false
    }
  }
};
</script>
