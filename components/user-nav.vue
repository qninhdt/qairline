<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../components/ui/dropdown-menu'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '../components/ui/drawer'
import { Separator } from '../components/ui/separator'
import AnimatedIcon from '../components/animated-icon.vue'

const LINKS = [
  { name: 'Profile', url: '/profile', icon: 'circle_avatar' },
  { name: 'Billing', url: '/billing', icon: 'receipt_dollar' },
  { name: 'Settings', url: '/settings', icon: 'cog' }
]
</script>

<template>
  <div>
    <div class="flex items-center md:hidden">
      <Drawer>
        <DrawerTrigger as-child>
          <Button
            variant="ghost"
            class="h-8 w-8 rounded-full outline-dashed outline-2 outline-offset-2 outline-green-800"
          >
            <Avatar class="h-8 w-8">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dn0O2r3-rdH1GQFygZrIrbWAANcX7Qdgvg&s"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <div class="flex items-center space-x-2">
              <Avatar class="h-8 w-8">
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dn0O2r3-rdH1GQFygZrIrbWAANcX7Qdgvg&s"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div class="flex flex-col space-y-1">
                <p class="text-left text-sm font-medium leading-none">shadcn</p>
                <p class="text-left text-xs leading-none text-muted-foreground">
                  m@example.com
                </p>
              </div>
            </div>
          </DrawerHeader>
          <Separator />
          <div class="flex flex-col space-y-2 p-2">
            <div
              v-for="link in LINKS"
              :key="link.url"
              class="user-menu-item p-1 px-4"
            >
              <div class="flex items-center space-x-2">
                <AnimatedIcon
                  :id="link.icon"
                  :size="16"
                  target=".user-menu-item"
                />
                <span class="text-sm font-medium">{{ link.name }}</span>
              </div>
            </div>
          </div>
          <Separator />
          <div class="flex flex-col space-y-2 p-2">
            <div class="user-menu-item-logout p-1 px-4">
              <div class="items center flex space-x-2">
                <AnimatedIcon
                  id="logout"
                  :size="16"
                  target=".user-menu-item-logout"
                />
                <span class="text-sm font-medium">Log out</span>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
    <div class="hidden items-center md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            variant="ghost"
            class="relative h-8 w-8 rounded-full outline-dashed outline-2 outline-offset-2 outline-green-800"
          >
            <Avatar class="h-8 w-8">
              <AvatarImage
                class="outline-dotted outline-2 outline-offset-2 outline-green-800"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dn0O2r3-rdH1GQFygZrIrbWAANcX7Qdgvg&s"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" align="end">
          <DropdownMenuLabel class="flex font-normal">
            <div class="flex flex-col space-y-1">
              <p class="text-sm font-medium leading-none">shadcn</p>
              <p class="text-xs leading-none text-muted-foreground">
                m@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            v-for="link in LINKS"
            :key="link.url"
            class="user-menu-item"
          >
            <AnimatedIcon :id="link.icon" :size="16" target=".user-menu-item" />
            {{ link.name }}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="user-menu-item-logout"
            ><AnimatedIcon
              id="logout"
              :size="16"
              target=".user-menu-item-logout"
            />Log out</DropdownMenuItem
          >
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
