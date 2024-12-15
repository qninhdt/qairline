<script setup lang="ts"></script>

<template>
  <NavBarAdmin>
    <div class="h-screen space-y-4 overflow-y-scroll p-6">
      <a href="/admin/posts">
        <Button variant="outline" size="icon">
          <span>&lt;</span>
        </Button></a
      >
      <Label class="block">Tiêu đề bài viết</Label>
      <Input type="text" class="w-9/12" />
      <Label class="block">Nội dung bài viết</Label>
      <Textarea class="w-9/12" />
      <Label class="block">Ảnh bài viết</Label>
      <Input type="file" class="w-9/12" />
      <Button class="mr-4 mt-4">Đăng bài</Button>
      <a href="/admin/posts"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </NavBarAdmin>
</template>
