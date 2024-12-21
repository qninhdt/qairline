<template>
  <div class="mt-8 space-y-4 bg-muted pt-5 text-muted-foreground">
    <div class="m-auto flex items-center justify-center gap-2 px-4">
      <QAirlineLogo />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <span>VUI TỪNG CHUYẾN BAY</span>
    </div>
    <Separator />
    <div class="grid gap-4 p-6 text-center md:grid-cols-2 lg:grid-cols-4">
      <ul>
        <h1 class="text-[20px] text-primary">QAirline</h1>
        <li>
          <a href="/docs/introduction" class="hover:underline">Về chúng tôi</a>
        </li>
      </ul>
      <ul>
        <h1 class="text-[20px] text-primary">Khám phá</h1>
        <li><a href="/explore/hanoi" class="hover:underline">Hà Nội</a></li>
        <li><a href="/explore/bangkok" class="hover:underline">Bangkok</a></li>
        <li>
          <a href="/explore/new-york" class="hover:underline">New York</a>
        </li>
        <li><a href="/explore/paris" class="hover:underline">Paris</a></li>
      </ul>
      <ul>
        <h1 class="text-[20px] text-primary">Dịch vụ</h1>
        <li>
          <a href="/services/book-ticket" class="hover:underline">Đặt vé</a>
        </li>
        <li>
          <a href="/services/transport" class="hover:underline">Hành lý</a>
        </li>
        <li>
          <a href="/services/restaurant" class="hover:underline"
            >Nhà hàng "trên không"</a
          >
        </li>
        <li>
          <a href="/services/network" class="hover:underline">Kết nối mạng</a>
        </li>
        <li>
          <a href="/services/customs" class="hover:underline"
            >Thủ tục hải quan</a
          >
        </li>
        <li>
          <a href="/servicescustomer-service" class="hover:underline"
            >Dịch vụ khách hàng</a
          >
        </li>
      </ul>
      <ul>
        <h1 class="text-[20px] text-primary">Liên hệ</h1>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
    <div class="text-center text-gray-500">
      <p>© 202s QAirline. All rights reserved.</p>
      <p>Địa chỉ: 144 Xuân Thủy, Hà Nội</p>
      <p>Hotline: 1900 1234</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import QAirlineLogo from '@/components/qairline-logo.vue'
import Separator from '@/components/ui/separator/Separator.vue'
</script>
