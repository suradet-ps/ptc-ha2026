<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
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
  'ทบทวนบัญชียาจากหลักฐานและอุบัติการณ์จริง',
  'ยาขาด ยืม รพ.แม่ข่าย ให้มียาพร้อมใช้เสมอ',
  'ยาเสพติดเก็บแยก ล็อกกุญแจ จำกัดการเข้าถึง',
]

const stats = [
  { value: `${drugInventory.edPercent}%`, label: 'อยู่ในบัญชียาหลักแห่งชาติ (ED)' },
  { value: `${drugInventory.reservePoints} จุด`, label: 'สำรองยานอกเวลาห้องยาปิด' },
  { value: 'ทุกวัน', label: 'ตรวจเช็คสต๊อกยาโดยพยาบาล' },
]
</script>

<template>
  <SlideLayout :n="4">
    <template #head-extra>
      <span class="chip chip--ok">
        <Icon name="check" :size="14" />ยา {{ drugInventory.total }} รายการ · ต.ค. 2569
      </span>
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
            หลักฐาน: บัญชียา · บัญชีสำรองยา · บันทึกตรวจสต๊อก
          </li>
        </ul>

        <div class="sel__stats anim anim-4">
          <div v-for="s in stats" :key="s.label" class="sel__stat">
            <b>{{ s.value }}</b>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="card sel__app anim anim-3">
        <div class="sel__app-bar">
          <span class="sel__app-dots"><i /><i /><i /></span>
          <span class="sel__app-url">
            <Icon name="lock" :size="12" />
            druglists.rxdevman.com
          </span>
          <span class="sel__app-badge">
            <Icon name="sparkle" :size="12" />
            นวัตกรรมของทีม
          </span>
        </div>

        <div class="sel__app-shot">
          <img src="/images/druglist.png" alt="ระบบ DrugLists บัญชียาโรงพยาบาลสระโบสถ์" />
        </div>

        <p class="sel__app-caption">
          <Icon name="layers" :size="14" />
          DrugLists · Web App บริหารบัญชียา จัดการข้อมูลยา ราคา และสถานะการใช้งานแบบ Real-time
        </p>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.sel__body {
  margin-top: 16px;
}

.sel__left {
  justify-content: space-between;
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

.sel__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.sel__stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--surface-tint);
  border: 1px solid var(--line-soft);
}

.sel__stat b {
  font-size: 19px;
  font-weight: 700;
  color: var(--ha-blue-deep);
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
}

.sel__stat span {
  font-size: 11.5px;
  line-height: 1.45;
  color: var(--ink-soft);
}

.sel__app {
  display: flex;
  flex-direction: column;
  padding: 12px 14px 11px;
  min-height: 0;
}

.sel__app-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--line-soft);
}

.sel__app-dots {
  display: flex;
  gap: 4px;
}

.sel__app-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--line);
}

.sel__app-dots i:first-child {
  background: #f0b0ae;
}

.sel__app-dots i:nth-child(2) {
  background: #f2d9a0;
}

.sel__app-dots i:last-child {
  background: #b4dfc6;
}

.sel__app-url {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 11px;
  border-radius: 999px;
  background: var(--surface-tint);
  border: 1px solid var(--line);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-soft);
}

.sel__app-url svg {
  color: var(--ok);
}

.sel__app-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 11px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  background: #fdf7e0;
  border: 1px solid #efe2ad;
  color: #9a7a12;
  white-space: nowrap;
}

.sel__app-shot {
  flex: 1;
  min-height: 0;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
}

.sel__app-shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.sel__app-caption {
  margin-top: 9px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.sel__app-caption svg {
  flex: none;
  margin-top: 2px;
  color: var(--ha-blue);
}
</style>
