<script setup lang="ts">
import { computed } from 'vue'

interface BarItem {
  label: string
  value: number
  color?: string
  sub?: string
}

const props = withDefaults(
  defineProps<{
    items: readonly BarItem[]
    unit?: string
    height?: number
    decimals?: number
  }>(),
  { unit: '', height: 180, decimals: 1 },
)

const maxVal = computed(() => Math.max(...props.items.map((i) => i.value)) * 1.25)

function fmt(v: number): string {
  const text = v.toFixed(props.decimals)
  return props.decimals > 0 ? text.replace(/\.0$/, '') : text
}
</script>

<template>
  <div class="bars" :style="{ height: `${height}px` }">
    <div v-for="item in items" :key="item.label" class="bars__col">
      <span class="bars__value">{{ fmt(item.value) }}{{ unit }}</span>
      <div class="bars__track">
        <div
          class="bars__fill"
          :style="{
            height: `${(item.value / maxVal) * 100}%`,
            background: item.color ?? 'var(--ha-blue)',
          }"
        />
      </div>
      <span class="bars__label">{{ item.label }}</span>
      <span v-if="item.sub" class="bars__sub">{{ item.sub }}</span>
    </div>
  </div>
</template>

<style scoped>
.bars {
  display: flex;
  align-items: stretch;
  gap: 26px;
  justify-content: center;
}

.bars__col {
  flex: 1;
  max-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bars__value {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink-strong);
  font-variant-numeric: tabular-nums;
}

.bars__track {
  flex: 1;
  width: 58px;
  display: flex;
  align-items: flex-end;
  margin: 6px 0 8px;
}

.bars__fill {
  width: 100%;
  border-radius: 9px 9px 4px 4px;
  min-height: 8px;
  box-shadow: inset 0 -8px 16px rgba(0, 0, 0, 0.08);
}

.bars__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
  text-align: center;
}

.bars__sub {
  font-size: 12.5px;
  color: var(--ink-faint);
  text-align: center;
  margin-top: 2px;
}
</style>
