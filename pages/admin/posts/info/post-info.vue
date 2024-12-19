<script setup lang="ts"></script>

<template>
  <div class="space-y-4 overflow-y-scroll p-6">
    <a href="/admin/posts/info">
      <Button variant="outline" size="icon">
        <span>&lt;</span>
      </Button></a
    >
    <div class="m-auto w-9/12 space-y-4">
      <Label class="block">Tiêu đề bài viết</Label>
      <Input type="text" required />
      <Label class="block">Nội dung bài viết</Label>
      <Textarea required />
      <Label class="block">Link ảnh bài viết</Label>
      <Input type="text" required />
      <Button class="mr-4 mt-4" type="submit">Đăng bài</Button>
      <a href="/admin/posts/info"
        ><Button class="mt-4" variant="secondary">Hủy</Button></a
      >
    </div>
  </div>
</template>
