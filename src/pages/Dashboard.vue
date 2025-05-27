<template>
    <div class="flex justify-center items-center">
        <div class="grid grid-cols-6 gap-6 w-11/12 mt-10">
            <ServiceDetailCard service="Auth Service" status='true'  latency="10" health="80" cpu="10"/>
            <ServiceDetailCard service="Profile Service" status='true'  latency="10" health="85" cpu="15"/>
            <ServiceDetailCard service="Notification Service" status='true'  latency="10" health="89" cpu="14"/>
            <ServiceDetailCard service="Cart Service" status='true'  latency="10" health="78" cpu="16"/>
            <ServiceDetailCard service="Order Service" status=false  latency="10" health="83" cpu="18"/>
            <ServiceDetailCard service="Payment Service" status='false'  latency="10" health="96" cpu="20"/>
        </div>
    </div>
</template>

<script setup>
import ServiceDetailCard from '../components/Dashbord-UI-Card/ServiceDetailCard.vue';
</script>
