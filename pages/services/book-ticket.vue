<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone
} from '@internationalized/date'
import { cn } from '@/lib/utils'
import { RangeCalendar } from '@/components/ui/range-calendar'
import type { DateRange } from 'radix-vue'
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' }
]

const open = ref(false)
const departure = ref('')
const destination = ref('')
const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})

const one_way_date = ref<DateValue>()

const round_trip_date = ref<DateRange>({
  start: null,
  end: null
})
</script>

<template>
  <div
    class="h-screen bg-[url('https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3PbbuK3kcsydAW-7MB2EeiWwvyyhkN4OOO46Bq97DbMzlzrlK5JFlAfUU_aem_2nppyJMPvUaiSKfQZm1b0g')] bg-cover"
  >
    <div class="m-auto w-9/12 pb-[32px] pt-[200px]">
      <Tabs default-value="one-way" class="m-auto w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="one-way"> Một chiều </TabsTrigger>
          <TabsTrigger value="round-trip"> Khứ hồi </TabsTrigger>
        </TabsList>
        <TabsContent value="one-way">
          <Card>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="" class="mt-[20px] block">Nơi đi</Label>
                <Popover v-model="open">
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      role="combobox"
                      :aria-expanded="open"
                      class="w-[200px] justify-between"
                    >
                      {{
                        departure
                          ? frameworks.find(
                              (framework) => framework.value === departure
                            )?.label
                          : 'Chọn nơi đi...'
                      }}
                      <ChevronsUpDown
                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-[200px] p-0">
                    <Command>
                      <CommandInput class="h-9" placeholder="Chọn nơi đi..." />
                      <CommandEmpty>No departure found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="framework in frameworks"
                            :key="framework.value"
                            :value="framework.value"
                            @select="
                              (ev) => {
                                if (typeof ev.detail.value === 'string') {
                                  departure = ev.detail.value
                                }
                                open = false
                              }
                            "
                          >
                            {{ framework.label }}
                            <Check
                              :class="
                                cn(
                                  'ml-auto h-4 w-4',
                                  departure === framework.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )
                              "
                            />
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="space-y-1">
                <Label for="" class="block">Nơi đến</Label>
                <Popover v-model="open">
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      role="combobox"
                      :aria-expanded="open"
                      class="w-[200px] justify-between"
                    >
                      {{
                        destination
                          ? frameworks.find(
                              (framework) => framework.value === destination
                            )?.label
                          : 'Chọn nơi đến...'
                      }}
                      <ChevronsUpDown
                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-[200px] p-0">
                    <Command>
                      <CommandInput class="h-9" placeholder="Chọn nơi đến..." />
                      <CommandEmpty>No destination found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="framework in frameworks"
                            :key="framework.value"
                            :value="framework.value"
                            @select="
                              (ev) => {
                                if (typeof ev.detail.value === 'string') {
                                  destination = ev.detail.value
                                }
                                open = false
                              }
                            "
                          >
                            {{ framework.label }}
                            <Check
                              :class="
                                cn(
                                  'ml-auto h-4 w-4',
                                  destination === framework.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )
                              "
                            />
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="space-y-1">
                <Label for="date" class="block">Ngày đi</Label>
                <Popover>
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      :class="
                        cn(
                          'w-[280px] justify-start text-left font-normal',
                          !one_way_date && 'text-muted-foreground'
                        )
                      "
                    >
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      {{
                        one_way_date
                          ? df.format(one_way_date.toDate(getLocalTimeZone()))
                          : 'Chọn ngày đi'
                      }}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0">
                    <Calendar v-model="one_way_date" initial-focus />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Tìm vé</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="round-trip">
          <Card>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="" class="mt-[20px] block">Nơi đi</Label>
                <Popover v-model="open">
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      role="combobox"
                      :aria-expanded="open"
                      class="w-[200px] justify-between"
                    >
                      {{
                        departure
                          ? frameworks.find(
                              (framework) => framework.value === departure
                            )?.label
                          : 'Chọn nơi đi...'
                      }}
                      <ChevronsUpDown
                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-[200px] p-0">
                    <Command>
                      <CommandInput class="h-9" placeholder="Chọn nơi đi..." />
                      <CommandEmpty>No departure found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="framework in frameworks"
                            :key="framework.value"
                            :value="framework.value"
                            @select="
                              (ev) => {
                                if (typeof ev.detail.value === 'string') {
                                  departure = ev.detail.value
                                }
                                open = false
                              }
                            "
                          >
                            {{ framework.label }}
                            <Check
                              :class="
                                cn(
                                  'ml-auto h-4 w-4',
                                  departure === framework.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )
                              "
                            />
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="space-y-1">
                <Label for="" class="block">Nơi đến</Label>
                <Popover v-model="open">
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      role="combobox"
                      :aria-expanded="open"
                      class="w-[200px] justify-between"
                    >
                      {{
                        destination
                          ? frameworks.find(
                              (framework) => framework.value === destination
                            )?.label
                          : 'Chọn nơi đến...'
                      }}
                      <ChevronsUpDown
                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-[200px] p-0">
                    <Command>
                      <CommandInput class="h-9" placeholder="Chọn nơi đến..." />
                      <CommandEmpty>No destination found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          <CommandItem
                            v-for="framework in frameworks"
                            :key="framework.value"
                            :value="framework.value"
                            @select="
                              (ev) => {
                                if (typeof ev.detail.value === 'string') {
                                  destination = ev.detail.value
                                }
                                open = false
                              }
                            "
                          >
                            {{ framework.label }}
                            <Check
                              :class="
                                cn(
                                  'ml-auto h-4 w-4',
                                  destination === framework.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )
                              "
                            />
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="space-y-1">
                <Label for="date" class="block">Ngày đi - ngày về</Label>
                <Popover>
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      :class="
                        cn(
                          'w-[280px] justify-start text-left font-normal',
                          !round_trip_date && 'text-muted-foreground'
                        )
                      "
                    >
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      <template v-if="round_trip_date.start">
                        <template v-if="round_trip_date.end">
                          {{
                            df.format(
                              round_trip_date.start.toDate(getLocalTimeZone())
                            )
                          }}
                          -
                          {{
                            df.format(
                              round_trip_date.end.toDate(getLocalTimeZone())
                            )
                          }}
                        </template>

                        <template v-else>
                          {{
                            df.format(
                              round_trip_date.start.toDate(getLocalTimeZone())
                            )
                          }}
                        </template>
                      </template>
                      <template v-else> Chọn ngày đi - ngày về </template>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0">
                    <RangeCalendar
                      v-model="round_trip_date"
                      initial-focus
                      :number-of-months="2"
                      @update:start-value="
                        (startDate) => (round_trip_date.start = startDate)
                      "
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Tìm vé</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
