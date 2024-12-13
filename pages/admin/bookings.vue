<template>
  <NavBarAdmin>
    <div class="bg-gray-100 p-6">
      <!-- Header -->
      <div class="mb-4 flex items-center justify-between">
        <h1 class="mb-4 text-2xl font-bold text-gray-800">Bookings</h1>
        <Button>+ Add Booking</Button>
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
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
          <Popover class="input">
            <PopoverTrigger as-child>
              <Button>Select Date</Button>
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
            <th class="px-4 py-2 text-left">Flight No.</th>
            <th class="px-4 py-2 text-left">Airline</th>
            <th class="px-4 py-2 text-left">Route</th>
            <th class="px-4 py-2 text-left">Departure</th>
            <th class="px-4 py-2 text-left">Arrival</th>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left">Passengers</th>
            <th class="px-4 py-2 text-left">Status</th>
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
                'text-green-600': booking.status === 'Confirmed',
                'text-yellow-600': booking.status === 'Pending',
                'text-red-600': booking.status === 'Canceled'
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
          status: 'Confirmed'
        },
        {
          flightNo: 'QW-198787',
          airline: 'QuickWing Air',
          route: 'IRO → LAX',
          departure: '1:00 PM',
          arrival: '8:20 AM',
          date: '2028-07-02',
          passengers: '177',
          status: 'Pending'
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
