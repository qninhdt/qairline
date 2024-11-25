// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'lord-icon'
    }
  },
  plugins: ['~/plugins/lordicon.ts'],

  modules: [
    '@nuxt/eslint',
    // '@nuxtjs/storybook',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
