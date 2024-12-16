<script setup lang="ts"></script>

<template>
  <NavBarAdmin>
    <div class="h-screen space-y-4 overflow-y-scroll p-6">
      <a href="/admin/airport">
        <Button variant="outline" size="icon">
          <span>&lt;</span>
        </Button></a
      >
      <div class="m-auto w-9/12 space-y-4">
        <Label class="block">Tên sân bay</Label>
        <Input type="text" />
        <Label class="block">Thành phố</Label>
        <Input type="text" />
        <Label class="block">Quốc gia</Label>
        <Input type="text" />
        <Label class="block">Mã IATA</Label>
        <Input type="text" />
        <Button class="mr-4 mt-4">Thêm sân bay</Button>
        <a href="/admin/airport"
          ><Button class="mt-4" variant="secondary">Hủy</Button></a
        >
      </div>
    </div>
  </NavBarAdmin>
</template>
