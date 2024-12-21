<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { getBookings, getFlightById, getUsers } from '../../../../core/firebase'
import { onMounted } from 'vue'
const customers = ref([])

const route = useRoute()

onMounted(async () => {
  // get all bookings
  const bookings = await getBookings()
  const flight = await getFlightById(route.params.flightId)
  const users = await getUsers()

  // get all bookings of the current flight
  const myBookings = bookings.filter(
    (booking) => booking.flight == flight.flightCode
  )
  const myCustomers = myBookings.map((booking) => {
    const user = users.find((user) => user.email == booking.user)
    return {
      name: user.name,
      email: user.email
    }
  })

  customers.value = myCustomers
})
</script>

<template>
  <div class="p-6">
    <a href="/admin/flight">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <Table class="mt-4 rounded-md bg-white shadow">
      <TableHeader>
        <TableRow>
          <TableHead>Họ và tên</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="customer in customers" :key="customer.email">
          <TableCell class="font-medium"> {{ customer.name }} </TableCell>
          <TableCell> {{ customer.email }} </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
