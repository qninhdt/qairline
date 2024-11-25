<script setup lang="ts">
import { computed } from 'vue'

const { id, size = 16 } = defineProps<{
  id: string
  size: number
}>()

const ID_TO_LORDICON_ID: Record<string, string> = {
  expand_hozirontal: 'hagrwbef',
  zoom: 'wjyqkiew',
  coupon: 'gvdzkarq',
  briefcase: 'zhiiqoue',
  info: 'osqflufj',
  bussiness_card: 'kkwpwktn',
  circle_avatar: 'whvtbbby',
  facebook: 'lplofcfe',
  instagram: 'ewswvzmw',
  x: 'jvodbtcr',
  logout: 'pbalszem',
  receipt_dollar: 'dipunyii',
  cog: 'ripbvsga',
  vege: 'zctnxfvg',
  hanoi: 'apkaazsq',
  bangkok: 'ctljvypg',
  newyork: 'jdgkkgki',
  paris: 'anyasfbo'
}

const iconStyle = computed(() => ({
  width: `${size}px`,
  height: `${size}px`
}))

const iconSrc = computed(() => {
  const iconId = ID_TO_LORDICON_ID[id]
  return iconId ? `https://cdn.lordicon.com/${iconId}.json` : ''
})
</script>

<template>
  <lord-icon
    :src="iconSrc"
    trigger="hover"
    stroke="bold"
    :style="iconStyle"
    v-bind="$attrs"
  ></lord-icon>
</template>
