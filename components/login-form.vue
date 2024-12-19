<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

import { ref } from 'vue'
import AnimatedIcon from './animated-icon.vue'

import {
  checkUserExistsByEmail,
  loginWithEmailAndPassword
} from '../core/firebase'
import { useToast } from './ui/toast'

const email = ref('')
const password = ref('')
const passwordPhase = ref(false)
const isLoading = ref(false)
const router = useRouter()
const { toast } = useToast()

async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  if (passwordPhase.value) {
    if (await loginWithEmailAndPassword(email.value, password.value)) {
      toast({
        title: 'Đăng nhập thành công'
      })
      router.push('/')
    } else {
      toast({
        title: 'Sai mật khẩu'
      })
    }
  } else {
    if (await checkUserExistsByEmail(email.value)) {
      passwordPhase.value = true
    } else {
      localStorage.setItem('email', email.value)
      router.push('/auth/create-account')
    }
  }

  isLoading.value = false
}
</script>

<template>
  <div class="flex flex-col">
    <p class="text-sm text-muted-foreground">
      Nhập {{ passwordPhase ? 'email' : 'mật khẩu' }} của bạn để tiếp tục
    </p>
    <form class="mb-6" @submit="onSubmit">
      <Label class="sr-only" for="email"> Email </Label>
      <Input
        v-show="!passwordPhase"
        id="email"
        v-model="email"
        placeholder="name@example.com"
        type="email"
        auto-capitalize="none"
        auto-complete="email"
        auto-correct="off"
        :disabled="isLoading"
        class="mb-2"
      />
      <Label class="sr-only" for="password"> Mật khẩu </Label>
      <Input
        v-show="passwordPhase"
        id="password"
        v-model="password"
        type="password"
        class="mb-2"
      />
      <Button class="w-full gap-1" :disabled="isLoading">
        Sẵn sàng<AnimatedIcon
          id="firework"
          :size="24"
          target="button"
          color="#ffffff"
        />
      </Button>
    </form>

    <Separator class="mb-6" label="hoặc tiếp tục với" />
    <Button class="mb-2" variant="outline" type="button" :disabled="isLoading">
      <AnimatedIcon id="google" :size="24" target="button" />
      <span>Google</span>
    </Button>
    <Button variant="outline" type="button" :disabled="isLoading">
      <AnimatedIcon id="facebook" :size="24" target="button" />
      <span>Facebook</span>
    </Button>
  </div>
</template>
