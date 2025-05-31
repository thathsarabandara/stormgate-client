<template>
  <div class="flex flex-col justify-center items-start w-full bg-white p-4 rounded-xl">

    <p class="text-xl font-bold">Common Error Log</p>
    
    <div class="mb-4 flex gap-2 w-full mt-4">
      <input v-model="searchQuery" type="text" placeholder="Search..." class="p-2 border border-green-600 bg-green-50 rounded w-4/5" />
      <select v-model="searchColumn" class="p-2 border  border-green-600 bg-green-50 rounded w-1/5 ">
        <option v-for="column in columns" :key="column.key" :value="column.key" class="hover:bg-green-400">
          {{ column.label }}
        </option>
      </select>
    </div>

    <div class="overflow-x-auto w-full">
        <table class="w-full">
            <thead>
                <tr class="bg-green-200 shadow-xl">
                <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)" class="cursor-pointer p-2">
                    {{ column.label }}
                    <span v-if="sortColumn === column.key"> {{ sortOrder === 'asc' ? '↑' : '↓' }} </span>
                </th>
                <th v-if="showActions" class="p-2">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in paginatedItems" :key="item.id" class="mt-2 bg-green-50">
                <td v-for="column in columns" :key="column.key" class="p-2">
                    {{ item[column.key] }}
                </td>
                <td v-if="showActions" class="p-2">
                    <button v-if="allowEdit" @click="$emit('edit', item)" class="text-gray-400 mr-2 ">
                        <Icon icon="mdi:edit-box" class="w-6 h-6 hover:cursor-pointer"/>
                    </button>
                    <button v-if="allowDelete" @click="$emit('delete', item)" class="text-red-500">
                        <Icon icon="mdi:delete-empty" class="w-6 h-6 hover:cursor-pointer" />
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-end items-center w-full gap-2 mt-4">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        <Icon icon="mdi:skip-previous" class="text-xl hover:cursor-pointer" />
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
        <Icon icon="mdi:skip-next" class="text-xl hover:cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { usePagination } from '../../composables/usePagination'
import { Icon } from '@iconify/vue'

const props = defineProps({
  items: Array,
  columns: Array,
  showActions: {
    type: Boolean,
    default: true,
  },
  allowEdit: {
    type: Boolean,
    default: true,
  },
  allowDelete: {
    type: Boolean,
    default: true,
  },
  itemsPerPage: {
    type: Number,
    default: 5,
  },
})

// Emits
defineEmits(['edit', 'delete'])

// States
const searchQuery = ref('')
const searchColumn = ref('')
const sortColumn = ref('')
const sortOrder = ref('asc')

// Sorting
function sortBy(column) {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column
    sortOrder.value = 'asc'
  }
}

// Filtered & Sorted Data
const filteredItems = computed(() => {
  let filtered = props.items

  // Search
  if (searchQuery.value && searchColumn.value) {
    filtered = filtered.filter((item) =>
      String(item[searchColumn.value]).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Sort
  if (sortColumn.value) {
    filtered = [...filtered].sort((a, b) => {
      const valA = a[sortColumn.value]
      const valB = b[sortColumn.value]
      if (valA < valB) return sortOrder.value === 'asc' ? -1 : 1
      if (valA > valB) return sortOrder.value === 'asc' ? 1 : -1
      return 0
    })
  }

  return filtered
})

const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredItems, props.itemsPerPage)

watch(filteredItems, () => {
  goToPage(1)
})
</script>
