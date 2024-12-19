<template>
  <div class="relative h-screen overflow-y-auto p-6">
    <!-- Bộ lọc -->
    <div
      class="mb-6 flex flex-wrap items-center gap-4 rounded-md bg-gray-100 p-4"
    >
      <!-- Search Tên máy bay -->
      <div>
        <Input
          v-model="filters.searchText"
          type="text"
          placeholder="Tìm kiếm tên máy bay..."
          class="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="filterFlights"
        />
      </div>

      <!-- Dropdown Trạng thái -->
      <div>
        <select
          v-model="filters.status"
          class="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          @change="filterFlights"
        >
          <option value="">Tất cả trạng thái</option>
          <option value="Đang chờ">Đang chờ</option>
          <option value="Xác nhận">Xác nhận</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>
      </div>

      <!-- Dropdown Điểm đi -->
      <div>
        <select
          v-model="filters.from"
          class="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          @change="filterFlights"
        >
          <option value="">Tất cả điểm đi</option>
          <option
            v-for="location in fromLocations"
            :key="location"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </div>

      <!-- Dropdown Điểm đến -->
      <div>
        <select
          v-model="filters.to"
          class="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          @change="filterFlights"
        >
          <option value="">Tất cả điểm đi</option>
          <option
            v-for="location in toLocations"
            :key="location"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </div>

      <!-- Bộ lọc giá vé -->
      <div>
        <Input
          v-model.number="filters.minPrice"
          type="number"
          placeholder="Giá tối thiểu"
          class="w-[120px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="filterFlights"
        />
      </div>
      <div>
        <Input
          v-model.number="filters.maxPrice"
          type="number"
          placeholder="Giá tối đa"
          class="w-[120px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="filterFlights"
        />
      </div>

      <!-- Nút reset bộ lọc -->
      <Button @click="resetFilters"> Xóa bộ lọc </Button>
    </div>

    <!-- Thông báo không tìm thấy -->
    <div v-if="filteredFlights.length === 0" class="text-center text-gray-500">
      Không tìm thấy chuyến bay nào phù hợp với tiêu chí lọc.
    </div>

    <!-- Container bao bọc danh sách card -->
    <div v-else class="pr-100 p-6">
      <FlightCard
        v-for="flight in filteredFlights"
        :key="flight.id"
        :flight="flight"
        @update-flight="updateFlight"
        @delete-flight="deleteFlight"
      />
    </div>
  </div>
</template>
<script>
import FlightCard from './components/FlightCard.vue'

export default {
  components: { FlightCard },
  data() {
    return {
      filters: {
        searchText: '',
        status: '',
        from: '',
        to: '',
        minPrice: null,
        maxPrice: null
      },
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
  computed: {
    fromLocations() {
      return [...new Set(this.flights.map((flight) => flight.from))]
    },
    toLocations() {
      return [...new Set(this.flights.map((flight) => flight.to))]
    }
  },
  created() {
    this.filterFlights()
  },
  methods: {
    filterFlights() {
      this.filteredFlights = this.flights.filter((flight) => {
        const searchTextMatch = this.filters.searchText
          ? flight.airline
              .toLowerCase()
              .includes(this.filters.searchText.toLowerCase())
          : true
        const statusMatch = this.filters.status
          ? flight.status === this.filters.status
          : true
        const fromMatch = this.filters.from
          ? flight.from === this.filters.from
          : true
        const toMatch = this.filters.to ? flight.to === this.filters.to : true
        const minPriceMatch =
          this.filters.minPrice !== null
            ? flight.price >= this.filters.minPrice
            : true
        const maxPriceMatch =
          this.filters.maxPrice !== null
            ? flight.price <= this.filters.maxPrice
            : true

        return (
          searchTextMatch &&
          statusMatch &&
          fromMatch &&
          toMatch &&
          minPriceMatch &&
          maxPriceMatch
        )
      })
    },
    resetFilters() {
      this.filters = {
        searchText: '',
        status: '',
        from: '',
        to: '',
        minPrice: null,
        maxPrice: null
      }
      this.filterFlights()
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
