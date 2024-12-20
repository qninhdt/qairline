<script setup lang="ts">
import { useToast } from '../../../components/ui/toast'
import { addAirport } from '../../../core/firebase'

const name = ref('')
const city = ref('')
const country = ref('')
const code = ref('')

const { toast } = useToast()
const router = useRouter()

const submit = async () => {
  await addAirport({
    name: name.value,
    city: city.value,
    country: country.value,
    code: code.value
  })

  toast({
    title: 'Sân bay đã được thêm'
  })

  router.push('/admin/airport')
}
</script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/airport">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tên sân bay</Label>
      <Input v-model="name" type="text" />
      <Label class="block">Thành phố</Label>
      <Input v-model="city" type="text" />
      <Label class="block">Quốc gia</Label>
      <Input v-model="country" type="text" />
      <Label class="block">Mã IATA</Label>
      <Input v-model="code" type="text" />
      <Button class="mr-4 mt-4" @click="submit">Thêm sân bay</Button>
      <a href="/admin/airport"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
