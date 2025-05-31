<template>
  <div class="w-full">
    <ServiceLayout
      serviceName="Notification Service"
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

const serviceName = 'Notification Service';

const statusCards = [
  { icon: 'mdi:bell-ring', value: 'UP', label: 'Service Status' },
  { icon: 'mdi:clock-outline', value: '15h 20m', label: 'Service Uptime' },
  { icon: 'mdi:speedometer', value: '90ms', label: 'Latency' },
  { icon: 'mdi:email-send', value: '1.2K', label: 'Notifications Today' },
  { icon: 'mdi:chart-bar', value: '32.7K', label: 'Monthly Requests' },
  { icon: 'mdi:database-check', value: 'UP', label: 'Database Status' },
  { icon: 'mdi:timer-sand', value: '60ms', label: 'DB Latency' },
  { icon: 'mdi:cpu-64-bit', value: '47%', label: 'Avg. CPU Usage' },
  { icon: 'mdi:memory', value: '59%', label: 'Avg. RAM Usage' },
  { icon: 'mdi:lan-connect', value: '3.1 MBps', label: 'Avg. Net Usage' }
];

const monthlyRequests = Array.from({ length: 30 }, () => Math.floor(Math.random() * 500));
const cpuUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const ramUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
const diskUsage = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const errorLogs = [
  { id: 1, timestamp: '2025-05-31 09:12:00', service: serviceName, errorType: 'EmailSendError', message: 'SMTP server timeout.' },
  { id: 2, timestamp: '2025-05-31 10:45:30', service: serviceName, errorType: 'PushNotificationError', message: 'Failed to deliver push notification.' },
  { id: 3, timestamp: '2025-05-31 11:15:00', service: serviceName, errorType: 'DatabaseError', message: 'Notifications table locked.' }
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
    tableName: 'Notifications',
    columns: ['id', 'tenantId', 'type', 'recipient', 'status', 'sentAt', 'createdAt'],
    data: [
      { id: '1', tenantId: 't1', type: 'email', recipient: 'john@example.com', status: 'sent', sentAt: '2025-05-31 09:00:00', createdAt: '2025-05-31 08:50:00' },
      { id: '2', tenantId: 't1', type: 'push', recipient: 'user123', status: 'failed', sentAt: '2025-05-31 09:05:00', createdAt: '2025-05-31 09:00:00' }
    ]
  },
  {
    tableName: 'Email Queue',
    columns: ['id', 'email', 'subject', 'status', 'queuedAt', 'sentAt'],
    data: [
      { id: '1', email: 'alice@example.com', subject: 'Welcome!', status: 'sent', queuedAt: '2025-05-31 08:45:00', sentAt: '2025-05-31 08:46:30' }
    ]
  }
];
</script>
