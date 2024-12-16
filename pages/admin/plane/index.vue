<template>
  <NavBarAdmin>
    <div class="p-6">
      <Button class="mb-6 block shadow">
        <a href="/admin/plane/add-plane">Thêm máy bay</a></Button
      >
      <Table class="mt-4 rounded-md bg-white shadow">
        <TableHeader>
          <TableRow>
            <TableHead>STT</TableHead>
            <TableHead>Mẫu máy bay</TableHead>
            <TableHead>Sức chứa</TableHead>
            <TableHead>Ngày tạo</TableHead>
            <TableHead>Ngày cập nhật</TableHead>
            <TableHead>
              <span class="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(plane, index) in planes" :key="plane.id">
            <TableCell class="font-medium">
              {{ index + 1 }}
            </TableCell>
            <TableCell>
              <Badge variant="outline">
                {{ plane.model }}
              </Badge>
            </TableCell>
            <TableCell class="hidden md:table-cell">
              {{ plane.capacity }}
            </TableCell>
            <TableCell class="hidden md:table-cell">
              {{ plane.created_at }}
            </TableCell>
            <TableCell class="hidden md:table-cell">
              {{ plane.updated_at }}
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
                    ><a :href="`/admin/plane/edit-plane/${plane.id}`"
                      >Sửa</a
                    ></DropdownMenuItem
                  >
                  <DropdownMenuItem @click="deletePlane(plane.id)"
                    >Delete</DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div
        v-if="isDialogOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="w-96 rounded-lg bg-white p-6 shadow-xl">
          <h2 class="mb-4 text-lg font-bold text-gray-800">
            {{ editMode ? 'Sửa Máy bay' : 'Thêm Máy bay' }}
          </h2>
          <form class="space-y-4" @submit.prevent="savePlane">
            <div>
              <Label for="" class="mt-[20px] block py-2">Mẫu Máy bay:</Label>
              <input
                v-model="form.model"
                type="text"
                class="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label for="" class="mt-[20px] block py-2">Sức Chứa:</Label>
              <input
                v-model.number="form.capacity"
                type="number"
                class="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="flex justify-end space-x-3">
              <Button type="button" @click="isDialogOpen = false">Hủy</Button>
              <Button type="submit">Lưu</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NavBarAdmin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
// remove setup function
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleString('vi-VN', options)
}
const planes = ref([
  {
    id: 1,
    model: 'Airbus A320',
    capacity: 180,
    created_at: formatDate('2024-01-01T00:00:00Z'),
    updated_at: formatDate('2024-01-10T00:00:00Z')
  },
  {
    id: 2,
    model: 'Boeing 737',
    capacity: 210,
    created_at: formatDate('2024-01-02T00:00:00Z'),
    updated_at: formatDate('2024-01-11T00:00:00Z')
  },
  {
    id: 3,
    model: 'Embraer E190',
    capacity: 100,
    created_at: formatDate('2024-01-03T00:00:00Z'),
    updated_at: formatDate('2024-01-12T00:00:00Z')
  }
])

const isDialogOpen = ref(false)
const editMode = ref(false)
const form = ref({
  id: null,
  model: '',
  capacity: null,
  created_at: '',
  updated_at: ''
})

const savePlane = () => {
  if (editMode.value) {
    const index = planes.value.findIndex((p) => p.id === form.value.id)
    form.value.updated_at = formatDate(new Date().toISOString())
    planes.value[index] = { ...form.value }
  } else {
    form.value.id = planes.value.length + 1
    form.value.created_at = formatDate(new Date().toISOString())
    form.value.updated_at = formatDate(new Date().toISOString())
    planes.value.push({ ...form.value })
  }
  isDialogOpen.value = false
}

const deletePlane = (id) => {
  planes.value = planes.value.filter((plane) => plane.id !== id)
}

// remove closing braces
</script>
