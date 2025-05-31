<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Payment Service"
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

const serviceName = 'Payment Service';

const statusCards = [
  { icon: 'mdi:cash-multiple', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '72h 10m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '200ms', label: 'Latency' },
  { icon: 'mdi:account-cash', value: '1200', label: 'Transactions' },
  { icon: 'mdi:chart-bar', value: '25.6K', label: 'Monthly Requests' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '85ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '48%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '51%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '6.5 MBps', label: 'Avg. Net Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 500));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 11:00:00', service: serviceName, errorType: 'PaymentDeclined', message: 'Transaction declined by bank.' },
  { id: 2, timestamp: '2025-05-31 11:30:00', service: serviceName, errorType: 'DatabaseError', message: 'Unable to connect to payment records DB.' },
  { id: 3, timestamp: '2025-05-31 12:00:00', service: serviceName, errorType: 'GatewayTimeout', message: 'Payment gateway timeout.' }
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
    tableName: 'Transactions',
    columns: ['id', 'userId', 'amount', 'status', 'paymentMethod', 'createdAt', 'updatedAt'],
    data: [
      { id: '1', userId: 'u123', amount: '150.00', status: 'Success', paymentMethod: 'Credit Card', createdAt: '2025-05-31', updatedAt: '2025-05-31' }
    ]
  },
  {
    tableName: 'Payment Methods',
    columns: ['id', 'methodName', 'provider', 'isActive', 'createdAt'],
    data: [
      { id: '1', methodName: 'Credit Card', provider: 'Visa', isActive: true, createdAt: '2025-01-10' },
      { id: '2', methodName: 'PayPal', provider: 'PayPal Inc.', isActive: true, createdAt: '2025-02-15' }
    ]
  }
];
</script>
