<script setup lang="ts">
import QAirlineLogo from './qairline-logo.vue'
import MainNav from './main-nav.vue'
import UserNav from './user-nav.vue'
import DarkModeButton from './darkmode-button.vue'
import { user } from '../core/firebase'
</script>

<template>
  <div class="fixed left-0 top-0 z-50 w-[100vw] bg-[--background-75]">
    <div class="flex h-16 items-center px-8 lg:px-16">
      <div class="flex items-center md:space-x-4">
        <QAirlineLogo />
      </div>
      <MainNav class="mx-6" />
      <div class="ml-auto flex items-center space-x-4">
        <div v-if="user.isAdmin">
          <Button @click="() => $router.push('/admin')">Admin</Button>
        </div>
        <UserNav v-if="user.email" />
        <div v-else>
          <Button @click="() => $router.push('/auth')">Tham gia</Button>
        </div>
        <DarkModeButton />
      </div>
    </div>
  </div>
</template>
