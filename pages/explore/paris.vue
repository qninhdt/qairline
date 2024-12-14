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
    title: 'Bánh mì que',
    description:
      'Bánh mì que là một trong những món ăn rất thân thuộc với người Pháp. Bánh mì que đặc biệt hơn những bánh mì khác ở chỗ nó có hình dáng thon và dài hơn. Bạn có thể ăn bánh mì que với phô mai hoặc pate. Đây là món ăn khá nhanh và tiện lợi rất thích hợp để ăn vào buổi sáng để bắt đầu một chuyến du lịch đầy năng lượng.',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-3.png?tr=q-70,w-625,dpr-2'
  },
  {
    title: 'Gan ngỗng',
    description:
      'Gan ngỗng là món ăn thượng hạng tại thành phố Paris. Đa số món ăn này sẽ chỉ xuất hiện ở những nhà hàng lớn có chất lượng. Món ăn này sẽ chế biến từ gan được lấy từ những con ngỗng được chăm sóc kỹ càng. Bạn có thể cắt khoanh gan ngỗng ăn kèm với những loại sốt ngọt sẽ làm bùng lên hương vị béo ngậy của gan ngỗng. Đây là món ăn mà bạn nên thử một lần nếu chưa biết ăn gì ở Paris - kinh đô ánh sáng của Pháp đó!',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-6.png?tr=q-70,w-625,dpr-2'
  },
  {
    title: 'Ốc sên',
    description:
      'Ốc sên là món ăn truyền thống đặc trưng của người Pháp. Những con ốc sên sẽ được rửa sạch sau đó được đem đi nấu chín cùng với bơ và nước dùng. Sau khi thịt ốc chín sẽ được trộn cùng với bơ và nước sốt. Sau đó là nhồi lại vào trong vỏ ốc và đút lò thêm một lần nữa.',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-2.png?tr=q-70,w-625,dpr-2'
  },
  {
    title: 'Rau củ hầm Ratatouille',
    description:
      'Rau củ hầm Ratatouille là một món ăn lấy rau củ là nguyên liệu chính. Món rau củ hầm truyền thống được chế biến bằng cách cắt lát những rau củ như ớt chuông, hành tây, bí ngòi, cà tím, cà chua…Từng loại rau củ sẽ được làm chín riêng và xếp vào chảo cùng với nước sốt balsamic để đem đi hầm.',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-7.png?tr=q-70,w-625,dpr-2'
  },
  {
    title: 'Bò hầm rượu vang',
    description:
      'Bò hầm rượu vang là món thịt hầm cùng với các loại rau củ như khoai tây, cà rốt, hành tây, tỏi và một số loại thảo mộc. Những miếng thịt thơm ngon được hầm từ từ trong phần nước dùng đang sôi lăn tăn kết hợp cùng một chút hương vị nồng nàn từ rượu vang đỏ Burgundy.',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-12.png?tr=q-70,w-625,dpr-2'
  },
  {
    title: 'Croque monsieur',
    description:
      'Croque monsieur hay còn được gọi là bánh sandwich kẹp kiểu pháp. Món bánh này là sự kết hợp giữa những lát thịt nguội được bao bọc bởi lớp phô mai Gruyère được kẹp giữa hai miếng bánh mì được nướng giòn. Tiếp theo bánh mì sẽ được phủ qua một lớp trứng và chiên lên cùng với bơ.',
    image:
      'https://ik.imagekit.io/tvlk/blog/2023/06/an-gi-o-paris-5.png?tr=q-70,w-625,dpr-2'
  }
]

