<template>
  <div class="flex flex-col justify-center items-start p-3 sm:p-4 w-full bg-white rounded-xl shadow-xl h-full">
    <div class="flex flex-col xs:flex-row justify-between items-start xs:items-center w-full mb-3 sm:mb-4 space-y-1 xs:space-y-0">
      <p class="text-lg sm:text-xl font-bold">{{ chartTitle }}</p>
      <p class="text-sm sm:text-base text-gray-500">Last 30 Days</p>
    </div>
    <div class="w-full h-[250px] sm:h-[300px] md:h-[350px]">
      <Line :data="chartData" :options="chartOptions" class="w-full h-full" />
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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        padding: 10,
        font: {
          size: 11,
          family: 'Inter, system-ui, sans-serif'
        }
      }
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      titleFont: {
        size: 12
      },
      bodyFont: {
        size: 12
      },
      padding: 8
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Usage (%)',
        font: {
          size: 11
        }
      },
      beginAtZero: true,
      grid: {
        drawBorder: false
      },
      ticks: {
        font: {
          size: 10
        },
        maxTicksLimit: 6
      }
    },
    x: {
      title: {
        display: true,
        text: 'Date',
        font: {
          size: 11
        }
      },
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10
        },
        maxRotation: 45,
        minRotation: 45,
        maxTicksLimit: 7
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      borderColor: props.borderColor,
      backgroundColor: 'transparent'
    },
    point: {
      radius: 3,
      hoverRadius: 5,
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: props.borderColor
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
}
</script>
