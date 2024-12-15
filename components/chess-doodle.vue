<script setup lang="ts">
import 'css-doodle'

const { grid = 8 } = defineProps(['grid'])
</script>

<template>
  <css-doodle :class="$attrs.class">
    @grid: {{ grid }} / 80%; @random { border-left: 1px solid
    hsl(var(--foreground)); } @random { border-top: 1px solid
    hsl(var(--foreground)); } @random(.25) { background: linear-gradient(
    @p(hsl(var(--primary)), hsl(var(--primary)), hsl(var(--foreground))), @lp )
    50% / @r(60%) @lr no-repeat; } @random { filter: drop-shadow(0 0 10px
    hsl(var(--background))); }
  </css-doodle>
</template>
