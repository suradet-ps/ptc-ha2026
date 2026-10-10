<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
import LogoMark from '@/components/LogoMark.vue'
import { formatTime } from '@/composables/useTimer'
import { slideCount } from '@/data/deck'
import { config } from '@/data/config'

const props = defineProps<{
  current: number
  elapsed: number
  running: boolean
  plannedSeconds: number
  notesOpen: boolean
  overviewOpen: boolean
  fullscreen: boolean
}>()

const emit = defineEmits<{
  prev: []
  next: []
  toggleNotes: []
  toggleOverview: []
  toggleFullscreen: []
  toggleTimer: []
  resetTimer: []
  openHelp: []
}>()

const delta = computed(() => props.elapsed - props.plannedSeconds)

const pace = computed(() => {
  if (props.elapsed === 0) return 'idle'
  if (delta.value <= 60) return 'ok'
  if (delta.value <= 150) return 'warn'
  return 'late'
})

const paceLabel = computed(() => {
  if (props.elapsed === 0) return 'ยังไม่เริ่มจับเวลา'
  const d = delta.value
  if (d > 15) return `ช้ากว่าแผน ${formatTime(d)}`
  if (d < -15) return `เร็วกว่าแผน ${formatTime(-d)}`
  return 'ตรงตามแผน'
})
</script>

<template>
  <div class="bar deck-ui" :class="`bar--${pace}`">
    <div class="bar__left">
      <LogoMark :size="30" />
      <div class="bar__title">
        <strong>ระบบยาโรงพยาบาล · HA ฉบับที่ 6</strong>
        <span>{{ config.hospitalShort }} | {{ config.audience }}</span>
      </div>
    </div>

    <div class="bar__center">
      <button class="icon-btn" title="สไลด์ก่อนหน้า (←)" @click="emit('prev')">
        <Icon name="chevron-left" :size="19" />
      </button>
      <button
        class="bar__counter"
        title="ภาพรวมสไลด์ (O)"
        @click="emit('toggleOverview')"
      >
        <b>{{ current }}</b>
        <span>/ {{ slideCount }}</span>
      </button>
      <button class="icon-btn" title="สไลด์ถัดไป (→)" @click="emit('next')">
        <Icon name="chevron-right" :size="19" />
      </button>
    </div>

    <div class="bar__right">
      <button
        class="timer"
        :class="`timer--${pace}`"
        :title="`${paceLabel} | คลิกเพื่อเริ่ม/หยุด | ดับเบิลคลิกเพื่อรีเซ็ต`"
        @click="emit('toggleTimer')"
        @dblclick="emit('resetTimer')"
      >
        <Icon :name="running ? 'pause' : 'play'" :size="14" />
        <span class="timer__time">{{ formatTime(elapsed) }}</span>
        <span class="timer__target">เป้า {{ formatTime(plannedSeconds) }}</span>
      </button>

      <button
        class="icon-btn"
        :class="{ 'is-on': notesOpen }"
        title="โน้ตผู้บรรยาย (S)"
        @click="emit('toggleNotes')"
      >
        <Icon name="note" :size="18" />
      </button>
      <button
        class="icon-btn"
        :class="{ 'is-on': overviewOpen }"
        title="ภาพรวมสไลด์ (O)"
        @click="emit('toggleOverview')"
      >
        <Icon name="grid" :size="18" />
      </button>
      <button
        class="icon-btn"
        :class="{ 'is-on': fullscreen }"
        title="เต็มหน้าจอ (F)"
        @click="emit('toggleFullscreen')"
      >
        <Icon :name="fullscreen ? 'minimize' : 'maximize'" :size="18" />
      </button>
      <button class="icon-btn" title="คีย์ลัด (?)" @click="emit('openHelp')">
        <Icon name="help" :size="18" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--bar-h);
  z-index: 60;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 18px;
  background: linear-gradient(180deg, rgba(4, 18, 30, 0.72), rgba(4, 18, 30, 0.92));
  backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #d7e4ef;
  transition: opacity 0.35s ease;
}

.bar__left {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
}

.bar__title {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
  min-width: 0;
}

.bar__title strong {
  font-size: 13.5px;
  font-weight: 600;
  color: #f0f6fb;
  white-space: nowrap;
}

.bar__title span {
  font-size: 11.5px;
  color: #7f97ac;
  white-space: nowrap;
}

.bar__center {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.bar__counter {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding: 7px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: #d7e4ef;
  transition: 0.2s;
}

.bar__counter:hover {
  background: rgba(255, 255, 255, 0.12);
}

.bar__counter b {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
}

.bar__counter span {
  font-size: 12.5px;
  color: #8ba3b8;
}

.bar__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: #a9c0d4;
  transition: 0.2s;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.icon-btn.is-on {
  background: rgba(13, 95, 168, 0.45);
  border-color: rgba(120, 180, 235, 0.35);
  color: #ffffff;
}

.timer {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 13px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: #d7e4ef;
  transition: 0.2s;
  user-select: none;
}

.timer--ok {
  border-color: rgba(80, 200, 130, 0.4);
  background: rgba(28, 158, 90, 0.18);
}

.timer--warn {
  border-color: rgba(240, 180, 60, 0.45);
  background: rgba(221, 133, 0, 0.2);
}

.timer--late {
  border-color: rgba(250, 15, 12, 0.5);
  background: rgba(220, 59, 56, 0.24);
}

.timer__time {
  font-size: 15.5px;
  font-weight: 700;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
}

.timer__target {
  font-size: 11.5px;
  color: #8ba3b8;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 980px) {
  .bar__title {
    display: none;
  }
}
</style>
