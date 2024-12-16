<template>
  <NavBarAdmin>
    <div class="relative min-h-screen overflow-y-auto p-6">
      <!-- Bộ lọc -->
      <div class="fixed right-6 top-6 w-64 rounded-lg bg-white p-4 shadow-md">
        <h3 class="mb-4 text-lg font-bold">Bộ lọc</h3>
        <!-- Bộ lọc theo Status -->
        <div class="mb-4">
          <label
            for="statusFilter"
            class="block text-sm font-medium text-gray-700"
            >Lọc theo trạng thái</label
          >
          <select
            id="statusFilter"
            v-model="selectedStatus"
            class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            @change="filterFlights"
          >
            <option value="">Tất cả trạng thái</option>
            <option value="Đang chờ">Đang chờ</option>
            <option value="Xác nhận">Xác nhận</option>
            <option value="Đã hủy">Đã hủy</option>
          </select>
        </div>

        <!-- Bộ lọc theo Flight Date -->
        <div class="mb-4">
          <label
            for="dateFilter"
            class="block text-sm font-medium text-gray-700"
            >Lọc theo ngày</label
          >
          <input
            id="dateFilter"
            v-model="selectedDate"
            type="date"
            class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            @change="filterFlights"
          />
        </div>

        <!-- Nút thêm chuyến bay -->
        <div>
          <button
            class="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
            @click="toggleAddFlightForm"
          >
            {{
              showAddFlightForm ? 'Ẩn form thêm chuyến bay' : 'Thêm chuyến bay'
            }}
          </button>
        </div>
      </div>

      <!-- Form thêm chuyến bay -->
      <div
        v-if="showAddFlightForm"
        class="absolute left-1/2 top-6 z-20 w-[500px] -translate-x-1/2 transform rounded-lg bg-white p-6 shadow-lg"
      >
        <h3 class="mb-4 text-lg font-bold">Thêm chuyến bay mới</h3>
        <form @submit.prevent="addFlight">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Airline</label
              >
              <input
                v-model="newFlight.airline"
                type="text"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Flight Code</label
              >
              <input
                v-model="newFlight.flightCode"
                type="text"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Departure Time</label
              >
              <input
                v-model="newFlight.departureTime"
                type="time"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Arrival Time</label
              >
              <input
                v-model="newFlight.arrivalTime"
                type="time"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Flight Date</label
              >
              <input
                v-model="newFlight.flightDate"
                type="date"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >From</label
              >
              <input
                v-model="newFlight.from"
                type="text"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">To</label>
              <input v-model="newFlight.to" type="text" class="input w-full" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Price</label
              >
              <input
                v-model="newFlight.price"
                type="number"
                class="input w-full"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Status</label
              >
              <select v-model="newFlight.status" class="input w-full">
                <option value="Đang chờ">Đang chờ</option>
                <option value="Xác nhận">Xác nhận</option>
                <option value="Đã hủy">Đã hủy</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Thêm chuyến bay
          </button>
        </form>
      </div>

      <!-- Container bao bọc danh sách card -->
      <div class="h-screen overflow-y-scroll bg-gray-100 p-6 pr-80">
        <FlightCard
          v-for="flight in filteredFlights"
          :key="flight.id"
          :flight="flight"
          @update-flight="updateFlight"
          @delete-flight="deleteFlight"
        />
      </div>
    </div>
  </NavBarAdmin>
</template>
<script>
import FlightCard from './components/FlightCard.vue'

