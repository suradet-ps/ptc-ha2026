<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import { hospitalScale } from '@/data/metrics'

const bullets = [
  'PTC ระดับโรงพยาบาลและ รพ.สต. ร่วมกับทีมนำทางคลินิก กำกับดูแลระบบยาทั้งองค์กร',
  'คัดเลือกยาเข้า-ออกบัญชีจากหลักฐานเชิงประจักษ์และอุบัติการณ์ความคลาดเคลื่อนทางยา',
  'รายงานความคลาดเคลื่อนทางยาต่อคณะกรรมการความเสี่ยงทุกเดือน และทบทวนใน PTC',
  'อบรมบุคลากรปีละ 1 ครั้ง: HAD การบริหารยาในวงรอบ Med Rec และ ADR',
]

const pdca = [
  { key: 'P', label: 'นโยบาย', cls: 'pdca__node--p' },
  { key: 'D', label: 'ขับเคลื่อน', cls: 'pdca__node--d' },
  { key: 'C', label: 'KPI / รายงาน', cls: 'pdca__node--c' },
  { key: 'A', label: 'ปรับปรุง', cls: 'pdca__node--a' },
]
</script>

<template>
  <SlideLayout :n="3">
    <template #head-extra>
      <span class="chip"><Icon name="network" :size="14" />PTC ร่วมกับ รพ.สต. {{ hospitalScale.subDistricts }} แห่ง</span>
      <span class="chip chip--navy"><Icon name="calendar-check" :size="14" />รายงาน ME ทุกเดือน</span>
    </template>

    <div class="split">
      <div class="stack gov__left">
        <ul class="ticks anim anim-2">
          <li v-for="text in bullets" :key="text">{{ text }}</li>
        </ul>

        <div class="gov__example anim anim-3">
          <Icon name="check-circle" :size="16" />
          <span>
            ตัวอย่างจริง: PTC 1/2567 เพิ่มยา <strong>Atorvastatin 40 mg</strong> ในกลุ่มผู้ป่วย ASCVD
          </span>
        </div>

        <div class="card card--tint gov__pdca anim anim-3">
          <p class="gov__pdca-title">
            <Icon name="refresh" :size="16" />
            วงจรกำกับดูแลระบบยาต่อเนื่อง
          </p>
          <div class="pdca">
            <template v-for="(node, i) in pdca" :key="node.key">
              <span class="pdca__node" :class="node.cls">
                <b>{{ node.key }}</b> · {{ node.label }}
              </span>
              <Icon v-if="i < pdca.length - 1" name="chevron-right" :size="15" class="pdca__arrow" />
            </template>
          </div>
        </div>

        <div class="gov__note anim anim-4">
          <Icon name="file-text" :size="16" />
          อบรมล่าสุด 3-4 เมษายน 2567 · เจ้าพนักงานเภสัชกรรมผ่านการประเมินก่อนขึ้นเวรนอกเวลา
        </div>
      </div>

      <div class="card gov__org anim anim-3">
        <p class="gov__org-title">
          <Icon name="landmark" :size="17" />
          โครงสร้างการกำกับดูแลระบบยา
        </p>

        <div class="gov__org-body">
          <div class="org">
            <div class="org__box org__box--top">คณะกรรมการบริหารโรงพยาบาล</div>
            <div class="org__link" />
            <div class="org__box org__box--main">
              PTC · คณะกรรมการเภสัชกรรมและการบำบัด
              <span class="gov__org-sub">ระดับโรงพยาบาลและ รพ.สต. ร่วมกับทีมนำทางคลินิก</span>
            </div>
            <div class="org__link" />
            <div class="org__row">
              <div class="org__box">แพทย์</div>
              <div class="org__box">พยาบาล</div>
              <div class="org__box">เภสัชกร</div>
              <div class="org__box">ทีมนำทางคลินิก</div>
            </div>
          </div>
          <p class="gov__org-caption">
            กำกับดูแลร่วมกับ รพ.สต. เครือข่าย {{ hospitalScale.subDistricts }} แห่ง ครอบคลุมทุกจุดบริการ
          </p>
        </div>

        <div class="gov__org-foot">
          <span class="chip chip--muted"><Icon name="file-text" :size="13" />คำสั่งแต่งตั้ง PTC</span>
          <span class="chip chip--muted"><Icon name="clipboard-check" :size="13" />มติบัญชียา 1/2567</span>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.gov__left {
  justify-content: space-between;
  gap: 12px;
}

.gov__example {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--ha-blue-deep);
  background: var(--surface-blue);
  border-left: 4px solid var(--ha-blue);
  border-radius: 0 10px 10px 0;
  padding: 10px 14px;
}

.gov__example svg {
  flex: none;
  color: var(--ok);
}

.gov__example strong {
  font-weight: 600;
  color: var(--ink-strong);
}

.gov__pdca {
  padding: 14px 16px 15px;
}

.gov__pdca-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 10px;
}

.gov__pdca-title svg {
  color: var(--ha-blue);
}

.gov__note {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
}

.gov__note svg {
  color: var(--ha-blue);
  flex: none;
}

.gov__org {
  display: flex;
  flex-direction: column;
}

.gov__org-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 16px;
  font-weight: 600;
  color: var(--ink-strong);
  margin-bottom: 6px;
}

.gov__org-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.gov__org-caption {
  text-align: center;
  font-size: 13px;
  color: var(--ink-faint);
  line-height: 1.5;
}

.gov__org-title svg {
  color: var(--ha-blue);
}

.gov__org-sub {
  display: block;
  font-size: 12.5px;
  font-weight: 400;
  color: #cfe3f5;
  margin-top: 2px;
}

.gov__org-foot {
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
}
</style>
