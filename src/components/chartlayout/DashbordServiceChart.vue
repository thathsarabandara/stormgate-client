<template>
  <Doughnut :data="chartData" :options="chartOptions" :plugins="[centerTextPlugin]" />
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  upPercentage: {
    type: Number,
    required: true
  }
})

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height, ctx } = chart
    ctx.save()
    const fontSize = (height / 114).toFixed(2)
    ctx.font = `${fontSize}em sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#374151'
    
    const value = chart.config.options.plugins.centerText.value
    const text = `${value}%`
    const textX = Math.round((width - ctx.measureText(text).width) / 2)
    const textY = height / 2
    ctx.fillText(text, textX, textY)
    ctx.restore()
  }
}

const chartData = computed(() => ({
  labels: ['Up', 'Down'],
  datasets: [
    {
      data: [props.upPercentage, 100 - props.upPercentage],
      backgroundColor: ['#0c8e3b', '#cb3b25'],
      borderWidth: 0
    }
  ]
}))

const chartOptions = computed(() => ({
  cutout: '80%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
    centerText: {
      value: props.upPercentage
    }
  }
}))
</script>
