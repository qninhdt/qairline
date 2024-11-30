<script setup lang="ts">
import { buttonVariants } from '../components/ui/button'
import { cn } from '@/lib/utils'
import UserAuthForm from '../components/UserAuthForm.vue'
</script>

<template>
  <div>
    <div class="md:hidden">
      <VPImage
        alt="Authentication"
        width="1280"
        height="1214"
        class="block"
        :image="{
          dark: '/examples/authentication-dark.png',
          light: '/examples/authentication-light.png'
        }"
      />
    </div>

    <div
      class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <a
        href="/examples/authentication"
        :class="
          cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )
        "
      >
        Login
      </a>
      <div
        class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
      >
        <div
          class="absolute inset-0 bg-[url('https://www.vacationstravel.com/wp-content/uploads/2024/01/AdobeStock_467994223.jpg')] bg-center"
        />
        <div class="relative z-20 mt-auto items-center">
          <h1 class="text-center text-[32px]">Vui từng chuyến bay</h1>
        </div>
      </div>
      <div class="lg:p-8">
        <div
          class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
        >
          <div class="flex flex-col space-y-2 text-center">
            <h1 class="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p class="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p class="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            <a
              href="/terms"
              class="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>
            and
            <a
              href="/privacy"
              class="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
