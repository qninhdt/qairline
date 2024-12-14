<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel'

const foods = [
  {
    title: 'Bún chả',
    description:
      'Bún chả là một trong những món ăn ngon nổi tiếng của Hà Nội. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Bún chả Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image:
      'https://cdn.buffetposeidon.com/app/media/uploaded-files/090724-bun-cha-ha-noi-buffet-poseidon-1.jpeg'
  },
  {
    title: 'Phở',
    description:
      'Phở là một trong những món ăn ngon và nổi tiếng của Việt Nam. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Phở Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image:
      'https://giadinh.mediacdn.vn/thumb_w/640/2020/9/13/photo-1-1600006283562691307317.jpg'
  },
  {
    title: 'Bún riêu cua',
    description:
      'Bún riêu cua là một trong những món ăn ngon nổi tiếng của Hà Nội. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Bún riêu cua Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image: 'https://cdn.tgdd.vn/2020/08/CookProduct/Untitled-1-1200x676-10.jpg'
  },
  {
    title: 'Bún bò Huế',
    description:
      'Bún bò Huế là một trong những món ăn ngon nổi tiếng của Hà Nội. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Bún bò Huế Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image:
      'http://visithue.vn/Portals/0/AmazingHue/SecretOfHue/huetourism_Van%20hoa%20co%20do%20trong%20Bun%20bo%20Hue%201.jpg'
  },
  {
    title: 'Nem nướng',
    description:
      'Nem nướng là một trong những món ăn ngon nổi tiếng của Hà Nội. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Nem nướng Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image:
      'https://cdn.tgdd.vn/2021/09/CookDish/cach-lam-nem-nuong-nha-trang-bang-noi-chien-khong-dau-thom-avt-1200x676.jpg'
  },
  {
    title: 'Bún đậu',
    description:
      'Bún đậu là một trong những món ăn ngon nổi tiếng của Hà Nội. Món ăn này gồm có bún, chả, nước mắm pha chua ngọt, rau sống và một số loại gia vị khác. Bún đậu Hà Nội được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image: 'https://dauhomemade.vn/apps/uploads/2019/01/020A3144-1024x682.jpg'
  }
]

const places = [
  {
    title: 'Văn Miếu - Quốc Tử Giám',
    description:
      'Văn Miếu - Quốc Tử Giám là một trong những điểm du lịch nổi tiếng ở Hà Nội. Đây là nơi tôn vinh văn hóa học thuật của Việt Nam, với kiến trúc cổ kính, những bia đá khắc tên các thầy thuốc, nhà giáo nổi',
    image:
      'https://static.vinwonders.com/production/van-mieu-quoc-tu-giam-1.jpg'
  },
  {
    title: 'Hồ Gươm',
    description:
      'Hồ Gươm là một trong những điểm du lịch nổi tiếng ở Hà Nội. Đây là nơi tập trung nhiều hoạt động văn hóa, giải trí và mua sắm, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://mia.vn/media/uploads/blog-du-lich/ho-hoan-kiem-1-1710638969.jpg'
  },
  {
    title: 'Lăng Chủ tịch Hồ Chí Minh',
    description:
      'Lăng Chủ tịch Hồ Chí Minh là một trong những điểm du lịch nổi tiếng ở Hà Nội. Đây là nơi tôn vinh văn hóa học thuật của Việt Nam, với kiến trúc cổ kính, những bia đá khắc tên các thầy thuốc, nhà giáo nổi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/P20230910AS-1839.jpg/500px-P20230910AS-1839.jpg'
  },
  {
    title: 'Chùa Một Cột',
    description:
      'Chùa Một Cột là một trong những điểm du lịch nổi tiếng ở Hà Nội. Đây là nơi tôn vinh văn hóa học thuật của Việt Nam, với kiến trúc cổ kính, những bia đá khắc tên các thầy thuốc, nhà giáo nổi',
    image:
      'https://bangladeshembassy.vn/wp-content/uploads/2023/07/chua-mot-cot-o-dau-3.png'
  }
]
</script>

<template>
  <div class="m-auto">
    <img
      src="http://w160.tamphat.edu.vn/uploads/images/du-lich-ha-noi-sapa-4-ngay-banner-2016022417260514.jpg"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">HÀ NỘI</h1>
      <p>
        Hà Nội, thủ đô nghìn năm văn hiến của Việt Nam, là trung tâm chính trị,
        văn hóa và lịch sử quan trọng của cả nước. Thành phố nổi tiếng với kiến
        trúc cổ kính, những con phố nhỏ trong khu phố cổ, và các danh lam thắng
        cảnh như Hồ Gươm, Văn Miếu - Quốc Tử Giám, và Lăng Chủ tịch Hồ Chí Minh.
        Hà Nội cũng là nơi giao thoa giữa nét truyền thống và hiện đại, với nền
        ẩm thực phong phú cùng các hoạt động văn hóa đa dạng, thu hút du khách
        từ khắp nơi trên thế giới.
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
            v-for="place in places"
            :key="place.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                :src="place.image"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ place.title }}
              </h3>
              <p class="text-black">
                {{ place.description }}
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
            v-for="food in foods"
            :key="food.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="rounded-lg bg-gray-100 p-4">
              <img
                :src="food.image"
                alt=""
                class="h-[200px] w-full rounded-lg object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ food.title }}
              </h3>
              <p class="text-black">
                {{ food.description }}
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
