<template>
  <div class="flex flex-col justify-between h-full w-full bg-white rounded-xl shadow-xl p-3 sm:p-4">
    <div class="flex flex-col xs:flex-row justify-between items-start xs:items-center w-full mb-3 sm:mb-4">
      <div>
        <p class="text-lg sm:text-xl font-bold">Total Users</p>
        <p class="text-xs text-gray-500">Active users across all services</p>
      </div>
      <div class="flex items-center mt-1 xs:mt-0">
        <span class="text-xs sm:text-sm text-gray-500 mr-2">Monthly</span>
        <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </div>

    <div class="flex flex-col xl:flex-row items-center w-full h-full">
      <div class="w-full xl:w-2/3 h-[250px] sm:h-[300px] xl:h-full xl:pr-4">
        <Bar :data="chartData" :options="chartOptions" class="w-full h-full" />
      </div>
      
      <div class="w-full xl:w-1/3 mt-4 xl:mt-0 xl:pl-4 xl:border-l border-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
          <div
            v-for="(service, index) in services"
            :key="service"
            class="flex items-center p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div
              :style="{ backgroundColor: colors[index] }"
              class="w-3 h-3 rounded flex-shrink-0"
            ></div>
            <div class="ml-3 overflow-hidden">
              <p class="text-xs sm:text-sm font-medium text-gray-700 truncate">{{ service }} Service</p>
              <div class="flex items-center justify-between w-full">
                <span class="text-sm sm:text-base font-bold text-gray-900">{{ formatNumber(userCounts[index]) }}</span>
                <span class="text-xs text-gray-500">{{ calculatePercentage(userCounts[index]) }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <div 
                  :style="{ width: calculatePercentage(userCounts[index]) + '%', backgroundColor: colors[index] }"
                  class="h-1.5 rounded-full"
                ></div>
              </div>
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

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

const calculatePercentage = (value) => {
  const total = userCounts.reduce((sum, count) => sum + count, 0);
  return Math.round((value / total) * 100);
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context) {
          const label = context.dataset.label || '';
          const value = context.parsed.y || 0;
          return `${label}: ${formatNumber(value)} users`;
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
      displayColors: false,
      cornerRadius: 6
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 11
        },
        padding: 5,
        maxTicksLimit: 6
      },
      title: {
        display: true,
        text: 'Number of Users',
        color: '#6B7280',
        font: {
          size: 11,
          weight: 'bold'
        },
        padding: { top: 10, bottom: 10 }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 11
        },
        maxRotation: 45,
        minRotation: 45
      }
    }
  },
  elements: {
    bar: {
      borderRadius: 4,
      borderSkipped: false,
      borderWidth: 0
    }
  },
  layout: {
    padding: {
      top: 10,
      right: 10,
      left: 10,
      bottom: 10
    }
  },
  barPercentage: 0.8,
  categoryPercentage: 0.7
};
</script>
