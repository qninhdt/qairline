<script setup lang="ts">
import { useToast } from '../../../components/ui/toast'
import { addFlight } from '../../../core/firebase'

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
const createdAt = ref('')
const updatedAt = ref('')

const { toast } = useToast()
const router = useRouter()

const submit = async () => {
  await addFlight({
    airline: airline.value,
    flightCode: flightCode.value,
    arrivalTime: arrivalTime.value,
    departureTime: departureTime.value,
    flightDate: flightDate.value,
    from: from.value,
    to: to.value,
    price: price.value,
    status: status.value,
    passengers: passengers.value,
    createdAt: createdAt.value,
    updatedAt: updatedAt.value
  })

  toast({
    title: 'Chuyến bay đã được thêm'
  })

  router.push('/admin/bookings')
}
</script>

<template>
  <div class="h-screen space-y-4 overflow-y-scroll p-6">
    <a href="/admin/bookings">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Airline</Label>
      <Input v-model="airline" type="text" />
      <Label class="block">Flight Code</Label>
      <Input v-model="flightCode" type="text" />
      <Label class="block">Thời gian xuất phát</Label>
      <Input v-model="arrivalTime" type="text" />
      <Label class="block">Thời gian đến</Label>
      <Input v-model="departureTime" type="text" />
      <Label class="block">Ngày bay</Label>
      <Input v-model="flightDate" type="text" />
      <Label class="block">Từ</Label>
      <Input v-model="from" type="text" />

      <Label class="block">Đến</Label>
      <Input v-model="to" type="text" />

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
      <Label class="block">Số hành khách</Label>
      <Input v-model="passengers" type="text" />
      <Label class="block">Ngày tạo</Label>
      <Input v-model="createdAt" type="text" />
      <Label class="block">Ngày cập nhật</Label>
      <Input v-model="updatedAt" type="text" />
      <Button class="mr-4 mt-4" @click="submit">Lưu</Button>
      <a href="/admin/bookings"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
