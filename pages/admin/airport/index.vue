<script setup lang="ts">
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
</script>

<template>
  <NavBarAdmin>
    <div class="p-6">
      <Button class="mb-6 block shadow" @click="addAirport">
        <a href="/admin/airport/add-airport">Thêm sân bay</a></Button
      >
      <Table class="mt-4 rounded-md bg-white shadow">
        <TableHeader>
          <TableRow>
            <TableHead>Tên sân bay</TableHead>
            <TableHead>Thành phố</TableHead>
            <TableHead>Quốc gia</TableHead>
            <TableHead>Mã IATA</TableHead>
            <TableHead>
              <span class="sr-only">Actions</span>
            </TableHead>
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
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </NavBarAdmin>
</template>
