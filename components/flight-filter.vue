<script setup lang="ts">
import { Slider } from '../components/ui/slider'
// const classType = defineModel('classType', { default: 'economy' })
const maxPrice = defineModel('maxPrice', { default: [3000000] })

const priceToStr = (price: number) => {
  let priceStr = price.toString()

  // Add comma to separate thousands
  priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // add 'đ' at the end
  priceStr += 'đ'

  return priceStr
}
</script>

<template>
  <div>
    <div class="mb-8">
      <Separator label="Ngân sách" class="mb-6" />
      <div class="mx-auto flex w-[75%] flex-col space-y-2">
        <Slider
          v-model="maxPrice"
          :max="5000000"
          :min="1000000"
          :step="1000000"
        />
        <div class="text-muted-foreground">
          <span class="float-left"
            >Từ <span class="font-bold text-primary">1,000,000đ</span></span
          >
          <span class="float-right"
            >Đến
            <span class="font-bold text-primary">{{
              priceToStr(maxPrice[0])
            }}</span></span
          >
        </div>
      </div>
    </div>
    <div class="mb-8">
      <Separator label="Sắp xếp theo" class="mb-4" />
      <div class="px-8">
        <RadioGroup default-value="comfortable">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" value="default" />
            <Label for="r1">Mặc định</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" value="cheap" />
            <Label for="r2">Giá rẻ nhất</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r3" value="early" />
            <Label for="r3">Khởi hành sớm nhất</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r4" value="late" />
            <Label for="r4">Khởi hành muộn nhất</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
    <div class="mb-8">
      <Separator label="Khuyễn mãi" class="mb-4" />
      <div class="px-8">
        <div>
          <div class="mb-2 flex items-center space-x-2">
            <Checkbox />
            <label
              for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Giảm giá vé
            </label>
          </div>
          <div class="mb-2 flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Miễn phí hành lý
            </label>
          </div>
          <div class="mb-2 flex items-center space-x-2">
            <Checkbox />
            <label
              for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Suất ăn đặc biệt
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
