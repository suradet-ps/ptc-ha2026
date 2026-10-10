<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import { hospitalScale } from '@/data/metrics'

const bullets = [
  'PTC ร่วมกับ รพ.สต. และทีมนำทางคลินิก กำกับดูแลทั้งองค์กร',
  'คัดเลือกบัญชียาจากหลักฐานเชิงประจักษ์และอุบัติการณ์จริง',
  'รายงานความคลาดเคลื่อนต่อคณะกรรมการความเสี่ยงทุกเดือน',
]
</script>

<template>
  <SlideLayout :n="3">
    <template #head-extra>
      <span class="chip"><Icon name="network" :size="14" />PTC ร่วมกับ รพ.สต. {{ hospitalScale.subDistricts }} แห่ง</span>
      <span class="chip chip--navy"><Icon name="calendar-check" :size="14" />รายงาน ME ทุกเดือน</span>
    </template>

    <div class="split split--wide-right">
      <div class="stack gov__left">
        <ul class="ticks anim anim-2">
          <li v-for="text in bullets" :key="text">{{ text }}</li>
        </ul>

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

      <div class="card gov__app anim anim-3">
        <div class="gov__app-bar">
          <span class="gov__app-dots"><i /><i /><i /></span>
          <span class="gov__app-url">
            <Icon name="lock" :size="12" />
            ptcos.rxdevman.com
          </span>
          <span class="gov__app-badge">
            <Icon name="sparkle" :size="12" />
            นวัตกรรมของทีม
          </span>
        </div>

        <div class="gov__app-shot">
          <img
            src="/images/ptcos.png"
            alt="ระบบ PTC Monitor ติดตามแผนพัฒนาคุณภาพยาของทีม PTC"
          />
        </div>

        <p class="gov__app-caption">
          <Icon name="layers" :size="14" />
          PTC Monitor · ระบบติดตามแผนพัฒนาคุณภาพยา ใช้ในการประชุม PTC
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

.gov__photo {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
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

.gov__app {
  display: flex;
  flex-direction: column;
  padding: 12px 14px 11px;
  min-height: 0;
}

.gov__app-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--line-soft);
}

.gov__app-dots {
  display: flex;
  gap: 4px;
}

.gov__app-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--line);
}

.gov__app-dots i:first-child {
  background: #f0b0ae;
}

.gov__app-dots i:nth-child(2) {
  background: #f2d9a0;
}

.gov__app-dots i:last-child {
  background: #b4dfc6;
}

.gov__app-url {
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

.gov__app-url svg {
  color: var(--ok);
}

.gov__app-badge {
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

.gov__app-shot {
  flex: 1;
  min-height: 0;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: #ffffff;
}

.gov__app-shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
}

.gov__app-caption {
  margin-top: 9px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.gov__app-caption svg {
  flex: none;
  margin-top: 2px;
  color: var(--ha-blue);
}
</style>
