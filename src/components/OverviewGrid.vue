<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Component } from 'vue'
import Icon from '@/components/Icon.vue'
import { deck, slideCount } from '@/data/deck'

defineProps<{
  current: number
  slides: readonly Component[]
}>()

const emit = defineEmits<{ select: [n: number]; close: [] }>()

const gridEl = ref<HTMLElement | null>(null)
const thumbScale = ref(0.17)
let observer: ResizeObserver | null = null

function updateScale() {
  const el = gridEl.value
  if (!el) return
  const columns = getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean)
  const width = Number.parseFloat(columns[0] ?? '0')
  if (width > 0) {
    thumbScale.value = (width - 4) / 1280
  }
}

onMounted(() => {
  updateScale()
  observer = new ResizeObserver(updateScale)
  if (gridEl.value) observer.observe(gridEl.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="overview deck-ui" @click.self="emit('close')">
    <header class="overview__head">
      <div>
        <p class="overview__kicker">Slide Overview</p>
        <h3>ภาพรวมสไลด์ทั้งหมด {{ slideCount }} หน้า</h3>
      </div>
      <div class="overview__hint">
        <span><kbd>O</kbd> หรือ <kbd>Esc</kbd> เพื่อปิด</span>
        <button class="overview__close" @click="emit('close')">
          <Icon name="x" :size="18" />
        </button>
      </div>
    </header>

    <div ref="gridEl" class="overview__grid">
      <button
        v-for="meta in deck"
        :key="meta.n"
        class="thumb"
        :class="{ 'thumb--current': meta.n === current }"
        @click="emit('select', meta.n)"
      >
        <span class="thumb__win">
          <span class="thumb__scale" :style="{ transform: `scale(${thumbScale})` }">
            <component :is="slides[meta.n - 1]" />
          </span>
        </span>
        <span class="thumb__label">
          <b>{{ String(meta.n).padStart(2, '0') }}</b>
          {{ meta.nav }}
          <em>{{ meta.minutes }} นาที</em>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.overview {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(3, 14, 25, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 26px 34px 30px;
  overflow-y: auto;
}

.overview__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #ffffff;
}

.overview__kicker {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6f93b1;
  margin-bottom: 4px;
}

.overview__head h3 {
  font-size: 22px;
  font-weight: 600;
}

.overview__hint {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: #8ba3b8;
}

kbd {
  font-family: inherit;
  font-size: 12px;
  padding: 2px 7px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #d7e4ef;
}

.overview__close {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #a9c0d4;
  transition: 0.2s;
}

.overview__close:hover {
  background: rgba(250, 15, 12, 0.3);
  color: #ffffff;
}

.overview__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.thumb {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
}

.thumb__win {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.14);
  background: #ffffff;
  transition: 0.2s;
}

.thumb:hover .thumb__win {
  border-color: rgba(105, 168, 224, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}

.thumb--current .thumb__win {
  border-color: var(--ha-red);
  box-shadow: 0 0 0 3px rgba(250, 15, 12, 0.25);
}

.thumb__scale {
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  transform-origin: top left;
  pointer-events: none;
}

.thumb__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #b9cfe1;
}

.thumb__label b {
  font-weight: 700;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
}

.thumb__label em {
  margin-left: auto;
  font-style: normal;
  font-size: 11.5px;
  color: #6f93b1;
}

@media (max-width: 1200px) {
  .overview__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .overview__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
