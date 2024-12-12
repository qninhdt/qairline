<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

import { ref } from 'vue'
import AnimatedIcon from './animated-icon.vue'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div class="flex flex-col">
    <form class="mb-6" @submit="onSubmit">
      <Label class="sr-only" for="email"> Email </Label>
      <Input
        id="email"
        placeholder="name@example.com"
        type="email"
        auto-capitalize="none"
        auto-complete="email"
        auto-correct="off"
        :disabled="isLoading"
        class="mb-2"
      />
      <Button class="w-full gap-1" :disabled="isLoading">
        Sẵn sàng<AnimatedIcon
          id="firework"
          :size="24"
          target="button"
          color="#ffffff"
        />
      </Button>
    </form>

    <Separator class="mb-6" label="hoặc tiếp tục với" />
    <Button class="mb-2" variant="outline" type="button" :disabled="isLoading">
      <AnimatedIcon id="google" :size="24" target="button" />
      <span>Google</span>
    </Button>
    <Button variant="outline" type="button" :disabled="isLoading">
      <AnimatedIcon id="facebook" :size="24" target="button" />
      <span>Facebook</span>
    </Button>
  </div>
</template>
