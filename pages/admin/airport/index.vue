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
import { MoreHorizontal } from 'lucide-vue-next'

const airports = ref([
  {
    id: 1,
    name: 'Laser Lemonade Machine',
    city: 'Draft',
    country: 'USA',
    iata: 'LLM'
  }
])
const deleteAirport = (id) => {
  airports.value = airports.value.filter((airport) => airport.id !== id)
}
</script>

<template>
  <NavBarAdmin>
    <div class="p-6">
      <Button class="mb-6 block shadow" @click="addAirport">
        <a href="/admin/airport/add-airport">Thêm sân bay</a></Button
      >
      <Table class="mt-4 rounded-md bg-white shadow">
        <TableHeader>
          <TableRow>
            <TableHead>Tên sân bay</TableHead>
            <TableHead>Thành phố</TableHead>
            <TableHead>Quốc gia</TableHead>
            <TableHead>Mã IATA</TableHead>
            <TableHead>
              <span class="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="airport in airports" :key="airport.id">
            <TableCell class="font-medium"> {{ airport.name }} </TableCell>
            <TableCell>
              {{ airport.city }}
            </TableCell>
            <TableCell class="hidden md:table-cell">
              {{ airport.country }}
            </TableCell>
            <TableCell class="hidden md:table-cell">
              {{ airport.iata }}
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
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    ><a
                      href="/admin/airport/edit-airport/{{airport.id}}"
                      class="w-full"
                      >Sửa</a
                    ></DropdownMenuItem
                  >
                  <DropdownMenuItem
                    class="cursor-pointer"
                    @click="deleteAirport(airport.id)"
                    >Xóa</DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </NavBarAdmin>
</template>
