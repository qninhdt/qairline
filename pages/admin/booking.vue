<template>
  <div class="bg-gray-100 p-6">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Bookings</h1>
      <button class="btn-primary">+ Add Booking</button>
    </div>

    <!-- Filters -->
    <div class="mb-6 flex items-center justify-between">
      <input
        v-model="searchQuery"
        type="text"
        class="input"
        placeholder="Search airlines, flight number, etc."
      />
      <div class="flex items-center gap-4">
        <select v-model="selectedStatus" class="input">
          <option value="">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Canceled">Canceled</option>
        </select>
        <input v-model="selectedDate" type="date" class="input" />
      </div>
    </div>

    <!-- Table -->
    <table class="w-full table-auto rounded-lg bg-white shadow-md">
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
          date: '2028-07-01',
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
        return (
          (!this.searchQuery ||
            booking.airline
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            booking.flightNo
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())) &&
          (!this.selectedStatus || booking.status === this.selectedStatus) &&
          (!this.selectedDate || booking.date === this.selectedDate)
        )
      })
    }
  }
}
</script>

<style scoped>
/* Basic styling for buttons and inputs */
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
}
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.table-auto {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
</style>
