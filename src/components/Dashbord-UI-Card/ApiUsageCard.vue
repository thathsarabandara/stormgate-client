<template>
    <div class="w-full bg-white rounded-xl p-4">
        <p class="text-center text-lg font-bold">{{ service }} API Usage</p>
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

const props = defineProps({
  service:{
    type: String,
    required:true
  },
  labels: {
    type: Array,
    required: true
  },
  apiUsageData: {
    type: Array,
    required: true
  }
})

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: 'API Usage',
      data: props.apiUsageData,
      borderColor: '#3b82f6', // blue-500
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.3,
      pointBackgroundColor: '#3b82f6'
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>
