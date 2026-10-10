<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'

const bullets = [
  'คณะกรรมการเภสัชกรรมและการบำบัด (PTC) มีผู้บริหารระดับสูงเป็นประธาน',
  'ตัวแทนสหสาขาวิชาชีพครบถ้วน: แพทย์ พยาบาล เภสัชกร เทคนิคการแพทย์',
  'ประชุมทุก 2 เดือน และรายงานต่อคณะกรรมการบริหารโรงพยาบาล',
  'นโยบายระบบยาทบทวนและอนุมัติทุกปี',
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
      <span class="chip"><Icon name="calendar-check" :size="14" />ประชุมทุก 2 เดือน</span>
      <span class="chip chip--navy"><Icon name="file-text" :size="14" />นโยบายทบทวนทุกปี</span>
    </template>

    <div class="split">
      <div class="stack gov__left">
        <ul class="ticks anim anim-2">
          <li v-for="text in bullets" :key="text">{{ text }}</li>
        </ul>

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
          <Icon name="check-circle" :size="16" />
          มติที่ประชุม PTC ผูกพันทุกหน่วยงาน และติดตามผลทุกรายการ
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
              <span class="gov__org-sub">ประธาน: ผู้บริหารระดับสูงของโรงพยาบาล</span>
            </div>
            <div class="org__link" />
            <div class="org__row">
              <div class="org__box">แพทย์</div>
              <div class="org__box">พยาบาล</div>
              <div class="org__box">เภสัชกร</div>
              <div class="org__box">เทคนิคการแพทย์</div>
            </div>
          </div>
          <p class="gov__org-caption">
            ตัวแทน 4 สาขาวิชาชีพ ร่วมตัดสินใจนโยบายยาและติดตามผลลัพธ์ทุกรายการ
          </p>
        </div>

        <div class="gov__org-foot">
          <span class="chip chip--muted"><Icon name="file-text" :size="13" />คำสั่งแต่งตั้ง PTC</span>
          <span class="chip chip--muted"><Icon name="clipboard-check" :size="13" />รายงานประชุม 12 เดือน</span>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.gov__left {
  justify-content: space-between;
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
  font-size: 14.5px;
  font-weight: 500;
  color: var(--ha-blue-deep);
}

.gov__note svg {
  color: var(--ok);
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
