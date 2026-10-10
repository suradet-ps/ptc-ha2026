<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import DonutGauge from '@/components/charts/DonutGauge.vue'
import { dataNote, medErrorIpd, medErrorOpd, rdu, safetyResults } from '@/data/metrics'

interface KpiRow {
  name: string
  target: string
  result: string
  trend: 'down' | 'up' | 'flat'
  trendLabel: string
  status: string
  statusCls: 'ok' | 'warn'
}

const passedPercent = Math.round((rdu.passed / rdu.total) * 1000) / 10

const rows: readonly KpiRow[] = [
  {
    name: 'ME Prescribing ผู้ป่วยนอก',
    target: '≤ 5 ต่อ 1,000 ใบสั่งยา',
    result: medErrorOpd.prescribing[4]!.toFixed(2),
    trend: 'down',
    trendLabel: 'ลดลงจาก 4.35',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'ME Prescribing ผู้ป่วยใน',
    target: '≤ 5 ต่อ 1,000 วันนอน',
    result: medErrorIpd.prescribing[4]!.toFixed(2),
    trend: 'down',
    trendLabel: 'ลดลงจาก 2.54',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'ME ระดับ E ขึ้นไป',
    target: '0 ครั้ง',
    result: '0 ครั้ง',
    trend: 'flat',
    trendLabel: 'ต่อเนื่อง 5 ปี',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'อุบัติการณ์แพ้ยาซ้ำ',
    target: '0 ครั้ง',
    result: '0 ครั้ง',
    trend: 'flat',
    trendLabel: 'ต่อเนื่อง 5 ปี',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'ตัวชี้วัด RDU',
    target: 'ครบ 12 ข้อ',
    result: `ผ่าน ${rdu.passed} ข้อ`,
    trend: 'flat',
    trendLabel: 'อยู่ระหว่างแก้ไข',
    status: 'เฝ้าติดตาม',
    statusCls: 'warn',
  },
]

const trendIcon = { down: 'trend-down', up: 'trend-up', flat: 'trend-flat' } as const
</script>

<template>
  <SlideLayout :n="9">
    <template #head-extra>
      <span class="chip"><Icon name="calendar-check" :size="14" />ติดตามทุกไตรมาส</span>
      <span class="chip chip--navy"><Icon name="gauge" :size="14" />รายงานต่อ PTC</span>
    </template>

    <div class="kpi__body">
      <div class="kpi__tablewrap anim anim-2">
        <table class="kpi-table">
          <thead>
            <tr>
              <th>ตัวชี้วัด</th>
              <th>เป้าหมาย</th>
              <th>ผลลัพธ์</th>
              <th>แนวโน้ม</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.name">
              <td class="kpi__name">{{ row.name }}</td>
              <td>{{ row.target }}</td>
              <td class="num">{{ row.result }}</td>
              <td>
                <span
                  class="kpi__trend"
                  :class="row.trend === 'flat' && row.statusCls === 'warn' ? 'kpi__trend--warn' : 'kpi__trend--ok'"
                >
                  <Icon :name="trendIcon[row.trend]" :size="15" />
                  {{ row.trendLabel }}
                </span>
              </td>
              <td>
                <span class="chip" :class="row.statusCls === 'ok' ? 'chip--ok' : 'chip--gold'">
                  <Icon :name="row.statusCls === 'ok' ? 'check' : 'gauge'" :size="12" />
                  {{ row.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="footnote">{{ dataNote }}</p>
      </div>

      <div class="stack gap-sm kpi__side">
        <div class="card kpi__donut anim anim-3">
          <DonutGauge
            :value="passedPercent"
            :value-text="`${rdu.passed}/${rdu.total}`"
            :size="126"
            color="#c9a227"
            label="ตัวชี้วัด RDU ที่ผ่าน"
          />
          <p class="kpi__donut-note">อีก 1 ข้อ อยู่ระหว่างแก้ไขระบบข้อมูล HDC</p>
        </div>

        <div class="card kpi__stat anim anim-4">
          <span class="icon-badge icon-badge--ok"><Icon name="shield" :size="18" /></span>
          <div>
            <p class="kpi__stat-value">{{ safetyResults.levelEUp }} <span>ครั้ง</span></p>
            <p class="kpi__stat-label">ME ระดับ E ขึ้นไป ต่อเนื่อง 5 ปี</p>
          </div>
        </div>

        <div class="card kpi__stat anim anim-4">
          <span class="icon-badge icon-badge--ok"><Icon name="check-circle" :size="18" /></span>
          <div>
            <p class="kpi__stat-value">{{ safetyResults.repeatedAllergy }} <span>ครั้ง</span></p>
            <p class="kpi__stat-label">อุบัติการณ์การแพ้ยาซ้ำ</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.kpi__body {
  display: grid;
  grid-template-columns: 1.52fr 1fr;
  gap: 18px;
  flex: 1;
  min-height: 0;
  margin-top: 14px;
}

.kpi__tablewrap {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.kpi__tablewrap .footnote {
  margin-top: 10px;
}

.kpi__name {
  font-weight: 500;
  color: var(--ink-strong);
}

.kpi__trend {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
}

.kpi__trend--ok {
  color: var(--ok);
}

.kpi__trend--warn {
  color: var(--warn);
}

.kpi__side {
  min-height: 0;
}

.kpi__donut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
}

.kpi__donut-note {
  font-size: 12.5px;
  color: var(--warn);
  font-weight: 500;
}

.kpi__stat {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 10px 16px;
}

.kpi__stat-value {
  font-size: 21px;
  font-weight: 700;
  color: var(--ink-strong);
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
}

.kpi__stat-value span {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-faint);
}

.kpi__stat-label {
  font-size: 12.5px;
  color: var(--ink-soft);
  margin-top: 1px;
}
</style>
