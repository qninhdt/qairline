<script lang="ts" setup>
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

import 'css-doodle'

const images = [
  {
    url: 'images/hanoi.jpg',
    title: 'Hà Nội'
  },
  {
    url: 'images/newyork.jpg',
    title: 'New York'
  },
  {
    url: 'images/paris.jpg',
    title: 'Paris'
  },
  {
    url: 'images/bangkok.jpg',
    title: 'Bangkok'
  }
]

const activeIndex = ref(0)

// const numberOfPassengers = ref(1)
// const isBusinessClass = ref(false)

const onChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
}
</script>

<template>
  <div class="h-[100vh] w-[100vw] px-8 pt-40">
    <div
      class="mx-auto flex items-center justify-between px-0 lg:px-32 xl:px-[20rem]"
    >
      <div class="w-full px-4">
        <h1
          class="mb-4 text-3xl font-bold uppercase lg:text-4xl lg:leading-[3.5rem]"
        >
          <span
            >Trải nghiệm <span class="text-primary">chuyến bay</span><br />
            <span class="text-primary">thượng hạng</span> cùng QAIRLINE!
          </span>
        </h1>
        <p class="mt-2 text-xl text-muted-foreground">
          Bắt đầu chuyến hành trình của bạn ngay hôm nay!
        </p>
      </div>
      <div class="relative hidden w-fit lg:block">
        <swiper
          class="h-[256px] w-[256px] rotate-[10deg] overflow-hidden rounded-2xl"
          :effect="'cards'"
          :grab-cursor="true"
          :modules="[EffectCards]"
          @slide-change="onChange"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="h-[256px] w-[256px] overflow-hidden rounded-2xl">
              <img
                :src="image.url"
                alt="image"
                class="h-[256px] w-[256px] object-cover"
              />
            </div>
          </swiper-slide>
        </swiper>
        <falling-doodle class="absolute left-[-10%] top-[-50%] z-[-10]" />

        <div
          class="absolute left-[-10%] top-[40%] z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-primary bg-background"
        >
          <animated-icon id="play" :size="32" />
        </div>
      </div>
    </div>
    <booking-form />
    <!-- <div class="bottom-0 left-0">
      <city-doodle />
    </div> -->
  </div>
</template>

<style>
.swiper-slide-shadow {
  border-radius: 1rem;
  background-color: color-mix(
    in srgb,
    hsl(var(--primary)) 50%,
    transparent
  ) !important;
}
</style>
