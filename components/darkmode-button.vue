<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <Button
    class="rounded-sm p-2"
    variant="outline"
    @click="
      colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
    "
  >
    <AnimatedIcon
      :id="colorMode.preference === 'dark' ? 'sun' : 'moon'"
      :size="24"
    />
  </Button>
</template>
