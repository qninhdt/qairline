<script setup lang="ts">
const cities = [
  'Hà Nội',
  'New York, Mỹ',
  'Paris, Pháp',
  'Bangkok, Thái Lan',
  'Bắc Kinh, Trung Quốc'
]
</script>
<template>
  <!-- from -->
  <div class="mb-4 flex space-x-2">
    <div class="w-[50%]">
      <div class="mb-2 flex items-center">
        <AnimatedIcon id="location" :size="24" />
        <span class="text-sm text-muted-foreground">Điểm đi</span>
      </div>
      <Select>
        <SelectTrigger class="lg:w-[200px]">
          <SelectValue placeholder="Chọn điểm đi" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="(city, index) in cities"
              :key="index"
              :value="city"
            >
              <b>{{ city }}</b>
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
        <span class="text-sm text-muted-foreground">Điểm đi</span>
      </div>
      <Select>
        <SelectTrigger class="lg:w-[200px]">
          <SelectValue placeholder="Chọn điểm đến" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="(city, index) in cities"
              :key="index"
              :value="city"
            >
              <b>{{ city }}</b>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
