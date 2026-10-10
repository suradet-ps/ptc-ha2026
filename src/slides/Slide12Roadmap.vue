<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'

interface Phase {
  year: string
  label: string
  icon: IconName
  items: readonly string[]
  milestone: string
  tone: 'blue' | 'navy' | 'red'
}

const phases: readonly Phase[] = [
  {
    year: '2568',
    label: 'ระยะที่ 1 · ทีมและแนวปฏิบัติ',
    icon: 'users',
    items: [
      'แต่งตั้งทีมความปลอดภัยด้านยา (Med Safety Committee)',
      'แนวปฏิบัติจ่ายยานอกเวลา + Double check',
      'ทบทวนบัญชียาฉุกเฉิน/ยาเสพติด สต๊อก ≥ 95%',
    ],
    milestone: 'Milestone: ทีมพร้อม แนวปฏิบัติครบ',
    tone: 'blue',
  },
  {
    year: '2569',
    label: 'ระยะที่ 2 · ตามรอยและรายงาน',
    icon: 'clipboard-check',
    items: [
      'ทีม Audit ตามรอย HAD/ADR/Med Rec ≥ 90%',
      'Online ADR รายงานเพิ่ม ≥ 30%',
      'EMR Med Rec ≥ 95%',
    ],
    milestone: 'Milestone: ตามรอยได้ทุกหน่วยงาน',
    tone: 'navy',
  },
  {
    year: '2570',
    label: 'ระยะที่ 3 · ดิจิทัลเต็มระบบ',
    icon: 'bot',
    items: [
      'AI-Assisted Drug Alert ≥ 80%',
      'CPOE สั่งยาทุกจุดบริการ',
      'HOSxP v4 แจ้งเตือน Scan order อัตโนมัติ',
    ],
    milestone: 'Milestone: AI + ความปลอดภัยครบวงจร',
    tone: 'red',
  },
]
</script>

<template>
  <SlideLayout :n="12">
    <template #head-extra>
      <span class="chip"><Icon name="file-text" :size="14" />ตอบข้อเสนอแนะ สรพ. 19-20 ก.พ. 2568</span>
      <span class="chip chip--navy"><Icon name="target" :size="14" />ตัวชี้วัดความสำเร็จรายแผนงาน</span>
    </template>

    <div class="road anim anim-2">
      <span class="timeline__line" />
      <div v-for="p in phases" :key="p.year" class="timeline__col">
        <div class="timeline__node" :class="`road__node--${p.tone}`">
          <Icon :name="p.icon" :size="22" />
        </div>
        <p class="road__year">{{ p.year }}</p>
        <p class="road__label">{{ p.label }}</p>

        <div class="card road__card timeline__card">
          <ul class="ticks ticks--sm">
            <li v-for="item in p.items" :key="item">{{ item }}</li>
          </ul>
          <p class="road__milestone" :class="`road__milestone--${p.tone}`">
            <Icon name="target" :size="13" />
            {{ p.milestone }}
          </p>
        </div>
      </div>
    </div>

    <div class="road__foot anim anim-3">
      <span class="road__foot-item">
        <Icon name="target" :size="15" />
        เป้าหมายสูงสุด: ความปลอดภัยของผู้ป่วยทุกราย
      </span>
      <span class="road__foot-item">
        <Icon name="calendar-check" :size="15" />
        ติดตามผลและทบทวนแนวทางทุก 6 เดือน
      </span>
      <span class="road__foot-item">
        <Icon name="folder" :size="15" />
        อ้างอิง: แผน CQI · แผนยุทธศาสตร์ระบบยา · แผนงบประมาณ
      </span>
    </div>
  </SlideLayout>
</template>

<style scoped>
.road {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  min-height: 0;
  margin-top: 6px;
}

.road :deep(.timeline__line) {
  top: 29px;
}

.road .timeline__col {
  align-items: center;
}

.timeline__node {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  background: #ffffff;
  border: 3px solid var(--ha-blue);
  color: var(--ha-blue);
  box-shadow: 0 6px 18px rgba(13, 95, 168, 0.22);
}

.road__node--navy {
  border-color: var(--ha-navy);
  color: var(--ha-navy);
  box-shadow: 0 6px 18px rgba(43, 57, 145, 0.22);
}

.road__node--red {
  border-color: var(--ha-red);
  color: var(--ha-red);
  box-shadow: 0 6px 18px rgba(250, 15, 12, 0.18);
}

.road__year {
  margin-top: 10px;
  font-size: 26px;
  font-weight: 700;
  color: var(--ink-strong);
  font-variant-numeric: tabular-nums;
}

.road__label {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-top: 1px;
}

.road__card {
  margin-top: 10px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.road__milestone {
  margin-top: auto;
  padding-top: 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ha-blue-deep);
  border-top: 1px dashed var(--line);
}

.road__milestone svg {
  color: var(--ha-blue);
}

.road__milestone--navy {
  color: var(--ha-navy);
}

.road__milestone--navy svg {
  color: var(--ha-navy);
}

.road__milestone--red {
  color: var(--bad);
}

.road__milestone--red svg {
  color: var(--ha-red);
}

.road__foot {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 26px;
}

.road__foot-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--ink-soft);
}

.road__foot-item svg {
  color: var(--ha-blue);
}

.road__foot-item:first-child {
  color: var(--ha-blue-deep);
}

.road__foot-item:first-child svg {
  color: var(--ha-red);
}
</style>
