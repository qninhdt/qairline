<script setup lang="ts"></script>

<template>
  <div class="h-screen space-y-4 overflow-y-scroll p-6">
    <a href="/admin/bookings">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Airline</Label>
      <Input type="text" />
      <Label class="block">Flight Code</Label>
      <Input type="text" />
      <Label class="block">Thời gian xuất phát</Label>
      <Input type="text" />
      <Label class="block">Thời gian đến</Label>
      <Input type="text" />
      <Label class="block">Hành lý</Label>
      <Input type="text" />
      <Label class="block">Trạng thái</Label>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Chọn trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Trạng thái</SelectLabel>
            <SelectItem value="Đang chờ"> Đang chờ </SelectItem>
            <SelectItem value="Xác nhận"> Xác nhận </SelectItem>
            <SelectItem value="Đã hủy"> Đã hủy </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label class="block">Hành lý</Label>
      <Input type="text" />
      <Button class="mr-4 mt-4">Lưu</Button>
      <a href="/admin/bookings"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
