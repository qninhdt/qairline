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
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-vuefire'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyAZtthwxbnsYDatj3Ren78sHm8-K4MMu44',
      authDomain: 'qairline-4a43c.firebaseapp.com',
      projectId: 'qairline-4a43c',
      storageBucket: 'qairline-4a43c.firebasestorage.app',
      messagingSenderId: '416684046533',
      appId: '1:416684046533:web:a31a66fcbce03fedf118ac',
      measurementId: 'G-421Z4YHML2'
    }
  }
})
