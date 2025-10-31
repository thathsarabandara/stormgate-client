<template>
  <div class="flex flex-col justify-between h-full w-full bg-white rounded-xl shadow-xl p-3 sm:p-4">
    <div class="flex justify-between items-center w-full mb-3 sm:mb-4">
      <p class="text-lg sm:text-xl font-bold">Total API Requests</p>
      <p class="text-sm sm:text-base text-gray-500">Monthly</p>
    </div>

    <div class="flex flex-col items-center justify-center w-full h-full">
      <div class="w-full lg:w-1/2 h-[200px] sm:h-[250px] lg:h-[300px] flex items-center justify-center">
        <Doughnut :data="chartData" :options="chartOptions" class="w-full h-full" />
      </div>

      <div class="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(service, index) in services"
            :key="service"
            class="flex items-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div
              :style="{ backgroundColor: colors[index] }"
              class="w-3 h-3 rounded-full flex-shrink-0"
            ></div>
            <div class="ml-2 overflow-hidden">
              <p class="text-xs sm:text-sm font-medium text-gray-700 truncate">{{ service }} Service</p>
              <p class="text-sm sm:text-base font-bold text-gray-900">{{ formatNumber(requestCounts[index]) }}</p>
            </div>
          </div>
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

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  radius: '90%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context) {
          const label = services[context.dataIndex] || '';
          const value = context.parsed || 0;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${label}: ${formatNumber(value)} (${percentage}%)`;
        }
      },
      titleFont: {
        size: 12
      },
      bodyFont: {
        size: 12
      },
      padding: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      displayColors: false
    }
  },
  elements: {
    arc: {
      borderWidth: 0,
      hoverOffset: 8,
      borderRadius: 4,
      hoverBorderWidth: 2,
      hoverBorderColor: '#fff'
    }
  },
  layout: {
    padding: 10
  },
  spacing: 2,
  rotation: -90,
  circumference: 180,
  animation: {
    animateRotate: true,
    animateScale: true
  }
};
</script>
