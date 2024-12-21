<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'
import { toast } from '../components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import * as z from 'zod'
import { getFlights, addBooking, user } from '../../core/firebase'

const route = useRoute()
const from = ref()
const to = ref()
const date = ref()
const classType = ref('economy')
const sortType = ref('default')
const activeIndex = computed(() => {
  if (!days.value) return -1
  if (!date.value) return -1
  return days.value.findIndex(
    (day) => day.date.getTime() === date.value.getTime()
  )
})
const flights = ref([])

const strPrice = (price: number) => {
  // separate thousands
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const formSchema = [
  z.object({
    firstName: z
      .string()
      .min(2, 'Họ phải có ít nhất 2 ký tự')
      .max(50, 'Họ không thể dài quá 50 ký tự'),
    lastName: z
      .string()
      .min(2, 'Tên phải có ít nhất 2 ký tự')
      .max(50, 'Tên không thể dài quá 50 ký tự'),
    phoneNumber: z
      .string()
      .min(10)
      .max(10)
      .regex(/^\d+$/, 'Số điện thoại không hợp lệ')
  }), //   visa infomation

  z.object({
    cardNumber: z
      .string()
      .min(16, 'Số thẻ phải có ít nhất 16 ký tự')
      .max(16, 'Số thẻ không thể dài quá 16 ký tự'),
    cardHolder: z
      .string()
      .min(2, 'Tên phải có ít nhất 2 ký tự')
      .max(50, 'Tên không thể dài quá 50 ký tự'),
    expirationDate: z
      .string()
      .min(5, 'Ngày hết hạn không hợp lệ')
      .max(5, 'Ngày hết hạn không hợp lệ'),
    cvv: z.string().min(3, 'CVV không hợp lệ').max(3, 'CVV không hợp lệ')
  })
]

const stepIndex = ref(1)
const steps = [
  {
    step: 1,
    title: 'Nhập thông tin'
  },
  {
    step: 2,
    title: 'Thanh toán'
  }
]

async function onSubmit(values: any) {
  await addBooking({
    user: user.email,
    flight: currentFlight.value.flightCode
  })
  toast({
    title: 'Thanh toán thành công'
  })
}

onMounted(async () => {
  const timestamp = route.query.date
  date.value = new Date(parseInt(timestamp as string))
  from.value = route.query.from as string
  to.value = route.query.to as string
  classType.value = route.query.classType as string

  flights.value = await getFlights()
  // convert arrivalTime and departureTime to Date object
  flights.value.forEach((flight) => {
    flight.arrivalTime = new Date(flight.arrivalTime)
    flight.departureTime = new Date(flight.departureTime)
    flight.capacity = Math.floor(Math.random() * 10) + 1
  })

  maxPrice.value = [Math.max(...flights.value.map((flight) => flight.price))]
})

// show flights with same day as selected date
const showFlights = computed(() => {
  return flights.value.filter((flight) => {
    return (
      flight.from === from.value &&
      flight.to === to.value &&
      flight.departureTime.getDate() === date.value.getDate() &&
      flight.departureTime.getMonth() === date.value.getMonth() &&
      flight.departureTime.getFullYear() === date.value.getFullYear()
    )
  })
})

const realShowFlights = computed(() => {
  const result = showFlights.value.filter((flight) => {
    return flight.price <= maxPrice.value[0]
  })

  if (sortType.value === 'default') {
    return result
  } else if (sortType.value === 'cheap') {
    return result.sort((a, b) => a.price - b.price)
  } else if (sortType.value === 'early') {
    return result.sort(
      (a, b) => a.departureTime.getTime() - b.departureTime.getTime()
    )
  } else if (sortType.value === 'late') {
    return result.sort(
      (a, b) => b.departureTime.getTime() - a.departureTime.getTime()
    )
  }

  return result
})

const currentFlight = ref()

const maxPrice = ref([1000000])
const realMaxPrice = computed(() => {
  return Math.max(...showFlights.value.map((flight) => flight.price))
})

const getDuration = (departureTime: any, arrivalTime: any) => {
  const delta = arrivalTime - departureTime
  // convert to hours and minutes
  const hours = Math.floor(delta / 1000 / 60 / 60)
  const minutes = Math.floor((delta / 1000 / 60) % 60)
  return `${hours}h ${minutes}m`
}

const days = computed(() => {
  const day2flights = flights.value.reduce(
    (acc, flight) => {
      // get day/month/year from const date withou time
      const date =
        flight.departureTime.getDate() +
        '/' +
        flight.departureTime.getMonth() +
        '/' +
        flight.departureTime.getFullYear()

      if (acc[date]) {
        acc[date] = flight.price < acc[date] ? flight.price : acc[date]
      } else {
        acc[date] = flight.price
      }
      return acc
    },
    {} as Record<number, number>
  )

  const maxPrice = Math.max(...Object.values(day2flights))

  // a window of 13 day with selected date in the middle
  const result = Array.from({ length: 13 }, (_, i) => {
    // shift the current date
    const currentDate = new Date(date.value)
    currentDate.setDate(currentDate.getDate() - 6 + i)

    // get day/month/year from const date withou time
    const dateStr =
      currentDate.getDate() +
      '/' +
      currentDate.getMonth() +
      '/' +
      currentDate.getFullYear()

    return {
      price: day2flights[dateStr],
      date: currentDate,
      normalizedPrice: day2flights[dateStr] / maxPrice
    }
  })

  return result
})
</script>

<template>
  <div class="relative flex flex-col items-center pt-20">
    <!-- filter - mobile -->
    <Drawer>
      <DrawerTrigger as-child>
        <div
          class="fixed bottom-20 left-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-primary bg-background lg:hidden"
        >
          <AnimatedIcon id="filter" :size="24" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle class="text-center">Tìm kiếm nâng cao</DrawerTitle>
          </DrawerHeader>
        </div>
        <div class="py-2">
          <FlightFilter
            v-model:max-price="maxPrice"
            v-model:sort-type="sortType"
            :real-max-price="realMaxPrice"
          />
        </div>
      </DrawerContent>
    </Drawer>
    <div class="w-full lg:flex lg:space-x-8 lg:px-64">
      <div class="hidden h-full w-[500px] lg:block">
        <div class="mt-32 rounded-sm border-2 border-primary p-4">
          <FlightFilter
            v-model:max-price="maxPrice"
            v-model:sort-type="sortType"
            :real-max-price="realMaxPrice"
          />
        </div>
      </div>
      <div class="w-full px-6">
        <div class="w-full lg:w-fit">
          <LocationSelect
            v-model:from="route.query.from"
            v-model:to="route.query.to"
          />
        </div>
        <!-- image -->
        <div
          class="relative overflow-hidden rounded-sm border-2 border-solid border-primary"
        >
          <img
            src="~/assets/images/green_plane.jpg"
            alt="green_plane"
            class="h-[150px] w-full object-cover"
          />
          <div
            class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[--background-75] text-foreground"
          ></div>
          <div class="absolute right-0 top-0 flex h-full w-full p-2 pt-4">
            <swiper
              :modules="[Mousewheel]"
              :slides-per-view="'auto'"
              :space-between="15"
              :mousewheel="true"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              class="space-x-2 overflow-y-auto"
            >
              <swiper-slide
                v-for="(day, i) in days"
                :key="i"
                class="h-full !w-[150px]"
                @click="() => (date = day.date)"
              >
                <div class="flex h-full flex-col">
                  <div class="flex grow flex-col justify-end">
                    <div
                      v-if="i === activeIndex"
                      class="h-full rounded-sm border-2 border-primary bg-[--primary-50]"
                      :style="{ height: `${day.normalizedPrice * 100}%` }"
                    >
                      <span class="block text-center">{{
                        day.price ? strPrice(day.price) + 'đ' : 'Không có'
                      }}</span>
                    </div>
                    <div
                      v-else-if="day.price"
                      class="rounded-sm border-2 border-solid border-muted-foreground bg-[--foreground-50]"
                      :style="{ height: `${day.normalizedPrice * 100}%` }"
                    >
                      <span class="block text-center">{{
                        strPrice(day.price) + 'đ'
                      }}</span>
                    </div>
                    <div
                      v-else
                      class="h-full rounded-sm border-2 border-dotted border-background bg-[--background-50]"
                    >
                      <span class="block text-center"> Không có </span>
                    </div>
                  </div>
                  <div class="gow-0 text-center">
                    <!-- day/month/year -->
                    <span>{{ day.date.toLocaleDateString() }}</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <Tabs
          v-model="classType"
          default-value="account"
          class="mb-8 mt-4 w-full"
        >
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="economy"> Phổ thông </TabsTrigger>
            <TabsTrigger value="business"> Thương gia </TabsTrigger>
          </TabsList>
        </Tabs>

        <Separator class="mx-auto mb-8 w-[80%]" label="Danh sách chuyến bay" />

        <!-- flight list -->
        <div class="flex flex-col">
          <div class="flex flex-col space-y-4">
            <div
              v-for="(flight, index) in realShowFlights"
              :key="index"
              class="flex items-center overflow-hidden rounded-sm border-2 border-solid border-primary"
            >
              <div
                class="flex h-[200px] w-[200px] items-center justify-center bg-primary"
              >
                <div class="text-center text-white">
                  <div class="text-md">từ</div>
                  <div class="text-xl font-bold">
                    {{ strPrice(flight.price) }}
                  </div>
                  <div class="text-md">VND</div>
                </div>
              </div>
              <div class="flex-grow">
                <div class="p-4">
                  <div class="flex">
                    <div class="text-center">
                      <!-- get time from date hour/min -->
                      <div>
                        {{ flight.departureTime.getHours() }}:{{
                          flight.departureTime.getMinutes()
                        }}
                      </div>
                      <div class="text-muted-foreground">{{ flight.from }}</div>
                    </div>
                    <div class="flex-grow">
                      <div
                        class="flex h-full flex-col items-center justify-center px-4"
                      >
                        <div
                          class="h-0 w-full border-t-2 border-dashed border-muted-foreground"
                        ></div>
                      </div>
                    </div>
                    <div class="text-center">
                      <div>
                        {{ flight.arrivalTime.getHours() }}:{{
                          flight.arrivalTime.getMinutes()
                        }}
                      </div>
                      <div class="text-muted-foreground">{{ flight.to }}</div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="mr-1 text-muted-foreground"
                      >Thời gian bay:</span
                    >
                    <span>{{
                      getDuration(flight.departureTime, flight.arrivalTime)
                    }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="mr-1 text-muted-foreground"
                      >Số chỗ trống:</span
                    >
                    <span>{{ flight.capacity }} </span>
                  </div>
                  <div>
                    <Dialog>
                      <DialogTrigger as-child>
                        <Button
                          class="float-right rounded-sm"
                          variant="secondary"
                          @click="() => (currentFlight = flight)"
                        >
                          Đặt vé
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <Form
                          v-slot="{ meta, values, validate }"
                          as=""
                          keep-values
                          :validation-schema="
                            toTypedSchema(formSchema[stepIndex - 1])
                          "
                        >
                          <Stepper
                            v-slot="{
                              isNextDisabled,
                              isPrevDisabled,
                              nextStep,
                              prevStep
                            }"
                            v-model="stepIndex"
                            class="block w-full"
                          >
                            <form
                              @submit="
                                (e) => {
                                  e.preventDefault()
                                  validate()

                                  if (
                                    stepIndex === steps.length &&
                                    meta.valid
                                  ) {
                                    onSubmit(values)
                                  }
                                }
                              "
                            >
                              <div class="flex-start flex w-full gap-2">
                                <StepperItem
                                  v-for="step in steps"
                                  :key="step.step"
                                  v-slot="{ state }"
                                  class="relative flex w-full flex-col items-center justify-center"
                                  :step="step.step"
                                >
                                  <StepperSeparator
                                    v-if="
                                      step.step !== steps[steps.length - 1].step
                                    "
                                    class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                                  />

                                  <StepperTrigger as-child>
                                    <Button
                                      :variant="
                                        state === 'completed' ||
                                        state === 'active'
                                          ? 'default'
                                          : 'outline'
                                      "
                                      size="icon"
                                      class="z-10 shrink-0 rounded-full"
                                      :class="[
                                        state === 'active' &&
                                          'ring-2 ring-ring ring-offset-2 ring-offset-background'
                                      ]"
                                      :disabled="
                                        state !== 'completed' && !meta.valid
                                      "
                                    >
                                      <Check
                                        v-if="state === 'completed'"
                                        class="size-5"
                                      />
                                      <Circle v-if="state === 'active'" />
                                      <Dot v-if="state === 'inactive'" />
                                    </Button>
                                  </StepperTrigger>

                                  <div
                                    class="mt-1 flex flex-col items-center text-center"
                                  >
                                    <StepperTitle
                                      :class="[
                                        state === 'active' && 'text-primary'
                                      ]"
                                      class="text-sm font-semibold transition lg:text-base"
                                    >
                                      {{ step.title }}
                                    </StepperTitle>
                                  </div>
                                </StepperItem>
                              </div>

                              <div class="mt-4 flex flex-col gap-4">
                                <template v-if="stepIndex === 1">
                                  <FormField
                                    v-slot="{ componentField }"
                                    name="firstName"
                                  >
                                    <FormItem>
                                      <FormLabel>Họ</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          v-bind="componentField"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  </FormField>

                                  <FormField
                                    v-slot="{ componentField }"
                                    name="lastName"
                                  >
                                    <FormItem>
                                      <FormLabel>Tên</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          v-bind="componentField"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  </FormField>

                                  <FormField
                                    v-slot="{ componentField }"
                                    name="phoneNumber"
                                  >
                                    <FormItem>
                                      <FormLabel>Số điện thoại</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          v-bind="componentField"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  </FormField>
                                </template>

                                <template v-if="stepIndex === 2">
                                  <FormField
                                    v-slot="{ componentField }"
                                    name="cardNumber"
                                  >
                                    <FormItem>
                                      <FormLabel>
                                        Số thẻ
                                        <span
                                          class="text-xs text-muted-foreground"
                                        >
                                          (16 chữ số)
                                        </span>
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          v-bind="componentField"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>

                                    <FormField
                                      v-slot="{ componentField }"
                                      name="cardHolder"
                                    >
                                      <FormItem>
                                        <FormLabel>Chủ thẻ</FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            v-bind="componentField"
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </FormField>

                                    <FormField
                                      v-slot="{ componentField }"
                                      name="expirationDate"
                                    >
                                      <FormItem>
                                        <FormLabel>Ngày hết hạn</FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            v-bind="componentField"
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </FormField>

                                    <FormField
                                      v-slot="{ componentField }"
                                      name="cvv"
                                    >
                                      <FormItem>
                                        <FormLabel>CVV</FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            v-bind="componentField"
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </FormField>
                                  </FormField>
                                </template>

                                <template v-if="stepIndex === 3">
                                  <FormField
                                    v-slot="{ componentField }"
                                    name="favoriteDrink"
                                  >
                                    <FormItem>
                                      <FormLabel>Drink</FormLabel>

                                      <Select v-bind="componentField">
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue
                                              placeholder="Select a drink"
                                            />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectGroup>
                                            <SelectItem value="coffee">
                                              Coffe
                                            </SelectItem>
                                            <SelectItem value="tea">
                                              Tea
                                            </SelectItem>
                                            <SelectItem value="soda">
                                              Soda
                                            </SelectItem>
                                          </SelectGroup>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  </FormField>
                                </template>
                              </div>

                              <div
                                class="mt-4 flex items-center justify-between"
                              >
                                <Button
                                  :disabled="isPrevDisabled"
                                  variant="outline"
                                  size="sm"
                                  @click="prevStep()"
                                >
                                  Back
                                </Button>
                                <div class="flex items-center gap-3">
                                  <Button
                                    v-if="stepIndex !== 2"
                                    :type="meta.valid ? 'button' : 'submit'"
                                    :disabled="isNextDisabled"
                                    size="sm"
                                    @click="meta.valid && nextStep()"
                                  >
                                    Next
                                  </Button>
                                  <Button
                                    v-if="stepIndex === 2"
                                    size="sm"
                                    type="submit"
                                  >
                                    Submit
                                  </Button>
                                </div>
                              </div>
                            </form>
                          </Stepper>
                        </Form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
