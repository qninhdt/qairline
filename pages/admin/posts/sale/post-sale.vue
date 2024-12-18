<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { cn } from '@/lib/utils'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone
} from '@internationalized/date'
import { CalendarIcon } from '@radix-icons/vue'
import { type Ref, ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 })
}) as Ref<DateRange>
</script>

<template>
  <div class="h-screen space-y-4 overflow-y-scroll p-6">
    <a href="/admin/posts/sale">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Mã khuyến mãi</Label>
      <Input type="text" />
      <Label class="block">Mô tả</Label>
      <Input type="text" />
      <Label class="block">Thời gian áp dụng</Label>
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="
              cn(
                'w-[280px] justify-start text-left font-normal',
                !value && 'text-muted-foreground'
              )
            "
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            <template v-if="value.start">
              <template v-if="value.end">
                {{ df.format(value.start.toDate(getLocalTimeZone())) }} -
                {{ df.format(value.end.toDate(getLocalTimeZone())) }}
              </template>

              <template v-else>
                {{ df.format(value.start.toDate(getLocalTimeZone())) }}
              </template>
            </template>
            <template v-else> Pick a date </template>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <RangeCalendar
            v-model="value"
            initial-focus
            :number-of-months="2"
            @update:start-value="(startDate) => (value.start = startDate)"
          />
        </PopoverContent>
      </Popover>
      <Label class="block">Loại giảm giá</Label>
      <RadioGroup default-value="option-one" class="pl-4">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="option-one" value="option-one" />
          <Label for="option-one">Phần trăm</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="option-two" value="option-two" />
          <Label for="option-two">Cố định</Label>
        </div>
      </RadioGroup>
      <Label class="block">Giảm giá</Label>
      <Input type="text"></Input>
      <Label class="block">Ảnh bài viết</Label>
      <Input type="file" />
      <Button class="mr-4 mt-4">Đăng bài</Button>
      <a href="/admin/posts/sale"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
