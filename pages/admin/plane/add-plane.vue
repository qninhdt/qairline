<script setup lang="ts">
import { useToast } from '../../../components/ui/toast'
import { addPlane } from '../../../core/firebase'

const name = ref('')
const code = ref('')
const capacity = ref(0)

const { toast } = useToast()
const router = useRouter()

const submit = async () => {
  await addPlane({
    name: name.value,
    code: code.value,
    capacity: capacity.value
  })

  toast({
    title: 'Máy bay đã được thêm'
  })

  router.push('/admin/plane')
}
</script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/plane">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tên máy bay</Label>
      <Input v-model="name" type="text" />
      <Label class="block">Mã máy bay</Label>
      <Input v-model="code" type="text" />
      <Label class="block">Sức chứa</Label>
      <Input v-model="capacity" type="number" />
      <Button class="mr-4 mt-4" @click="submit">Thêm máy bay</Button>
      <a href="/admin/plane"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
