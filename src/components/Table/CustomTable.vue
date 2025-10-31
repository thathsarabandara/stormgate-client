<template>
  <div class="flex flex-col w-full bg-white p-3 sm:p-4 rounded-xl shadow-sm">
    <div class="flex flex-col space-y-1 mb-3">
      <h2 class="text-lg sm:text-xl font-bold text-gray-800">{{ name }}</h2>
      <p v-if="description" class="text-xs sm:text-sm text-gray-500">{{ description }}</p>
    </div>
    
    <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 w-full mb-4">
      <div class="relative flex-grow">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon icon="mdi:magnify" class="h-4 w-4 text-gray-400" />
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
        />
      </div>
      <div class="w-full sm:w-48">
        <select
          v-model="searchColumn"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base bg-white"
        >
          <option value="">All Columns</option>
          <option
            v-for="column in columns"
            :key="column.key"
            :value="column.key"
            class="text-sm"
          >
            {{ column.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="overflow-hidden rounded-lg border border-gray-200">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th 
                v-for="column in columns"
                :key="column.key"
                @click="sortBy(column.key)"
                class="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors"
                :class="{ 'pr-10': sortColumn === column.key }"
              >
                <div class="flex items-center">
                  {{ column.label }}
                  <span 
                    v-if="sortColumn === column.key" 
                    class="ml-1 text-gray-700"
                  >
                    {{ sortOrder === 'asc' ? '↑' : '↓' }}
                  </span>
                </div>
              </th>
              <th 
                v-if="showActions"
                class="px-3 sm:px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody class="bg-white divide-y divide-gray-200">
            <tr 
              v-for="item in paginatedItems"
              :key="item.id"
              class="hover:bg-gray-50 transition-colors"
            >
              <td 
                v-for="column in columns"
                :key="column.key"
                class="px-3 sm:px-4 py-3 text-sm text-gray-700 max-w-[200px] overflow-hidden text-ellipsis"
                :class="{ 'whitespace-nowrap': !column.wrap }"
                :title="String(item[column.key] || '')"
              >
                {{ item[column.key] }}
              </td>
              <td v-if="showActions" class="px-3 sm:px-4 py-3 text-sm font-medium text-right whitespace-nowrap">
                <div class="flex justify-end space-x-2">
                  <button
                    v-if="allowEdit"
                    @click="$emit('edit', item)"
                    class="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50"
                    title="Edit"
                  >
                    <Icon icon="mdi:pencil" class="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    v-if="allowDelete"
                    @click="$emit('delete', item)"
                    class="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
                    title="Delete"
                  >
                    <Icon icon="mdi:trash-can-outline" class="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!paginatedItems.length">
              <td :colspan="columns.length + (showActions ? 1 : 0)" class="px-4 py-8 text-center text-sm text-gray-500">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="text-sm text-gray-700 flex items-center px-4">
            {{ currentPage }} / {{ totalPages }}
          </span>
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing page <span class="font-medium">{{ currentPage }}</span> of 
              <span class="font-medium">{{ totalPages }}</span>
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="sr-only">Previous</span>
                <Icon icon="mdi:chevron-left" class="h-5 w-5" />
              </button>
              <template v-for="page in visiblePages" :key="page">
                <button
                  v-if="page === '...'"
                  disabled
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                >
                  ...
                </button>
                <button
                  v-else
                  @click="goToPage(page)"
                  :class="{
                    'z-10 bg-green-50 border-green-500 text-green-600': currentPage === page,
                    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': currentPage !== page
                  }"
                  class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {{ page }}
                </button>
              </template>
              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="sr-only">Next</span>
                <Icon icon="mdi:chevron-right" class="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import { usePagination } from '../../composables/usePagination'
import { Icon } from '@iconify/vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Data Table'
  },
  description: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    required: true,
    validator: (columns) => {
      return columns.every(col => 'key' in col && 'label' in col)
    }
  },
  showActions: {
    type: Boolean,
    default: true
  },
  allowEdit: {
    type: Boolean,
    default: true
  },
  allowDelete: {
    type: Boolean,
    default: true
  },
  itemsPerPage: {
    type: Number,
    default: 10,
    validator: (value) => value > 0
  },
  maxVisiblePages: {
    type: Number,
    default: 5,
    validator: (value) => value >= 3 && value % 2 === 1 // Ensure it's odd for better UX
  }
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

// Pagination
const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredItems, props.itemsPerPage)

// Watch for filter changes and reset to first page
watch(filteredItems, () => {
  if (currentPage.value !== 1) {
    goToPage(1)
  }
})

// Calculate visible pages for pagination
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = props.maxVisiblePages
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= maxVisible) {
    // Show all pages if total pages are less than max visible
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)
    
    // Calculate start and end of the middle section
    let start = Math.max(2, current - Math.floor(maxVisible / 2))
    let end = Math.min(total - 1, start + maxVisible - 3)
    
    // Adjust if we're at the end
    if (end === total - 1) {
      start = Math.max(2, total - maxVisible + 2)
    }
    
    // Add ellipsis if needed
    if (start > 2) {
      pages.push('...')
    }
    
    // Add middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    // Add ellipsis if needed
    if (end < total - 1) {
      pages.push('...')
    }
    
    // Always show last page
    pages.push(total)
  }
  
  return pages
})
</script>
