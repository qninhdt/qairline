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
  <NavBarAdmin>
    <div class="p-6">
      <a href="/admin/bookings">
        <Button variant="outline" size="icon">
          <span>&lt;</span>
        </Button></a
      >
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
            <TableCell class="font-medium"> Laser Lemonade Machine </TableCell>
            <TableCell>
              <Badge variant="outline"> Draft </Badge>
            </TableCell>
            <TableCell class="hidden md:table-cell"> $499.99 </TableCell>
            <TableCell class="hidden md:table-cell"> 25 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </NavBarAdmin>
</template>
