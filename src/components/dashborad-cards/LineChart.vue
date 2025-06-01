<template>
  <div class="flex flex-col justify-center items-start p-4 w-full bg-white rounded-xl shadow-xl">
    <div class="flex justify-between items-center w-full mb-4">
      <p class="text-xl font-bold">{{ chartTitle }}</p>
      <p class="text-gray-500">Last 30 Days</p>
    </div>
    <div class="w-full">
      <Line :data="chartData" :options="chartOptions" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const props = defineProps({
  chartTitle: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  usageData: {
    type: Array,
    required: true
  },
  borderColor: {
    type: String,
    default: 'rgba(54, 162, 235, 1)'
  },
  backgroundColor: {
    type: String,
    default: 'rgba(54, 162, 235, 0.2)'
  }
})

const getLast30Days = () => {
  const days = []
  const today = new Date()
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
    days.push(formattedDate)
  }
  return days
}

const chartData = computed(() => ({
  labels: getLast30Days(),
  datasets: [
    {
      label: props.label,
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor,
      data: props.usageData,
      fill: true,
      tension: 0.4,
      pointRadius: 3
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Usage (%)'
      },
      beginAtZero: true
    },
    x: {
      title: {
        display: true,
        text: 'Date'
      }
    }
  }
}
</script>
