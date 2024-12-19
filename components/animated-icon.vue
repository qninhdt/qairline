<script setup lang="ts">
import { computed } from 'vue'

const {
  id,
  color = null,
  size = 16
} = defineProps<{
  id: string
  size: number
  color?: string
}>()

const ID_TO_LORDICON_ID: Record<string, string> = {
  expand_hozirontal: 'hagrwbef',
  zoom: 'wjyqkiew',
  coupon: 'gvdzkarq',
  briefcase: 'zhiiqoue',
  info: 'osqflufj',
  bussiness_card: 'kkwpwktn',
  circle_avatar: 'whvtbbby',
  instagram: 'ewswvzmw',
  x: 'jvodbtcr',
  logout: 'pbalszem',
  receipt_dollar: 'dipunyii',
  cog: 'ripbvsga',
  vege: 'zctnxfvg',
  hanoi: 'apkaazsq',
  bangkok: 'ctljvypg',
  newyork: 'jdgkkgki',
  paris: 'anyasfbo',
  box: 'uriapfou',
  plate: 'uxkdjajd',
  newspaper: 'nspjpkdg',
  wifi: 'jezazvlx',
  customer_service: 'bmjslskx',
  firework: 'jbbaiwhg',
  layer: 'jectmwqf',
  grid: 'ervhjijl',
  nav: 'suwzildd',
  google: 'smafogdu',
  facebook: 'bfoumeno',
  arrow_right: 'vpxzpyce',
  play: 'aesklttu',
  location: 'onmwuuox',
  plane: 'bijiyxta',
  search: 'wjyqkiew',
  user: 'kdduutaw',
  filter: 'grsnlwmk',
  dollar_coin: 'jijucvzh',
  airplane_mode: 'xnitmjlc',
  airport_runway: 'bltedbvj',
  home: 'jeuxydnh',
  documents: 'kzhwlhxg',
  travel_agency: 'wvpcnsph'
}

const iconStyle = computed(() => ({
  width: `${size}px`,
  height: `${size}px`
}))

const iconSrc = computed(() => {
  const iconId = ID_TO_LORDICON_ID[id]
  return iconId ? `https://cdn.lordicon.com/${iconId}.json` : ''
})

const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.preference === 'dark')
const colorStr = computed(() =>
  color
    ? `primary:${color},secondary:${color}`
    : `primary:#16a085,secondary:${isDarkMode.value ? '#ffffff' : '#121331'}`
)
</script>

<template>
  <lord-icon
    :src="iconSrc"
    trigger="hover"
    stroke="bold"
    :colors="colorStr"
    :style="iconStyle"
    v-bind="$attrs"
  ></lord-icon>
</template>
