<script setup lang="ts">
import { useToast } from '../components/ui/toast'
import { getBookings, getFlights, user, removeBooking } from '../core/firebase'

const flights = ref([])

const getDuration = (departureTime: any, arrivalTime: any) => {
  const delta = arrivalTime - departureTime
  // convert to hours and minutes
  const hours = Math.floor(delta / 1000 / 60 / 60)
  const minutes = Math.floor((delta / 1000 / 60) % 60)
  return `${hours}h ${minutes}m`
}

const strPrice = (price: number) => {
  // separate thousands
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

async function fetchData() {
  let flights_ = await getFlights()
  const bookings = await getBookings()

  // get all bookings of the current user
  const myBookings = bookings.filter((booking) => booking.user == user.email)

  // booking flight code
  const bookingFlightCodes = myBookings.map((booking) => booking.flight)

  // get all flights that the user has booked
  flights_ = flights_.filter((flight) =>
    bookingFlightCodes.includes(flight.flightCode)
  )

  for (let i = 0; i < flights_.length; i++) {
    flights_[i].departureTime = new Date(flights_[i].departureTime)
    flights_[i].arrivalTime = new Date(flights_[i].arrivalTime)
    flights_[i].createdAt = new Date(flights_[i].createdAt)
    flights_[i].updatedAt = new Date(flights_[i].updatedAt)
  }

  flights.value = flights_
}

onMounted(async () => {
  await fetchData()
})

const ableToCancel = (flight: any) => {
  // check if the flight is able to cancel
  const now = new Date()
  const diff = flight.departureTime - now
  return diff > 0
}

const { toast } = useToast()

const deleteBooking_ = async (flight: any) => {
  await removeBooking(user.email, flight.flightCode)
  await fetchData()

  toast({
    title: 'Hủy vé thành công'
  })
}
</script>

<template>
  <div class="px-8 pt-32 lg:px-64">
    <div>
      <h1 class="text-center text-3xl font-bold text-primary">Vé của tôi</h1>
      <Separator class="mb-8 mt-4" />
      <div>
        <div class="flex flex-col space-y-4">
          <div
            v-for="(flight, index) in flights"
            :key="index"
            class="flex items-center overflow-hidden rounded-sm border-2 border-solid border-primary"
          >
            <div
              class="flex h-[200px] w-[200px] items-center justify-center bg-primary"
            >
              <div class="text-center text-white">
                <div class="text-xl font-bold">
                  {{ strPrice(flight.price) }}
                </div>
                <div class="text-md">VND</div>
              </div>
            </div>
            <div class="flex-grow">
              <div class="p-4">
                <div class="flex">
                  <div class="text-center">
                    <div>
                      {{ flight.departureTime.getHours() }}:{{
                        flight.departureTime.getMinutes()
                      }}
                    </div>
                    <div class="text-muted-foreground">{{ flight.from }}</div>
                  </div>
                  <div class="flex-grow">
                    <div
                      class="flex h-full flex-col items-center justify-center px-4"
                    >
                      <div
                        class="h-0 w-full border-t-2 border-dashed border-muted-foreground"
                      ></div>
                    </div>
                  </div>
                  <div class="text-center">
                    <div>
                      {{ flight.arrivalTime.getHours() }}:{{
                        flight.arrivalTime.getMinutes()
                      }}
                    </div>
                    <div class="text-muted-foreground">{{ flight.to }}</div>
                  </div>
                </div>
                <div class="mt-4">
                  <span class="mr-1 text-muted-foreground">Thời gian bay:</span>
                  <span>{{
                    getDuration(flight.departureTime, flight.arrivalTime)
                  }}</span>
                </div>
              </div>
              <div class="mx-4">
                <Button
                  class="float-right rounded-sm"
                  variant="secondary"
                  :disabled="!ableToCancel(flight)"
                  @click="deleteBooking_(flight)"
                >
                  Hủy vé
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
