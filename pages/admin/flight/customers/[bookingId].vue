<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
</script>

<template>
  <div class="p-6">
    <a href="/admin/flight">
      <Button variant="outline" size="icon">
        <AnimatedIcon
          :id="'back'"
          :size="18"
          class="text-accent"
          target="a"
        /> </Button
    ></a>
    <Table class="mt-4 rounded-md bg-white shadow">
      <TableHeader>
        <TableRow>
          <TableHead>Họ</TableHead>
          <TableHead>Tên</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Thời gian đặt vé</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell class="font-medium"> Hoàng Anh </TableCell>
          <TableCell class="font-medium"> Nguyễn </TableCell>
          <TableCell> hoanganhnguyen.knk@gmail.com </TableCell>
          <TableCell> 19/12/2024 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> Nguyễn Thị Cát </TableCell>
          <TableCell class="font-medium"> Tường </TableCell>
          <TableCell> 22022107@vnu.edu.vn </TableCell>
          <TableCell> 19/12/2024 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> Nguyễn Quang </TableCell>
          <TableCell class="font-medium"> Ninh </TableCell>
          <TableCell> qndt123@gmail.com </TableCell>
          <TableCell> 21/12/2024 </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
