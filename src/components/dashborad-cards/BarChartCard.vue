<template>
  <div class="flex flex-col justify-center items-center w-full bg-white rounded-xl">
    
    <div class="flex flex-wrap justify-between items-start w-full p-4">
      <p class="text-xl sm:text-2xl text-start font-bold">Total Users</p>
      <p class="text-gray-500 p-2 sm:p-4">Monthly</p>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center w-full p-4 space-y-6 md:space-y-0 md:space-x-6">
      <div class="flex justify-center items-center w-full md:w-2/3 h-[300px] sm:h-[450px]">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
      <div class="flex flex-col space-y-4 w-full md:w-1/3">
        <div
          v-for="(service, index) in services"
          :key="service"
          class="flex items-center space-x-3"
        >
          <div
            :style="{ backgroundColor: colors[index] }"
            class="w-4 h-4 rounded"
          ></div>
          <p class="text-gray-700 font-medium text-sm sm:text-base">
            {{ service }} Service: 
            <span class="font-bold text-gray-900">{{ userCounts[index] }}</span>
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
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const services = ['Auth', 'Profile', 'Notification', 'Cart', 'Order', 'Payment'];
const userCounts = [120, 80, 95, 60, 75, 50];
const colors = ['#3b82f6', '#8b5cf6', '#facc15', '#ec4899', '#14b8a6', '#ef4444'];

const chartData = {
  labels: services,
  datasets: [
    {
      label: 'Number of Users',
      backgroundColor: colors,
      data: userCounts,
      borderRadius: 6
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#374151'
      }
    },
    x: {
      ticks: {
        color: '#374151'
      }
    }
  }
};
</script>
