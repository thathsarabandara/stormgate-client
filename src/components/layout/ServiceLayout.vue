<template>
  <div class="flex flex-col justify-center items-start w-11/12 ml-20 p-4">
    <p class="text-2xl font-bold mb-4">AuthService</p>

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
            serviceName="Auth Service"
            :statusCards="statusCards"
            :monthlyRequests="requests"
            :cpuUsage="cpuUsage"
            :ramUsage="ramUsage"
            :diskUsage="diskUsage"
            :errorLogs="errorLogs"
            :columns="columns"
        />
      <Error v-if="activeTab === 1" />
      <Data v-if="activeTab === 2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Performance from '../service-cards/Performance.vue';
import Error from '../service-cards/Error.vue';
import Data from '../service-cards/Data.vue';
import { Icon } from '@iconify/vue';

const requests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

const errorLogs = ref([
  { id: 1, timestamp: '2025-05-31 09:24:00', service: 'AuthService', errorType: 'ValidationError', message: 'Invalid email format.' },
  { id: 2, timestamp: '2025-05-31 09:30:12', service: 'AuthService', errorType: 'DatabaseError', message: 'Failed to connect to MySQL.' },
  { id: 3, timestamp: '2025-05-31 09:41:55', service: 'AuthService', errorType: 'TokenError', message: 'JWT expired.' },
  { id: 4, timestamp: '2025-05-31 10:00:00', service: 'AuthService', errorType: 'NetworkError', message: 'Redis connection timeout.' },
  { id: 5, timestamp: '2025-05-31 10:15:00', service: 'AuthService', errorType: 'UnknownError', message: 'Unhandled exception occurred.' },
]);

const columns = ref([
  { key: 'id', label: 'ID' },
  { key: 'timestamp', label: 'Timestamp' },
  { key: 'service', label: 'Service' },
  { key: 'errorType', label: 'Error Type' },
  { key: 'message', label: 'Message' },
])

const statusCards = ref([
  { icon: 'mdi:shield-lock', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '22h 45m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '120ms', label: 'Latency' },
  { icon: 'mdi:account-group', value: '250', label: 'Users' },
  { icon: 'mdi:chart-bar', value: '12.5K', label: 'Monthly Requests' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '85ms', label: 'Database Latency' },
  { icon: 'mdi:cpu-64-bit', value: '65%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '70%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '3.5 MBps', label: 'Avg. Net Usage' }
])

const tabs = [
  { name: 'Performance', icon: 'mdi:performance' },
  { name: 'Error', icon: 'mdi:error' },
  { name: 'Data', icon: 'mdi:database' }
];

const activeTab = ref(0);
</script>
