<script setup lang="ts">
import { computed, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    data: readonly number[]
    labels?: readonly string[]
    width?: number
    height?: number
    color?: string
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
    color: '#0d5fa8',
    unit: '',
    targetLabel: '',
    decimals: 1,
    maxOverride: 0,
  },
)

const gradId = `tc-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`

const padL = 38
const padR = 20
const padT = 34
const padB = 36

const innerW = computed(() => props.width - padL - padR)
const innerH = computed(() => props.height - padT - padB)

const maxVal = computed(() => {
  if (props.maxOverride > 0) return props.maxOverride
  const values = [...props.data]
  if (props.target !== undefined) values.push(props.target)
  return Math.max(...values) * 1.18
})

function x(i: number): number {
  const n = props.data.length
  if (n <= 1) return padL + innerW.value / 2
  return padL + (innerW.value * i) / (n - 1)
}

function y(v: number): number {
  return padT + innerH.value * (1 - v / maxVal.value)
}

const points = computed(() => props.data.map((v, i) => ({ x: x(i), y: y(v), v })))

const polyline = computed(() => points.value.map((p) => `${p.x},${p.y}`).join(' '))

const areaPath = computed(() => {
  const pts = points.value
  if (pts.length === 0) return ''
  const base = padT + innerH.value
  const first = pts[0]!
  const last = pts[pts.length - 1]!
  return `M ${first.x} ${first.y} L ${pts.map((p) => `${p.x} ${p.y}`).join(' L ')} L ${last.x} ${base} L ${first.x} ${base} Z`
})

const targetY = computed(() => (props.target !== undefined ? y(props.target) : null))

const gridLines = computed(() =>
  [0.25, 0.5, 0.75].map((f) => padT + innerH.value * f),
)

function fmt(v: number): string {
  const text = v.toFixed(props.decimals)
  return props.decimals > 0 ? text.replace(/\.0$/, '') : text
}
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
        <stop offset="0%" :stop-color="color" stop-opacity="0.26" />
        <stop offset="100%" :stop-color="color" stop-opacity="0.02" />
      </linearGradient>
    </defs>

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
        :x="padL + 6"
        :y="targetY - 7"
        text-anchor="start"
        font-size="12"
        font-weight="600"
        fill="#fa0f0c"
      >
        {{ targetLabel || `เป้าหมาย ${fmt(target!)}` }}
      </text>
    </template>

    <path :d="areaPath" :fill="`url(#${gradId})`" />

    <polyline
      :points="polyline"
      fill="none"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g v-for="(p, i) in points" :key="i">
      <circle :cx="p.x" :cy="p.y" r="4.6" fill="#ffffff" :stroke="color" stroke-width="2.6" />
      <text
        :x="p.x"
        :y="p.y - 11"
        text-anchor="middle"
        font-size="13"
        font-weight="600"
        fill="#16222e"
      >
        {{ fmt(p.v) }}{{ unit }}
      </text>
    </g>

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
