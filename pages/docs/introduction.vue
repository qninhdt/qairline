<script setup lang="ts">
import AnimatedIcon from '../components/animated-icon.vue'
const values = [
  {
    title: 'An toàn là ưu tiên hàng đầu',
    description:
      'Chúng tôi luôn đặt an toàn của hành khách lên trên hết. Tất cả các chuyến bay của QAirline đều tuân thủ nghiêm ngặt các tiêu chuẩn an toàn quốc tế, từ khâu bảo dưỡng máy bay đến đào tạo phi hành đoàn. Chúng tôi luôn đảm bảo rằng hành khách có thể tận hưởng chuyến bay mà không phải lo lắng về bất kỳ yếu tố an toàn nào.',
    image:
      'https://dulichhangkhong.com.vn/ve-may-bay/vnt_upload/news/08_2021/ky_nang_di_may_bay1.jpg'
  },
  {
    title: 'Chất lượng dịch vụ vượt trội',
    description:
      'Chất lượng dịch vụ là yếu tố quan trọng mà chúng tôi luôn đặt tâm huyết phát triển. Từ việc cải thiện không gian trên máy bay, cung cấp các tiện ích đa dạng như Wi-Fi miễn phí, màn hình giải trí cá nhân, cho đến sự chăm sóc chu đáo từ đội ngũ tiếp viên hàng không, tất cả đều hướng đến mục tiêu nâng cao sự thoải mái và hài lòng của hành khách. Mỗi chuyến bay của QAirline là một cơ hội để chúng tôi thể hiện sự chuyên nghiệp, thân thiện và tinh tế trong từng chi tiết.',
    image:
      'https://imagev3.vietnamplus.vn/960x640/Uploaded/2024/natmjs/2018_07_23/tiep_vien.jpg.webp'
  },
  {
    title: 'Vui vẻ và thân thiện',
    description:
      'Chúng tôi tin rằng mỗi chuyến bay không chỉ là việc di chuyển mà còn là một cơ hội để mang lại niềm vui cho hành khách. Với đội ngũ nhân viên tận tâm và thái độ phục vụ nhiệt tình, hành khách sẽ luôn cảm thấy mình là người quan trọng và được chăm sóc đặc biệt. "Vui từng chuyến bay" là tôn chỉ mà chúng tôi luôn ghi nhớ, từ đó tạo dựng một môi trường thân thiện và dễ chịu ngay khi hành khách bước lên máy bay.',
    image:
      'https://nld.mediacdn.vn/k:thumb_w/540/2016/anh-3-1464578555322/soi-dich-vu-4-sao-cua-vietnam-airlines.JPG'
  },
  {
    title: 'Đổi mới sáng tạo',
    description:
      'QAirline luôn không ngừng sáng tạo và đổi mới, tìm kiếm những phương thức mới mẻ để nâng cao chất lượng dịch vụ và cải thiện trải nghiệm của hành khách. Chúng tôi sử dụng công nghệ tiên tiến để cải thiện quy trình đặt vé, phục vụ và chăm sóc khách hàng. Từ hệ thống đặt vé trực tuyến dễ dàng, đến các chương trình khách hàng thân thiết sáng tạo, tất cả đều nhằm mang lại sự tiện lợi tối đa cho hành khách.',
    image:
      'https://gcs.tripi.vn/public-tripi/tripi-feed/img/472187fAm/cach-nhuong-lai-ve-may-bay-lam-ban-kho-hay-de'
  },
  {
    title: 'Bền vững và bảo vệ môi trường',
    description:
      'Chúng tôi cam kết bảo vệ môi trường và phát triển bền vững. QAirline luôn nỗ lực giảm thiểu tác động tiêu cực đến thiên nhiên thông qua việc áp dụng các biện pháp tiết kiệm năng lượng và sử dụng công nghệ sạch trong hoạt động của mình. Chúng tôi cũng tham gia vào các sáng kiến bảo vệ môi trường, khuyến khích hành khách tham gia vào các chương trình giảm thiểu rác thải nhựa và tăng cường sự nhận thức về bảo vệ hành tinh.',
    image:
      'https://cdn-images.vtv.vn/zoom/640_400/562122370168008704/2023/12/5/photo1701742441606-1701742441838566788202.png'
  }
]
const services = [
  {
    title: 'Đặt vé dễ dàng và tiện lợi',
    description:
      'Hệ thống đặt vé của QAirline được thiết kế đơn giản và dễ sử dụng, giúp hành khách dễ dàng tìm kiếm chuyến bay phù hợp và hoàn tất thủ tục đặt vé chỉ trong vài bước. Bằng cách sử dụng website, hành khách có thể nhanh chóng tra cứu lịch bay, giá vé, và lựa chọn phương thức thanh toán an toàn, thuận tiện. Ngoài ra, QAirline cũng cung cấp các chương trình khuyến mãi và ưu đãi đặc biệt cho khách hàng thân thiết, giúp tiết kiệm chi phí cho chuyến đi.',
    image: 'https://vnn-imgs-f.vgcloud.vn/2019/09/15/09/may-bay.jpeg'
  },
  {
    title: 'Đồ ăn chất lượng trên chuyến bay',
    description:
      'QAirline cam kết mang đến những bữa ăn ngon miệng và bổ dưỡng cho hành khách trên mỗi chuyến bay. Chúng tôi cung cấp đa dạng lựa chọn thực đơn, từ các món ăn nhẹ, ăn sáng, đến các bữa ăn chính đầy đủ dinh dưỡng. Hành khách có thể lựa chọn giữa các món ăn quốc tế và đặc sản địa phương, đáp ứng nhu cầu và sở thích đa dạng. Chúng tôi cũng chú trọng đến các lựa chọn ăn chay, ăn kiêng, hoặc các món ăn phù hợp với nhu cầu sức khỏe của hành khách.',
    image: 'https://static.vinwonders.com/production/do-an-tren-may-bay-2.jpg'
  },
  {
    title: 'Hỗ trợ thủ tục nhanh chóng và thuận tiện',
    description:
      'QAirline cam kết mang đến những bữa ăn ngon miệng và bổ dưỡng cho hành khách trên mỗi chuyến bay. Chúng tôi cung cấp đa dạng lựa chọn thực đơn, từ các món ăn nhẹ, ăn sáng, đến các bữa ăn chính đầy đủ dinh dưỡng. Hành khách có thể lựa chọn giữa các món ăn quốc tế và đặc sản địa phương, đáp ứng nhu cầu và sở thích đa dạng. Chúng tôi cũng chú trọng đến các lựa chọn ăn chay, ăn kiêng, hoặc các món ăn phù hợp với nhu cầu sức khỏe của hành khách.',
    image:
      'https://vlink.vn/wp-content/uploads/2024/04/ve-may-bay-gia-re299.jpg'
  },
  {
    title: 'Vận chuyển hành lý an toàn và hiệu quả',
    description:
      'Hành lý của hành khách luôn được vận chuyển an toàn và nhanh chóng trong suốt chuyến đi với dịch vụ vận chuyển hành lý chuyên nghiệp của QAirline. Chúng tôi áp dụng các quy trình kiểm tra, bảo vệ hành lý nghiêm ngặt, đảm bảo rằng hành lý của bạn sẽ không bị thất lạc hoặc hư hỏng. QAirline cũng cung cấp dịch vụ hành lý đặc biệt cho các nhu cầu riêng biệt, như hành lý quá khổ, vật dụng thể thao, và hàng hóa dễ vỡ, để đáp ứng mọi yêu cầu của khách hàng.',
    image:
      'https://mia.vn/media/uploads/tin-tuc/6d7d2876c131056f5c201-1662364460.jpg'
  },
  {
    title: 'Kết nối mạng và giải trí trên chuyến bay',
    description:
      'Để đảm bảo hành khách luôn có thể kết nối và giải trí trong suốt chuyến bay, QAirline cung cấp dịch vụ Wi-Fi miễn phí trên nhiều chuyến bay quốc tế và nội địa. Hành khách có thể dễ dàng kết nối với internet để làm việc, giải trí hoặc duy trì liên lạc với gia đình và bạn bè. Hệ thống giải trí trên chuyến bay của chúng tôi cung cấp các bộ phim, chương trình truyền hình, âm nhạc và trò chơi hấp dẫn, giúp hành khách thư giãn và tận hưởng chuyến bay một cách thoải mái.',
    image:
      'https://t.ex-cdn.com/vntravellive.com/resize/900x675/files/editor1/2020/01/10/pic03208_lw-121201.jpg'
  },
  {
    title: 'Hỗ trợ khách hàng 24/7',
    description:
      'Chúng tôi luôn sẵn sàng hỗ trợ hành khách mọi lúc, mọi nơi. Đội ngũ chăm sóc khách hàng của QAirline hoạt động 24/7, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ hành khách trong mọi tình huống. Dù là vấn đề liên quan đến đặt vé, yêu cầu đặc biệt, hay hỗ trợ khẩn cấp, khách hàng có thể liên hệ qua điện thoại, email hoặc các kênh hỗ trợ trực tuyến. Đội ngũ nhân viên thân thiện và chuyên nghiệp của QAirline sẽ luôn đảm bảo rằng bạn nhận được sự giúp đỡ nhanh chóng và hiệu quả nhất.',
    image: 'https://kenh14cdn.com/2020/4/27/photo-3-15880018018151557273148.jpg'
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
        Hãng hàng không QAirline tiên phong trong việc mang đến những chuyến bay
        không chỉ nhanh chóng, an toàn mà còn tràn đầy niềm vui và sự thoải mái.
        Với khẩu hiệu “Vui từng chuyến bay”, QAirline cam kết tạo ra những trải
        nghiệm bay tuyệt vời cho hành khách, từ khi bắt đầu chuyến đi cho đến
        khi kết thúc hành trình.
      </p>
    </div>
    <div class="m-auto w-9/12 space-y-4 pb-[32px]">
      <h2 class="text-[24px]">
        <AnimatedIcon :id="'plane'" :size="32" class="text-accent" target="a" />
        Tầm nhìn
      </h2>
      <p>
        QAirline mong muốn trở thành một trong những hãng hàng không hàng đầu
        trong khu vực và thế giới, được biết đến không chỉ với dịch vụ bay nhanh
        chóng và an toàn mà còn với khả năng tạo ra những trải nghiệm bay vượt
        trội. Chúng tôi hướng đến một tương lai nơi mỗi chuyến bay đều là một
        cuộc phiêu lưu thú vị, nơi hành khách cảm thấy thoải mái, hạnh phúc và
        được chăm sóc tận tâm. QAirline không chỉ đơn giản là phương tiện di
        chuyển, mà là một phần trong hành trình khám phá thế giới, gắn kết con
        người với những trải nghiệm đáng nhớ.
      </p>
    </div>
    <div class="m-auto w-9/12 space-y-4 pb-[32px]">
      <h2 class="text-[24px]">
        <AnimatedIcon :id="'plane'" :size="32" class="text-accent" target="a" />
        Sứ mệnh
      </h2>
      <p>
        Sứ mệnh của QAirline là mang lại cho hành khách một trải nghiệm bay toàn
        diện và chất lượng, bao gồm sự an toàn tuyệt đối, dịch vụ chuyên nghiệp
        và tiện nghi hiện đại. Chúng tôi cam kết cung cấp dịch vụ không chỉ đạt
        tiêu chuẩn quốc tế mà còn vượt qua mong đợi của hành khách. Từ lúc đặt
        vé cho đến khi kết thúc chuyến bay, QAirline luôn nỗ lực hết mình để mỗi
        chuyến đi trở thành một hành trình dễ chịu và vui vẻ, bất kể đó là
        chuyến công tác hay kỳ nghỉ. Sự hài lòng và niềm vui của hành khách luôn
        là ưu tiên hàng đầu của chúng tôi.
      </p>
    </div>
    <div class="m-auto w-9/12 space-y-4 pb-[32px]">
      <h2 class="text-[24px]">
        <AnimatedIcon :id="'plane'" :size="32" class="text-accent" target="a" />
        Giá trị cốt lõi
      </h2>
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="value in values"
            :key="value.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="h-[520px] rounded-lg bg-gray-100 p-4">
              <img
                :src="value.image"
                alt=""
                class="h-[200px] w-full object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ value.title }}
              </h3>
              <p class="text-black">
                {{ value.description }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 space-y-4 pb-[32px]">
      <h2 class="text-[24px]">
        <AnimatedIcon :id="'plane'" :size="32" class="text-accent" target="a" />
        Các dịch vụ nổi bật của QAirline
      </h2>
      <Carousel
        class="w-full"
        :opts="{
          align: 'start'
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="service in services"
            :key="service.title"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div class="h-[580px] rounded-lg bg-gray-100 p-4">
              <img
                :src="service.image"
                alt=""
                class="h-[200px] w-full object-cover"
              />
              <h3 class="text-[20px] font-semibold text-black">
                {{ service.title }}
              </h3>
              <p class="text-black">
                {{ service.description }}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="m-auto w-9/12 pb-[32px]">
      <h2 class="text-[24px]">
        <AnimatedIcon :id="'plane'" :size="32" class="text-accent" target="a" />
        Liên hệ
      </h2>
      <p>Email: support@qairline.com</p>
      <p>Hotline: 0365313355</p>
    </div>
  </div>
</template>
