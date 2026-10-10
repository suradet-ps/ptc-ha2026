<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import DonutGauge from '@/components/charts/DonutGauge.vue'
import type { IconName } from '@/components/icons'
import { drugInventory } from '@/data/metrics'

const steps: readonly { icon: IconName; label: string; accent?: boolean }[] = [
  { icon: 'scale', label: 'ทบทวนหลักฐาน' },
  { icon: 'users', label: 'กลั่นกรองโดย PTC' },
  { icon: 'file-text', label: 'บัญชียาโรงพยาบาล', accent: true },
  { icon: 'package', label: 'จัดหา / ยืม รพ.แม่ข่าย' },
  { icon: 'chart', label: 'ติดตามผล' },
]

const bullets = [
  'PTC ทบทวนบัญชียาเข้า-ออกจากหลักฐานเชิงประจักษ์และอุบัติการณ์ความคลาดเคลื่อน',
  'ยาขาดแคลนหรือจำเป็นเร่งด่วน ยืมจากโรงพยาบาลแม่ข่าย เพื่อให้มียาพร้อมใช้เสมอ',
  'สำรองยา 2 จุดบริการ (ห้องฉุกเฉิน + หอผู้ป่วยใน) และ Emergency box 2 กล่อง ใช้เมื่อห้องยาปิด',
  'ยาเสพติดจัดเก็บแยก มิดชิด ล็อกกุญแจ จำกัดการเข้าถึง และเบิกคืนสต๊อกวันถัดไป',
]
</script>

<template>
  <SlideLayout :n="4">
    <template #head-extra>
      <span class="chip chip--ok"><Icon name="check" :size="14" />เวชภัณฑ์ยา {{ drugInventory.total }} รายการ</span>
      <span class="chip"><Icon name="package" :size="14" />Emergency box {{ drugInventory.emergencyBoxes }} กล่อง</span>
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
            หลักฐาน: บัญชียา · บัญชีสำรองยา · บันทึกตรวจสต๊อก · สัญญาจัดซื้อจัดจ้าง
          </li>
        </ul>
      </div>

      <div class="card sel__chart anim anim-4">
        <div class="sel__chart-head">
          <p class="sel__chart-title">
            <Icon name="check-circle" :size="17" />
            บัญชียาโรงพยาบาล
          </p>
          <span class="chip chip--ok">
            <Icon name="check" :size="13" />ตรวจสต๊อกเดือนละ 1 ครั้ง
          </span>
        </div>

        <div class="sel__stats">
          <DonutGauge
            :value="drugInventory.edPercent"
            :value-text="`${drugInventory.edPercent}%`"
            :size="122"
            color="#0d5fa8"
            label="ยาที่อยู่ในบัญชียาหลักแห่งชาติ (ED)"
          />
          <div class="sel__stat-list">
            <div class="sel__stat">
              <span class="sel__stat-value">{{ drugInventory.total }}<small>รายการ</small></span>
              <span class="sel__stat-label">เวชภัณฑ์ยาทั้งหมด</span>
            </div>
            <div class="sel__stat">
              <span class="sel__stat-value">
                {{ drugInventory.edPercent }}<small class="sel__colon">:</small>{{ drugInventory.nedPercent }}
              </span>
              <span class="sel__stat-label">สัดส่วน ED : NED</span>
            </div>
            <div class="sel__stat">
              <span class="sel__stat-value">{{ drugInventory.reservePoints }}<small>จุด</small></span>
              <span class="sel__stat-label">จุดสำรองยานอกเวลาห้องยาปิด</span>
            </div>
          </div>
        </div>

        <p class="footnote">
          ปรับปรุงรายการสำรองยาทุกปีตามสถิติการใช้หลังห้องยาปิด · {{ drugInventory.stockCheck }}
        </p>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.sel__body {
  margin-top: 18px;
}

.sel__left {
  justify-content: center;
  gap: 14px;
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
  padding: 16px 20px 12px;
}

.sel__chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
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

.sel__stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.sel__colon {
  margin: 0 4px;
}

.sel__stat-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
  flex: 1;
}

.sel__stat {
  display: flex;
  flex-direction: column;
}

.sel__stat-value {
  font-size: 23px;
  font-weight: 700;
  color: var(--ha-blue-deep);
  line-height: 1.15;
  font-variant-numeric: tabular-nums;
}

.sel__stat-value small {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-faint);
  margin-left: 4px;
}

.sel__stat-label {
  font-size: 12.5px;
  color: var(--ink-soft);
  margin-top: 1px;
}
</style>
