<script lang="ts" setup>
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

import 'css-doodle'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const plugin = Autoplay({
  delay: 2000,
  stopOnMouseEnter: true,
  stopOnInteraction: false
})
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
  <div class="h-full w-[100vw] px-8 pt-40">
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
    <div class="m-auto w-9/12 pb-[32px] pt-[100px]">
      <Separator label="TIN TỨC" class="text-[30px]" />
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="post in posts"
            :key="post.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                :src="post.image"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ post.title }}
              </h3>
              <p class="text-black">
                {{ post.date }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <Separator label="KHUYẾN MÃI" class="text-[30px]" />
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="sale in sales"
            :key="sale.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                :src="sale.image"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ sale.title }}
              </h3>
              <p class="text-black">
                {{ sale.date }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <Separator label="ĐIỂM ĐẾN PHỔ BIẾN" class="text-[30px]" />
      <Carousel
        class="relative m-auto w-full pt-[30px]"
        :plugins="[plugin]"
        @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
      >
        <CarouselContent>
          <CarouselItem>
            <div class="p-1">
              <Card class="rounded-lg">
                <CardContent
                  class="flex h-[500px] rounded-lg bg-cover bg-center"
                  style="
                    background-image: url('https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-nen-Ha-Noi.jpg');
                  "
                >
                  <router-link to="/explore/hanoi/">
                    <div
                      class="flex h-full flex-col items-center justify-end pb-4 text-center text-white lg:w-1/3"
                    >
                      <h2 class="text-[36px] font-semibold">Hà Nội</h2>
                      <p class="text-md pl-2 backdrop-blur-[2px]">
                        Hà Nội, thủ đô hơn 1.000 năm tuổi của Việt Nam, là trung
                        tâm văn hóa, lịch sử và chính trị, nổi bật với những di
                        tích cổ kính, kiến trúc độc đáo và không khí sôi động.
                      </p>
                    </div>
                  </router-link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="p-1">
              <Card class="rounded-lg">
                <CardContent
                  class="flex h-[500px] rounded-lg bg-cover bg-center"
                  style="
                    background-image: url('https://phongcachviettravel.vn/wp-content/uploads/2022/10/wat-arun-temple-twilight-bangkok-thailand-scaled.jpg');
                  "
                >
                  <router-link to="/explore/bangkok/">
                    <div
                      class="flex h-full flex-col items-center justify-end pb-4 text-center text-white lg:w-1/3"
                    >
                      <h2 class="text-[36px] font-semibold">Bangkok</h2>
                      <p class="text-md pl-2 backdrop-blur-[2px]">
                        Bangkok, thủ đô của Thái Lan, là một thành phố sôi động
                        nổi bật với sự kết hợp giữa nét truyền thống và hiện
                        đại, với các đền chùa cổ kính, trung tâm mua sắm sầm uất
                        và cuộc sống về đêm náo nhiệt.
                      </p>
                    </div>
                  </router-link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="p-1">
              <Card class="rounded-lg">
                <CardContent
                  class="flex h-[500px] rounded-lg bg-cover bg-center"
                  style="
                    background-image: url('https://visco.edu.vn/media/2021/05/bieu-tuong-noi-tieng-khong-chi-cua-new-york-ma-toan-nuoc-my.jpg');
                  "
                >
                  <router-link to="/explore/new-york/">
                    <div
                      class="flex h-full flex-col items-center justify-end pb-4 text-center text-white lg:w-1/3"
                    >
                      <h2 class="text-[36px] font-semibold">New York</h2>
                      <p class="text-md pl-2 backdrop-blur-[2px]">
                        New York, thành phố lớn nhất và nổi tiếng nhất của Mỹ,
                        là trung tâm văn hóa, tài chính và nghệ thuật toàn cầu,
                        với các biểu tượng như Tượng Nữ thần Tự do, Times
                        Square, và Central Park.
                      </p>
                    </div>
                  </router-link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="p-1">
              <Card class="rounded-lg">
                <CardContent
                  class="flex h-[500px] rounded-lg bg-cover bg-center"
                  style="
                    background-image: url('https://www.tugo.com.vn/wp-content/uploads/tugo22-21.jpg');
                  "
                >
                  <router-link to="/explore/paris/">
                    <div
                      class="flex h-full flex-col items-center justify-end pb-4 text-center text-white lg:w-1/3"
                    >
                      <h2 class="text-[36px] font-semibold">Paris</h2>
                      <p class="text-md pl-2 backdrop-blur-[2px]">
                        Paris, thủ đô của Pháp, là một trung tâm văn hóa, nghệ
                        thuật và thời trang nổi tiếng thế giới, với các địa danh
                        biểu tượng như Tháp Eiffel, Nhà thờ Đức Bà và Bảo tàng
                        Louvre.
                      </p>
                    </div>
                  </router-link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
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
