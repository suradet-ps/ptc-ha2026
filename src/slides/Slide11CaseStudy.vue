<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'
import { hospitalScale, safetyResults } from '@/data/metrics'

const factors = [
  { icon: 'users' as const, label: `ทีมเภสัชกร ${hospitalScale.pharmacists} คน ทำงานเชิงรุก` },
  { icon: 'database' as const, label: 'เทคโนโลยี HOSxP' },
  { icon: 'network' as const, label: `เครือข่าย รพ.สต. ${hospitalScale.subDistricts} แห่ง` },
]
</script>

<template>
  <SlideLayout :n="11">
    <template #head-extra>
      <span class="chip chip--ok"><Icon name="award" :size="14" />ผลงานเด่นจากรายงาน II-6</span>
    </template>

    <div class="case__grid anim anim-2">
      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--red"><Icon name="user-check" :size="19" /></span>
          <div>
            <h3 class="case__title">บริบาลเภสัชกรรมผู้ป่วยใน + Med Rec</h3>
            <p class="case__period">ผู้ป่วยในทุกรายที่รับนอน</p>
          </div>
        </header>
        <p class="case__desc">
          เภสัชกรประสานรายการยาเดิม สอนเทคนิคพิเศษ ประเมิน ADR และค้นหาปัญหาการใช้ยาก่อนจำหน่าย
        </p>

        <div class="case__stats">
          <div class="case__stat">
            <span class="case__stat-value case__stat-value--ok">{{ safetyResults.levelEUp }}</span>
            <span class="case__stat-label">ME ระดับ E ขึ้นไป (ครั้ง)</span>
          </div>
          <div class="case__stat">
            <span class="case__stat-value case__stat-value--ok">{{ safetyResults.repeatedAllergy }}</span>
            <span class="case__stat-label">แพ้ยาซ้ำ (ครั้ง)</span>
          </div>
          <div class="case__stat">
            <span class="case__stat-value">100%</span>
            <span class="case__stat-label">ผู้ป่วยในที่ทำ Med Rec</span>
          </div>
        </div>

        <footer class="case__foot">
          <span class="chip chip--ok"><Icon name="check" :size="13" />ต่อเนื่อง 5 ปี (2563 - 2567)</span>
        </footer>
      </article>

      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--navy"><Icon name="heart-pulse" :size="19" /></span>
          <div>
            <h3 class="case__title">เภสัชกรออกหน่วยจ่ายยาที่ รพ.สต.</h3>
            <p class="case__period">นำร่อง รพ.สต.นิยมชัย · เดือนละ 1 ครั้ง</p>
          </div>
        </header>
        <p class="case__desc">
          แพทย์ออกตรวจพร้อมเภสัชกรจ่ายยา ต่อยอด Ambulatory Care ในคลินิกโรคเรื้อรัง
          ค้นหายาเหลือใช้ก่อนพบแพทย์
        </p>

        <div class="case__stats">
          <div class="case__stat">
            <span class="case__stat-value">1<span class="case__stat-unit">ครั้ง/เดือน</span></span>
            <span class="case__stat-label">ออกหน่วยปฐมภูมิ</span>
          </div>
          <div class="case__stat">
            <span class="case__stat-value">{{ hospitalScale.subDistricts }}<span class="case__stat-unit">แห่ง</span></span>
            <span class="case__stat-label">รพ.สต. ในห่วงโซ่ความเย็นวัคซีน</span>
          </div>
          <div class="case__stat">
            <span class="case__stat-value">4<span class="case__stat-unit">คลินิก</span></span>
            <span class="case__stat-label">Ambulatory Care โรคเรื้อรัง</span>
          </div>
        </div>

        <footer class="case__foot">
          <span class="chip chip--navy"><Icon name="video" :size="13" />แพทย์ + เภสัชกรพร้อมกันในหน่วยเดียว</span>
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
        ผู้ป่วยนอก {{ hospitalScale.opdPrescriptions.toLocaleString('th-TH') }} ใบสั่งยา · ผู้ป่วยใน
        {{ hospitalScale.ipdPatientDays.toLocaleString('th-TH') }} วันนอนต่อปี
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
  font-size: 16px;
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
  font-size: 13px;
  line-height: 1.55;
  color: var(--ink-soft);
}

.case__stats {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 0 8px;
}

.case__stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--surface-tint);
  border: 1px solid var(--line-soft);
}

.case__stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--ha-blue-deep);
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.case__stat-value--ok {
  color: var(--ok);
}

.case__stat-unit {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-faint);
  margin-left: 3px;
}

.case__stat-label {
  font-size: 12px;
  line-height: 1.4;
  color: var(--ink-soft);
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
