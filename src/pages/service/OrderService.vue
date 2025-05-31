<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Order Service"
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

const serviceName = 'Order Service';

const statusCards = [
  { icon: 'mdi:cart-outline', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '48h 20m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '95ms', label: 'Latency' },
  { icon: 'mdi:package-variant', value: '820', label: 'Orders Today' },
  { icon: 'mdi:chart-bar', value: '28.4K', label: 'Monthly Orders' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '65ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '60%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '58%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '3.5 MBps', label: 'Avg. Net Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 300));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 08:10:00', service: serviceName, errorType: 'OrderValidationError', message: 'Invalid order ID format.' },
  { id: 2, timestamp: '2025-05-31 08:25:35', service: serviceName, errorType: 'PaymentGatewayError', message: 'Payment provider timeout.' },
  { id: 3, timestamp: '2025-05-31 09:05:12', service: serviceName, errorType: 'DatabaseError', message: 'Order table lock timeout.' }
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
    tableName: 'Orders',
    columns: ['id', 'tenantId', 'userId', 'productIds', 'status', 'paymentStatus', 'totalAmount', 'createdAt'],
    data: [
      {
        id: 'O1001',
        tenantId: 't1',
        userId: 'U123',
        productIds: '[P101,P102]',
        status: 'completed',
        paymentStatus: 'paid',
        totalAmount: '$49.99',
        createdAt: '2025-05-31'
      }
    ]
  },
  {
    tableName: 'Payments',
    columns: ['id', 'orderId', 'amount', 'paymentMethod', 'status', 'processedAt'],
    data: [
      {
        id: 'P5001',
        orderId: 'O1001',
        amount: '$49.99',
        paymentMethod: 'credit_card',
        status: 'success',
        processedAt: '2025-05-31 08:45:00'
      }
    ]
  }
];
</script>
