<template>
  <NavBarAdmin>
    <div class="bg-gray-100 p-6">
      <!-- Header -->
      <div class="mb-4 flex items-center justify-between">
        <Button>Thêm chuyến bay</Button>
      </div>

      <!-- Filters -->
      <div class="mb-6 flex items-center justify-between">
        <input
          v-model="searchQuery"
          type="text"
          class="rounded-[15px] border border-gray-300 p-2"
          placeholder="Search airlines, flight number, etc."
        />
        <div class="flex items-center gap-4">
          <select v-model="selectedStatus" class="input">
            <option value="">All Status</option>
            <option value="Confirmed">Đã xác nhận</option>
            <option value="Pending">Đang chờ</option>
            <option value="Canceled">Đã hủy</option>
          </select>
          <Popover class="input">
            <PopoverTrigger as-child>
              <Button>Chọn ngày</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar v-model="selectedDate" />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <!-- Table -->
      <table
        class="w-full table-auto border-collapse rounded-lg border border-gray-300 bg-white shadow-md"
      >
        <thead class="bg-gray-200 text-gray-600">
          <tr>
            <th class="px-4 py-2 text-left">Số hiệu</th>
            <th class="px-4 py-2 text-left">Tàu bay</th>
            <th class="px-4 py-2 text-left">Chặng</th>
            <th class="px-4 py-2 text-left">Điểm đi</th>
            <th class="px-4 py-2 text-left">Điểm đến</th>
            <th class="px-4 py-2 text-left">Ngày</th>
            <th class="px-4 py-2 text-left">Hành khách</th>
            <th class="px-4 py-2 text-left">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(booking, index) in filteredBookings"
            :key="index"
            class="border-b hover:bg-gray-100"
          >
            <td class="px-4 py-2">{{ booking.flightNo }}</td>
            <td class="px-4 py-2">{{ booking.airline }}</td>
            <td class="px-4 py-2">{{ booking.route }}</td>
            <td class="px-4 py-2">{{ booking.departure }}</td>
            <td class="px-4 py-2">{{ booking.arrival }}</td>
            <td class="px-4 py-2">{{ booking.date }}</td>
            <td class="px-4 py-2">{{ booking.passengers }}</td>
            <td
              class="px-4 py-2"
              :class="{
                'text-green-600': booking.status === 'Đã xác nhận',
                'text-yellow-600': booking.status === 'Đang chờ',
                'text-red-600': booking.status === 'Đã hủy'
              }"
            >
              {{ booking.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NavBarAdmin>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedStatus: '',
      selectedDate: '',
      bookings: [
        {
          flightNo: 'CH-123456',
          airline: 'Cloudline Airlines',
          route: 'CDG → JFK',
          departure: '9:00 AM',
          arrival: '12:00 PM',
          date: '2024-11-11',
          passengers: '207',
          status: 'Đã xác nhận'
        },
        {
          flightNo: 'QW-198787',
          airline: 'QuickWing Air',
          route: 'IRO → LAX',
          departure: '1:00 PM',
          arrival: '8:20 AM',
          date: '2028-07-02',
          passengers: '177',
          status: 'Đang chờ'
        },
        {
          flightNo: 'QW-198787',
          airline: 'QuickWing Air',
          route: 'IRO → LAX',
          departure: '1:00 PM',
          arrival: '8:20 AM',
          date: '2028-07-02',
          passengers: '177',
          status: 'Đã hủy'
        }
        // Add more dummy data here
      ]
    }
  },
  computed: {
    filteredBookings() {
      return this.bookings.filter((booking) => {
        const bookingDate = new Date(booking.date) // Chuyển chuỗi thành đối tượng Date
        return (
          (!this.searchQuery ||
            booking.airline
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            booking.flightNo
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())) &&
          (!this.selectedStatus || booking.status === this.selectedStatus) &&
          (!this.selectedDate ||
            bookingDate.toDateString() ===
              new Date(this.selectedDate).toDateString())
        )
      })
    }
  }
}
</script>

<style scoped></style>
