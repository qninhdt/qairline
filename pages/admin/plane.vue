<template>
  <NavBarAdmin>
    <div class="p-6">
      <Button class="mb-6 shadow" @click="addPlane">Thêm Máy bay</Button>

      <div class="overflow-x-auto">
        <table class="w-full table-auto rounded-lg bg-white shadow-md">
          <thead class="bg-gray-200 text-gray-600">
            <tr>
              <th class="px-4 py-2 text-left">STT</th>
              <th class="px-4 py-2 text-left">Mẫu Máy bay</th>
              <th class="px-4 py-2 text-left">Sức Chứa</th>
              <th class="px-4 py-2 text-left">Ngày Tạo</th>
              <th class="px-4 py-2 text-left">Ngày Cập Nhật</th>
              <th class="px-4 py-2 text-left">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(plane, index) in planes"
              :key="plane.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="px-4 py-2">{{ index + 1 }}</td>
              <td class="px-4 py-2">{{ plane.model }}</td>
              <td class="px-4 py-2">{{ plane.capacity }}</td>
              <td class="px-4 py-2">{{ plane.created_at }}</td>
              <td class="px-4 py-2">{{ plane.updated_at }}</td>
              <td class="px-4 py-2">
                <Button
                  class="mr-2 bg-yellow-500 px-4 py-2 text-white shadow hover:bg-yellow-600"
                  @click="editPlane(plane)"
                  >Sửa</Button
                >
                <Button
                  class="bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600"
                  @click="deletePlane(plane.id)"
                  >Xóa</Button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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

<script>
export default {
  setup() {
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
    const addPlane = () => {
      form.value = {
        id: null,
        model: '',
        capacity: null,
        created_at: formatDate(new Date().toISOString()),
        updated_at: formatDate(new Date().toISOString())
      }
      editMode.value = false
      isDialogOpen.value = true
    }

    const editPlane = (plane) => {
      form.value = { ...plane }
      editMode.value = true
      isDialogOpen.value = true
    }

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

    return {
      planes,
      isDialogOpen,
      editMode,
      form,
      addPlane,
      editPlane,
      savePlane,
      deletePlane,
      formatDate
    }
  }
}
</script>
