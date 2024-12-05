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
    title: 'Khao Pad',
    description:
      'Khao Pad là một trong những món ăn ngon và nổi tiếng của Thái Lan. Món ăn này gồm có cơm, thịt, rau sống và một số loại gia vị khác. Khao Pad Thái Lan được nhiều người yeu thích bởi hương vị thơm ngon, đậm đà và cách chế biến tinh tế.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1717063806/ltnussnzntbfh4hqcdjf.webp'
  },
  {
    title: 'Khao Soi',
    description:
      'Khao Soi là một trong những món ăn ngon và nổi tiếng của Thái Lan. Món ăn là sự kết hợp tuyệt vời giữa mì trứng, thịt gà hoặc bò, và nước cà ri dừa sánh mịn. Món ăn còn đậm đà hơn khi được thêm hành tím, rau cải chua và ớt bột nướng. Hương vị độc đáo của bạch đậu khấu và nghệ tạo nên màu vàng đẹp mắt và hương vị thơm ngon khó quên.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1717063831/eqilh9a1ozfpxhlvpxpk.webp'
  },
  {
    title: 'Pad Thai',
    description:
      'Được xem là quốc hồn quốc túy của Thái Lan, Pad Thai là một trong những món ăn bạn “phải thử” khi đến Bangkok. Pad Thai bao gồm mì xào với tôm hoặc gà, ớt, đường thốt nốt, me, nước cốt chanh, trứng và lạc rang. Món ăn này có sự cân bằng hoàn hảo giữa vị ngọt và cay.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1717063858/mpwzfnbhqhjcnunukhfq.webp'
  },
  {
    title: 'Laeng Saeb',
    description:
      'Một trong những món ăn đặc sản không thể bỏ qua khi đến Bangkok là Laeng Saeb - sườn cay. Món ăn này được chế biến từ sườn non, được nấu chậm cùng ớt, củ cải trắng, hành lá, gừng và lá chanh. Những miếng sườn được xếp chồng lên nhau, tạo thành một tháp ấn tượng. Khi thưởng thức, bạn sẽ cảm nhận được vị thịt mềm tan trong miệng, nhấn chìm trong nước sốt đậm đà, cay chua.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1717063879/vrodotk6sisob0jlydjh.webp'
  }
]

const places = [
  {
    title: 'Khu phố người Hoa ChinaTown',
    description:
      'Khu phố người Hoa ChinaTown là một trong những điểm du lịch nổi tiếng ở Bangkok. Đây là nơi tập trung nhiều hoạt động văn hóa, giải trí và mua sắm, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/chinatown-e1520668621577.jpg'
  },
  {
    title: 'Grand Place - Wat Phra Keaw',
    description:
      'Grand Place - Wat Phra Keaw là một trong những điểm du lịch nổi tiếng ở Bangkok. Đây là nơi tôn vinh văn hóa học thuật của Thái Lan, với kiến trúc cổ kính, những bia đá khắc tên các vị vua, nhà vua nổi tiếng.',
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/chuavang-e1520668232347.jpeg'
  },
  {
    title: 'Chùa Phật Vàng',
    description:
      'Chùa Phật Vàng là một trong những điểm du lịch nổi tiếng ở Bangkok. Đây là nơi tôn vinh văn hóa học thuật của Thái Lan, với kiến trúc cổ kính, những bia đá khắc tên các thầy thuốc, nhà giáo nổi tiếng.',
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/chuaphatvang-e1520668274884.jpg'
  },
  {
    title: 'Khu Siam',
    description:
      'Khu Siam là một trong những điểm du lịch nổi tiếng ở Bangkok. Đây là nơi tập trung nhiều hoạt động văn hóa, giải trí và mua sắm, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/Siam-Center-e1520667774258.jpg'
  }
]
</script>

<template>
  <div class="m-auto">
    <img
      src="https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/10/Wat-Arun-night-trip-to-Bangkok-Thailand.jpg?ssl=1"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">BANGKOK</h1>
      <p>
        Bangkok, thủ đô của Thái Lan, là một trong những điểm du lịch hấp dẫn
        nhất Đông Nam Á. Thành phố nổi tiếng với những ngôi chùa linh thiêng,
        các khu chợ sầm uất, và những khu phố ẩm thực đa dạng. Bangkok cũng là
        nơi giao thoa giữa nét truyền thống và hiện đại, với nền ẩm thực phong
        phú cùng các hoạt động văn hóa đa dạng, thu hút du khách từ khắp nơi
        trên thế giới.
      </p>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">
        CÁC ĐIỂM DU LỊCH NỔI TIẾNG Ở BANGKOK
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
              <h3 class="text-[20px] font-semibold">{{ place.title }}</h3>
              <p>
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
      <h2 class="text-[24px] font-semibold">CÁC MÓN ĂN NGON Ở BANGKOK</h2>
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
              <h3 class="text-[20px] font-semibold">{{ food.title }}</h3>
              <p>
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
            Thời gian tốt nhất để đến Bangkok là từ tháng 11 đến tháng 2, khi
            thời tiết ở đây khá mát mẻ và dễ chịu. Đây cũng là thời điểm nhiều
            lễ hội văn hóa diễn ra, thu hút nhiều du khách.
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên ăn gì?</h3>
          <p>
            Khi đến Bangkok, bạn không thể bỏ qua những món ăn đặc sản như Pad
            Thai, Khao Soi, Laeng Saeb, Khao Pad
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên mua gì?</h3>
          <p>
            Bangkok nổi tiếng với các khu chợ sầm uất như Chatuchak, Siam
            Paragon, Asiatique, nơi bạn có thể mua sắm các sản phẩm thời trang,
            đồ lưu niệm, đồ điện tử, đồ ăn vặt, và nhiều sản phẩm khác.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
