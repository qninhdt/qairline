<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { deleteAirport, getAirports } from '../../../core/firebase'
import { MoreHorizontal } from 'lucide-vue-next'
import { useToast } from '../../../components/ui/toast'

const airports = ref([])
const { toast } = useToast()

onMounted(async () => {
  airports.value = await getAirports()
})

const deleteAirport_ = async (id: any) => {
  await deleteAirport(id)
  airports.value = await getAirports()
  toast({
    title: 'Sân bay đã được xóa'
  })
}
</script>

<template>
  <div class="p-6">
    <Button class="mb-6 block shadow" @click="addAirport">
      <a href="/admin/airport/add-airport">Thêm sân bay</a></Button
    >
    <Table class="mt-4 overflow-hidden rounded-lg border bg-background">
      <TableHeader>
        <TableRow>
          <TableHead>Tên sân bay</TableHead>
          <TableHead>Thành phố</TableHead>
          <TableHead>Quốc gia</TableHead>
          <TableHead>Mã IATA</TableHead>
          <TableHead>
            <span class="sr-only">Hành động</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="airport in airports" :key="airport.id">
          <TableCell class="font-medium"> {{ airport.name }} </TableCell>
          <TableCell>
            {{ airport.city }}
          </TableCell>
          <TableCell>
            {{ airport.country }}
          </TableCell>
          <TableCell>
            {{ airport.code }}
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
                    :href="`/admin/airport/edit-airport/${airport.id}`"
                    class="w-full"
                    >Sửa</a
                  ></DropdownMenuItem
                >
                <DropdownMenuItem
                  class="cursor-pointer"
                  @click="deleteAirport_(airport.id)"
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
