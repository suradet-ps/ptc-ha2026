<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import DonutGauge from '@/components/charts/DonutGauge.vue'
import { adrReports, drugShortage, highAlertCompliance } from '@/data/metrics'

interface KpiRow {
  name: string
  target: string
  result: string
  trend: 'down' | 'up' | 'flat'
  trendLabel: string
  status: string
  statusCls: 'ok' | 'warn'
}

const rows: readonly KpiRow[] = [
  {
    name: 'Medication Error Rate',
    target: '< 3.0 ต่อ 1,000 วันนอน',
    result: '2.4',
    trend: 'down',
    trendLabel: 'ลดลง 5 ปีต่อเนื่อง',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'ADR Report',
    target: '≥ 40 ราย/ปี',
    result: '47 ราย',
    trend: 'up',
    trendLabel: 'เพิ่มการรายงาน',
    status: 'ผ่าน',
    statusCls: 'ok',
  },
  {
    name: 'RDU Score',
    target: '≥ 70%',
    result: '68%',
    trend: 'flat',
    trendLabel: 'ใกล้เป้าหมาย',
    status: 'เฝ้าติดตาม',
    statusCls: 'warn',
  },
  {
    name: 'High Alert Compliance',
    target: '100%',
    result: '98.5%',
    trend: 'up',
    trendLabel: 'พัฒนาต่อเนื่อง',
    status: 'เฝ้าติดตาม',
    statusCls: 'warn',
  },
  {
    name: 'Drug Shortage Resolution',
    target: '≤ 3 วัน',
    result: '1.8 วัน',
    trend: 'down',
    trendLabel: 'เร็วขึ้นทุกปี',
    status: 'ผ่าน',
    statusCls: 'ok',
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
                <span class="kpi__trend" :class="row.trend === 'flat' ? 'kpi__trend--warn' : 'kpi__trend--ok'">
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
        <p class="footnote">
          ตัวเลขเป็นผลลัพธ์ปี 2568 · ทบทวนเป้าหมายร่วมกับ PTC ปีละครั้ง
        </p>
      </div>

      <div class="stack gap-sm kpi__side">
        <div class="card kpi__donut anim anim-3">
          <DonutGauge
            :value="highAlertCompliance.latest"
            :value-text="`${highAlertCompliance.latest}%`"
            :size="128"
            color="#c9a227"
            label="High Alert Compliance"
          />
          <p class="kpi__donut-note">เหลืออีก 1.5% สู่เป้าหมาย 100%</p>
        </div>

        <div class="card kpi__stat anim anim-4">
          <span class="icon-badge icon-badge--ok"><Icon name="trend-up" :size="18" /></span>
          <div>
            <p class="kpi__stat-value">{{ adrReports.latest }} <span>ราย/ปี</span></p>
            <p class="kpi__stat-label">ADR Report เพิ่มขึ้นต่อเนื่อง</p>
          </div>
        </div>

        <div class="card kpi__stat anim anim-4">
          <span class="icon-badge"><Icon name="trend-down" :size="18" /></span>
          <div>
            <p class="kpi__stat-value">{{ drugShortage.latest }} <span>วัน</span></p>
            <p class="kpi__stat-label">เวลาคืนสภาพยาขาดเร็วขึ้น</p>
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
