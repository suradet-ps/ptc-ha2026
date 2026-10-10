<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
import { deck, slideCount } from '@/data/deck'
import { config } from '@/data/config'

const props = withDefaults(
  defineProps<{
    n: number
    dark?: boolean
    showKey?: boolean
    showFoot?: boolean
  }>(),
  { dark: false, showKey: true, showFoot: true },
)

const meta = computed(() => deck[props.n - 1])

const demoSlides = new Set([4, 5, 6, 9, 10, 11])
const isDemo = computed(() => config.showDemoBadge && demoSlides.has(props.n))

const timeLabel = computed(() => {
  const minutes = Math.floor(meta.value.minutes)
  const seconds = Math.round((meta.value.minutes - minutes) * 60)
  return `${minutes}:${String(seconds).padStart(2, '0')}`
})
</script>

<template>
  <article class="slide" :class="{ 'slide--dark': dark }">
    <header class="slide__head">
      <div>
        <p class="slide__kicker">{{ meta.kicker }}</p>
        <h2 class="slide__title">{{ meta.title }}</h2>
      </div>
      <div class="row gap-sm">
        <slot name="head-extra" />
      </div>
    </header>

    <p v-if="showKey" class="slide__key anim anim-1">
      <Icon name="target" :size="19" />
      <span>{{ meta.keyMessage }}</span>
    </p>

    <div class="slide__body">
      <slot />
    </div>

    <footer v-if="showFoot" class="slide__foot">
      <span class="slide__foot-brand">
        <span class="slide__foot-dot" />
        {{ config.hospitalName }} · {{ config.teamName }}
      </span>
      <span v-if="isDemo" class="chip chip--gold">ข้อมูลตัวอย่าง</span>
      <span class="slide__foot-right">
        <span class="row gap-xs"><Icon name="clock" :size="13" />{{ timeLabel }} นาที</span>
        <span>{{ meta.n }} / {{ slideCount }}</span>
      </span>
    </footer>
  </article>
</template>
