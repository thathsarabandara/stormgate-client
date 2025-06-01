<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Auth Service"
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

const serviceName = 'Auth Service';

const statusCards = [
  { icon: 'mdi:shield-lock', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '24h 15m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '110ms', label: 'Latency' },
  { icon: 'mdi:account-group', value: '350', label: 'Users' },
  { icon: 'mdi:chart-bar', value: '13.2K', label: 'Monthly Requests' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '70ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '55%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '62%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '4.0 MBps', label: 'Avg. Net Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 200));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 09:24:00', service: serviceName, errorType: 'ValidationError', message: 'Invalid data format.' },
  { id: 2, timestamp: '2025-05-31 09:30:12', service: serviceName, errorType: 'DatabaseError', message: 'Database unreachable.' },
  { id: 3, timestamp: '2025-05-31 10:00:00', service: serviceName, errorType: 'UnknownError', message: 'Unhandled exception.' }
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
    tableName: 'Users',
    columns: ['id', 'tenantId', 'username', 'isVerified', 'status', 'role', 'updatedAt', 'createdAt'],
    data: [
      { id: '1', tenantId: 't1', username: 'john', isVerified: true, status: 'active', role: 'admin', updatedAt: '2025-05-31', createdAt: '2025-05-01' }
    ]
  },
  {
    tableName: 'Auth Tokens',
    columns: ['id', 'userId', 'token', 'expiredAt', 'updatedAt', 'createdAt'],
    data: [
      { id: '1', userId: '1', token: 'abcd1234', expiredAt: '2025-06-01', updatedAt: '2025-05-31', createdAt: '2025-05-01' }
    ]
  }
];
</script>
