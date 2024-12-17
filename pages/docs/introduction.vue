<script setup lang="ts">
import AnimatedIcon from '../components/animated-icon.vue'
const reasons = [
  {
    title: 'Giá vé cạnh tranh',
    description:
      'QAirline cam kết mang lại cho quý khách giá vé cạnh tranh nhất, giúp bạn tiết kiệm chi phí cho mỗi chuyến bay',
    image:
      'https://vlink.vn/wp-content/uploads/2024/04/ve-may-bay-gia-re299.jpg',
    icon: 'plane'
  },
  {
    title: 'Đội bay hiện đại',
    description:
      'QAirline sở hữu đội bay hiện đại, an toàn, được trang bị những công nghệ tiên tiến nhất để đảm bảo an toàn và thoải mái cho hành khách',
    image:
      'https://cdn-images.vtv.vn/zoom/640_400/562122370168008704/2023/12/5/photo1701742441606-1701742441838566788202.png'
  },
  {
    title: 'Dịch vụ khách hàng tận tâm',
    description:
      'QAirline luôn lắng nghe và phục vụ khách hàng tận tâm, đảm bảo mọi nhu cầu của quý khách được đáp ứng nhanh chóng và hiệu quả',
    image:
      'https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2020/5/14/phuc-vu-do-an-1589459165579405106642-25-0-1025-1600-crop-1589459186250742897989.jpg'
  },
  {
    title: 'Chuyến bay đúng giờ',
    description:
      'QAirline cam kết chuyến bay đúng giờ, giúp bạn luôn đến nơi đúng hẹn và không bỏ lỡ bất kỳ kế hoạch nào của mình',
    image:
      'https://donghoduyanh.com/upload/images/Bell%20&%20Ross%20BR01%20Aviation.jpg'
  }
]
</script>

<template>
  <div>
    <img
      src="https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3PbbuK3kcsydAW-7MB2EeiWwvyyhkN4OOO46Bq97DbMzlzrlK5JFlAfUU_aem_2nppyJMPvUaiSKfQZm1b0g"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">QAIRLINE - VUI TỪNG CHUYẾN BAY</h1>
      <p>
        QAirline là hãng hàng không giá rẻ hàng đầu tại Việt Nam, với mục tiêu
        mang lại trải nghiệm bay an toàn, tiện lợi. Chúng tôi cam kết mang lại
        cho quý khách dịch vụ chất lượng và giá cả hợp lý nhất
      </p>
    </div>
    <div class="m-auto w-9/12 space-y-4 pb-[32px]">
      <h2 class="text-[24px]">Tại sao chọn QAIRLINE?</h2>
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="reason in reasons"
            :key="reason.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                :src="reason.image"
                alt=""
                class="h-[200px] w-full object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                <AnimatedIcon
                  :id="reason.icon"
                  :size="32"
                  class="text-accent"
                  target="a"
                />
                {{ reason.title }}
              </h3>
              <p class="text-black">
                {{ reason.description }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px]">Liên hệ</h2>
      <p>Email: support@qairline.com</p>
      <p>Hotline: 1900 1234</p>
    </div>
  </div>
</template>
