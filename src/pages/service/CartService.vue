<template>
    <div class="flex flex-col justify-center items-center mx-8 mt-4">
        <div class="flex justify-center items-center w-full space-x-10">
            <div class="w-1/2">
                <ApiDetailCard
                    service="Cart Microservice"
                    :status="true"
                    uptime="23h 20m"
                    :dependencies="[
                        { name: 'DB', status: 'UP', latency: 10 },
                        { name: 'Redis', status: 'UP', latency: 3 },
                        { name: 'External API', status: 'UP', latency: 150 }
                    ]"
                    :cpuUsage="15"
                    :memory="310"
                    diskFree="4GB"
                    :health="90"
                    detailsLink="/services/auth"
                    />

            </div>
            <div class="w-1/2">
                <ApiUsageChart
                    service="Cart Service"
                    :labels="['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23']"
                    :apiUsageData="[140, 160, 155, 180]"
                    class=""
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import ApiDetailCard from '../../components/Dashbord-UI-Card/ApiDetailCard.vue';
import ApiUsageChart from '../../components/Dashbord-UI-Card/ApiUsageCard.vue';
</script>