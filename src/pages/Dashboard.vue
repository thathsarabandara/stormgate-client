<template>
    <div class="flex flex-col justify-center items-center">
        <div class="grid grid-cols-6 gap-6 w-11/12 mt-10">
            <ServiceDetailCard service="Auth Service" status='true'  latency="10" health="80" cpu="10"/>
            <ServiceDetailCard service="Profile Service" status='true'  latency="10" health="85" cpu="15"/>
            <ServiceDetailCard service="Notification Service" status='true'  latency="10" health="89" cpu="14"/>
            <ServiceDetailCard service="Cart Service" status='true'  latency="10" health="78" cpu="16"/>
            <ServiceDetailCard service="Order Service" status=false  latency="10" health="83" cpu="18"/>
            <ServiceDetailCard service="Payment Service" status='false'  latency="10" health="96" cpu="20"/>
        </div>
        <div class="grid grid-cols-3 gap-6 w-11/12 mt-10">
            <ApiUsageChart
                service="Auth Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[120, 150, 200, 180]"
            />

            <ApiUsageChart
                service="Profile Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[80, 130, 170, 140]"
            />

            <ApiUsageChart
                service="Notification Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[200, 210, 230, 250]"
            />

            <ApiUsageChart
                service="Cart Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[60, 90, 70, 100]"
            />

            <ApiUsageChart
                service="Order Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[50, 80, 95, 110]"
            />

            <ApiUsageChart
                service="Payment Service"
                :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                :apiUsageData="[140, 160, 155, 180]"
            />
        </div>
    </div>
</template>

<script setup>
import ServiceDetailCard from '../components/Dashbord-UI-Card/ServiceDetailCard.vue';
import ApiUsageChart from '../components/Dashbord-UI-Card/ApiUsageCard.vue';
</script>
