<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'
import { config } from '@/data/config'

interface AgendaItem {
  no: string
  icon: IconName
  title: string
  sub: string
  slides: string
  time: string
  color: string
}

const items: readonly AgendaItem[] = [
  {
    no: '1',
    icon: 'landmark',
    title: 'Governance',
    sub: 'PTC และโครงสร้างการกำกับดูแล',
    slides: 'สไลด์ 3',
    time: '1:30',
    color: '#0d5fa8',
  },
  {
    no: '2',
    icon: 'clipboard-check',
    title: 'Selection & Procurement',
    sub: 'บัญชียา จัดหา สำรองยา',
    slides: 'สไลด์ 4',
    time: '1:30',
    color: '#2b3991',
  },
  {
    no: '3',
    icon: 'shield',
    title: 'Safety & RDU',
    sub: 'ความปลอดภัยด้านยา AMS',
    slides: 'สไลด์ 5-6',
    time: '3:30',
    color: '#fa0f0c',
  },
  {
    no: '4',
    icon: 'bot',
    title: 'Digital Health',
    sub: 'HosXp · Scan Order · แผน AI',
    slides: 'สไลด์ 7',
    time: '1:30',
    color: '#0e72cb',
  },
  {
    no: '5',
    icon: 'heart-pulse',
    title: '3P Safety',
    sub: 'Patient · Personnel · Public',
    slides: 'สไลด์ 8',
    time: '1:00',
    color: '#c9a227',
  },
  {
    no: '6',
    icon: 'gauge',
    title: 'KPI & PDSA',
    sub: 'ผลลัพธ์ กรณีศึกษา แผนพัฒนา',
    slides: 'สไลด์ 9-12',
    time: '4:15',
    color: '#1c9e5a',
  },
]

const totalLabel = `${Math.floor(config.plannedMinutes)}:${String(
  Math.round((config.plannedMinutes % 1) * 60),
).padStart(2, '0')}`
</script>

<template>
  <SlideLayout :n="2" show-key>
    <template #head-extra>
      <span class="chip"><Icon name="clock" :size="14" />นำเสนอ {{ totalLabel }} นาที</span>
    </template>

    <div class="agenda anim anim-2">
      <article
        v-for="item in items"
        :key="item.no"
        class="agenda__card card"
        :style="{ '--accent': item.color }"
      >
        <div class="agenda__top">
          <span class="agenda__no">{{ item.no }}</span>
          <span class="agenda__icon" :style="{ color: item.color }">
            <Icon :name="item.icon" :size="25" />
          </span>
        </div>
        <h3 class="agenda__title">{{ item.title }}</h3>
        <p class="agenda__sub">{{ item.sub }}</p>
        <div class="agenda__foot">
          <span class="agenda__slides">{{ item.slides }}</span>
          <span class="agenda__time"><Icon name="clock" :size="13" />{{ item.time }}</span>
        </div>
      </article>
    </div>

    <div class="agenda__strip anim anim-3">
      <div class="agenda__bar">
        <span
          v-for="item in items"
          :key="item.no"
          class="agenda__seg"
          :style="{ flex: Number.parseFloat(item.time.split(':')[0]) + Number(item.time.split(':')[1]) / 60, background: item.color }"
        />
      </div>
      <div class="agenda__legend">
        <span><b>14:30</b> นำเสนอ</span>
        <span><b>0:30</b> สำรองคำถาม</span>
        <span><b>15:00</b> รวมทั้งหมด</span>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.agenda {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  min-height: 0;
}

.agenda__card {
  position: relative;
  padding: 14px 18px 13px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.agenda__card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: var(--accent);
}

.agenda__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.agenda__no {
  font-size: 15px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: var(--surface-tint);
  color: var(--ink-soft);
}

.agenda__title {
  margin-top: 8px;
  font-size: 19px;
  font-weight: 600;
  color: var(--ink-strong);
  line-height: 1.25;
}

.agenda__sub {
  margin-top: 3px;
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.45;
}

.agenda__foot {
  margin-top: auto;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
  color: var(--ink-faint);
}

.agenda__slides {
  font-weight: 500;
}

.agenda__time {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: var(--ink-soft);
  font-variant-numeric: tabular-nums;
}

.agenda__strip {
  margin-top: 14px;
}

.agenda__bar {
  display: flex;
  gap: 3px;
  height: 9px;
  border-radius: 5px;
  overflow: hidden;
}

.agenda__seg {
  border-radius: 4px;
}

.agenda__legend {
  margin-top: 8px;
  display: flex;
  gap: 26px;
  font-size: 13px;
  color: var(--ink-soft);
}

.agenda__legend b {
  color: var(--ink-strong);
  font-variant-numeric: tabular-nums;
}
</style>
