<script setup lang="ts">
import { computed, useId } from 'vue'

export interface TrendSeries {
  name?: string
  color: string
  data: readonly number[]
}

const props = withDefaults(
  defineProps<{
    series: readonly TrendSeries[]
    labels?: readonly string[]
    width?: number
    height?: number
    unit?: string
    target?: number
    targetLabel?: string
    decimals?: number
    maxOverride?: number
  }>(),
  {
    labels: () => [],
    width: 480,
    height: 252,
    unit: '',
    targetLabel: '',
    decimals: 1,
    maxOverride: 0,
  },
)

const gradId = `tc-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`

const padL = 38
const padR = 20
const padT = 40
const padB = 36

const innerW = computed(() => props.width - padL - padR)
const innerH = computed(() => props.height - padT - padB)

const multi = computed(() => props.series.length > 1)

const maxVal = computed(() => {
  if (props.maxOverride > 0) return props.maxOverride
  const values = props.series.flatMap((s) => [...s.data])
  if (props.target !== undefined) values.push(props.target)
  return Math.max(...values) * 1.18
})

const pointCount = computed(() => Math.max(...props.series.map((s) => s.data.length), 1))

function x(i: number): number {
  const n = pointCount.value
  if (n <= 1) return padL + innerW.value / 2
  return padL + (innerW.value * i) / (n - 1)
}

function y(v: number): number {
  return padT + innerH.value * (1 - v / maxVal.value)
}

const rendered = computed(() =>
  props.series.map((s, si) => {
    const points = s.data.map((v, i) => ({ x: x(i), y: y(v), v }))
    const base = padT + innerH.value
    const first = points[0]
    const last = points[points.length - 1]
    const area =
      si === 0 && points.length > 1 && !multi.value && first && last
        ? `M ${first.x} ${first.y} L ${points.map((p) => `${p.x} ${p.y}`).join(' L ')} L ${last.x} ${base} L ${first.x} ${base} Z`
        : ''
    return {
      ...s,
      points,
      polyline: points.map((p) => `${p.x},${p.y}`).join(' '),
      area,
      lastPoint: last,
    }
  }),
)

const targetY = computed(() => (props.target !== undefined ? y(props.target) : null))

const gridLines = computed(() => [0.25, 0.5, 0.75].map((f) => padT + innerH.value * f))

function fmt(v: number): string {
  const text = v.toFixed(props.decimals)
  return props.decimals > 0 ? text.replace(/\.0$/, '') : text
}

const legendItems = computed(() =>
  props.series
    .map((s, i) => ({ name: s.name, color: s.color, index: i }))
    .filter((s): s is { name: string; color: string; index: number } => Boolean(s.name)),
)
</script>

<template>
  <svg
    :viewBox="`0 0 ${width} ${height}`"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    class="trend"
  >
    <defs>
      <linearGradient :id="gradId" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" :stop-color="series[0]?.color ?? '#0d5fa8'" stop-opacity="0.26" />
        <stop offset="100%" :stop-color="series[0]?.color ?? '#0d5fa8'" stop-opacity="0.02" />
      </linearGradient>
    </defs>

    <g v-if="legendItems.length">
      <template v-for="(item, i) in legendItems" :key="item.name">
        <circle :cx="padL + i * 168" cy="14" r="5" :fill="item.color" />
        <text
          :x="padL + i * 168 + 12"
          y="18"
          font-size="12.5"
          font-weight="500"
          fill="#5b6b7b"
        >
          {{ item.name }}
        </text>
      </template>
    </g>

    <line
      v-for="(gy, i) in gridLines"
      :key="i"
      :x1="padL"
      :x2="width - padR"
      :y1="gy"
      :y2="gy"
      stroke="#eaf0f7"
      stroke-width="1.5"
    />
    <line
      :x1="padL"
      :x2="width - padR"
      :y1="padT + innerH"
      :y2="padT + innerH"
      stroke="#dde5ee"
      stroke-width="1.5"
    />

    <template v-if="targetY !== null">
      <line
        :x1="padL"
        :x2="width - padR"
        :y1="targetY"
        :y2="targetY"
        stroke="#fa0f0c"
        stroke-width="1.6"
        stroke-dasharray="6 5"
        opacity="0.75"
      />
      <text
        :x="width - padR"
        :y="targetY + 16"
        text-anchor="end"
        font-size="12"
        font-weight="600"
        fill="#fa0f0c"
      >
        {{ targetLabel || `เป้าหมาย ${fmt(target!)}` }}
      </text>
    </template>

    <template v-for="s in rendered" :key="s.color + s.polyline">
      <path v-if="s.area" :d="s.area" :fill="`url(#${gradId})`" />
      <polyline
        :points="s.polyline"
        fill="none"
        :stroke="s.color"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g v-for="(p, i) in s.points" :key="i">
        <circle :cx="p.x" :cy="p.y" r="4.6" fill="#ffffff" :stroke="s.color" stroke-width="2.6" />
        <text
          v-if="!multi || p === s.lastPoint"
          :x="p.x"
          :y="p.y - 11"
          :text-anchor="p === s.lastPoint && multi ? 'end' : 'middle'"
          font-size="13"
          font-weight="600"
          fill="#16222e"
        >
          {{ fmt(p.v) }}{{ unit }}
        </text>
      </g>
    </template>

    <text
      v-for="(label, i) in labels"
      :key="label"
      :x="x(i)"
      :y="height - 12"
      text-anchor="middle"
      font-size="12.5"
      fill="#8a97a5"
    >
      {{ label }}
    </text>
  </svg>
</template>

<style scoped>
.trend {
  width: 100%;
  height: auto;
  display: block;
  font-family: var(--font-sans);
}
</style>
