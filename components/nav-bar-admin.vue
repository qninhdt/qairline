<script setup lang="ts">
import QAirlineLogo from '../components/qairline-logo.vue'
import AnimatedIcon from '../components/animated-icon.vue'

import {
  ChevronRight,
  ChevronsUpDown,
  LogOut,
  SquareTerminal
} from 'lucide-vue-next'
import { logout, user } from '../core/firebase'

const data = {
  navMain: [
    {
      title: 'Tin tức',
      url: 'admin/posts',
      icon: SquareTerminal,
      items: [
        {
          title: 'Thông tin',
          url: '/admin/posts/info'
        },
        {
          title: 'Khuyến mãi',
          url: '/admin/posts/sale'
        }
      ]
    }
  ]
}
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="offcanvas">
      <SideBarHeader class="m-auto p-6">
        <QAirlineLogo />
      </SideBarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <router-link to="/admin/" active-class="bg-muted">
                  <AnimatedIcon
                    :id="'home'"
                    :size="24"
                    class="text-accent"
                    target="a"
                  />
                  <span>Trang chủ</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Collapsible
              v-for="item in data.navMain"
              :key="item.title"
              as-child
              :default-open="item.isActive"
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="item.title">
                    <AnimatedIcon
                      :id="'documents'"
                      :size="24"
                      class="text-accent"
                      target="a"
                    />
                    <span>{{ item.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in item.items"
                      :key="subItem.title"
                    >
                      <SidebarMenuSubButton as-child>
                        <router-link :to="subItem.url" active-class="bg-muted">
                          <span>{{ subItem.title }}</span>
                        </router-link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <router-link to="/admin/plane" active-class="bg-muted">
                  <AnimatedIcon
                    :id="'plane'"
                    :size="24"
                    class="text-accent"
                    target="a"
                  />
                  <span>Tàu bay</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <router-link to="/admin/airport" active-class="bg-muted">
                  <AnimatedIcon
                    :id="'airport_runway'"
                    :size="24"
                    class="text-accent"
                    target="a"
                  />
                  <span>Sân bay</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <router-link to="/admin/flight" active-class="bg-muted">
                  <AnimatedIcon
                    :id="'travel_agency'"
                    :size="24"
                    class="text-accent"
                    target="a"
                  />
                  <span>Chuyến bay</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://storyset.com/images/avatar-bro.svg"
                    />
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ user.name }}</span>
                    <span class="truncate text-xs">{{ user.email }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                :side-offset="4"
              >
                <DropdownMenuLabel class="p-0 font-normal">
                  <div
                    class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                  >
                    <Avatar class="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src="https://storyset.com/images/avatar-bro.svg"
                      />
                    </Avatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">{{
                        user.name
                      }}</span>
                      <span class="truncate text-xs">{{ user.email }}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem @click="logout">
                  <LogOut />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>QAirline - Vui từng chuyến bay</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="h-full space-y-6 bg-muted p-4">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
