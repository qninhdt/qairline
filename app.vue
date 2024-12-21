<script setup lang="ts">
// import { user } from './core/firebase'

const NO_NAVBAR_PAGES = ['auth', 'admin']

const NAVBAR_ADMIN_PAGES = ['admin']

const route = useRoute()
// const router = useRouter()

const showNavBar = computed(() => {
  for (const page of NO_NAVBAR_PAGES) {
    if (route.fullPath.includes(page)) {
      return false
    }
  }
  return true
})

const showNavBarAdmin = computed(() => {
  for (const page of NAVBAR_ADMIN_PAGES) {
    if (route.fullPath.includes(page)) {
      return true
    }
  }
  return false
})
</script>

<template>
  <div v-if="showNavBarAdmin">
    <NavBarAdmin>
      <NuxtPage />
    </NavBarAdmin>
  </div>
  <div v-else>
    <NavBar v-if="showNavBar" />
    <NuxtPage />
    <FooterForm />
  </div>
  <Toaster />
</template>
