<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'

interface PBlock {
  key: string
  en: string
  icon: IconName
  tone: string
  items: readonly string[]
  activity: string
}

const blocks: readonly PBlock[] = [
  {
    key: 'ผู้ป่วย',
    en: 'Patient',
    icon: 'heart-pulse',
    tone: 'blue',
    items: [
      'ME ระดับ E ขึ้นไป 0 ครั้ง และแพ้ยาซ้ำ 0 ครั้ง',
      'Med Rec ผู้ป่วยในทุกรายก่อนจำหน่าย',
      'เภสัชกรทบทวนคำสั่งใช้ยาทุกเคส',
    ],
    activity: 'กิจกรรม: Ambulatory Care ค้นหาปัญหาการใช้ยาก่อนพบแพทย์',
  },
  {
    key: 'เจ้าหน้าที่',
    en: 'Personnel',
    icon: 'hard-hat',
    tone: 'navy',
    items: [
      'อบรม HAD ADR Med Rec ปีละ 1 ครั้ง (ล่าสุด 3-4 เม.ย. 2567)',
      'ประเมินความรู้เจ้าพนักงานเภสัชกรรมก่อนขึ้นเวรนอกเวลา',
      'เภสัชกรให้คำปรึกษาและตรวจสอบย้อนกลับได้ตลอดเวลา',
    ],
    activity: 'แผน: อบรม Just Culture และ Patient Identification ≥ 90%',
  },
  {
    key: 'สาธารณะ',
    en: 'Public',
    icon: 'globe',
    tone: 'red',
    items: [
      'เภสัชกรออกหน่วยปฐมภูมิจ่ายยาที่ รพ.สต.นิยมชัย เดือนละ 1 ครั้ง',
      'ห่วงโซ่ความเย็นวัคซีนครอบคลุม รพ.สต. 5 แห่ง',
      'ส่งต่อผู้ป่วยรับยาต่อเนื่องที่ รพ.สต. พร้อมประสานรายการยา',
    ],
    activity: 'กิจกรรม: แพทย์ออกตรวจพร้อมเภสัชกรจ่ายยาในหน่วยเดียว',
  },
]
</script>

<template>
  <SlideLayout :n="8">
    <template #head-extra>
      <span class="chip chip--red"><Icon name="shield" :size="14" />3P Safety</span>
      <span class="chip"><Icon name="users" :size="14" />เชื่อมโยงทั้งระบบ</span>
    </template>

    <div class="tp anim anim-2">
      <div v-for="b in blocks" :key="b.en" class="tp__col" :class="`tp__col--${b.tone}`">
        <div class="tp__badge">
          <Icon :name="b.icon" :size="34" />
        </div>
        <p class="tp__name">
          {{ b.key }}
          <span>{{ b.en }}</span>
        </p>

        <div class="card tp__card">
          <ul class="ticks ticks--sm">
            <li v-for="item in b.items" :key="item">{{ item }}</li>
          </ul>
          <p class="tp__activity">
            <Icon name="check-circle" :size="14" />
            {{ b.activity }}
          </p>
        </div>
      </div>
    </div>

    <p class="tp__foot anim anim-3">
      <Icon name="link" :size="15" />
      ความปลอดภัยครอบคลุม 3 มิติพร้อมกัน ตามมาตรฐานฉบับที่ 6 และข้อเสนอแนะของทีมสำรวจ
    </p>
  </SlideLayout>
</template>

<style scoped>
.tp {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-height: 0;
  margin-top: 4px;
}

.tp__col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
}

.tp__badge {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 3px solid var(--ha-blue);
  color: var(--ha-blue);
  background: var(--surface-blue);
  box-shadow: 0 8px 22px rgba(13, 95, 168, 0.18);
}

.tp__col--navy .tp__badge {
  border-color: var(--ha-navy);
  color: var(--ha-navy);
  background: #eceefa;
  box-shadow: 0 8px 22px rgba(43, 57, 145, 0.18);
}

.tp__col--red .tp__badge {
  border-color: var(--ha-red);
  color: var(--ha-red);
  background: var(--bad-soft);
  box-shadow: 0 8px 22px rgba(250, 15, 12, 0.16);
}

.tp__name {
  margin-top: 10px;
  font-size: 19px;
  font-weight: 600;
  color: var(--ink-strong);
  text-align: center;
}

.tp__name span {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: 1px;
}

.tp__card {
  margin-top: 10px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px 12px;
}

.tp__activity {
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-faint);
  border-top: 1px dashed var(--line);
}

.tp__activity svg {
  flex: none;
  margin-top: 2px;
  color: var(--ok);
}

.tp__foot {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--ha-blue-deep);
}
</style>
