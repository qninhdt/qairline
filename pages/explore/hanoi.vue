<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel'
</script>

<template>
  <div class="m-auto">
    <img
      src="https://suckhoedoisong.qltns.mediacdn.vn/Images/thanhloan/2020/11/28/Nam-2030-du-lich-ha-noi-phan-dau-tro-thanh-nganh-kinh-te-mui-nhon-cua-thu-do-19.jpg"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">HÀ NỘI</h1>
      <p>
        Được mệnh danh là “trái tim của Việt Nam”, Thủ Đô Hà Nội lưu giữ những
        vẻ đẹp tuyệt mỹ từ cảnh quan, mang đến cho bạn những cảm nhận và những
        trải nghiệm đa dạng về lịch sử, văn hóa, con người, ẩm thực của Việt
        Nam. Bởi vậy, khi đặt chân tới Hà Nội, du khách sẽ ngỡ ngàng và có một
        niềm yêu mến đặc biệt dành cho những cảnh quan, các công trình di tích
        lịch sử cũng như sự thanh lịch và vô cùng tinh tế của người Hà thành.
        Tất cả những điểm chạm thú vị của Hà Nội đang ẩn mình trong từng ngóc
        ngách, con phố và chờ du khách đến khám phá! Hà Nội là một thành phố
        đáng sống, đáng trải nghiệm và khám phá.
      </p>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">
        CÁC ĐIỂM DU LỊCH NỔI TIẾNG Ở HÀ NỘI
      </h2>
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(_, index) in 5"
            :key="index"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                src="https://tripmap.vn/wp-content/uploads/2024/09/mua-thu-o-ho-guom-kham-pha-ve-dep-quyen-ru-cua-trai-tim-thu-do-172551458853-jpg.webp"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold">Hồ Gươm</h3>
              <p>
                Hồ Gươm là một trong những điểm du lịch nổi tiếng nhất ở Hà Nội.
                Đây là một hồ nước tự nhiên nằm ở trung tâm thành phố, được mệnh
                danh là “trái tim của Hà Nội”. Hồ Gươm không chỉ là nơi du khách
                thư giãn, ngắm cảnh mà còn là nơi lưu giữ nhiều di tích lịch sử,
                văn hóa của dân tộc Việt Nam.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">CÁC MÓN ĂN NGON Ở HÀ NỘI</h2>
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(_, index) in 5"
            :key="index"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                src="https://tiki.vn/blog/wp-content/uploads/2023/10/bun-cha-scaled.jpeg"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold">Bún chả</h3>
              <p>
                Bún chả là một trong những món ăn ngon nổi tiếng của Hà Nội. Món
                ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một
                số loại gia vị khác. Bún chả Hà Nội được nhiều người yêu thích
                bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">KINH NGHIỆM DU LỊCH</h2>
      <ul>
        <li>
          <h3 class="text-[20px] font-semibold">Nên đi vào thời gian nào?</h3>
          <p>
            Thời gian tốt nhất để du lịch Hà Nội là vào mùa xuân (từ tháng 3 đến
            tháng 4) hoặc mùa thu (từ tháng 9 đến tháng 11). Đây là thời điểm
            thời tiết ở Hà Nội khá mát mẻ, dễ chịu và không quá nóng hoặc lạnh.
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên ăn gì?</h3>
          <p>
            Khi đến Hà Nội, bạn không thể bỏ qua những món ăn ngon như phở, bún
            chả, nem chua rán, bánh mỳ pate, chả cá Lã Vọng, bún ốc, bún riêu
            cua, bún bò Huế
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên mua gì?</h3>
          <p>
            Khi đến Hà Nội, bạn có thể mua những món quà lưu niệm như áo dài,
            nón lá, quạt giấy, bát tràng, lư hương
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
