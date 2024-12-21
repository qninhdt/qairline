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
import { useToast } from '../../../../components/ui/toast'
import { addSale } from '../../../../core/firebase'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const value = ref({
  start: new CalendarDate(2024, 12, 20),
  end: new CalendarDate(2024, 12, 20).add({ days: 20 })
}) as Ref<DateRange>

const title = ref('')
const content = ref('')
const img = ref('')
const amount = ref(0)
const type_sale = ref('')

const { toast } = useToast()
const router = useRouter()

const submit = async () => {
  await addSale({
    title: title.value,
    content: content.value,
    img: img.value,
    amount: amount.value,
    type_sale: type_sale.value,
    date: {
      start: value.value.start
        .toDate(getLocalTimeZone())
        .toLocaleDateString('en-GB'),
      end: value.value.end
        .toDate(getLocalTimeZone())
        .toLocaleDateString('en-GB')
    }
  })

  toast({
    title: 'Bài viết đã được thêm'
  })

  router.push('/admin/posts/sale')
}
</script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/posts/sale">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Mã khuyến mãi</Label>
      <Input v-model="title" type="text" />
      <Label class="block">Mô tả</Label>
      <Input v-model="content" type="text" />
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
            <template v-else> Chọn ngày </template>
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
      <RadioGroup v-model="type_sale" default-value="option-one" class="pl-4">
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
      <Input v-model="amount" type="text"></Input>
      <Label class="block">Link ảnh bài viết</Label>
      <Input v-model="img" type="text" />
      <Button class="mr-4 mt-4" @click="submit">Đăng bài</Button>
      <a href="/admin/posts/sale"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
