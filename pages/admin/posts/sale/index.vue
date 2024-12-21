<template>
  <div class="h-full p-6">
    <Button class="mb-6 block shadow" @click="addSale">
      <a href="/admin/posts/sale/post-sale">Thêm bài đăng</a></Button
    >
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Dialog v-for="sale in sales" :key="sale.title">
        <DialogTrigger as-child>
          <Card
            class="m-6 inline-block w-auto transform cursor-pointer shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              :src="sale.img"
              alt=""
              class="h-[180px] w-full rounded-t-lg object-cover"
            />
            <CardHeader class="p-3">
              <CardTitle class="inline text-sm">{{ sale.title }} </CardTitle>
              <CardDescription>
                {{ sale.date.start }} - {{ sale.date.end }}
                <div class="float-right">
                  <AnimatedIcon
                    :id="'coupon'"
                    :size="25"
                    class="pt-2 text-accent"
                    target="a"
                  />
                  <span class="inline">
                    -{{
                      sale.type_sale === 'option-one'
                        ? sale.amount + '%'
                        : sale.amount
                    }}
                  </span>
                </div>
              </CardDescription>
              <Button
                class="float-right px-4 py-2 text-white shadow"
                @click="deleteSale_(sale.id)"
                >Xóa</Button
              >
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <ScrollArea class="max-h-[500px] p-3">
            <DialogHeader>
              <DialogTitle>{{ sale.title }}</DialogTitle>
              <DialogDescription>
                {{ sale.date.start }} - {{ sale.date.end }}
              </DialogDescription>
            </DialogHeader>
            <img
              :src="sale.img"
              alt=""
              class="h-[200px] w-full rounded-lg object-cover"
            />
            <p>{{ sale.content }}</p>
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
import { deleteSale, getSales } from '../../../../core/firebase'
import { useToast } from '../../../../components/ui/toast'

const sales = ref([])
const { toast } = useToast()

onMounted(async () => {
  sales.value = await getSales()
})

const deleteSale_ = async (id: any) => {
  await deleteSale(id)
  sales.value = await getSales()
  toast({
    title: 'Bài viết đã được xóa'
  })
}
</script>
