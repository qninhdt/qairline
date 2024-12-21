<script setup lang="ts">
import { useToast } from '../../../../components/ui/toast'
import { getAirportById, updateAirport } from '../../../../core/firebase'

const route = useRoute()
const router = useRouter()
const name = ref('')
const city = ref('')
const country = ref('')
const code = ref('')
const { toast } = useToast()

onMounted(async () => {
  const airport: any = await getAirportById(route.params.airportId)
  name.value = airport.name
  city.value = airport.city
  country.value = airport.country
  code.value = airport.code
})

const submit = async () => {
  await updateAirport(route.params.airportId, {
    name: name.value,
    city: city.value,
    country: country.value,
    code: code.value
  })

  toast({
    title: 'Sân bay đã được cập nhật'
  })

  router.push('/admin/airport')
}
</script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/airport">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tên sân bay</Label>
      <Input v-model="name" type="text" />
      <Label class="block">Thành phố</Label>
      <Input v-model="city" type="text" />
      <Label class="block">Quốc gia</Label>
      <Input v-model="country" type="text" />
      <Label class="block">Mã IATA</Label>
      <Input v-model="code" type="text" />
      <Button class="mr-4 mt-4" @click="submit">Lưu</Button>
      <a href="/admin/airport"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
