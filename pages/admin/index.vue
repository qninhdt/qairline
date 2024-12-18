<script setup lang="ts">
import AnimatedIcon from '../components/animated-icon.vue'
</script>

<template>
  <div>
    <div class="grid gap-4 bg-gray-100 p-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium"> Tổng doanh thu </CardTitle>
          <AnimatedIcon
            :id="'dollar_coin'"
            :size="32"
            class="text-accent"
            target="a"
          />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$45,231.89</div>
          <p class="text-xs text-muted-foreground">+20.1%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            Chuyến bay đã hoàn thành
          </CardTitle>
          <AnimatedIcon
            :id="'plane'"
            :size="32"
            class="text-accent"
            target="a"
          />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">50</div>
          <p class="text-xs text-muted-foreground">+180.1%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium"> Chuyến bay bị hủy </CardTitle>
          <AnimatedIcon
            :id="'airplane_mode'"
            :size="32"
            class="text-accent"
            target="a"
          />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">12</div>
          <p class="text-xs text-muted-foreground">-19%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            Chuyến bay đang hoạt động
          </CardTitle>
          <AnimatedIcon
            :id="'airport_runway'"
            :size="32"
            class="text-accent"
            target="a"
          />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">5</div>
          <p class="text-xs text-muted-foreground">+20%</p>
        </CardContent>
      </Card>
    </div>
    <div class="grid gap-4 bg-gray-100 p-6 md:grid-cols-2 lg:grid-cols-7">
      <Card class="col-span-4">
        <CardHeader>
          <CardTitle>Tổng quan</CardTitle>
        </CardHeader>
        <CardContent class="pl-2">
          <SimpleChartBar />
        </CardContent>
      </Card>
      <Card class="col-span-3">
        <CardHeader>
          <CardTitle>Gần đây</CardTitle>
          <CardDescription> Bạn có thêm 25 khách hàng mới.</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
