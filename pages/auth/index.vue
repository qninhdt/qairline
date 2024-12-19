<template>
  <div class="flex flex-col space-y-2 text-center">
    <img src="~/assets/images/fly.svg" alt="fly" class="mx-auto w-1/2" />
    <h1 class="text-2xl font-semibold tracking-tight">
      Sẵn sàng bay cùng <span class="text-primary">QAirline</span>?
    </h1>

    <LoginForm />
    <p class="mt-2 px-8 text-center text-sm text-muted-foreground">
      Bằng cách nhấn Tiếp tục, bạn đồng ý với
      <a href="/terms" class="underline underline-offset-4 hover:text-primary">
        Điều khoản Dịch vụ
      </a>
      và
      <a
        href="/privacy"
        class="underline underline-offset-4 hover:text-primary"
      >
        Chính sách Bảo mật
      </a>
      .
    </p>
  </div>
</template>
