<script setup lang="ts">
import { getAllCites } from '../core/firebase'

const from: any = defineModel('from')
const to: any = defineModel('to')
const cities: any = ref([])

onMounted(async () => {
  cities.value = await getAllCites()
})
</script>
<template>
  <!-- from -->
  <div class="mb-4 flex space-x-2">
    <div class="w-[50%]">
      <div class="mb-2 flex items-center">
        <AnimatedIcon id="location" :size="24" />
        <span class="text-sm text-muted-foreground">Điểm đi</span>
      </div>
      <Select v-model="from">
        <SelectTrigger class="lg:w-[200px]">
          <SelectValue placeholder="Chọn điểm đi" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="city in cities"
              :key="city.code"
              :value="city.code"
            >
              <b>{{ city.name }}</b>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- icon -->

    <div class="hidden items-center lg:flex">
      <AnimatedIcon id="plane" :size="16" />
    </div>

    <div class="w-[50%]">
      <div class="mb-2 flex items-center">
        <AnimatedIcon id="location" :size="24" />
        <span class="text-sm text-muted-foreground">Điểm đến</span>
      </div>
      <Select v-model="to">
        <SelectTrigger class="lg:w-[200px]">
          <SelectValue placeholder="Chọn điểm đến" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="city in cities"
              :key="city.code"
              :value="city.code"
            >
              <b>{{ city.name }}</b>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
