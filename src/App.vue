<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FitStage from '@/components/FitStage.vue'
import HelpOverlay from '@/components/HelpOverlay.vue'
import NotesPanel from '@/components/NotesPanel.vue'
import OverviewGrid from '@/components/OverviewGrid.vue'
import PresenterBar from '@/components/PresenterBar.vue'
import { useTimer } from '@/composables/useTimer'
import { cumulativeSecondsThrough, deck, slideCount } from '@/data/deck'

import Slide01 from '@/slides/Slide01Title.vue'
import Slide02 from '@/slides/Slide02Agenda.vue'
import Slide03 from '@/slides/Slide03Governance.vue'
import Slide04 from '@/slides/Slide04Selection.vue'
import Slide05 from '@/slides/Slide05Safety.vue'
import Slide06 from '@/slides/Slide06Rdu.vue'
import Slide07 from '@/slides/Slide07Digital.vue'
import Slide08 from '@/slides/Slide08ThreeP.vue'
import Slide09 from '@/slides/Slide09Kpi.vue'
import Slide10 from '@/slides/Slide10Pdsa.vue'
import Slide11 from '@/slides/Slide11CaseStudy.vue'
import Slide12 from '@/slides/Slide12Roadmap.vue'
import Slide13 from '@/slides/Slide13Thanks.vue'

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
] as const

const route = useRoute()
const router = useRouter()

const current = computed(() => {
  const n = Number(route.params.n)
  if (!Number.isFinite(n)) return 1
  return Math.min(Math.max(Math.trunc(n), 1), slideCount)
})

const currentMeta = computed(() => deck[current.value - 1]!)
const targetSeconds = computed(() => cumulativeSecondsThrough(current.value))

const notesOpen = ref(false)
const overviewOpen = ref(false)
const helpOpen = ref(false)
const fullscreen = ref(false)
const idle = ref(false)

const timer = useTimer()
const { elapsed, running } = timer

const overlayOpen = computed(() => notesOpen.value || overviewOpen.value || helpOpen.value)

function go(n: number) {
  const target = Math.min(Math.max(n, 1), slideCount)
  if (target === current.value) return
  void router.push({ name: 'slide', params: { n: String(target) } })
}

function next() {
  go(current.value + 1)
}

function prev() {
  go(current.value - 1)
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen()
  } else {
    void document.documentElement.requestFullscreen()
  }
}

function onFullscreenChange() {
  fullscreen.value = Boolean(document.fullscreenElement)
}

let idleTimer: number | null = null

function poke() {
  idle.value = false
  if (idleTimer !== null) window.clearTimeout(idleTimer)
  idleTimer = window.setTimeout(() => {
    if (!overlayOpen.value) idle.value = true
  }, 3400)
}

let digitBuffer = ''
let digitTimer: number | null = null

