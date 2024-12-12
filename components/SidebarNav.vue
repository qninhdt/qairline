<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Item {
  title: string
  href: string
}

const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    title: 'Trang chủ',
    href: '/admin/'
  },
  {
    title: 'Quản lý thông tin hãng',
    href: '/admin/posts'
  },
  {
    title: 'Quản lý thông tin tàu bay',
    href: '/admin/plane'
  },
  {
    title: 'Quản lý đặt vé khách hàng',
    href: '/admin/bookings'
  }
]
</script>

<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      :class="
        cn(
          'w-full justify-start text-left',
          $route.path === item.href && 'bg-muted hover:bg-muted'
        )
      "
    >
      {{ item.title }}
    </Button>
  </nav>
</template>
