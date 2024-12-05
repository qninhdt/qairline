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
    title: 'Pizza New York',
    description:
      'Pizza New York, một món ăn không thể bỏ qua khi đặt chân đến thành phố này, mang hương vị độc đáo kết hợp từ nền ẩm thực Ý. Nguyên liệu phong phú từ hải sản, thịt lợn, đến thịt bò, kết hợp với lớp phô mai mềm mịn trên bề mặt. Đặc biệt, vỏ bánh được nướng trong lò gạch cũ, mang đến hương thơm nồng nàn khó cưỡng. Pizza có thể được thưởng thức theo miếng hoặc gấp đôi, phù hợp với sở thích của từng người.',
    image:
      'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/1/5/h1-1704461670671452941639.png'
  },
  {
    title: 'Pastrami on rye',
    description:
      'Pastrami on rye, một loại bánh mì sandwich cổ điển và nổi tiếng ở New York, là lựa chọn tuyệt vời cho bất cứ ai muốn khám phá ẩm thực địa phương. Đặc biệt phổ biến trong cộng đồng Do Thái, món này là sự kết hợp hài hòa của thịt bò ngâm muối, tỏi, tiêu và rau mùi. Thưởng thức Pastrami on rye trong không gian xanh của các công viên ở New York mang lại trải nghiệm ẩm thực độc đáo và gần gũi, khó quên cho du khách',
    image:
      'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/1/5/h2-1704461670761315289561.jpg'
  },
  {
    title: 'Hot dog',
    description:
      'Hot dog, biểu tượng ẩm thực của đường phố New York, là món ăn không thể thiếu trong bất kỳ chuyến thăm nào tới thành phố này. Được phục vụ nóng hổi trong bánh mì mềm, kèm theo các loại topping như mustard, ketchup, cà chua, hành tây, và dưa chua, mỗi chiếc hot dog mang đậm hương vị đặc trưng của New York. Dễ dàng tìm thấy tại các xe bán hàng rong, hot dog đã trở thành một phần không thể tách rời của văn hóa ẩm thực đường phố sôi động ở New York.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvaQpfxNXX1BtlBYnhAO6ZEjEpVOLF8cwrQ&s'
  },
  {
    title: 'Ngô Mỹ nướng',
    description:
      'Món ngô Mỹ nướng là một phần không thể thiếu trong danh sách ẩm thực phải thử khi đến New York. Nổi tiếng với hương vị ngô đặc trưng, món này được yêu thích không chỉ bởi người dân địa phương mà còn bởi du khách. Ngô được nướng chín tới, rồi phủ bột ớt, chanh và pho mát cotija,... tạo nên một hương vị độc đáo và khó quên. Với giá khoảng 3 USD (khoảng hơn 73.000 đồng), ngô Mỹ nướng là lựa chọn hoàn hảo cho một bữa ăn nhẹ ngon miệng.',
    image:
      'https://images2.thanhnien.vn/528068263637045248/2024/1/5/h3-17044616708802043742333.png'
  },
  {
    title: 'Bánh Knish',
    description:
      'Knish, một loại bánh truyền thống từ Đông Âu, đã trở thành một phần của nền ẩm thực đa dạng tại New York. Thường được chiên hoặc nướng, Knish được làm từ khoai tây nghiền, hỗn hợp dưa cải, hành tây, phô mai, bột mì, thịt xay... Tại một số nơi, nó còn được bổ sung thêm đậu đen, khoai lang, đậu hủ, hoa quả và rau bina. Với hình dạng đa dạng từ tròn, vuông đến chữ nhật, Knish là món ăn nhẹ lý tưởng để thưởng thức trên con đường Brooklyn.',
    image:
      'https://images2.thanhnien.vn/528068263637045248/2024/1/5/h5-17044616712781286632229.jpg'
  }
]

const places = [
  {
    title: 'Bảo tàng nghệ thuật hiện đại',
    description:
      'MoMA không chỉ là một bảo tàng, mà còn là một thánh địa của nghệ thuật hiện đại. Tại đây, bạn sẽ được chiêm ngưỡng những tuyệt tác làm nên tên tuổi của các danh họa bậc thầy, từ "Đêm đầy sao" của Van Gogh cho đến "Lon súp Campbell" của Andy Warhol. Bạn sẽ ngạc nhiên khi biết rằng những tác phẩm kinh điển này từng bị coi là "quá hiện đại" vào thời của chúng. ',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1720603525/gftour7tiomnwkewd8oa.webp'
  },
  {
    title: 'Tòa nhà Empire State',
    description:
      'Tòa nhà Empire State là một trong những biểu tượng của New York. Với kiến trúc độc đáo, tòa nhà cao 102 tầng này từng là tòa nhà cao nhất thế giới. Từ trên tầng 86, bạn sẽ có cơ hội ngắm nhìn toàn cảnh thành phố New York, với những tòa nhà chọc trời, trung tâm tài chính và thương mại sầm uất.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1720603547/aeafhpwhdccamcshjhxt.webp'
  },
  {
    title: 'Vườn bách thảo',
    description:
      'Vườn bách thảo New York là một trong những điểm du lịch nổi tiếng ở New York. Đây là nơi tập trung nhiều loài cây, hoa, cỏ, và động vật quý hiếm, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1720603772/jatckgtvzy0ow9u5vuhl.webp'
  },
  {
    title: 'Đài quan sát Summit One Vanderbilt',
    description:
      'Đài quan sát Summit One Vanderbilt là một trong những điểm du lịch nổi tiếng ở New York. Đây là nơi tập trung nhiều hoạt động văn hóa, giải trí và mua sắm, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1720603789/an47zjbnpasz8qbhlikh.webp'
  }
]
</script>

<template>
  <div class="m-auto">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">NEW YORK</h1>
      <p>
        New York, thành phố lớn nhất của Mỹ, là một trong những trung tâm văn
        hóa, tài chính và thương mại hàng đầu thế giới. Thành phố nổi tiếng với
        những tòa nhà chọc trời, các khu mua sắm sầm uất, và nền ẩm thực đa
        dạng. New York cũng là nơi giao thoa giữa nhiều nền văn hóa, thu hút du
        khách từ khắp nơi trên thế giới.
      </p>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">
        CÁC ĐIỂM DU LỊCH NỔI TIẾNG Ở NEW YORK
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
      <h2 class="text-[24px] font-semibold">CÁC MÓN ĂN NGON Ở NEW YORK</h2>
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
            Thời tiết ở New York khá lạnh vào mùa đông, nên bạn nên đi vào mùa
            xuân hoặc mùa thu để tránh lạnh. Thời gian tốt nhất để đến New York
            là từ tháng 4 đến tháng 6 hoặc từ tháng 9 đến tháng 11.
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên ăn gì?</h3>
          <p>
            Khi đến New York, bạn không thể bỏ qua những món ăn đặc trưng như
            Pizza New York, Pastrami on rye, Hot dog, Ngô Mỹ nướng, Bánh Knish
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên mua gì?</h3>
          <p>
            New York nổi tiếng với các khu mua sắm sầm uất như Fifth Avenue,
            Times Square, SoHo, và Brooklyn Flea Market. Bạn có thể mua quần áo,
            giày dép, đồ trang sức, đồ điện tử, và nhiều mặt hàng khác tại các
            khu mua sắm này.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
