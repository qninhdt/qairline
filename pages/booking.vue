<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'
const days = [
  null,
  null,
  0.5,
  1.0,
  0.75,
  0.5,
  1.0,
  0.75,
  1.0,
  0.5,
  1.0,
  0.75,
  0.5,
  1.0,
  0.75,
  1.0,
  null,
  null
]

const activeIndex = ref(6)
</script>

<template>
  <div class="relative pt-20">
    <!-- filter - mobile -->
    <Drawer>
      <DrawerTrigger as-child>
        <div
          class="fixed bottom-20 left-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-primary"
        >
          <AnimatedIcon id="filter" :size="24" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle class="text-center">Tìm kiếm nâng cao</DrawerTitle>
          </DrawerHeader>
        </div>
        <div class="py-2">
          <FlightFilter />
        </div>
      </DrawerContent>
    </Drawer>
    <div class="flex flex-col px-4">
      <!-- image -->
      <div
        class="relative overflow-hidden rounded-sm border-2 border-solid border-primary"
      >
        <img
          src="~/assets/images/green_plane.jpg"
          alt="green_plane"
          class="h-[150px] w-full object-cover"
        />
        <div
          class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[--background-75] text-foreground"
        ></div>
        <div class="absolute right-0 top-0 flex h-full w-full p-2 pt-4">
          <swiper
            :modules="[Mousewheel]"
            :slides-per-view="'auto'"
            :space-between="15"
            :mousewheel="true"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            class="space-x-2 overflow-y-auto"
          >
            <swiper-slide
              v-for="(x, i) in days"
              :key="i"
              class="h-full !w-[150px]"
            >
              <div class="flex h-full flex-col">
                <div class="flex grow flex-col justify-end">
                  <div
                    v-if="i === activeIndex"
                    class="h-full rounded-sm border-2 border-primary bg-[--primary-50]"
                    :style="{ height: `${x * 100}%` }"
                  ></div>
                  <div
                    v-else-if="x != null"
                    class="rounded-sm border-2 border-solid border-muted-foreground bg-[--foreground-50]"
                    :style="{ height: `${x * 100}%` }"
                  ></div>
                  <div
                    v-else
                    class="h-full rounded-sm border-2 border-dotted border-background bg-[--background-50]"
                  ></div>
                </div>
                <div class="gow-0 text-center">
                  {{ x ? x : 'Không có' }}
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
