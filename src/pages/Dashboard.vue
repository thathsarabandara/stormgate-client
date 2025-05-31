<template>
    <div class="ml-16 mx-4">
        <div class="grid grid-cols-3 gap-3">
            <StatusCard
                v-for="(service, index) in services"
                :key="index"
                v-bind="service"
            />
        </div>
        <div class="flex w-full mt-4 gap-3">
            <div class="rounded-xl w-2/3">
                <BarChartCard />
            </div>
            <div class="rounded-xl w-1/3">
                <DoughnutChart />
            </div>
        </div>
        <div class="flex w-full mt-4 gap-3">
            <div class="rounded-xl w-1/2">
                <LineChart
                    chartTitle="Total CPU Usage"
                    label="CPU Usage (%)"
                    :usageData="cpuUsage"
                    borderColor="rgba(255, 99, 132, 1)"
                    backgroundColor="rgba(255, 99, 132, 0.2)"
                />
            </div>
            <div class="rounded-xl w-1/2">
                <LineChart
                    chartTitle="Total RAM Usage"
                    label="RAM Usage (%)"
                    :usageData="ramUsage"
                    borderColor="rgba(54, 162, 235, 1)"
                    backgroundColor="rgba(54, 162, 235, 0.2)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import StatusCard from '../components/dashborad-cards/StatusCard.vue';
import BarChartCard from '../components/dashborad-cards/BarChartCard.vue';
import DoughnutChart from '../components/dashborad-cards/DoughnutChart.vue';
import LineChart from '../components/dashborad-cards/LineChart.vue';

const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

const services = [
  {
    serviceName: 'Auth Service',
    icon: 'mdi:shield-lock',
    iconBgClass: 'bg-blue-200',
    iconColorClass: 'text-blue-600',
    uptime: 99.9,
    latency: 12,
    errorRate: 0.05,
    status: 'Healthy',
    statusColorClass: 'text-green-500'
  },
  {
    serviceName: 'Profile Service',
    icon: 'mdi:account-circle',
    iconBgClass: 'bg-purple-200',
    iconColorClass: 'text-purple-600',
    uptime: 99.7,
    latency: 18,
    errorRate: 0.1,
    status: 'Healthy',
    statusColorClass: 'text-green-500'
  },
  {
    serviceName: 'Notification Service',
    icon: 'mdi:bell',
    iconBgClass: 'bg-yellow-200',
    iconColorClass: 'text-yellow-600',
    uptime: 99.5,
    latency: 22,
    errorRate: 0.2,
    status: 'Degraded',
    statusColorClass: 'text-orange-500'
  },
  {
    serviceName: 'Cart Service',
    icon: 'mdi:cart',
    iconBgClass: 'bg-pink-200',
    iconColorClass: 'text-pink-600',
    uptime: 99.8,
    latency: 10,
    errorRate: 0.05,
    status: 'Healthy',
    statusColorClass: 'text-green-500'
  },
  {
    serviceName: 'Order Service',
    icon: 'mdi:clipboard-list',
    iconBgClass: 'bg-teal-200',
    iconColorClass: 'text-teal-600',
    uptime: 99.6,
    latency: 20,
    errorRate: 0.1,
    status: 'Healthy',
    statusColorClass: 'text-green-500'
  },
  {
    serviceName: 'Payment Service',
    icon: 'mdi:credit-card',
    iconBgClass: 'bg-red-200',
    iconColorClass: 'text-red-600',
    uptime: 99.4,
    latency: 25,
    errorRate: 0.3,
    status: 'Degraded',
    statusColorClass: 'text-orange-500'
  }
];

</script>
