<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import BarCompare from '@/components/charts/BarCompare.vue'
import { casePolypharmacy, caseTelepharmacy } from '@/data/metrics'

const caseOneBars = [
  { label: 'ก่อนโครงการ', value: casePolypharmacy.errorBefore, color: '#dc3b38', sub: casePolypharmacy.unit },
  { label: 'หลังโครงการ', value: casePolypharmacy.errorAfter, color: '#1c9e5a', sub: casePolypharmacy.unit },
]

const caseTwoBars = [
  { label: 'ก่อนโครงการ', value: caseTelepharmacy.adherenceBefore, color: '#8a97a5', sub: '% adherence' },
  { label: 'หลังโครงการ', value: caseTelepharmacy.adherenceAfter, color: '#0d5fa8', sub: '% adherence' },
]

const factors = [
  { icon: 'bot' as const, label: 'AI คัดกรองความเสี่ยง' },
  { icon: 'user-check' as const, label: 'เภสัชกรทบทวนใบสั่งยา' },
  { icon: 'users' as const, label: 'ทีมสหสาขาวิชาชีพ' },
]
</script>

<template>
  <SlideLayout :n="11">
    <template #head-extra>
      <span class="chip chip--ok"><Icon name="award" :size="14" />ผลลัพธ์ที่วัดได้จริง</span>
    </template>

    <div class="case__grid anim anim-2">
      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--red"><Icon name="user-check" :size="19" /></span>
          <div>
            <h3 class="case__title">{{ casePolypharmacy.title }}</h3>
            <p class="case__period">ระยะเวลา {{ casePolypharmacy.period }} · ผู้ป่วยสูงอายุหลายโรค</p>
          </div>
        </header>
        <p class="case__desc">
          AI คัดกรอง Drug Interaction ในผู้ป่วยที่ได้ยา ≥ 5 รายการ ร่วมกับเภสัชกรทบทวนใบสั่งยาทุกรายก่อนจ่ายยา
        </p>
        <BarCompare :items="caseOneBars" :height="190" :decimals="1" />
        <footer class="case__foot">
          <span class="chip chip--red"><Icon name="trend-down" :size="13" />Error ลด {{ casePolypharmacy.reduction }}%</span>
          <span class="chip chip--muted">หน่วย: {{ casePolypharmacy.unit }}</span>
        </footer>
      </article>

      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--navy"><Icon name="video" :size="19" /></span>
          <div>
            <h3 class="case__title">{{ caseTelepharmacy.title }}</h3>
            <p class="case__period">ระยะเวลา {{ caseTelepharmacy.period }} · {{ caseTelepharmacy.stations }} แห่ง</p>
          </div>
        </header>
        <p class="case__desc">
          เภสัชกรให้คำปรึกษาผ่านระบบ Telepharmacy ครอบคลุม รพ.สต. เครือข่าย พร้อมติดตาม adherence ผู้ป่วยโรคเรื้อรัง
        </p>
        <BarCompare :items="caseTwoBars" :height="190" :decimals="0" unit="%" />
        <footer class="case__foot">
          <span class="chip chip--ok"><Icon name="trend-up" :size="13" />Adherence +{{ caseTelepharmacy.adherenceAfter - caseTelepharmacy.adherenceBefore }} จุด</span>
          <span class="chip chip--muted">ให้คำปรึกษา 240 ครั้ง/เดือน</span>
        </footer>
      </article>
    </div>

    <div class="case__strip anim anim-3">
      <span class="case__strip-label">ปัจจัยความสำเร็จ:</span>
      <span v-for="f in factors" :key="f.label" class="chip">
        <Icon :name="f.icon" :size="13" />{{ f.label }}
      </span>
      <span class="case__strip-note">
        <Icon name="check-circle" :size="14" />
        ตัวชี้วัดรายงานต่อ PTC ทุกไตรมาส
      </span>
    </div>
  </SlideLayout>
</template>

<style scoped>
.case__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  flex: 1;
  min-height: 0;
  margin-top: 12px;
}

.case__card {
  display: flex;
  flex-direction: column;
  padding: 15px 18px 12px;
  min-height: 0;
}

.case__head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.case__title {
  font-size: 16.5px;
  font-weight: 600;
  color: var(--ink-strong);
  line-height: 1.3;
}

.case__period {
  font-size: 12.5px;
  color: var(--ink-faint);
  margin-top: 2px;
}

.case__desc {
  margin-top: 9px;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--ink-soft);
  min-height: 43px;
}

.case__card :deep(.bars) {
  flex: 1;
  min-height: 0;
  margin-top: 4px;
}

.case__foot {
  display: flex;
  gap: 8px;
  padding-top: 8px;
}

.case__strip {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 9px;
}

.case__strip-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-soft);
}

.case__strip-note {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: var(--ha-blue-deep);
  font-weight: 500;
}

.case__strip-note svg {
  color: var(--ok);
}
</style>
