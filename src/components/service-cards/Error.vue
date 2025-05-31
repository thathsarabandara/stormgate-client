<template>
    <div class="mt-3 w-full">
      <CustomTable
        :name="`${serviceName} Error Log`"
        :items="errorLogs"
        :columns="columns"
        :showActions="false"
        :allowEdit="false"
        :allowDelete="false"
        :itemsPerPage="5"
        @edit="editItem"
        @delete="deleteItem"
      />
    </div>
</template>
<script setup>
import CustomTable from '../Table/CustomTable.vue';

defineProps({
  serviceName: String,
  errorLogs: Array,
  columns: Array
});

const emit = defineEmits(['edit', 'delete'])

function editItem(item) {
  emit('edit', item)
}

function deleteItem(item) {
  emit('delete', item)
}
</script>