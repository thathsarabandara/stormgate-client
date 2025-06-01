<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Profile Service"
      :statusCards="statusCards"
      :monthlyRequests="monthlyRequests"
      :cpuUsage="cpuUsage"
      :ramUsage="ramUsage"
      :diskUsage="diskUsage"
      :errorLogs="errorLogs"
      :errorColumns="errorColumns"
      :tables="tables"
    />
  </div>
</template>

<script setup>
import ServiceLayout from '../../components/layout/ServiceLayout.vue';

const serviceName = 'Profile Service';

const statusCards = [
  { icon: 'mdi:shield-lock', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '72h 20m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '95ms', label: 'Latency' },
  { icon: 'mdi:account-group', value: '480', label: 'Profiles' },
  { icon: 'mdi:chart-bar', value: '9.5K', label: 'Monthly Requests' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '60ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '48%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '53%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '3.2 MBps', label: 'Avg. Net Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 200));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 11:10:00', service: serviceName, errorType: 'ValidationError', message: 'Invalid profile update payload.' },
  { id: 2, timestamp: '2025-05-31 12:05:30', service: serviceName, errorType: 'DatabaseError', message: 'Failed to connect to profile DB.' },
  { id: 3, timestamp: '2025-05-31 12:40:00', service: serviceName, errorType: 'UnknownError', message: 'Unhandled exception occurred.' }
];

const errorColumns = [
  { key: 'id', label: 'ID' },
  { key: 'timestamp', label: 'Timestamp' },
  { key: 'service', label: 'Service' },
  { key: 'errorType', label: 'Error Type' },
  { key: 'message', label: 'Message' }
];

const tables = [
  {
    tableName: 'Profiles',
    columns: ['id', 'tenantId', 'username', 'email', 'status', 'lastLogin', 'updatedAt', 'createdAt'],
    data: [
      { id: '1', tenantId: 't1', username: 'alice', email: 'alice@mail.com', status: 'active', lastLogin: '2025-05-30', updatedAt: '2025-05-31', createdAt: '2025-05-01' }
    ]
  },
  {
    tableName: 'Profile Logs',
    columns: ['id', 'profileId', 'action', 'timestamp'],
    data: [
      { id: '1', profileId: '1', action: 'Updated profile picture', timestamp: '2025-05-31 09:45:00' }
    ]
  }
];
</script>
