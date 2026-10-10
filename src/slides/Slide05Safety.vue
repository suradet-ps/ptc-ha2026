<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import TrendChart from '@/components/charts/TrendChart.vue'
import { highAlert, medErrorIpd, medErrorOpd, safetyResults, years, dataNote } from '@/data/metrics'

const blocks = [
  {
    icon: 'alert' as const,
    tone: 'icon-badge--red',
    title: 'High Alert Drugs',
    detail: `แนวทางสั่งใช้เหมือนกันทั้งองค์กร · ระดับ 1: ${highAlert.level1.join(' · ')}`,
    chip: `${highAlert.total} รายการ`,
    chipCls: 'chip--red',
  },
  {
    icon: 'pill' as const,
    tone: 'icon-badge--gold',
    title: 'Look-alike / Sound-alike',
    detail:
      'จัดเก็บห่างกัน · สติ๊กเกอร์เตือน · ตัวอย่างจริง Metformin/Norfloxacin, Allopurinol/Enalapril',
    chip: 'แก้ไขเชิงระบบ',
    chipCls: 'chip--gold',
  },
  {
    icon: 'clipboard-check' as const,
    tone: 'icon-badge',
    title: 'Medication Reconciliation',
    detail: 'ผู้ป่วยในทุกราย · สอบถามยาเดิมผ่านไลน์กลุ่มจังหวัด หรือโทรศัพท์',
    chip: '100% ผู้ป่วยใน',
    chipCls: 'chip--ok',
  },
  {
    icon: 'flask' as const,
    tone: 'icon-badge--navy',
    title: 'การรายงานและ RCA',
    detail: 'รายงานผ่าน NRLS ทุกเดือน · RCA ทุกเหตุการณ์ · แผน Online ADR',
    chip: 'RCA ทุกเหตุการณ์',
    chipCls: 'chip--navy',
  },
]

const medRecNodes = ['Admission', 'ทบทวนระหว่างนอน', 'Discharge']

const series = [
  { name: 'ผู้ป่วยนอก (Prescribing)', color: '#fa0f0c', data: medErrorOpd.prescribing },
  { name: 'ผู้ป่วยใน (Prescribing)', color: '#0d5fa8', data: medErrorIpd.prescribing },
]
</script>

<template>
  <SlideLayout :n="5">
    <template #head-extra>
      <span class="chip chip--red">
        <Icon name="alert" :size="14" />High Alert {{ highAlert.total }} รายการ (ระดับ 1: {{ highAlert.level1Count }})
      </span>
      <span class="chip chip--ok">
        <Icon name="check" :size="14" />ระดับ E ขึ้นไป {{ safetyResults.levelEUp }} ครั้ง
      </span>
    </template>

    <div class="split--wide-right saf__body">
      <div class="saf__grid anim anim-2">
        <article v-for="b in blocks" :key="b.title" class="card saf__card">
          <div class="saf__card-head">
            <span class="icon-badge" :class="b.tone">
              <Icon :name="b.icon" :size="19" />
            </span>
            <span class="chip" :class="b.chipCls">{{ b.chip }}</span>
          </div>
          <h3 class="saf__card-title">{{ b.title }}</h3>
          <p class="saf__card-detail">{{ b.detail }}</p>
        </article>
      </div>

      <div class="stack gap-md">
        <div class="card card--tint saf__medrec anim anim-3">
          <p class="saf__medrec-title">
            <Icon name="refresh" :size="16" />
            แผนภาพ Medication Reconciliation
            <span class="saf__medrec-note">ผู้ป่วยในทุกราย</span>
          </p>
          <div class="saf__medrec-flow">
            <template v-for="(node, i) in medRecNodes" :key="node">
              <div class="saf__medrec-node">
                <b>{{ node }}</b>
              </div>
              <Icon v-if="i < medRecNodes.length - 1" name="arrow-right" :size="18" class="saf__medrec-arrow" />
            </template>
          </div>
        </div>

        <div class="card saf__chart anim anim-4">
          <div class="saf__chart-head">
            <p class="saf__chart-title">
              <Icon name="trend-down" :size="17" />
              แนวโน้ม Prescribing error
            </p>
            <span class="chip chip--ok"><Icon name="check" :size="13" />ต่ำกว่าเป้าหมายทุกปี</span>
          </div>
          <TrendChart
            :series="series"
            :labels="years"
            :target="medErrorOpd.target"
            target-label="เป้าหมาย ≤ 5"
            :height="204"
            :decimals="2"
          />
          <p class="footnote">หน่วย: OPD ต่อ 1,000 ใบสั่งยา · IPD ต่อ 1,000 วันนอน · {{ dataNote }}</p>
        </div>
      </div>
    </div>
  </SlideLayout>
</template>

<style scoped>
.saf__body {
  display: grid;
  grid-template-columns: 0.98fr 1.02fr;
  gap: 20px;
  flex: 1;
  min-height: 0;
  margin-top: 16px;
}

.saf__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 14px;
}

.saf__card {
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.saf__card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.saf__card-title {
  margin-top: 10px;
  font-size: 16.5px;
  font-weight: 600;
  color: var(--ink-strong);
  line-height: 1.3;
}

.saf__card-detail {
  margin-top: 5px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.saf__medrec {
  padding: 13px 16px 14px;
}

.saf__medrec-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 10px;
}

.saf__medrec-title svg {
  color: var(--ha-blue);
}

.saf__medrec-flow {
  display: flex;
  align-items: center;
  gap: 8px;
}

.saf__medrec-node {
  flex: 1;
  text-align: center;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 6px;
}

.saf__medrec-node b {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.saf__medrec-note {
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  color: var(--ok);
}

.saf__medrec-arrow {
  color: var(--ha-blue);
  flex: none;
}

.saf__chart {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 16px 10px;
  min-height: 0;
}

.saf__chart-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.saf__chart-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15.5px;
  font-weight: 600;
  color: var(--ink-strong);
}

.saf__chart-title svg {
  color: var(--ok);
}
</style>
