<script setup lang="ts">
import { useToast } from '../../../../components/ui/toast'
import { addInfo } from '../../../../core/firebase'

const title = ref('')
const content = ref('')
const img = ref('')

const { toast } = useToast()
const router = useRouter()

const submit = async () => {
  const formatDate = (date) => {
    const d = new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  }

  await addInfo({
    title: title.value,
    content: content.value,
    img: img.value,
    date: formatDate(new Date())
  })

  toast({
    title: 'Bài viết đã được thêm'
  })

  router.push('/admin/posts/info')
}
</script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/posts/info">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tiêu đề bài viết</Label>
      <Input v-model="title" type="text" />
      <Label class="block">Nội dung bài viết</Label>
      <Textarea v-model="content" />
      <Label class="block">Link ảnh bài viết</Label>
      <Input v-model="img" type="text" />
      <Button class="mr-4 mt-4" @click="submit">Đăng bài</Button>
      <a href="/admin/posts/info"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
