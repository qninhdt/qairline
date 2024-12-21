<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getInfoById } from '../../core/firebase'

const post = ref<any>({})
const route = useRoute()

onMounted(async () => {
  const postId = route.params.postId
  post.value = await getInfoById(postId)
})
</script>

<template>
  <div
    class="mx-auto my-10 mt-32 max-w-4xl rounded-lg border bg-background p-5 shadow-lg"
  >
    <div v-if="post.title" class="space-y-4">
      <!-- Post Title -->
      <h1 class="text-3xl font-bold text-foreground">{{ post.title }}</h1>

      <!-- Post Image -->
      <div v-if="post.img" class="overflow-hidden rounded-lg">
        <img
          :src="post.img"
          alt="Post Image"
          class="h-auto w-full object-cover"
        />
      </div>

      <!-- Post Content -->
      <div class="text-lg leading-relaxed text-foreground">
        <p v-html="post.content"></p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="text-center text-foreground">
      <p>Loading post...</p>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Customize Tailwind styles further if needed */
</style>