function handleDigit(key: string) {
  digitBuffer += key
  if (digitTimer !== null) window.clearTimeout(digitTimer)
  digitTimer = window.setTimeout(() => {
    digitBuffer = ''
  }, 900)

  const value = Number.parseInt(digitBuffer, 10)
  if (value >= 1 && value <= slideCount) {
    go(value)
    if (digitBuffer.length >= 2) digitBuffer = ''
    return
  }

  if (digitBuffer.length >= 2) {
    digitBuffer = key
    const single = Number.parseInt(key, 10)
    if (single >= 1 && single <= slideCount) go(single)
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

  switch (event.key) {
    case 'ArrowRight':
    case 'PageDown':
    case ' ':
      event.preventDefault()
      next()
      break
    case 'ArrowLeft':
    case 'PageUp':
      event.preventDefault()
      prev()
      break
    case 'Home':
      event.preventDefault()
      go(1)
      break
    case 'End':
      event.preventDefault()
      go(slideCount)
      break
    case 'f':
    case 'F':
      toggleFullscreen()
      break
    case 's':
    case 'S':
    case 'n':
    case 'N':
      notesOpen.value = !notesOpen.value
      break
    case 'o':
    case 'O':
      overviewOpen.value = !overviewOpen.value
      break
    case 't':
    case 'T':
      timer.toggle()
      break
    case '?':
      helpOpen.value = !helpOpen.value
      break
    case 'Escape':
      if (helpOpen.value) helpOpen.value = false
      else if (overviewOpen.value) overviewOpen.value = false
      else if (notesOpen.value) notesOpen.value = false
      break
    default:
      if (/^[0-9]$/.test(event.key)) handleDigit(event.key)
  }
}

function blurButtons(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  const button = target?.closest('button')
  if (button) button.blur()
}

watch(current, (value, oldValue) => {
  document.title = `${value}/${slideCount} · ${currentMeta.value.nav} | ระบบยา HA ฉบับที่ 6`
  if (oldValue === 1 && value !== 1 && elapsed.value === 0 && !running.value) {
    timer.start()
  }
})

watch(overlayOpen, (open) => {
  if (!open) poke()
})

onMounted(() => {
  const panel = route.query.panel
  if (panel === 'notes') notesOpen.value = true
  else if (panel === 'overview') overviewOpen.value = true
  else if (panel === 'help') helpOpen.value = true
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('mousemove', poke)
  document.addEventListener('fullscreenchange', onFullscreenChange)
  document.addEventListener('click', blurButtons)
  document.title = `1/${slideCount} · ${deck[0]!.nav} | ระบบยา HA ฉบับที่ 6`
  poke()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('mousemove', poke)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  document.removeEventListener('click', blurButtons)
  if (idleTimer !== null) window.clearTimeout(idleTimer)
  if (digitTimer !== null) window.clearTimeout(digitTimer)
})
</script>

<template>
  <div class="deck" :class="{ 'is-idle': idle }">
    <div class="progress deck-ui">
      <span class="progress__fill" :style="{ width: `${(current / slideCount) * 100}%` }" />
    </div>

    <div class="stage-area" :style="{ right: notesOpen ? '396px' : '0px' }">
      <FitStage>
        <div class="slides">
          <component
            :is="slide"
            v-for="(slide, i) in slides"
            :key="i"
            v-show="i + 1 === current"
            :class="{ 'is-active': i + 1 === current }"
          />
        </div>
      </FitStage>
    </div>

    <PresenterBar
      :current="current"
      :elapsed="elapsed"
      :running="running"
      :planned-seconds="targetSeconds"
      :notes-open="notesOpen"
      :overview-open="overviewOpen"
      :fullscreen="fullscreen"
      @prev="prev"
      @next="next"
      @toggle-notes="notesOpen = !notesOpen"
      @toggle-overview="overviewOpen = !overviewOpen"
      @toggle-fullscreen="toggleFullscreen"
      @toggle-timer="timer.toggle()"
      @reset-timer="timer.reset()"
      @open-help="helpOpen = true"
    />

    <NotesPanel
      v-if="notesOpen"
      :meta="currentMeta"
      :elapsed="elapsed"
      :target-seconds="targetSeconds"
      @close="notesOpen = false"
    />

    <OverviewGrid
      v-if="overviewOpen"
      :current="current"
      :slides="slides"
      @select="
        (n) => {
          go(n)
          overviewOpen = false
        }
      "
      @close="overviewOpen = false"
    />

    <HelpOverlay v-if="helpOpen" @close="helpOpen = false" />
  </div>
</template>

<style scoped>
.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  z-index: 65;
  background: rgba(255, 255, 255, 0.12);
  transition: opacity 0.35s ease;
}

.progress__fill {
  display: block;
  height: 100%;
  border-radius: 0 2px 2px 0;
  background: linear-gradient(90deg, #0d5fa8 0%, #2b3991 68%, #fa0f0c 100%);
  transition: width 0.35s cubic-bezier(0.22, 0.7, 0.3, 1);
}

.stage-area {
  position: fixed;
  top: 0;
  left: 0;
  bottom: var(--bar-h);
  z-index: 10;
  transition: right 0.3s ease;
}

.slides {
  position: absolute;
  inset: 0;
}

.slides :deep(.slide) {
  position: absolute;
  inset: 0;
}

.is-idle .progress {
  opacity: 0.25;
}

.is-idle .bar {
  opacity: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .stage-area,
  .progress__fill {
    transition: none;
  }
}
</style>
