<template>
  <div class="space-y-8 w-full">
    <div v-for="(table, index) in tables" :key="index">
      <CustomTable
        :name="`${table.tableName} Table`"
        :items="table.data"
        :columns="formatColumns(table.columns)"
        :showActions="false"
        :allowEdit="false"
        :allowDelete="false"
        :itemsPerPage="5"
      />
    </div>
  </div>
</template>

<script setup>
import CustomTable from '../Table/CustomTable.vue';

const props = defineProps({
  tables: {
    type: Array,
    required: true
  }
});

const formatColumns = (cols) =>
  cols.map(col => ({
    label: col.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    key: col
  }));
</script>
