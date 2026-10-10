<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
import { deck, slideCount } from '@/data/deck'
import type { SlideMeta } from '@/data/deck'
import { formatTime } from '@/composables/useTimer'
import { config } from '@/data/config'

const props = defineProps<{
  meta: SlideMeta
  elapsed: number
  targetSeconds: number
}>()

const emit = defineEmits<{ close: [] }>()

const nextSlide = computed(() => deck[props.meta.n] ?? null)

const plannedLabel = computed(() => {
  const minutes = Math.floor(props.meta.minutes)
  const seconds = Math.round((props.meta.minutes - minutes) * 60)
  return formatTime(minutes * 60 + seconds)
})

const pace = computed(() => {
  const delta = props.elapsed - props.targetSeconds
  if (props.elapsed === 0) return 'idle'
  if (delta <= 60) return 'ok'
  if (delta <= 150) return 'warn'
  return 'late'
})
</script>

<template>
  <aside class="notes deck-ui">
    <header class="notes__head">
      <div>
        <p class="notes__kicker">Speaker Notes</p>
        <h3 class="notes__title">สไลด์ {{ meta.n }} / {{ slideCount }}</h3>
      </div>
      <button class="notes__close" title="ปิด (S)" @click="emit('close')">
        <Icon name="x" :size="18" />
      </button>
    </header>

    <div class="notes__scroll">
      <section class="notes__block">
        <h4>{{ meta.title }}</h4>
        <p class="notes__key"><Icon name="target" :size="15" />{{ meta.keyMessage }}</p>
      </section>

      <section class="notes__block">
        <div class="notes__timerow">
          <span class="notes__chip">
            <Icon name="clock" :size="14" />
            เวลาสไลด์นี้ {{ plannedLabel }}
          </span>
          <span class="notes__chip" :class="`notes__chip--${pace}`">
            <Icon name="target" :size="14" />
            ควรอยู่ที่ {{ formatTime(targetSeconds) }}
          </span>
          <span v-if="meta.standardRef" class="notes__chip">
            <Icon name="file-text" :size="14" />
            อ้างอิงมาตรฐาน {{ meta.standardRef }}
          </span>
        </div>
      </section>

      <section class="notes__block">
        <h5 class="notes__label">Script</h5>
        <p class="notes__script">{{ meta.notes }}</p>
      </section>

      <section class="notes__block">
        <h5 class="notes__label">หลักฐานที่ต้องเตรียม</h5>
        <ul class="notes__evidence">
          <li v-for="item in meta.evidence" :key="item">
            <Icon name="folder" :size="15" />
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-if="nextSlide" class="notes__block notes__block--next">
        <h5 class="notes__label">ถัดไป</h5>
        <p class="notes__next">
          <Icon name="arrow-right" :size="15" />
          สไลด์ {{ nextSlide.n }} · {{ nextSlide.title }}
        </p>
      </section>

      <p class="notes__foot">{{ config.hospitalName }} · {{ config.presentationDate }}</p>
    </div>
  </aside>
</template>

<style scoped>
.notes {
  position: fixed;
  top: 0;
  right: 0;
  bottom: var(--bar-h);
  width: 396px;
  z-index: 55;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0a2338 0%, #071a2b 100%);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  color: #d9e6f0;
}

.notes__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.notes__kicker {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6f93b1;
}

.notes__title {
  font-size: 19px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 3px;
}

.notes__close {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  border: none;
  background: rgba(255, 255, 255, 0.07);
  color: #9fb6ca;
  transition: 0.2s;
}

.notes__close:hover {
  background: rgba(250, 15, 12, 0.25);
  color: #ffffff;
}

.notes__scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.notes__block h4 {
  font-size: 16.5px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.4;
}

.notes__key {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 14.5px;
  line-height: 1.55;
  color: #b9cfe1;
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid var(--ha-red);
  border-radius: 0 8px 8px 0;
  padding: 9px 12px;
}

.notes__key svg {
  flex: none;
  margin-top: 3px;
  color: var(--ha-red);
}

.notes__timerow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.notes__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 500;
  padding: 6px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: #b9cfe1;
  font-variant-numeric: tabular-nums;
}

.notes__chip--ok {
  background: rgba(28, 158, 90, 0.24);
  color: #9fe3bd;
}

.notes__chip--warn {
  background: rgba(221, 133, 0, 0.26);
  color: #f5cd8b;
}

.notes__chip--late {
  background: rgba(220, 59, 56, 0.28);
  color: #f5a7a5;
}

.notes__label {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6f93b1;
  margin-bottom: 8px;
}

.notes__script {
  font-size: 15px;
  line-height: 1.7;
  color: #cfe0ee;
}

.notes__evidence {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.notes__evidence li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 14px;
  line-height: 1.5;
  color: #b9cfe1;
}

.notes__evidence svg {
  flex: none;
  margin-top: 3px;
  color: #eacc55;
}

.notes__block--next {
  border-top: 1px dashed rgba(255, 255, 255, 0.14);
  padding-top: 14px;
}

.notes__next {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #b9cfe1;
  line-height: 1.5;
}

.notes__next svg {
  flex: none;
  margin-top: 3px;
  color: #69a8e0;
}

.notes__foot {
  font-size: 11.5px;
  color: #5d7a94;
}
</style>
