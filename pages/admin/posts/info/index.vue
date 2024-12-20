<template>
  <div class="h-full p-6">
    <Button class="mb-6 block shadow" @click="addInfo">
      <a href="/admin/posts/info/post-info">Thêm bài đăng</a></Button
    >
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Dialog v-for="info in infos" :key="info.title">
        <DialogTrigger as-child>
          <Card
            class="m-6 inline-block w-auto transform cursor-pointer shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              :src="info.img"
              alt=""
              class="h-[180px] w-full rounded-t-lg object-cover"
            />
            <CardHeader class="p-3">
              <CardTitle class="inline text-sm">{{ info.title }}</CardTitle>
              <CardDescription> {{ info.date }} </CardDescription>
              <Button
                class="float-right px-4 py-2 text-white shadow"
                @click="deleteInfo_(info.id)"
                >Xóa</Button
              >
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <ScrollArea class="max-h-[500px] p-3">
            <DialogHeader>
              <DialogTitle>{{ info.title }}</DialogTitle>
              <DialogDescription> {{ info.date }} </DialogDescription>
            </DialogHeader>
            <img
              :src="info.img"
              alt=""
              class="h-[200px] w-full rounded-lg object-cover"
            />
            <p>{{ info.content }}</p>
            <DialogFooter class="sm:justify-start">
              <DialogClose as-child>
                <Button type="button" variant="secondary"> Đóng </Button>
              </DialogClose>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { deleteInfo, getInfos } from '../../../../core/firebase'
import { useToast } from '../../../../components/ui/toast'

const infos = ref([])
const { toast } = useToast()

onMounted(async () => {
  infos.value = await getInfos()
})

const deleteInfo_ = async (id: any) => {
  await deleteInfo(id)
  infos.value = await getInfos()
  toast({
    title: 'Bài viết đã được xóa'
  })
}
</script>
