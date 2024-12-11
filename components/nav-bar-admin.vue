<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import SidebarNav from '../components/SidebarNav.vue'
import UserNav from '../components/user-nav.vue'
import QAirlineLogo from '../components/qairline-logo.vue'
</script>

<template>
  <div class="md:hidden">
    <VPImage
      alt="Forms"
      width="1280"
      height="1214"
      class="block"
      :image="{
        dark: '/examples/forms-dark.png',
        light: '/examples/forms-light.png'
      }"
    />
  </div>
  <div
    class="fixed left-0 top-0 z-50 hidden w-[100vw] space-y-6 p-3 pb-2 md:block"
  >
    <div class="flex h-16 items-center px-4 lg:px-16">
      <div class="flex items-center md:space-x-4">
        <QAirlineLogo />
      </div>
      <div class="ml-auto flex items-center space-x-4">
        <UserNav />
      </div>
    </div>
    <Separator class="m-0" />
    <div class="flex flex-col space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
