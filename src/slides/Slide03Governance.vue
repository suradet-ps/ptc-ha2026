<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import { hospitalScale } from '@/data/metrics'

const bullets = [
  'PTC ร่วมกับ รพ.สต. และทีมนำทางคลินิก กำกับดูแลทั้งองค์กร',
  'คัดเลือกบัญชียาจากหลักฐานเชิงประจักษ์และอุบัติการณ์จริง',
  'รายงานความคลาดเคลื่อนต่อคณะกรรมการความเสี่ยงทุกเดือน',
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

        <div class="card card--tint gov__train anim anim-3">
          <p class="gov__train-title">
            <Icon name="award" :size="16" />
            การพัฒนาบุคลากร
          </p>
          <div class="gov__train-chips">
            <span class="chip">HAD</span>
            <span class="chip">บริหารยาวงรอบ</span>
            <span class="chip">Med Rec</span>
            <span class="chip">ADR</span>
          </div>
          <p class="gov__train-note">
            อบรมปีละ 1 ครั้ง · เจ้าหน้าที่ผ่านการประเมินก่อนขึ้นเวรนอกเวลา
          </p>
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
      </div>

      <div class="card gov__photo anim anim-3">
        <div class="gov__photo-frame">
          <img
            src="/images/ptc.jpeg"
            alt="การประชุม PTC ร่วมกับทีมนำทางคลินิกและ รพ.สต. โรงพยาบาลสระโบสถ์"
          />
        </div>
        <p class="gov__photo-caption">
          <Icon name="users" :size="14" />
          การประชุม PTC ร่วมกับทีมนำทางคลินิกและ รพ.สต. {{ hospitalScale.subDistricts }} แห่ง
        </p>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.gov__left {
  justify-content: space-between;
  gap: 12px;
}

.gov__pdca {
  padding: 14px 16px 15px;
}

.gov__train {
  padding: 13px 16px 14px;
}

.gov__train-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 10px;
}

.gov__train-title svg {
  color: var(--ha-gold-deep);
}

.gov__train-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.gov__train-note {
  margin-top: 9px;
  font-size: 13px;
  color: var(--ink-faint);
  line-height: 1.5;
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

.gov__photo {
  display: flex;
  flex-direction: column;
  padding: 14px 14px 12px;
}

.gov__photo-frame {
  flex: 1;
  min-height: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: var(--surface-tint);
}

.gov__photo-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gov__photo-caption {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-soft);
}

.gov__photo-caption svg {
  flex: none;
  color: var(--ha-blue);
}
</style>
