<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import DonutGauge from '@/components/charts/DonutGauge.vue'
import { rdu } from '@/data/metrics'

const passedPercent = Math.round((rdu.passed / rdu.total) * 1000) / 10
const failing = rdu.total - rdu.passed

const metrics = [
  {
    label: 'ตัวชี้วัด RDU ผ่าน',
    value: `${rdu.passed}/${rdu.total}`,
    sub: `ร้อยละ ${passedPercent} · ไม่ผ่าน ${failing} ข้อ (${rdu.period})`,
    tone: 'warn',
  },
  {
    label: 'ยาปฏิชีวนะนอกบัญชี',
    value: '100%',
    sub: 'มี Consult หรือผลเพาะเชื้อทุกครั้ง',
    tone: 'ok',
  },
  {
    label: 'เภสัชกรทบทวนคำสั่ง',
    value: 'ทุกเคส',
    sub: 'โทรปรึกษาแพทย์ทันทีเมื่อพบปัญหา',
    tone: 'ok',
  },
]

const bullets = [
  'วางแนวทางตาม 12 ตัวชี้วัด RDU ทบทวนผลผ่าน HDC',
  'ยาปฏิชีวนะนอกบัญชี ต้องมี Consult เฉพาะทางหรือผลเพาะเชื้อ',
  'เภสัชกรทบทวนทุกคำสั่งก่อนจ่ายยา',
]
</script>

<template>
  <SlideLayout :n="6">
    <template #head-extra>
      <span class="chip chip--navy"><Icon name="users" :size="14" />กำกับโดย PTC</span>
      <span class="chip"><Icon name="gauge" :size="14" />ประเมินผ่าน HDC</span>
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
          <li class="rdu__evidence">
            หลักฐาน: รายงาน RDU 12 ข้อ · แนวทางสั่งยาปฏิชีวนะ · รายงานทบทวนคำสั่ง
          </li>
        </ul>

        <div class="card card--tint rdu__callout anim anim-4">
          <Icon name="trend-down" :size="17" />
          <span>
            ผลลัพธ์: ME prescribing 2567* = 2.01 (OPD) · 1.23 (IPD) ต่ำกว่าเป้า ≤ 5
          </span>
        </div>
      </div>

      <div class="card rdu__chart anim anim-4">
        <div class="rdu__chart-head">
          <p class="rdu__chart-title">
            <Icon name="gauge" :size="17" />
            ผลตัวชี้วัด RDU 12 ข้อ
          </p>
          <span class="chip chip--gold"><Icon name="gauge" :size="13" />ผ่าน {{ rdu.passed }} ข้อ</span>
        </div>

        <div class="rdu__result">
          <DonutGauge
            :value="passedPercent"
            :value-text="`${rdu.passed}/${rdu.total}`"
            :size="132"
            color="#c9a227"
            label="ตัวชี้วัดที่ผ่าน"
          />
          <div class="rdu__failed">
            <p class="rdu__failed-title">
              <Icon name="alert" :size="15" />
              ข้อที่ไม่ผ่าน {{ failing }} ข้อ · ข้อมูล ณ {{ rdu.period }}
            </p>
            <ul class="rdu__failed-list">
              <li v-for="item in rdu.failedItems" :key="item">{{ item }}</li>
            </ul>
            <p class="rdu__failed-detail">{{ rdu.failedDetail }}</p>
          </div>
        </div>
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
  color: var(--ok);
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
  padding: 14px 18px 12px;
}

.rdu__chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
  color: var(--ha-gold-deep);
}

.rdu__result {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
}

.rdu__failed {
  flex: 1;
  background: var(--warn-soft);
  border: 1px solid #f2ddb4;
  border-radius: 12px;
  padding: 12px 14px;
}

.rdu__failed-title {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 13.5px;
  font-weight: 600;
  color: #9a6a00;
  line-height: 1.45;
}

.rdu__failed-title svg {
  flex: none;
  margin-top: 2px;
  color: var(--warn);
}

.rdu__failed-list {
  margin-top: 6px;
  display: grid;
  gap: 4px;
}

.rdu__failed-list li {
  position: relative;
  padding-left: 14px;
  font-size: 12px;
  line-height: 1.5;
  color: #8a6a2a;
}

.rdu__failed-list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.52em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--warn);
}

.rdu__failed-detail {
  margin-top: 7px;
  font-size: 12.5px;
  line-height: 1.55;
  color: #8a6a2a;
}
</style>
