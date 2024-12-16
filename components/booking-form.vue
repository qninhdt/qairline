<script setup lang="ts">
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone
} from '@internationalized/date'

import { ref } from 'vue'

const df = new DateFormatter('vi-VN', {
  dateStyle: 'long'
})

const value = ref<DateValue>()
const cities = [
  'Hà Nội',
  'New York, Mỹ',
  'Paris, Pháp',
  'Bangkok, Thái Lan',
  'Bắc Kinh, Trung Quốc'
]
const tripType = ref('one-way')
const classType = ref('economy')
</script>

<template>
  <div class="z-20 mx-auto mt-[50px] w-full lg:w-fit">
    <div
      class="flex w-full space-x-2 rounded-tl-xl rounded-tr-xl bg-primary px-4 py-2 text-foreground lg:w-fit"
    >
      <Select v-model="tripType">
        <SelectTrigger class="w-[50%] lg:w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem :value="'one-way'">
              <b>Một chiều</b>
            </SelectItem>

            <SelectItem :value="'round-trip'">
              <b>Khứ hồi</b>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select v-model="classType">
        <SelectTrigger class="w-[50%] lg:w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem :value="'economy'">
              <b>Phổ thông</b>
            </SelectItem>

            <SelectItem :value="'business'">
              <b>Thương gia</b>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div
      class="flex flex-col space-y-4 rounded-bl-xl rounded-br-xl border-2 border-solid border-primary bg-background p-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:rounded-tr-xl"
    >
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
      </div>
      <!-- separator -->
      <div class="hidden w-[2px] bg-primary lg:block"></div>
      <!-- depart -->
      <div class="flex space-x-2">
        <div class="w-[50%]">
          <div class="mb-2 flex items-center">
            <AnimatedIcon id="location" :size="24" />
            <span class="text-sm text-muted-foreground">Thời gian đi</span>
          </div>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="w-full justify-start text-left font-normal lg:w-[200px]"
              >
                {{
                  value
                    ? df.format(value.toDate(getLocalTimeZone()))
                    : 'Chọn ngày đi'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="value" initial-focus />
            </PopoverContent>
          </Popover>
        </div>
        <div class="w-[50%]">
          <div class="mb-2 flex items-center">
            <AnimatedIcon id="location" :size="24" />
            <span class="text-sm text-muted-foreground">Thời gian về</span>
          </div>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="w-full justify-start text-left font-normal lg:w-[200px]"
              >
                {{
                  value
                    ? df.format(value.toDate(getLocalTimeZone()))
                    : 'Chọn ngày về'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="value" initial-focus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <!-- search -->
      <Button class="w-full lg:h-[70px] lg:w-[70px]">
        <AnimatedIcon id="search" :size="24" target="button" color="white" />
        <span class="inline-block lg:hidden">Tìm kiếm</span>
      </Button>
    </div>
  </div>
</template>
