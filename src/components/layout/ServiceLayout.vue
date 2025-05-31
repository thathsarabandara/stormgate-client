<template>
  <div class="flex flex-col justify-center items-start w-11/12 ml-20 p-4">
    <p class="text-2xl font-bold mb-4">{{ serviceName }}</p>

    <div class="flex w-full">
      <div class="flex items-center justify-center border-b border-gray-200 pb-4 mb-4 w-1/3">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'flex items-center cursor-pointer overflow-hidden w-full mr-8',
            activeTab === index
              ? 'text-green-500 font-semibold border-b-2 border-green-500'
              : 'text-gray-600'
          ]"
        >
          <div class="m-2">
            <Icon :icon="tab.icon" />
          </div>
          <p class="text-lg hidden sm:block">
            {{ tab.name }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex p-4 rounded-xl w-full">
      <Performance 
        v-if="activeTab === 0" 
        :serviceName="serviceName"
        :statusCards="statusCards"
        :monthlyRequests="monthlyRequests"
        :cpuUsage="cpuUsage"
        :ramUsage="ramUsage"
        :diskUsage="diskUsage"
        :errorLogs="errorLogs"
        :columns="errorColumns"
      />
      <Error 
        v-if="activeTab === 1" 
        :serviceName="serviceName"
        :errorLogs="errorLogs"
        :columns="errorColumns"
      />
      <Data
        v-if="activeTab === 2"
        :tables="tables"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import Performance from '../service-cards/Performance.vue';
import Error from '../service-cards/Error.vue';
import Data from '../service-cards/Data.vue';

const props = defineProps({
  serviceName: String,
  statusCards: Array,
  monthlyRequests: Array,
  cpuUsage: Array,
  ramUsage: Array,
  diskUsage: Array,
  errorLogs: Array,
  errorColumns: Array,
  tables: Array
});

const tabs = [
  { name: 'Performance', icon: 'mdi:performance' },
  { name: 'Error', icon: 'mdi:error' },
  { name: 'Data', icon: 'mdi:database' }
];

const activeTab = ref(0);
</script>
