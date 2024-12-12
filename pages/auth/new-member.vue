<script setup lang="ts">
import AnimatedIcon from '~/components/animated-icon.vue'
</script>

<template>
  <div class="flex flex-col space-y-2 text-center">
    <img
      src="~/assets/images/new-member.svg"
      alt="new member"
      class="mx-auto w-1/2"
    />
    <h1 class="text-2xl font-semibold tracking-tight">
      Ố ồ <span class="text-primary">thành viên mới</span> !
    </h1>
    <p class="text-sm text-muted-foreground">
      Tạo tài khoản ngay và tận hưởng chuyến bay
    </p>
    <Button class="w-full gap-1"
      >Tạo tài khoản
      <AnimatedIcon
        id="arrow_right"
        :size="24"
        target="button"
        color="#ffffff"
      />
    </Button>
  </div>
</template>
