<template>
  <div class="h-[100vh] w-[100vw]">
    <div
      class="absolute left-[25px] top-[25px] z-20 flex items-center text-lg font-medium"
    >
      <QairlineLogo />
    </div>
    <div
      class="container relative grid h-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <div class="lg:p-8">
        <div
          class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]"
        >
          <NuxtPage />
        </div>
      </div>
      <div
        class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
      >
        <div class="absolute inset-0 bg-zinc-900" />
      </div>
    </div>
  </div>
</template>
