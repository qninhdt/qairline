<script setup lang="ts">
import { useToast } from '../../../../components/ui/toast'
import {
  getAirports,
  getPlanes,
  getFlightById,
  updateFlight
} from '../../../../core/firebase'
const airline = ref('')
const flightCode = ref('')
const departureTime = ref('')
const arrivalTime = ref('')
const flightDate = ref('')
const from = ref('')
const to = ref('')
const price = ref('')
const status = ref('')
const passengers = ref('')

const { toast } = useToast()
const route = useRoute()
const router = useRouter()
const airports = ref([])
const planes = ref([])
onMounted(async () => {
  airports.value = await getAirports()
  planes.value = await getPlanes()
})
onMounted(async () => {
  const flight: any = await getFlightById(route.params.flightId)
  airline.value = flight.airline
  flightCode.value = flight.flightCode
  arrivalTime.value = flight.arrivalTime
  departureTime.value = flight.departureTime
  flightDate.value = flight.flightDate
  from.value = flight.from
  to.value = flight.to
  price.value = flight.price
  status.value = flight.status
  passengers.value = flight.passengers
})
const submit = async () => {
  const formatDate = (date) => {
    const d = new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  }
  await updateFlight(route.params.flightId, {
    airline: airline.value,
    flightCode: flightCode.value,
    arrivalTime: arrivalTime.value,
    departureTime: departureTime.value,
    flightDate: formatDate(flightDate.value),
    from: from.value,
    to: to.value,
    price: price.value,
    status: status.value,
    passengers: passengers.value,
    createdAt: formatDate(new Date()),
    updatedAt: formatDate(new Date())
  })

  toast({
    title: 'Chuyến bay đã được sửa'
  })

  router.push('/admin/bookings')
}
</script>

<template>
  <div class="h-screen space-y-4 overflow-y-scroll p-6">
    <a href="/admin/bookings">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tàu bay</Label>
      <Select v-model="airline">
        <SelectTrigger>
          <SelectValue placeholder="Chọn tàu bay" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tàu bay</SelectLabel>
            <SelectItem
              v-for="plane in planes"
              :key="plane.id"
              :value="plane.name"
            >
              {{ plane.name }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label class="block">Mã chuyến bay</Label>
      <Input v-model="flightCode" type="text" />
      <Label class="block">Thời gian xuất phát</Label>
      <Input v-model="departureTime" type="text" />
      <Label class="block">Thời gian đến</Label>
      <Input v-model="arrivalTime" type="text" />
      <Label class="block">Ngày bay</Label>
      <Input v-model="flightDate" type="text" />
      <Label class="block">Từ</Label>
      <Select v-model="from">
        <SelectTrigger>
          <SelectValue placeholder="Chọn sân bay" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sân bay</SelectLabel>
            <SelectItem
              v-for="airport in airports"
              :key="airport.id"
              :value="airport.city"
            >
              {{ airport.city }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Label class="block">Đến</Label>
      <Select v-model="to">
        <SelectTrigger>
          <SelectValue placeholder="Chọn sân bay" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sân bay</SelectLabel>
            <SelectItem
              v-for="airport in airports"
              :key="airport.id"
              :value="airport.city"
            >
              {{ airport.city }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Label class="block">Giá</Label>
      <Input v-model="price" type="text" />

      <Label class="block">Trạng thái</Label>
      <Select v-model="status">
        <SelectTrigger>
          <SelectValue placeholder="Chọn trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Trạng thái</SelectLabel>
            <SelectItem value="Đang chờ"> Đang chờ </SelectItem>
            <SelectItem value="Xác nhận"> Xác nhận </SelectItem>
            <SelectItem value="Đã hủy"> Đã hủy </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button class="mr-4 mt-4" @click="submit">Lưu</Button>
      <a href="/admin/bookings"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
