<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'

const features: readonly { icon: IconName; title: string; detail: string }[] = [
  {
    icon: 'monitor',
    title: 'HosXp Drug Alert',
    detail: 'เตือนข้อห้ามใช้: G6PD · ตั้งครรภ์ · Warfarin',
  },
  {
    icon: 'layers',
    title: 'แพทย์คีย์คำสั่งเอง (OPD)',
    detail: 'ลด error จากการถ่ายทอดคำสั่ง',
  },
  {
    icon: 'barcode',
    title: 'Scan Order (IPD)',
    detail: 'เภสัชกรเห็นคำสั่งชัดเจนก่อนจ่ายยา',
  },
  {
    icon: 'user-check',
    title: 'ตรวจสอบผู้ป่วยด้วยรูปถ่าย',
    detail: 'ยืนยันชื่อ-สกุล ลดจ่ายยาผิดคน',
  },
  {
    icon: 'check-circle',
    title: 'สติ๊กเกอร์ยาจากเภสัชกร',
    detail: 'แทนการคัดลอกลายมือ ลด transcribing',
  },
]

const planItems = [
  { icon: 'bot' as const, label: 'AI-Assisted Drug Alert', target: '≥ 80%' },
  { icon: 'flask' as const, label: 'Online ADR Reporting', target: '+30%' },
  { icon: 'clipboard-check' as const, label: 'Electronic Med Rec (EMR)', target: '≥ 95%' },
  { icon: 'refresh' as const, label: 'HosXp v4 แจ้งเตือน Scan อัตโนมัติ', target: 'ตามแผน' },
]
</script>

<template>
  <SlideLayout :n="7">
    <template #head-extra>
      <span class="chip chip--navy"><Icon name="database" :size="14" />HosXp ใช้จริงทุกจุดบริการ</span>
      <span class="chip"><Icon name="bot" :size="14" />แผน AI-Assisted Alert ≥ 80%</span>
    </template>

    <div class="dig__body">
      <div class="dig__list anim anim-2">
        <div v-for="f in features" :key="f.title" class="dig__item">
          <span class="icon-badge"><Icon :name="f.icon" :size="19" /></span>
          <div>
            <p class="dig__item-title">{{ f.title }}</p>
            <p class="dig__item-detail">{{ f.detail }}</p>
          </div>
        </div>
      </div>

      <div class="dig__mocks">
        <div class="card dig__mock anim anim-3">
          <div class="dig__mock-bar">
            <span class="dig__mock-dots"><i /><i /><i /></span>
            <span class="dig__mock-name">HosXp · Drug Alert</span>
            <span class="dig__mock-live"><i />LIVE</span>
          </div>
          <div class="dig__alert">
            <Icon name="alert" :size="20" />
            <div>
              <p class="dig__alert-title">ผู้ป่วยตั้งครรภ์: แจ้งเตือนยา Category X</p>
              <p class="dig__alert-sub">เตือนข้อห้ามใช้ G6PD · ตั้งครรภ์ · Warfarin</p>
            </div>
          </div>
          <div class="dig__alert-actions">
            <span class="dig__action dig__action--ok"><Icon name="check" :size="13" />เภสัชกรยืนยันก่อนจ่ายยา</span>
            <span class="dig__action"><Icon name="phone" :size="13" />แจ้งแพทย์เจ้าของไข้</span>
          </div>
          <p class="footnote">ยังไม่พบการใช้ Category X ในหญิงตั้งครรภ์</p>
        </div>

        <div class="card dig__mock anim anim-4">
          <div class="dig__mock-bar">
            <span class="dig__mock-dots"><i /><i /><i /></span>
            <span class="dig__mock-name">แผนดิจิทัล · ตอบข้อเสนอแนะ สรพ.</span>
            <span class="dig__mock-live dig__mock-live--blue"><i />PLAN</span>
          </div>
          <ul class="dig__plan">
            <li v-for="item in planItems" :key="item.label">
              <Icon :name="item.icon" :size="16" />
              <span>{{ item.label }}</span>
              <em>{{ item.target }}</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.dig__body {
  display: grid;
  grid-template-columns: 0.94fr 1.06fr;
  gap: 20px;
  flex: 1;
  min-height: 0;
  margin-top: 16px;
}

.dig__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.dig__item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--line-soft);
  background: var(--surface-tint);
}

.dig__item-title {
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.dig__item-detail {
  font-size: 13px;
  color: var(--ink-soft);
  margin-top: 1px;
}

.dig__mocks {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}

.dig__mock {
  flex: 1;
  padding: 12px 16px 10px;
  display: flex;
  flex-direction: column;
}

.dig__mock-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--line-soft);
}

.dig__mock-dots {
  display: flex;
  gap: 4px;
}

.dig__mock-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--line);
}

.dig__mock-dots i:first-child {
  background: #f0b0ae;
}

.dig__mock-dots i:nth-child(2) {
  background: #f2d9a0;
}

.dig__mock-dots i:last-child {
  background: #b4dfc6;
}

.dig__mock-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-soft);
}

.dig__mock-live {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--bad);
}

.dig__mock-live i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--bad);
}

.dig__mock-live--blue {
  color: var(--ha-blue);
}

.dig__mock-live--blue i {
  background: var(--ha-blue);
}

.dig__alert {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  padding: 10px 13px;
  border-radius: 11px;
  background: var(--bad-soft);
  border: 1px solid #f4d2d1;
  color: var(--bad);
}

.dig__alert svg {
  flex: none;
  margin-top: 1px;
}

.dig__alert-title {
  font-size: 14.5px;
  font-weight: 600;
  color: #b31f1d;
  line-height: 1.35;
}

.dig__alert-sub {
  font-size: 12.5px;
  color: #c05350;
  margin-top: 2px;
}

.dig__alert-actions {
  display: flex;
  gap: 8px;
  margin-top: 9px;
}

.dig__action {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12.5px;
  font-weight: 500;
  padding: 5px 11px;
  border-radius: 999px;
  background: var(--surface-tint);
  border: 1px solid var(--line);
  color: var(--ink-soft);
}

.dig__action--ok {
  background: var(--ok-soft);
  border-color: #cdebd9;
  color: var(--ok);
}

.dig__mock .footnote {
  margin-top: auto;
  padding-top: 8px;
}

.dig__plan {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-top: 10px;
}

.dig__plan li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--ink);
  padding: 7px 10px;
  border-radius: 9px;
  background: var(--surface-tint);
}

.dig__plan svg {
  flex: none;
  color: var(--ha-blue);
}

.dig__plan em {
  margin-left: auto;
  font-style: normal;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ha-navy);
  white-space: nowrap;
}
</style>
