<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import BarCompare from '@/components/charts/BarCompare.vue'
import { pdsa } from '@/data/metrics'

const steps = [
  {
    key: 'P',
    title: 'Plan',
    detail: 'พบ Medication Error สูงในยากลุ่ม High Alert วิเคราะห์สาเหตุรากด้วยข้อมูล',
    tone: 'p',
  },
  {
    key: 'D',
    title: 'Do',
    detail: 'ติดสติกเกอร์แดง Double-check 100% และอบรมพยาบาลทุกหอผู้ป่วย',
    tone: 'd',
  },
  {
    key: 'C',
    title: 'Check',
    detail: 'ติดตาม 3 เดือน พบ Error ลดลง 64% จากค่าฐานเดิม',
    tone: 'c',
  },
  {
    key: 'A',
    title: 'Act',
    detail: 'ขยายผลทุกหอผู้ป่วย และกำหนดเป็นนโยบายมาตรฐานขององค์กร',
    tone: 'a',
  },
]

const bars = [
  { label: 'ก่อน PDSA', value: pdsa.before, color: '#dc3b38', sub: pdsa.unit },
  { label: 'หลัง PDSA', value: pdsa.after, color: '#1c9e5a', sub: pdsa.unit },
]
</script>

<template>
  <SlideLayout :n="10">
    <template #head-extra>
      <span class="chip"><Icon name="refresh" :size="14" />{{ pdsa.period }}</span>
      <span class="chip chip--ok"><Icon name="award" :size="14" />ขยายผลทุกหอผู้ป่วย</span>
    </template>

    <div class="pdsa__flow anim anim-2">
      <template v-for="(s, i) in steps" :key="s.key">
        <article class="card pdsa__card" :class="`pdsa__card--${s.tone}`">
          <span class="pdsa__letter">{{ s.key }}</span>
          <div>
            <p class="pdsa__title">{{ s.title }}</p>
            <p class="pdsa__detail">{{ s.detail }}</p>
          </div>
        </article>
        <span v-if="i < steps.length - 1" class="pdsa__arrow">
          <Icon name="arrow-right" :size="18" />
        </span>
      </template>
    </div>

    <div class="pdsa__body">
      <div class="card pdsa__chart anim anim-3">
        <p class="pdsa__chart-title">
          <Icon name="chart" :size="17" />
          ผลลัพธ์: {{ pdsa.title }}
        </p>
        <BarCompare :items="bars" :height="248" :decimals="1" />
        <p class="footnote">หน่วย: {{ pdsa.unit }}</p>
      </div>

      <div class="card pdsa__result anim anim-4">
        <p class="pdsa__result-big">
          <span>-{{ pdsa.reduction }}%</span>
          ลดลงภายใน 3 เดือน
        </p>
        <ul class="pdsa__result-list">
          <li><Icon name="check" :size="14" />ขยายผลครบ 8 หอผู้ป่วย</li>
          <li><Icon name="check" :size="14" />บรรจุในนโยบายระบบยา ฉบับปรับปรุง 2568</li>
          <li><Icon name="check" :size="14" />ติดตามต่อเนื่องทุกไตรมาสผ่าน PTC</li>
        </ul>
        <div class="pdsa__evidence">
          <span class="chip chip--muted"><Icon name="folder" :size="13" />รายงานโครงการ PDSA</span>
          <span class="chip chip--muted"><Icon name="file-text" :size="13" />เอกสารปรับปรุงนโยบาย</span>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.pdsa__flow {
  display: flex;
  align-items: stretch;
  gap: 0;
}

.pdsa__card {
  flex: 1;
  display: flex;
  gap: 11px;
  padding: 12px 14px;
  border-top: 4px solid var(--ha-blue);
  align-items: flex-start;
}

.pdsa__card--d {
  border-top-color: var(--ha-navy);
}

.pdsa__card--c {
  border-top-color: var(--ha-gold-deep);
}

.pdsa__card--a {
  border-top-color: var(--ha-red);
}

.pdsa__letter {
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 17px;
  font-weight: 700;
  background: var(--surface-blue);
  color: var(--ha-blue);
}

.pdsa__card--d .pdsa__letter {
  background: #eceefa;
  color: var(--ha-navy);
}

.pdsa__card--c .pdsa__letter {
  background: #fdf7e0;
  color: #9a7a12;
}

.pdsa__card--a .pdsa__letter {
  background: var(--bad-soft);
  color: var(--ha-red);
}

.pdsa__title {
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.pdsa__detail {
  margin-top: 3px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.pdsa__arrow {
  flex: none;
  width: 26px;
  display: grid;
  place-items: center;
  color: var(--ha-blue);
  opacity: 0.7;
}

.pdsa__body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 16px;
  flex: 1;
  min-height: 0;
  margin-top: 14px;
}

.pdsa__chart {
  display: flex;
  flex-direction: column;
  padding: 14px 18px 10px;
  min-height: 0;
}

.pdsa__chart-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-strong);
  margin-bottom: 4px;
}

.pdsa__chart-title svg {
  color: var(--ha-blue);
}

.pdsa__result {
  display: flex;
  flex-direction: column;
  padding: 14px 18px 12px;
}

.pdsa__result-big {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14.5px;
  color: var(--ink-soft);
}

.pdsa__result-big span {
  font-size: 34px;
  font-weight: 700;
  color: var(--ok);
  font-variant-numeric: tabular-nums;
}

.pdsa__result-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pdsa__result-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink);
}

.pdsa__result-list svg {
  flex: none;
  margin-top: 3px;
  color: var(--ok);
}

.pdsa__evidence {
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  gap: 8px;
}
</style>
