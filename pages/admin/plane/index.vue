<script setup lang="ts">
import { deletePlane, getPlanes } from '../../../core/firebase'
import { MoreHorizontal } from 'lucide-vue-next'
import { useToast } from '../../../components/ui/toast'

const planes = ref([])
const { toast } = useToast()

onMounted(async () => {
  planes.value = await getPlanes()
})

const deletePlane_ = async (id: any) => {
  await deletePlane(id)
  planes.value = await getPlanes()
  toast({
    title: 'Máy bay đã được xóa'
  })
}
</script>

<template>
  <div class="p-6">
    <Button class="mb-6 block shadow" @click="addPlane">
      <a href="/admin/plane/add-plane">Thêm máy bay</a></Button
    >
    <Table class="mt-4 overflow-hidden rounded-lg border bg-background">
      <TableHeader>
        <TableRow>
          <TableHead>Tên máy bay</TableHead>
          <TableHead>Mã máy bay</TableHead>
          <TableHead>Sức chứa</TableHead>
          <TableHead>
            <span class="sr-only">Hành động</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="plane in planes" :key="plane.id">
          <TableCell class="font-medium"> {{ plane.name }} </TableCell>
          <TableCell>
            {{ plane.code }}
          </TableCell>
          <TableCell>
            {{ plane.capacity }}
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal class="h-4 w-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                <DropdownMenuItem
                  ><a
                    :href="`/admin/plane/edit-plane/${plane.id}`"
                    class="w-full"
                    >Sửa</a
                  ></DropdownMenuItem
                >
                <DropdownMenuItem
                  class="cursor-pointer"
                  @click="deletePlane_(plane.id)"
                  >Xóa</DropdownMenuItem
                >
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
