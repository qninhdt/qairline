<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

import { ref } from 'vue'

const df = new DateFormatter('vi-VN', {
  dateStyle: 'long'
})

const router = useRouter()
const date = ref()
const from = ref('')
const to = ref('')
const classType = ref('economy')

const search = () => {
  if (!from.value || !to.value || !date.value) {
    return
  }

  // convert date to timestamp
  const timestamp = date.value.toDate(getLocalTimeZone()).getTime()
  const query = {
    from: from.value,
    to: to.value,
    classType: classType.value,
    date: timestamp
  }
  const encodedQuery = new URLSearchParams(query).toString()
  router.push(`/booking?${encodedQuery}`)
}
</script>

<template>
  <div class="z-20 mx-auto mt-[50px] w-full lg:w-fit">
    <div
      class="flex w-full space-x-2 rounded-tl-xl rounded-tr-xl bg-primary px-4 py-2 text-foreground lg:w-fit"
    >
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
      <LocationSelect v-model:from="from" v-model:to="to" />
      <div class="hidden w-[2px] bg-primary lg:block"></div>
      <!-- depart -->
      <div class="flex space-x-2">
        <div class="w-[100%]">
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
                  date
                    ? df.format(date.toDate(getLocalTimeZone()))
                    : 'Chọn ngày đi'
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" initial-focus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <!-- search -->
      <Button class="w-full lg:h-[70px] lg:w-[70px]" @click="search">
        <AnimatedIcon id="search" :size="24" target="button" color="white" />
        <span class="inline-block lg:hidden">Tìm kiếm</span>
      </Button>
    </div>
  </div>
</template>
