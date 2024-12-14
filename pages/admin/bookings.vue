<template>
  <NavBarAdmin>
    <div class="min-h-screen overflow-y-auto bg-gray-100 p-6">
      <!-- Container bao bọc danh sách card -->
      <div class="h-screen overflow-y-scroll bg-gray-100 p-6">
        <FlightCard
          v-for="flight in flights"
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
      ]
    }
  },
  methods: {
    updateFlight(updatedFlight) {
      const index = this.flights.findIndex((f) => f.id === updatedFlight.id)
      if (index !== -1) {
        this.flights[index] = { ...updatedFlight }
      }
    },
    deleteFlight(id) {
      this.flights = this.flights.filter((flight) => flight.id !== id)
    }
  }
}
</script>
