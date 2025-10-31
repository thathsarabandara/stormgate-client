<template>
  <div class="flex flex-col justify-center items-center w-11/12 lg:w-full">
    <p class="text-xl font-bold w-full">
      {{ serviceName }} Performance
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-3 w-full">
      <ServiceStatusCard
        v-for="(card, index) in statusCards"
        :key="index"
        :icon="card.icon"
        :value="card.value"
        :label="card.label"
        :bgColor="card.bgColor"
        :textColor="card.textColor"
      />
    </div>
    <div class="flex w-full mt-4">
      <LineChart
        chartTitle="Monthly Requests"
        label="Total Requests"
        :usageData="monthlyRequests"
        borderColor="rgba(255, 99, 132, 1)"
        backgroundColor="rgba(255, 99, 132, 0.2)"
      />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-2">
      <LineChart
        chartTitle="CPU Usage"
        label="CPU Usage (%)"
        :usageData="cpuUsage"
        borderColor="rgba(39, 80, 245, 1)"
        backgroundColor="rgba(39, 80, 245, 0.2)"
      />
      <LineChart
        chartTitle="RAM Usage"
        label="RAM Usage (%)"
        :usageData="ramUsage"
        borderColor="rgba(68, 255, 93, 1)"
        backgroundColor="rgba(68, 255, 93, 0.2)"
      />
      <LineChart
        chartTitle="Disk Usage"
        label="Disk Usage (%)"
        :usageData="diskUsage"
        borderColor="rgba(255, 179, 68, 1)"
        backgroundColor="rgba(255, 179, 68, 0.2)"
      />
    </div>
  </div>
</template>

<script setup>
import ServiceStatusCard from '../service-mini-card/ServiceStatusCard.vue';
import LineChart from '../dashborad-cards/LineChart.vue';
import CustomTable from '../Table/CustomTable.vue';

defineProps({
  serviceName: String,
  statusCards: Array,
  monthlyRequests: Array,
  cpuUsage: Array,
  ramUsage: Array,
  diskUsage: Array,
});

const emit = defineEmits(['edit', 'delete'])

function editItem(item) {
  emit('edit', item)
}

function deleteItem(item) {
  emit('delete', item)
}
</script>
