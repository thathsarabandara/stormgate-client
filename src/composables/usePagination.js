import { ref, computed } from 'vue'

export function usePagination(items, perPage = 10) {
  const currentPage = ref(1)

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return items.value.slice(start, start + perPage)
  })

  const totalPages = computed(() => Math.ceil(items.value.length / perPage))

  function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  return { currentPage, totalPages, paginatedItems, goToPage }
}