export default {
  components: { FlightCard },
  data() {
    return {
      flights: [
        {
          id: 1,
          airline: 'SkyHigh Airlines',
          flightCode: 'SH-276789',
          departureTime: '6:00 AM',
          arrivalTime: '9:00 PM',
          from: 'Los Angeles',
          to: 'New York',
          duration: '3 hours',
          type: 'Direct',
          facilities: '1 Baggage · No Meal',
          price: 350,
          passengers: [
            {
              firstName: 'John',
              secondName: 'Doe',
              email: 'john.doe@example.com',
              bookingTime: '2024-01-12 10:00 AM'
            },
            {
              firstName: 'Jane',
              secondName: 'Smith',
              email: 'jane.smith@example.com',
              bookingTime: '2024-01-12 11:00 AM'
            },
            {
              firstName: 'Michael',
              secondName: 'Brown',
              email: 'michael.brown@example.com',
              bookingTime: '2024-01-12 01:00 PM'
            },
            {
              firstName: 'Alice',
              secondName: 'Johnson',
              email: 'alice.johnson@example.com',
              bookingTime: '2024-01-12 02:30 PM'
            },
            {
              firstName: 'Chris',
              secondName: 'Evans',
              email: 'chris.evans@example.com',
              bookingTime: '2024-01-12 03:15 PM'
            },
            {
              firstName: 'Emma',
              secondName: 'Watson',
              email: 'emma.watson@example.com',
              bookingTime: '2024-01-12 04:00 PM'
            },
            {
              firstName: 'Sophia',
              secondName: 'Williams',
              email: 'sophia.williams@example.com',
              bookingTime: '2024-01-12 05:20 PM'
            }
          ],
          status: 'Đang chờ',
          createdAt: '2024-01-01',
          updatedAt: '2024-01-10'
        },
        {
          id: 2,
          airline: 'FlyFast Airways',
          flightCode: 'FF-123456',
          departureTime: '8:00 AM',
          arrivalTime: '11:30 AM',
          from: 'Los Angeles',
          to: 'New York',
          duration: '3.5 hours',
          type: 'Direct',
          facilities: '2 Baggage · No Meal',
          price: 400,
          passengers: [
            {
              firstName: 'John',
              secondName: 'Doe',
              email: 'john.doe@example.com',
              bookingTime: '2024-01-12 10:00 AM'
            },
            {
              firstName: 'Jane',
              secondName: 'Smith',
              email: 'jane.smith@example.com',
              bookingTime: '2024-01-12 11:00 AM'
            }
          ],
          status: 'Xác nhận',
          createdAt: '2024-01-05',
          updatedAt: '2024-01-10'
        },
        // Thêm nhiều hãng bay để kiểm tra tính năng scroll
        {
          id: 3,
          airline: 'AeroJet',
          flightCode: 'AJ-987654',
          departureTime: '7:00 AM',
          arrivalTime: '12:00 PM',
          from: 'Los Angeles',
          to: 'Chicago',
          duration: '4 hours',
          type: 'Direct',
          facilities: '2 Baggage · Meal Provided',
          price: 500,
          passengers: [
            {
              firstName: 'John',
              secondName: 'Doe',
              email: 'john.doe@example.com',
              bookingTime: '2024-01-12 10:00 AM'
            },
            {
              firstName: 'Jane',
              secondName: 'Smith',
              email: 'jane.smith@example.com',
              bookingTime: '2024-01-12 11:00 AM'
            }
          ],
          status: 'Đã hủy',
          createdAt: '2024-01-08',
          updatedAt: '2024-01-15'
        }
      ], // Danh sách chuyến bay
      filteredFlights: [], // Danh sách chuyến bay sau khi lọc
      selectedStatus: '',
      selectedDate: '',
      showAddFlightForm: false, // Hiển thị form thêm chuyến bay
      newFlight: {
        airline: '',
        flightCode: '',
        departureTime: '',
        arrivalTime: '',
        flightDate: '',
        from: '',
        to: '',
        price: '',
        status: 'Đang chờ',
        passengers: [],
        createdAt: '',
        updatedAt: ''
      }
    }
  },
  created() {
    this.filterFlights()
  },
  methods: {
    filterFlights() {
      this.filteredFlights = this.flights.filter((flight) => {
        const statusMatch = this.selectedStatus
          ? flight.status === this.selectedStatus
          : true
        const dateMatch = this.selectedDate
          ? new Date(flight.flightDate).toISOString().split('T')[0] ===
            this.selectedDate
          : true
        return statusMatch && dateMatch
      })
    },
    toggleAddFlightForm() {
      this.showAddFlightForm = !this.showAddFlightForm
    },
    addFlight() {
      const newFlight = {
        ...this.newFlight,
        id: Date.now(),
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      this.flights.push(newFlight) // Thêm chuyến bay mới
      this.filterFlights() // Cập nhật danh sách đã lọc
      this.toggleAddFlightForm() // Đóng form
      this.resetNewFlightForm() // Reset form
    },
    resetNewFlightForm() {
      this.newFlight = {
        airline: '',
        flightCode: '',
        departureTime: '',
        arrivalTime: '',
        flightDate: '',
        from: '',
        to: '',
        price: '',
        status: 'Đang chờ',
        passengers: [],
        createdAt: '',
        updatedAt: ''
      }
    },
    updateFlight(updatedFlight) {
      const index = this.flights.findIndex((f) => f.id === updatedFlight.id)
      if (index !== -1) {
        this.flights[index] = { ...updatedFlight }
      }
      this.filterFlights()
    },
    deleteFlight(id) {
      this.flights = this.flights.filter((flight) => flight.id !== id)
      this.filterFlights()
    }
  }
}
</script>
