<script setup lang="ts">
import QAirlineLogo from './qairline-logo.vue'
import MainNav from './main-nav.vue'
import UserNav from './user-nav.vue'
</script>

<template>
  <div class="border-b">
    <div class="flex h-16 items-center px-4 lg:px-16">
      <div class="flex items-center md:space-x-4">
        <QAirlineLogo />
      </div>
      <MainNav class="mx-6" />
      <div class="ml-auto flex items-center space-x-4">
        <UserNav />
      </div>
    </div>
  </div>
</template>
