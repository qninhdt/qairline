<script setup lang="tsx">
const pin = ref([])
const disabled = ref(false)
const router = useRouter()

const onComplete = () => {
  disabled.value = true

  setTimeout(() => {
    router.push('/auth/create-account')
  }, 2000)
}
</script>

<template>
  <div class="flex flex-col items-center space-y-2 text-center">
    <img src="~/assets/images/otp.svg" alt="otp" class="mx-auto w-1/2" />

    <h1 class="text-center text-2xl font-semibold tracking-tight">
      Xác thực email
    </h1>
    <p class="text-center text-sm text-muted-foreground">
      Một mã OTP đã được gửi đến email của bạn.
      <span
        size="sm"
        variant="outline"
        class="cursor-pointer text-sm font-semibold text-primary hover:underline"
        @click="() => null"
      >
        Gửi lại
      </span>
    </p>
    <PinInput
      id="pin-input"
      v-model="pin"
      placeholder="○"
      class=""
      otp
      type="number"
      :disabled="disabled"
      @complete="onComplete"
    >
      <PinInputGroup>
        <PinInputInput v-for="(id, index) in 5" :key="id" :index="index" />
      </PinInputGroup>
    </PinInput>
  </div>
</template>
