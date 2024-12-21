<template>
  <div class="relative mb-4 rounded-lg border bg-white p-4 shadow-md">
    <div class="flex items-center justify-between">
      <!-- Logo và tên hãng bay -->
      <div class="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          class="h-10 w-10 rounded-full"
        />
        <div>
          <div class="font-bold text-gray-700">{{ flight.airline }}</div>
          <div class="text-sm text-gray-500">{{ flight.flightCode }}</div>
        </div>
      </div>

      <!-- Thông tin thời gian và lộ trình -->
      <div
        class="mt-2 flex flex-1 items-center justify-center space-x-8 text-center"
      >
        <div>
          <div class="font-bold text-gray-700">{{ flight.departureTime }}</div>
          <div class="text-sm text-gray-500">{{ flight.from }}</div>
        </div>
        <div class="flex items-center">
          <div class="h-px w-12 bg-gray-300"></div>
          <div class="mx-2 text-sm text-gray-500">
            <span>{{ flight.duration }}</span> - <span>{{ flight.type }}</span>
          </div>
          <div class="h-px w-12 bg-gray-300"></div>
        </div>
        <div>
          <div class="font-bold text-gray-700">{{ flight.arrivalTime }}</div>
          <div class="text-sm text-gray-500">{{ flight.to }}</div>
        </div>
      </div>

      <!-- Giá tiền -->
      <div class="text-right">
        <div class="text-lg font-bold text-yellow-600">đ{{ flight.price }}</div>
        <div class="text-sm text-gray-500">/ghế</div>
      </div>
    </div>

    <!-- Trạng thái, ngày tạo và ngày cập nhật -->
    <div class="flex items-center justify-between text-sm text-gray-500">
      <div class="flex items-center space-x-2">
        <span>Trạng thái:</span>
        <span
          :class="{
            'text-yellow-500': flight.status === 'Đang chờ',
            'text-green-500': flight.status === 'Xác nhận',
            'text-red-500': flight.status === 'Đã hủy'
          }"
          class="font-bold capitalize"
        >
          {{ flight.status }}
        </span>
      </div>
      <div>
        <span class="block">Ngày bay: {{ flight.flightDate }}</span>
      </div>
      <div>
        <span class="block">Ngày tạo: {{ flight.createdAt }}</span>
        <span class="block">Ngày cập nhật: {{ flight.updatedAt }}</span>
      </div>
    </div>

    <!-- Passengers -->
    <div class="flex items-center space-x-2">
      <div class="text-sm text-gray-600">
        Hành khách: {{ flight.passengers.length }}
      </div>
      <button class="text-blue-500 underline hover:text-blue-700">
        <a href="/admin/bookings/customers/{{bookings.id}}" class="w-full"
          >Xem chi tiết</a
        >
      </button>
    </div>

    <!-- Buttons: Xóa và Sửa -->
    <div v-if="!showEditForm" class="flex justify-end space-x-4">
      <Button class="rounded-lg px-4 py-2 text-white" @click="deleteFlight()">
        Xóa
      </Button>
      <Button class="rounded-lg px-4 py-2 text-white">
        <a :href="`/admin/bookings/edit-flight/${flight.id}`" class="w-full"
          >Sửa</a
        >
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flight: {
      type: Object,
      required: true
    },
    deleteFlight_: {
      type: Function,
      required: true
    }
  },
  methods: {
    deleteFlight() {
      this.deleteFlight_(this.flight.id)
    }
  }
}
</script>
