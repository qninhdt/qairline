<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { useToast } from '@/components/ui/toast/use-toast'
import { registerWithEmailAndPassword } from '../../core/firebase'

const avatar = ref<string | null>(null)

const router = useRouter()
const { toast } = useToast()

const formSchema: any = toTypedSchema(
  z.object({
    fullname: z.string().max(50),
    description: z.string().optional(),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: z
      .string()
      .min(6, 'Nhập lại mật khẩu phải có ít nhất 6 ký tự')
      .refine((val: any) => {
        return val == values.password
      }, 'Mật khẩu không khớp')
  })
)

const { handleSubmit, values } = useForm({
  validationSchema: formSchema
})

const handleAvatarUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      avatar.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const onSubmit = handleSubmit(async (values) => {
  if (localStorage.getItem('email') == null) {
    router.push('/auth')
    return
  }

  values.email = localStorage.getItem('email')
  const ok = await registerWithEmailAndPassword(values)

  if (ok) {
    router.push('/')
  } else {
    toast({
      title: 'Đã xảy ra lỗi',
      variant: 'destructive'
    })
  }
})
</script>

<template>
  <div class="flex flex-col items-center space-y-2">
    <h1 class="text-2xl font-semibold tracking-tight">Thông tin tài khoản</h1>
    <form class="w-full space-y-4" @submit.prevent="onSubmit">
      <div class="text-center">
        <label
          for="avatar"
          class="relative inline-block h-32 w-32 cursor-pointer rounded-full border-2 border-dashed hover:border-primary"
        >
          <div
            v-if="avatar"
            class="h-full w-full rounded-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${avatar})` }"
          ></div>
          <div
            v-else
            class="flex h-full w-full items-center justify-center text-foreground"
          >
            Tải ảnh lên
          </div>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleAvatarUpload"
          />
        </label>
      </div>

      <FormField v-slot="{ componentField }" name="fullname">
        <FormItem>
          <FormLabel>Họ và tên</FormLabel>
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
              placeholder="Nguyễn Văn A"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel>Mô tả</FormLabel>
          <FormControl>
            <Textarea type="text" v-bind="componentField" />
          </FormControl>
          <FormDescription> Một chút mô tả về bản thân bạn. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Mật khẩu</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            Mật khẩu phải có ít nhất 6 ký tự và không chứa ký tự đặc biệt.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="confirmPassword">
        <FormItem>
          <FormLabel>Nhập lại mật khẩu</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full"> Xác nhận </Button>
    </form>
  </div>
</template>