const places = [
  {
    title: 'Tháp Eiffel',
    description:
      'Tháp Eiffel chắc chắn là điểm du lịch nổi tiếng nhất ở Paris, được thiết kế bởi Gustav Eiffel cho Triển lãm Thế giới năm 1889, gồm 3 tầng, tầng cao nhất cao 276 mét, tầng 1 và tầng 2 có thể đi lên bằng cầu thang và thang máy, chỉ có thang máy lên tầng 3. Tháp Eiffel tổng cộng cao 330 mét, nếu tính cả ăng-ten trên đỉnh.',
    image:
      'https://transviet.com.vn/Media/Uploads/Web-seo/C%C3%82/Thanh%20Pho%20Paris/1-kham-pha-thanh-pho-paris-top-10-diem-du-lich-tuyet-voi-ban-khong-the-bo-lo.jpg'
  },
  {
    title: 'Bảo tàng Louvre',
    description:
      'Bảo tàng Louvre là một trong những điểm du lịch nổi tiếng ở Paris. Đây là nơi tập trung nhiều tác phẩm nghệ thuật nổi tiếng của thế giới, thu hút nhiều du khách trong và ngoài nước.',
    image:
      'https://transviet.com.vn/Media/Uploads/Web-seo/C%C3%82/Thanh%20Pho%20Paris/2-kham-pha-thanh-pho-paris-top-10-diem-du-lich-tuyet-voi-ban-khong-the-bo-lo.jpg'
  },
  {
    title: 'Sacré-Coeur',
    description:
      'Sacré-Coeur nằm trên đồi Montmartre và chắc chắn là một trong 10 điểm tham quan hàng đầu ở Paris. Sacré-Coeur được xây dựng vào năm 1871 để tưởng nhớ những nạn nhân của cuộc chiến tranh Pháp-Đức. Sau Tháp Eiffel, Sacré-Coeur có vị trí quan sát cao nhất trong thành phố.',
    image:
      'https://transviet.com.vn/Media/Uploads/Web-seo/C%C3%82/Thanh%20Pho%20Paris/3-kham-pha-thanh-pho-paris-top-10-diem-du-lich-tuyet-voi-ban-khong-the-bo-lo.jpg'
  },
  {
    title: 'Khải Hoàn Môn',
    description:
      'Khải Hoàn Môn ở Paris cao 50 mét và nằm ở quận 8, trên vòng xoay Place Charles de Gaulle đông đúc. Nó được xây dựng bởi Napoleon để vinh danh chiến thắng của ông tại Trận Austerlitz. Khải Hoàn Môn được thiết kế bởi Jean-François Chalgrin và mất 30 năm để xây dựng.',
    image:
      'https://transviet.com.vn/Media/Uploads/Web-seo/C%C3%82/Thanh%20Pho%20Paris/4-kham-pha-thanh-pho-paris-top-10-diem-du-lich-tuyet-voi-ban-khong-the-bo-lo.jpg'
  }
]
</script>

<template>
  <div class="m-auto">
    <img
      src="https://transviet.com.vn/Media/Uploads/avatar/paris.jpg"
      alt=""
      class="h-[300px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">PARIS</h1>
      <p>
        Paris, thủ đô của Pháp, được mệnh danh là "Kinh đô ánh sáng" và là trung
        tâm văn hóa, nghệ thuật, thời trang và lịch sử hàng đầu thế giới. Thành
        phố nổi tiếng với các công trình biểu tượng như Tháp Eiffel, Nhà thờ Đức
        Bà, Bảo tàng Louvre, và Đại lộ Champs-Élysées. Sông Seine uốn lượn qua
        Paris, mang đến cảnh sắc lãng mạn và không khí thơ mộng. Paris còn là
        nơi hội tụ của ẩm thực Pháp tinh tế và những sự kiện văn hóa lớn, thu
        hút hàng triệu du khách mỗi năm.
      </p>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px] font-semibold">
        CÁC ĐIỂM DU LỊCH NỔI TIẾNG Ở PARIS
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
      <h2 class="text-[24px] font-semibold">CÁC MÓN ĂN NGON Ở PARIS</h2>
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
            Thời tiết ở Paris tốt nhất vào mùa xuân (từ tháng 3 đến tháng 5) và
            mùa thu (từ tháng 9 đến tháng 11), khi trời se lạnh và không quá
            nhiệt đới. Mùa hè (từ tháng 6 đến tháng 8) thường nóng và đông (từ
            tháng 12 đến tháng 2) lạnh và ẩm ướt.
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên ăn gì?</h3>
          <p>
            Khi đến Paris, bạn không thể bỏ qua những món ăn như bánh mì que,
            gan ngỗng, ốc sên, rau củ hầm Ratatouille, bò hầm rượu vang, croque
            monsieur
          </p>
        </li>
        <li>
          <h3 class="text-[20px] font-semibold">Nên mua gì?</h3>
          <p>
            Khi đến Paris, bạn có thể mua sắm các món đồ thời trang cao cấp từ
            các thương hiệu như Chanel, Louis Vuitton, Hermès, hoặc Dior, cùng
            với khăn lụa tinh tế và phụ kiện độc đáo. Nước hoa Pháp từ Guerlain,
            Lancôme hoặc các dòng niche như Fragonard cũng là lựa chọn tuyệt
            vời. Ngoài ra, đừng quên mua socola, bánh macaron từ Ladurée hoặc
            Pierre Hermé, rượu vang, pho mát, và những món quà lưu niệm như mô
            hình Tháp Eiffel hay tranh vẽ nghệ thuật từ Montmartre để làm kỷ
            niệm.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
