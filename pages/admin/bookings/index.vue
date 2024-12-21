<script>
import FlightCard from './components/FlightCard.vue'
import { deleteFlight, getFlights } from '../../../core/firebase'
import { useToast } from '../../../components/ui/toast'
export default {
  components: { FlightCard },
  setup() {
    const flights = ref([])
    onMounted(async () => {
      flights.value = await getFlights() // Kiểm tra dữ liệu
      filterFlights()
    })
    const deleteFlight_ = async (id) => {
      await deleteFlight(id)
      flights.value = await getFlights()
      toast({
        title: 'Chuyến bay đã được xóa'
      })
      filterFlights()
    }
    const filteredFlights = ref([])
    const filters = reactive({
      searchText: '',
      status: '',
      from: '',
      to: '',
      minPrice: null,
      maxPrice: null
    })
    const { toast } = useToast()

    const fromLocations = computed(() => {
      return [...new Set(flights.value.map((flight) => flight.from))]
    })

    const toLocations = computed(() => {
      return [...new Set(flights.value.map((flight) => flight.to))]
    })

    const filterFlights = () => {
      filteredFlights.value = flights.value.filter((flight) => {
        const searchTextMatch = filters.searchText
          ? flight.airline
              .toLowerCase()
              .includes(filters.searchText.toLowerCase())
          : true
        const statusMatch = filters.status
          ? flight.status === filters.status
          : true
        const fromMatch = filters.from ? flight.from === filters.from : true
        const toMatch = filters.to ? flight.to === filters.to : true
        const minPriceMatch =
          filters.minPrice !== null ? flight.price >= filters.minPrice : true
        const maxPriceMatch =
          filters.maxPrice !== null ? flight.price <= filters.maxPrice : true

        return (
          searchTextMatch &&
          statusMatch &&
          fromMatch &&
          toMatch &&
          minPriceMatch &&
          maxPriceMatch
        )
      })
    }
    const resetFilters = () => {
      filters.searchText = ''
      filters.status = ''
      filters.from = ''
      filters.to = ''
      filters.minPrice = null
      filters.maxPrice = null
      filterFlights()
    }
    return {
      flights,
      filteredFlights,
      filters,
      fromLocations,
      toLocations,
      filterFlights,
      resetFilters,
      deleteFlight_
    }
  }
}
</script>

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
          <option value="">Tất cả điểm đến</option>
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
          class="w-[130px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    <!--Nút thêm chuyến bay-->
    <div>
      <Button class="mb-6 block shadow">
        <a href="/admin/bookings/add-flight">Thêm chuyến bay</a></Button
      >
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
        :flights="flights"
        :deleteFlight_="deleteFlight_"
      />
    </div>
  </div>
</template>
