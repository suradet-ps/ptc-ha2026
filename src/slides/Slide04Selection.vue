<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import TrendChart from '@/components/charts/TrendChart.vue'
import type { IconName } from '@/components/icons'
import { drugShortage } from '@/data/metrics'

const steps: readonly { icon: IconName; label: string; accent?: boolean }[] = [
  { icon: 'scale', label: 'ทบทวนหลักฐาน' },
  { icon: 'users', label: 'กลั่นกรองโดย PTC' },
  { icon: 'file-text', label: 'บัญชียาโรงพยาบาล', accent: true },
  { icon: 'package', label: 'จัดหา / สัญญา' },
  { icon: 'chart', label: 'ติดตามผล' },
]

const bullets = [
  'ทบทวนบัญชียาตามหลักฐานเชิงประจักษ์และแนวทางสมาคมวิชาชีพ',
  'ระบบ Drug Shortage Alert แจ้งเตือนล่วงหน้าก่อนยาขาด',
  'สำรองยา Emergency Drugs ครบ 100% พร้อมใช้ตลอด 24 ชั่วโมง',
  'ควบคุม Cold Chain ตามมาตรฐาน GDP ตลอดห่วงโซ่การจัดหา',
]
</script>

<template>
  <SlideLayout :n="4">
    <template #head-extra>
      <span class="chip chip--ok"><Icon name="check" :size="14" />Emergency Drugs 100%</span>
      <span class="chip"><Icon name="thermometer" :size="14" />Cold Chain ตามมาตรฐาน GDP</span>
    </template>

    <div class="flow anim anim-2">
      <template v-for="(step, i) in steps" :key="step.label">
        <div class="flow__step" :class="{ 'flow__step--accent': step.accent }">
          <Icon :name="step.icon" :size="21" />
          <span>{{ step.label }}</span>
        </div>
        <span v-if="i < steps.length - 1" class="flow__arrow">
          <Icon name="arrow-right" :size="17" />
        </span>
      </template>
    </div>

    <div class="split sel__body">
      <div class="stack sel__left">
        <ul class="ticks anim anim-3">
          <li v-for="text in bullets" :key="text">{{ text }}</li>
          <li class="sel__evidence">
            หลักฐาน: บัญชียา · รายงานการขาดยา · สัญญาจัดซื้อจัดจ้าง
          </li>
        </ul>

        <div class="card card--tint sel__criteria anim anim-4">
          <p class="sel__criteria-title">
            <Icon name="scale" :size="16" />
            เกณฑ์การคัดเลือกยาที่ PTC ใช้พิจารณา
          </p>
          <div class="sel__criteria-chips">
            <span class="chip">ประสิทธิผลทางคลินิก</span>
            <span class="chip">ความปลอดภัย</span>
            <span class="chip">ต้นทุน-ประสิทธิผล</span>
            <span class="chip">ความมั่นคงของ Supply</span>
          </div>
        </div>
      </div>

      <div class="card sel__chart anim anim-4">
        <div class="sel__chart-head">
          <p class="sel__chart-title">
            <Icon name="trend-down" :size="17" />
            แนวโน้มวันขาดยาเฉลี่ยต่อปี
          </p>
          <span class="chip chip--ok">
            <Icon name="check" :size="13" />ผ่านเป้าหมาย {{ drugShortage.latest }} วัน
          </span>
        </div>
        <TrendChart
          :data="drugShortage.series"
          :labels="drugShortage.years"
          :target="drugShortage.target"
          :target-label="drugShortage.targetLabel"
          :unit="''"
          :height="238"
          color="#2b3991"
        />
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.sel__body {
  margin-top: 18px;
}

.sel__left {
  justify-content: space-between;
  gap: 14px;
}

.sel__criteria {
  padding: 13px 16px 15px;
}

.sel__criteria-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 10px;
}

.sel__criteria-title svg {
  color: var(--ha-blue);
}

.sel__criteria-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.sel__evidence {
  color: var(--ink-faint);
  font-size: 14.5px;
}

.sel__evidence::before {
  background-color: var(--surface-tint);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238a97a5' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 12.5 5.5 5.5L20 6.5'/%3E%3C/svg%3E");
}

.sel__chart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 18px 10px;
}

.sel__chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 4px;
}

.sel__chart-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.sel__chart-title svg {
  color: var(--ok);
}
</style>
