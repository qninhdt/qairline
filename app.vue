<script setup lang="ts">
const NO_NAVBAR_PAGES = ['auth', 'admin']

const route = useRoute()

const showNavBar = computed(() => {
  for (const page of NO_NAVBAR_PAGES) {
    if (route.fullPath.includes(page)) {
      return false
    }
  }
  return true
})
</script>

<template>
  <div>
    <NavBar v-if="showNavBar" />
    <NuxtPage />
  </div>
</template>
