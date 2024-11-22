import { defineNuxtPlugin } from '#app'
import lottie from 'lottie-web'

export default defineNuxtPlugin((_) => {
  if (import.meta.client) {
    ;(async () => {
      const { defineElement } = await import('@lordicon/element')

      defineElement(lottie.loadAnimation)
    })()
  }
})
