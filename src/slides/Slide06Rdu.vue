<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import TrendChart from '@/components/charts/TrendChart.vue'
import { antibioticDdd, amsCompliance, rduScore } from '@/data/metrics'

const metrics = [
  {
    label: 'RDU Score',
    value: `${rduScore.latest}%`,
    sub: 'เป้าหมาย ≥ 70% · เฝ้าติดตาม',
    tone: 'warn',
  },
  {
    label: 'Antibiotic Use (DDD)',
    value: antibioticDdd.latest.toFixed(1),
    sub: `ลดลง ${Math.abs(antibioticDdd.change)}% จากปี 2564`,
    tone: 'ok',
  },
  {
    label: 'AMS Compliance',
    value: `${amsCompliance.latest}%`,
    sub: 'ทบทวนใบสั่งยาตามแนวทางครบถ้วน',
    tone: 'ok',
  },
]

const bullets = [
  'ทีม AMS สหสาขาวิชาชีพ: แพทย์ เภสัชกร พยาบาล และจุลชีววิทยา ทบทวนใบสั่งยารายวัน',
  'Antibiotic Guideline เฉพาะโรงพยาบาล อิงผลเพาะเชื้อและ Antibiogram ล่าสุด',
  'แจ้งเตือนผ่านระบบ IT ทันทีเมื่อสั่งยาผิดแนวทาง (Prospective Audit)',
  'ทบทวนและ de-escalation ตามผลเพาะเชื้อ พร้อมติดตามผลลัพธ์รายไตรมาส',
]
</script>

<template>
  <SlideLayout :n="6">
    <template #head-extra>
      <span class="chip chip--navy"><Icon name="users" :size="14" />ทีม AMS สหสาขา</span>
      <span class="chip"><Icon name="calendar-check" :size="14" />ทบทวนรายวัน</span>
    </template>

    <div class="rdu__metrics anim anim-2">
      <article v-for="m in metrics" :key="m.label" class="card rdu__metric">
        <p class="metric__label">{{ m.label }}</p>
        <p class="metric__value" :class="m.tone === 'warn' ? 'metric__value--gold' : ''">
          {{ m.value }}
        </p>
        <p class="metric__sub">{{ m.sub }}</p>
        <span class="rdu__metric-tag" :class="`rdu__metric-tag--${m.tone}`">
          <Icon :name="m.tone === 'ok' ? 'check-circle' : 'gauge'" :size="14" />
        </span>
      </article>
    </div>

    <div class="split rdu__body">
      <div class="stack rdu__left">
        <ul class="ticks anim anim-3">
          <li v-for="text in bullets" :key="text">{{ text }}</li>
          <li class="rdu__evidence">หลักฐาน: นโยบาย AMS · รายงาน RDU · Antibiotic Guideline</li>
        </ul>

        <div class="card card--tint rdu__callout anim anim-4">
          <Icon name="network" :size="17" />
          <span>
            เชื่อมผลเพาะเชื้อ (Antibiogram) สู่แนวทางรักษา และทบทวน Guideline ปีละ 1 ครั้ง
          </span>
        </div>
      </div>

      <div class="card rdu__chart anim anim-4">
        <div class="rdu__chart-head">
          <p class="rdu__chart-title">
            <Icon name="trend-down" :size="17" />
            แนวโน้มการใช้ยาต้านจุลชีพ
          </p>
          <span class="chip chip--ok"><Icon name="leaf" :size="13" />ลด AMR อย่างยั่งยืน</span>
        </div>
        <TrendChart
          :data="antibioticDdd.series"
          :labels="antibioticDdd.years"
          :unit="''"
          :height="226"
          color="#0d5fa8"
          :decimals="1"
        />
        <p class="footnote">หน่วย: {{ antibioticDdd.unit }} · ลดลง {{ Math.abs(antibioticDdd.change) }}% ใน 5 ปี</p>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.rdu__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.rdu__metric {
  position: relative;
  padding: 13px 18px 14px;
}

.rdu__metric-tag {
  position: absolute;
  top: 14px;
  right: 14px;
}

.rdu__metric-tag--ok {
  color: var(--ok);
}

.rdu__metric-tag--warn {
  color: var(--warn);
}

.rdu__body {
  margin-top: 16px;
}

.rdu__left {
  justify-content: space-between;
  gap: 14px;
}

.rdu__callout {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ha-blue-deep);
  line-height: 1.5;
}

.rdu__callout svg {
  flex: none;
  color: var(--ha-blue);
}

.rdu__evidence {
  color: var(--ink-faint);
  font-size: 14.5px;
}

.rdu__evidence::before {
  background-color: var(--surface-tint);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238a97a5' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 12.5 5.5 5.5L20 6.5'/%3E%3C/svg%3E");
}

.rdu__chart {
  display: flex;
  flex-direction: column;
  padding: 14px 18px 10px;
}

.rdu__chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 2px;
}

.rdu__chart-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.rdu__chart-title svg {
  color: var(--ok);
}
</style>
