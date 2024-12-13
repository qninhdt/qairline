<template>
  <NavBarAdmin>
    <div class="h-screen overflow-y-scroll bg-gray-100 p-6">
      <Button class="mb-6 block shadow" @click="addPost">Thêm bài đăng</Button>
      <Card
        v-for="post in posts"
        :key="post.title"
        class="m-6 inline-block w-[320px]"
      >
        <img
          :src="post.image"
          alt=""
          class="h-[200px] w-full rounded-lg object-cover"
        />
        <CardHeader>
          <CardTitle>Chương trình khuyến mãi</CardTitle>
          <CardDescription>
            Ngày tạo bài viết
            <Button
              class="float-right bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600"
              @click="deletePost(post)"
              >Xóa</Button
            >
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </NavBarAdmin>
</template>

<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Bài viết 1',
    content: 'Nội dung bài viết 1',
    image:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg'
  },
  {
    title: 'Bài viết 2',
    content: 'Nội dung bài viết 2',
    image:
      'https://bizweb.dktcdn.net/100/242/347/files/album-anh-ve-ha-noi-01-0cbc70a3-b767-46e7-9904-d09ad5092662.jpg?v=1720771375029'
  },
  {
    title: 'Bài viết 3',
    content: 'Nội dung bài viết 3',
    image:
      'https://media.istockphoto.com/id/478073811/vi/anh/l%E1%BB%91i-v%C3%A0o-%C4%91%E1%BA%B9p-t%E1%BA%A1i-v%C4%83n-mi%E1%BA%BFu-qu%E1%BB%91c-t%E1%BB%AD-gi%C3%A1m.jpg?s=612x612&w=0&k=20&c=FXgEWvQQLlDi9iP8tacv4_QbnjyaAGWlT2Pij_awKTc='
  },
  {
    title: 'Bài viết 4',
    content: 'Nội dung bài viết 3',
    image:
      'https://media.istockphoto.com/id/478073811/vi/anh/l%E1%BB%91i-v%C3%A0o-%C4%91%E1%BA%B9p-t%E1%BA%A1i-v%C4%83n-mi%E1%BA%BFu-qu%E1%BB%91c-t%E1%BB%AD-gi%C3%A1m.jpg?s=612x612&w=0&k=20&c=FXgEWvQQLlDi9iP8tacv4_QbnjyaAGWlT2Pij_awKTc='
  },
  {
    title: 'Bài viết 5',
    content: 'Nội dung bài viết 3',
    image:
      'https://media.istockphoto.com/id/478073811/vi/anh/l%E1%BB%91i-v%C3%A0o-%C4%91%E1%BA%B9p-t%E1%BA%A1i-v%C4%83n-mi%E1%BA%BFu-qu%E1%BB%91c-t%E1%BB%AD-gi%C3%A1m.jpg?s=612x612&w=0&k=20&c=FXgEWvQQLlDi9iP8tacv4_QbnjyaAGWlT2Pij_awKTc='
  },
  {
    title: 'Bài viết 6',
    content: 'Nội dung bài viết 3',
    image:
      'https://media.istockphoto.com/id/478073811/vi/anh/l%E1%BB%91i-v%C3%A0o-%C4%91%E1%BA%B9p-t%E1%BA%A1i-v%C4%83n-mi%E1%BA%BFu-qu%E1%BB%91c-t%E1%BB%AD-gi%C3%A1m.jpg?s=612x612&w=0&k=20&c=FXgEWvQQLlDi9iP8tacv4_QbnjyaAGWlT2Pij_awKTc='
  }
])

const deletePost = (postToDelete: {
  title: string
  content: string
  image: string
}) => {
  posts.value = posts.value.filter((post) => post !== postToDelete)
}
</script>
