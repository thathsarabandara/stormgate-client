<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Cart Service"
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

const serviceName = 'Cart Service';

const statusCards = [
  { icon: 'mdi:cart', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '48h 20m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '95ms', label: 'Latency' },
  { icon: 'mdi:cart-outline', value: '720', label: 'Active Carts' },
  { icon: 'mdi:cart-arrow-down', value: '2.5K', label: 'Items Added' },
  { icon: 'mdi:cart-check', value: '1.3K', label: 'Orders Placed' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '60ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '50%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '58%', label: 'Avg. RAM Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 300));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 08:15:00', service: serviceName, errorType: 'CartError', message: 'Failed to add item to cart.' },
  { id: 2, timestamp: '2025-05-31 09:00:20', service: serviceName, errorType: 'DatabaseError', message: 'Order table unreachable.' },
  { id: 3, timestamp: '2025-05-31 10:30:00', service: serviceName, errorType: 'ValidationError', message: 'Invalid cart item data.' }
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
    tableName: 'Carts',
    columns: ['id', 'tenantId', 'userId', 'status', 'totalItems', 'totalPrice', 'updatedAt', 'createdAt'],
    data: [
      { id: 'c1', tenantId: 't1', userId: 'u1', status: 'active', totalItems: 5, totalPrice: 150.00, updatedAt: '2025-05-31', createdAt: '2025-05-29' }
    ]
  },
  {
    tableName: 'Cart Items',
    columns: ['id', 'cartId', 'productId', 'quantity', 'price', 'updatedAt', 'createdAt'],
    data: [
      { id: 'ci1', cartId: 'c1', productId: 'p1', quantity: 2, price: 50.00, updatedAt: '2025-05-31', createdAt: '2025-05-29' }
    ]
  },
  {
    tableName: 'Orders',
    columns: ['id', 'cartId', 'userId', 'paymentStatus', 'orderStatus', 'totalAmount', 'createdAt'],
    data: [
      { id: 'o1', cartId: 'c1', userId: 'u1', paymentStatus: 'paid', orderStatus: 'processing', totalAmount: 150.00, createdAt: '2025-05-31' }
    ]
  }
];
</script>
