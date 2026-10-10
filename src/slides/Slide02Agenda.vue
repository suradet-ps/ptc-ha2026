<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import type { IconName } from '@/components/icons'
import { config } from '@/data/config'
import { drugInventory, highAlert, hospitalScale } from '@/data/metrics'

interface AgendaItem {
  no: string
  icon: IconName
  title: string
  sub: string
  highlight: string
  slides: string
  time: string
  minutes: number
  color: string
}

const items: readonly AgendaItem[] = [
  {
    no: '1',
    icon: 'landmark',
    title: 'Governance',
    sub: 'โครงสร้างการกำกับดูแล',
    highlight: `PTC + รพ.สต. ${hospitalScale.subDistricts} แห่ง`,
    slides: 'สไลด์ 3',
    time: '1:30',
    minutes: 1.5,
    color: '#0d5fa8',
  },
  {
    no: '2',
    icon: 'clipboard-check',
    title: 'Selection & Procurement',
    sub: 'บัญชียา จัดหา สำรองยา',
    highlight: `ยา ${drugInventory.total} รายการ`,
    slides: 'สไลด์ 4',
    time: '1:30',
    minutes: 1.5,
    color: '#2b3991',
  },
  {
    no: '3',
    icon: 'shield',
    title: 'Safety & RDU',
    sub: 'ความปลอดภัย · AMS',
    highlight: `HAD ${highAlert.total} รายการ`,
    slides: 'สไลด์ 5-6',
    time: '3:30',
    minutes: 3.5,
    color: '#fa0f0c',
  },
  {
    no: '4',
    icon: 'bot',
    title: 'Digital Health',
    sub: 'HOSxP · Scan Order',
    highlight: 'แผน AI ≥ 80%',
    slides: 'สไลด์ 7',
    time: '1:30',
    minutes: 1.5,
    color: '#0e72cb',
  },
  {
    no: '5',
    icon: 'heart-pulse',
    title: '3P Safety',
    sub: 'Patient · Personnel · Public',
    highlight: 'ครอบคลุม 3 มิติ',
    slides: 'สไลด์ 8',
    time: '1:00',
    minutes: 1,
    color: '#c9a227',
  },
  {
    no: '6',
    icon: 'gauge',
    title: 'KPI & PDSA',
    sub: 'ผลลัพธ์และแผนพัฒนา',
    highlight: 'ME ระดับ E = 0',
    slides: 'สไลด์ 9-12',
    time: '4:15',
    minutes: 4.25,
    color: '#1c9e5a',
  },
]

const totalLabel = `${Math.floor(config.plannedMinutes)}:${String(
  Math.round((config.plannedMinutes % 1) * 60),
).padStart(2, '0')}`
</script>

<template>
  <SlideLayout :n="2">
    <template #head-extra>
      <span class="chip"><Icon name="clock" :size="14" />นำเสนอ {{ totalLabel }} นาที</span>
      <span class="chip chip--muted"><Icon name="calendar" :size="14" />รวมสำรอง 15:00</span>
    </template>

    <div class="ag__wrap">
      <div class="ag anim anim-2">
        <span class="ag__line" />
        <article
          v-for="(item, i) in items"
          :key="item.no"
          class="ag__station"
          :style="{ '--c': item.color }"
        >
          <div class="ag__node">
            <span class="ag__no">{{ item.no }}</span>
            <Icon :name="item.icon" :size="30" />
          </div>
          <h3 class="ag__title">{{ item.title }}</h3>
          <p class="ag__sub">{{ item.sub }}</p>
          <span class="ag__hl">{{ item.highlight }}</span>
          <p class="ag__meta">{{ item.slides }} · {{ item.time }} นาที</p>
          <span v-if="i < items.length - 1" class="ag__arrow">
            <Icon name="chevron-right" :size="15" />
          </span>
        </article>
      </div>

      <div class="ag__timebar anim anim-3">
        <div class="ag__track">
          <span
            v-for="item in items"
            :key="item.no"
            class="ag__seg"
            :style="{ flex: item.minutes, background: item.color }"
          >
            <b>{{ item.no }}</b>
            <em>{{ item.time }}</em>
          </span>
        </div>
        <div class="ag__legend">
          <span><b>14:30</b> นำเสนอ</span>
          <span><b>0:30</b> สำรองคำถาม</span>
          <span><b>15:00</b> รวมทั้งหมด</span>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.ag__wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
}

.ag {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.ag__line {
  position: absolute;
  top: 42px;
  left: 5%;
  right: 5%;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #0d5fa8 0%, #2b3991 55%, #fa0f0c 100%);
  opacity: 0.5;
}

.ag__station {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 6px;
}

.ag__node {
  position: relative;
  z-index: 1;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #ffffff;
  border: 3px solid var(--c);
  color: var(--c);
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c) 26%, transparent);
}

.ag__no {
  position: absolute;
  top: -7px;
  right: -5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--c);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 3px 8px rgba(22, 34, 46, 0.2);
}

.ag__title {
  margin-top: 14px;
  font-size: 17px;
  font-weight: 600;
  color: var(--ink-strong);
  line-height: 1.3;
  min-height: 44px;
}

.ag__sub {
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--ink-soft);
}

.ag__hl {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--c);
  background: color-mix(in srgb, var(--c) 10%, #ffffff);
  border: 1px solid color-mix(in srgb, var(--c) 34%, #ffffff);
  white-space: nowrap;
}

.ag__meta {
  margin-top: 8px;
  font-size: 12px;
  color: var(--ink-faint);
  font-variant-numeric: tabular-nums;
}

.ag__arrow {
  position: absolute;
  top: 33px;
  right: -13px;
  z-index: 2;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid var(--line);
  color: var(--ink-faint);
  box-shadow: 0 2px 6px rgba(22, 34, 46, 0.08);
}

.ag__timebar {
  margin-top: 0;
}

.ag__track {
  display: flex;
  gap: 4px;
  height: 40px;
}

.ag__seg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 9px;
  color: #ffffff;
  box-shadow: inset 0 -6px 14px rgba(0, 0, 0, 0.12);
}

.ag__seg b {
  font-size: 15px;
  font-weight: 700;
}

.ag__seg em {
  font-style: normal;
  font-size: 12.5px;
  font-weight: 500;
  opacity: 0.9;
  font-variant-numeric: tabular-nums;
}

.ag__legend {
  margin-top: 9px;
  display: flex;
  justify-content: center;
  gap: 34px;
  font-size: 13px;
  color: var(--ink-soft);
}

.ag__legend b {
  color: var(--ink-strong);
  font-variant-numeric: tabular-nums;
}
</style>
