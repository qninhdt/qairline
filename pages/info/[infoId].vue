<script lang="ts"></script>
<template>
  <div class="m-auto">
    <img
      src="https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR2k_yiUinWKcestFhgSUqDZs58_V-1p8HCBHvprrf5g-HGLQAZmZA-0lp8_aem_eK81rRp1Fhz42sM089aC1A"
      alt=""
      class="h-[400px] w-full object-cover"
    />
    <div class="m-auto w-9/12 pb-[32px] pt-[60px]">
      <h1 class="text-[30px]">{{ info.title }}</h1>
      <h2>{{ info.date }}</h2>
      <img :src="info.img" alt="" class="w-full rounded-lg object-cover" />
      <p>{{ info.content }}</p>
    </div>
  </div>
</template>
