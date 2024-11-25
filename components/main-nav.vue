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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Khám phá</NavigationMenuTrigger>
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
                      Trải nghiệm dịch vụ hàng không thân thiện với môi trường.
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
                    :size="24"
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
        <NavigationMenuTrigger>Dịch vụ</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
          >
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">
                    {{ component.title }}
                  </div>
                  <p
                    class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                  >
                    {{ component.description }}
                  </p>
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
        >
          Giới thiệu
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
