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
        <a href="/admin/bookings/customers/{{flight.id}}" class="w-full"
          >Xem chi tiết</a
        >
      </button>
    </div>

    <!-- Buttons: Xóa và Sửa -->
    <div v-if="!showEditForm" class="flex justify-end space-x-4">
      <Button class="rounded-lg px-4 py-2 text-white" @click="confirmDelete">
        Xóa
      </Button>
      <Button class="rounded-lg px-4 py-2 text-white">
        <a href="/admin/bookings/edit-bookings/{{bookings.id}}" class="w-full"
          >Sửa</a
        >
      </Button>
    </div>

    <!-- Danh sách hành khách -->
    <div
      v-if="showPassengers"
      class="absolute z-10 w-full rounded-md border bg-white p-4 shadow-lg"
    >
      <h3 class="mb-4 text-lg font-bold text-gray-700">Danh sách khách hàng</h3>
      <table class="w-full table-auto rounded-lg bg-white shadow-md">
        <thead>
          <tr class="bg-gray-100">
            <th
              class="border border-gray-300 px-2 py-1 text-left text-sm font-semibold text-gray-700"
            >
              Họ
            </th>
            <th
              class="border border-gray-300 px-2 py-1 text-left text-sm font-semibold text-gray-700"
            >
              Tên
            </th>
            <th
              class="border border-gray-300 px-2 py-1 text-left text-sm font-semibold text-gray-700"
            >
              Email
            </th>
            <th
              class="border border-gray-300 px-2 py-1 text-left text-sm font-semibold text-gray-700"
            >
              Thời gian đặt vé
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(passenger, index) in flight.passengers"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border border-gray-300 px-2 py-1 text-sm text-gray-600">
              {{ passenger.firstName }}
            </td>
            <td class="border border-gray-300 px-2 py-1 text-sm text-gray-600">
              {{ passenger.secondName }}
            </td>
            <td class="border border-gray-300 px-2 py-1 text-sm text-gray-600">
              {{ passenger.email }}
            </td>
            <td class="border border-gray-300 px-2 py-1 text-sm text-gray-600">
              {{ passenger.bookingTime }}
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        class="mt-4 rounded-lg px-4 py-2 text-sm text-white"
        @click="togglePassengerList"
      >
        Đóng
      </Button>
    </div>

    <!-- Form chỉnh sửa -->
    <div
      v-if="showEditForm"
      class="absolute z-10 mt-2 w-full rounded-md border bg-white p-4 shadow-lg"
    >
      <h3 class="mb-4 text-lg font-bold text-gray-700">
        Chỉnh sửa thông tin chuyến bay
      </h3>
      <form @submit.prevent="saveEdit">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Airline</label
            >
            <input
              v-model="editData.airline"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Flight Code</label
            >
            <input
              v-model="editData.flightCode"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Thời gian xuất phát</label
            >
            <input
              v-model="editData.departureTime"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Thời gian đến</label
            >
            <input
              v-model="editData.arrivalTime"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Hành lý</label
            >
            <input
              v-model="editData.facilities"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Trạng thái</label
            >
            <select
              v-model="editData.status"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="Đang chờ">Đang chờ</option>
              <option value="Xác nhận">Xác nhận</option>
              <option value="Đã hủy">Đã hủy</option>
            </select>
          </div>
        </div>
        <div class="mt-4 flex justify-end space-x-4">
          <Button
            class="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
            @click="toggleEditForm"
          >
            Hủy
          </Button>
          <Button
            type="submit"
            class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Lưu
          </Button>
        </div>
      </form>
    </div>

    <!-- Modal xác nhận xóa -->
    <div
      v-if="showDeleteConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div class="rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-4 text-lg font-bold text-gray-700">
          Bạn có chắc muốn xóa?
        </h2>
        <div class="flex justify-end space-x-4">
          <Button
            class="rounded-lg bg-red-500 px-4 py-2 text-white"
            @click="deleteFlight"
          >
            Có
          </Button>
          <Button
            class="rounded-lg px-4 py-2 text-gray-700"
            @click="cancelDelete"
          >
            Không
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPassengers: false,
      showEditForm: false,
      showDeleteConfirm: false,
      editData: { ...this.flight }
    }
  },
  methods: {
    togglePassengerList() {
      this.showPassengers = !this.showPassengers
    },
    toggleEditForm() {
      this.showEditForm = !this.showEditForm
    },
    saveEdit() {
      this.editData.updatedAt = new Date().toISOString().split('T')[0] // Cập nhật ngày
      this.$emit('update-flight', this.editData)
      this.toggleEditForm()
    },
    confirmDelete() {
      this.showDeleteConfirm = true
    },
    cancelDelete() {
      this.showDeleteConfirm = false
    },
    deleteFlight() {
      this.$emit('delete-flight', this.flight.id)
      this.showDeleteConfirm = false
    }
  }
}
</script>
