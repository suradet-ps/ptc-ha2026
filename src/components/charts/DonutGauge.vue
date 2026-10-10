<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    size?: number
    stroke?: number
    color?: string
    valueText?: string
    label?: string
  }>(),
  { size: 150, stroke: 14, color: '#0d5fa8', valueText: '', label: '' },
)

const radius = computed(() => (props.size - props.stroke) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dash = computed(() => (circumference.value * Math.min(props.value, 100)) / 100)
</script>

<template>
  <div class="donut" :style="{ width: `${size}px` }">
    <div class="donut__ring" :style="{ width: `${size}px`, height: `${size}px` }">
      <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="none"
          stroke="#e8eef6"
          :stroke-width="stroke"
        />
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="none"
          :stroke="color"
          :stroke-width="stroke"
          stroke-linecap="round"
          :stroke-dasharray="`${dash} ${circumference}`"
          :transform="`rotate(-90 ${size / 2} ${size / 2})`"
        />
      </svg>
      <div class="donut__center">
        <span class="donut__value" :style="{ color }">{{ valueText || `${value}%` }}</span>
      </div>
    </div>
    <p v-if="label" class="donut__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.donut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.donut__ring {
  position: relative;
}

.donut__center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.donut__value {
  font-size: 27px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.donut__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
  text-align: center;
}
</style>
