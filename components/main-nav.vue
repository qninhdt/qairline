<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '../components/ui/navigation-menu'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '../components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import AnimatedIcon from '../components/animated-icon.vue'

const explore_items = [
  {
    title: 'Hà Nội',
    href: '/explore/hanoi',
    description: 'Thủ đô ngàn năm văn hiến.',
    icon: 'hanoi'
  },
  {
    title: 'Bangkok',
    href: '/explore/bangkok',
    description: 'Thủ đô của vương quốc Thái Lan.',
    icon: 'bangkok'
  },
  {
    title: 'New York',
    href: '/explore/new-york',
    description: 'Thành phố không bao giờ ngủ.',
    icon: 'newyork'
  },
  {
    title: 'Paris',
    href: '/explore/paris',
    description: 'Thủ đô ánh sáng.',
    icon: 'paris'
  }
]

const services = [
  {
    title: 'Đặt vé',
    href: '/services/book-ticket',
    description: 'Đặt vé máy bay, tour du lịch.',
    icon: 'coupon'
  },
  {
    title: 'Hành lý',
    href: '/services/transport',
    description: 'Dịch vụ vận chuyển hành lý.',
    icon: 'box'
  },
  {
    title: 'Nhà hàng "trên không"',
    href: '/services/restaurant',
    description: 'Tận hưởng ẩm thực trên không.',
    icon: 'plate'
  },

  {
    title: 'Kết nối mạng',
    href: '/services/network',
    description: 'Dịch vụ kết nối mạng.',
    icon: 'wifi'
  },
  {
    title: 'Thủ tục hải quan',
    href: '/services/customs',
    description: 'Hỗ trợ thủ tục hải quan.',
    icon: 'newspaper'
  },
  {
    title: 'Dịch vụ khách hàng',
    href: '/services/customer-service',
    description: 'Hỗ trợ khách hàng 24/7.',
    icon: 'customer_service'
  }
]
</script>

<template>
  <div>
    <Drawer>
      <DrawerTrigger as-child>
        <div
          class="fixed bottom-6 left-4 z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div
            class="absolute z-10 h-full w-full animate-wave rounded-full border-2 border-[#27ae60]"
          ></div>
          <div
            class="absolute z-10 h-full w-full animate-wave rounded-full border-2 border-[#27ae60] delay-500"
          ></div>
          <div
            class="absolute z-10 h-full w-full animate-wave rounded-full border-2 border-[#27ae60] delay-1000"
          ></div>
          <div class="absolute z-20">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#27ae60] md:hidden"
            >
              <AnimatedIcon id="layer" :size="24" />
            </div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea class="h-[50vh]">
          <DrawerHeader>
            <a
              id="fly-with-qairline"
              class="bg-blur relative flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted no-underline outline-none transition-colors"
              href="/"
            >
              <img
                src="https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg"
                class="absolute inset-0 h-full w-full rounded-md object-cover"
                alt="Background"
              />
              <div class="relative bg-white bg-opacity-75 px-4 pb-2">
                <div class="relative mb-2 mt-4 text-lg font-bold">
                  Bay cùng QAirline
                  <AnimatedIcon
                    id="vege"
                    target="#fly-with-qairline"
                    :size="24"
                  />
                </div>
              </div>
            </a>
          </DrawerHeader>
          <Separator label="Khám phá" />
          <ul class="p-4">
            <li v-for="item in explore_items" :key="item.title">
              <NavigationMenuLink as-child>
                <a
                  :href="item.href"
                  class="flex select-none items-center space-x-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <AnimatedIcon
                    :id="item.icon"
                    :size="32"
                    class="text-accent"
                    target="a"
                  />
                  <div class="flex flex-col">
                    <div class="text-sm font-medium leading-none">
                      {{ item.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
          <Separator label="Dịch vụ" />
          <ul class="p-4">
            <li v-for="service in services" :key="service.title">
              <NavigationMenuLink as-child>
                <a
                  :href="service.href"
                  class="flex select-none items-center space-x-2 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <AnimatedIcon
                    :id="service.icon"
                    :size="32"
                    class="text-accent"
                    target="a"
                  />
                  <div class="flex flex-col">
                    <div class="text-sm font-medium leading-none">
                      {{ service.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ service.description }}
                    </p>
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
          <Separator />
          <ul class="p-4">
            <li>
              <NavigationMenuLink
                href="/docs/introduction"
                :class="navigationMenuTriggerStyle()"
              >
                Giới thiệu
              </NavigationMenuLink>
            </li>
          </ul>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
    <NavigationMenu class="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            class="bg-transparent hover:bg-transparent focus:bg-transparent"
            >Khám phá</NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
            >
              <li class="row-span-4">
                <NavigationMenuLink as-child>
                  <a
                    id="fly-with-qairline"
                    class="bg-blur relative flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted no-underline outline-none transition-colors focus:shadow-md"
                    href="/"
                  >
                    <img
                      src="https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg"
                      class="absolute inset-0 h-full w-full rounded-md object-cover"
                      alt="Background"
                    />
                    <div
                      class="absolute inset-0 rounded-md bg-black opacity-25"
                    ></div>
                    <div class="relative bg-white bg-opacity-75 px-4 pb-4">
                      <div class="relative mb-2 mt-4 text-lg font-bold">
                        Bay cùng QAirline
                        <AnimatedIcon
                          id="vege"
                          target="#fly-with-qairline"
                          :size="24"
                        />
                      </div>
                      <p
                        class="relative text-sm leading-tight text-muted-foreground"
                      >
                        Trải nghiệm dịch vụ hàng không thân thiện với môi
                        trường.
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <li v-for="item in explore_items" :key="item.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="item.href"
                    class="flex select-none items-center space-x-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <AnimatedIcon
                      :id="item.icon"
                      :size="32"
                      class="text-accent"
                      target="a"
                    />
                    <div class="flex flex-col">
                      <div class="text-sm font-medium leading-none">
                        {{ item.title }}
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            class="bg-transparent hover:bg-transparent focus:bg-transparent"
            >Dịch vụ</NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <ul
              class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <li v-for="service in services" :key="service.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="service.href"
                    class="flex select-none items-center space-x-2 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <AnimatedIcon
                      :id="service.icon"
                      :size="32"
                      class="text-accent"
                      target="a"
                    />
                    <div class="flex flex-col">
                      <div class="text-sm font-medium leading-none">
                        {{ service.title }}
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
                        {{ service.description }}
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs/introduction"
            :class="navigationMenuTriggerStyle()"
            class="bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Giới thiệu
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
