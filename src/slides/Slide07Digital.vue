<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'

const features: readonly { icon: IconName; title: string; detail: string }[] = [
  {
    icon: 'bot',
    title: 'AI Screening ใบสั่งยา',
    detail: 'คัดกรองใบสั่งยาความเสี่ยงสูงก่อนจ่ายยา',
  },
  {
    icon: 'layers',
    title: 'e-Prescription',
    detail: 'ลดความคลาดเคลื่อนจากลายมือเขียน',
  },
  {
    icon: 'video',
    title: 'Telepharmacy',
    detail: 'ให้คำปรึกษาทางไกลถึง รพ.สต. เครือข่าย',
  },
  {
    icon: 'barcode',
    title: 'Barcode / RFID',
    detail: 'ตรวจสอบยาซ้ำก่อนให้ยาที่ข้างเตียง',
  },
  {
    icon: 'monitor',
    title: 'Dashboard Real-time',
    detail: 'ติดตาม KPI ระบบยาแบบทันกาล',
  },
]
</script>

<template>
  <SlideLayout :n="7">
    <template #head-extra>
      <span class="chip chip--navy"><Icon name="cpu" :size="14" />Digital Health</span>
      <span class="chip"><Icon name="lock" :size="14" />ความมั่นคงปลอดภัยข้อมูล</span>
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
            <span class="dig__mock-name">AI Screening · ใบสั่งยา OPD</span>
            <span class="dig__mock-live"><i />LIVE</span>
          </div>
          <div class="dig__alert">
            <Icon name="alert" :size="20" />
            <div>
              <p class="dig__alert-title">พบความเสี่ยงสูง: Warfarin + NSAIDs</p>
              <p class="dig__alert-sub">Major interaction · แนะนำเปลี่ยนยาแก้ปวดกลุ่มอื่น</p>
            </div>
          </div>
          <div class="dig__alert-actions">
            <span class="dig__action dig__action--ok"><Icon name="check" :size="13" />เภสัชกรรับทราบ</span>
            <span class="dig__action"><Icon name="phone" :size="13" />แจ้งแพทย์เจ้าของไข้</span>
          </div>
          <p class="footnote">คัดกรอง 1,240 ใบสั่งยา/เดือน · จับความเสี่ยงสูง 38 รายการ</p>
        </div>

        <div class="card dig__mock anim anim-4">
          <div class="dig__mock-bar">
            <span class="dig__mock-dots"><i /><i /><i /></span>
            <span class="dig__mock-name">Telepharmacy · เชื่อมต่อ รพ.สต.</span>
            <span class="dig__mock-live dig__mock-live--blue"><i />ONLINE</span>
          </div>
          <div class="dig__tele">
            <div class="dig__tele-node">
              <span class="icon-badge"><Icon name="hospital" :size="18" /></span>
              <b>รพ.แม่ข่าย</b>
              <span>เภสัชกร</span>
            </div>
            <div class="dig__tele-link">
              <Icon name="wifi" :size="20" />
              <span class="dig__tele-line" />
            </div>
            <div class="dig__tele-node">
              <span class="icon-badge icon-badge--navy"><Icon name="heart-pulse" :size="18" /></span>
              <b>รพ.สต. เครือข่าย</b>
              <span>12 แห่ง</span>
            </div>
          </div>
          <div class="dig__tele-foot">
            <span class="chip chip--ok"><Icon name="trend-up" :size="13" />Adherence +24 จุด</span>
            <span class="chip chip--muted"><Icon name="video" :size="13" />ให้คำปรึกษา 240 ครั้ง/เดือน</span>
          </div>
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

.dig__tele {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.dig__tele-node {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 8px;
  border-radius: 12px;
  background: var(--surface-tint);
  border: 1px solid var(--line-soft);
  text-align: center;
}

.dig__tele-node b {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-strong);
}

.dig__tele-node span:last-child {
  font-size: 12px;
  color: var(--ink-faint);
}

.dig__tele-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--ha-blue);
}

.dig__tele-line {
  width: 44px;
  height: 2px;
  border-radius: 1px;
  background: repeating-linear-gradient(90deg, var(--ha-blue) 0 6px, transparent 6px 10px);
}

.dig__tele-foot {
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
}
</style>
