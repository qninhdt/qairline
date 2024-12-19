<script setup lang="ts"></script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/plane">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Mẫu máy bay</Label>
      <Input type="text" />
      <Label class="block">Sức chứa</Label>
      <Input type="text" />
      <Button class="mr-4 mt-4">Thêm máy bay</Button>
      <a href="/admin/plane"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
