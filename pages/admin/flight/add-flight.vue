<script setup lang="ts">
import { useToast } from '../../../components/ui/toast'
import { addFlight, getAirports, getPlanes } from '../../../core/firebase'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const plane = ref('')
const flightCode = ref('')
const date = ref()
const from = ref('')
const to = ref('')
const price = ref('')
const status = ref('')
const passengers = ref('')

const { toast } = useToast()
const router = useRouter()
const airports = ref([])
const planes = ref([])
onMounted(async () => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]

  airports.value = await getAirports()
  planes.value = await getPlanes()
})
const submit = async () => {
  const arrivalTime = date.value[1].getTime()
  const departureTime = date.value[0].getTime()
  await addFlight({
    plane: plane.value,
    flightCode: flightCode.value,
    arrivalTime: arrivalTime,
    departureTime: departureTime,
    from: from.value,
    to: to.value,
    price: price.value,
    status: status.value,
    passengers: passengers.value,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime()
  })

  toast({
    title: 'Chuyến bay đã được thêm'
  })

  router.push('/admin/flight')
}
</script>

<template>
  <div class="h-screen space-y-4 overflow-y-scroll p-6">
    <a href="/admin/flight">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Máy bay</Label>
      <Select v-model="plane">
        <SelectTrigger>
          <SelectValue placeholder="Chọn máy bay" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Máy bay</SelectLabel>
            <SelectItem
              v-for="plane in planes"
              :key="plane.id"
              :value="plane.code"
            >
              {{ plane.name }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label class="block">Mã chuyến bay</Label>
      <Input v-model="flightCode" type="text" />
      <Label class="block">Thời gian đi/đến</Label>
      <VueDatePicker
        v-model="date"
        class="rounded-sm border-[1px] border-primary p-[2px]"
        range
        multi-calendars
      />
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
              :value="airport.code"
            >
              {{ airport.name }}
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
              :value="airport.code"
            >
              {{ airport.name }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Label class="block">Giá</Label>
      <Input v-model="price" type="number" />

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
      <a href="/admin/flight"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
