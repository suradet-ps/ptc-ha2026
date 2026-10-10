<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'

const showcases = [
  {
    year: '2568',
    src: '/images/moph-2025.jpeg',
    alt: 'นำเสนอผลงานนวัตกรรม งานประชุมวิชาการสาธารณสุข ประจำปี 2568',
  },
  {
    year: '2569',
    src: '/images/moph-2026.jpeg',
    alt: 'นำเสนอผลงานนวัตกรรม งานประชุมวิชาการสาธารณสุข ประจำปี 2569',
  },
]
</script>

<template>
  <SlideLayout :n="11">
    <template #head-extra>
      <span class="chip chip--gold"><Icon name="award" :size="14" />ตัวแทนเขตสุขภาพที่ 4</span>
      <span class="chip chip--ok"><Icon name="check-circle" :size="14" />เวทีระดับประเทศ 2 ปีซ้อน</span>
    </template>

    <div class="case__grid anim anim-2">
      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--gold"><Icon name="award" :size="19" /></span>
          <div>
            <h3 class="case__title">นำเสนอผลงานนวัตกรรมระดับประเทศ</h3>
            <p class="case__period">งานประชุมวิชาการสาธารณสุข ประจำปี 2568 และ 2569</p>
          </div>
        </header>
        <p class="case__desc">
          กลุ่มงานเภสัชกรรม โรงพยาบาลสระโบสถ์ ได้รับคัดเลือกเป็นตัวแทนเขตสุขภาพที่ 4
          นำเสนอผลงานวิชาการนวัตกรรมบนเวทีระดับประเทศ 2 ปีซ้อน
        </p>
        <div class="case__shots">
          <figure v-for="s in showcases" :key="s.year" class="case__shot">
            <img :src="s.src" :alt="s.alt" />
            <figcaption class="case__shot-year">ปี {{ s.year }}</figcaption>
          </figure>
        </div>
      </article>

      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--navy"><Icon name="users" :size="19" /></span>
          <div>
            <h3 class="case__title">โรงพยาบาลโคกเจริญศึกษาดูงาน</h3>
            <p class="case__period">แลกเปลี่ยนเรียนรู้การใช้งานโปรแกรม INVS</p>
          </div>
        </header>
        <p class="case__desc">
          โรงพยาบาลโคกเจริญเข้าศึกษาดูงานการใช้งานโปรแกรม INVS ระบบจัดซื้อและบริหารคลังเวชภัณฑ์ยา
          ของโรงพยาบาลสระโบสถ์ เพื่อนำไปปรับใช้ต่อยอดในพื้นที่
        </p>
        <div class="case__photo">
          <img src="/images/invs-meet.jpeg" alt="โรงพยาบาลโคกเจริญศึกษาดูงานการใช้งานโปรแกรม INVS" />
        </div>
        <footer class="case__foot">
          <span class="chip chip--navy"><Icon name="package" :size="13" />INVS · จัดซื้อและบริหารคลังเวชภัณฑ์ยา</span>
        </footer>
      </article>
    </div>

    <div class="case__strip anim anim-3">
      <span class="case__strip-label">
        <Icon name="sparkle" :size="15" />
        ความภาคภูมิใจของกลุ่มงานเภสัชกรรม โรงพยาบาลสระโบสถ์
      </span>
      <span class="case__strip-note">
        <Icon name="check-circle" :size="14" />
        นวัตกรรมที่สร้างชื่อเสียงและความเชื่อมั่นในระดับประเทศ
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

.case__shots {
  flex: 1;
  min-height: 0;
  margin-top: 11px;
  display: flex;
  gap: 10px;
}

.case__shot {
  position: relative;
  flex: 1;
  min-width: 0;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: var(--surface-tint);
}

.case__shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.case__shot-year {
  position: absolute;
  left: 9px;
  bottom: 9px;
  padding: 3px 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(7, 38, 63, 0.72);
}

.case__photo {
  flex: 1;
  min-height: 0;
  margin-top: 11px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: var(--surface-tint);
}

.case__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.case__foot {
  display: flex;
  gap: 8px;
  padding-top: 9px;
}

.case__strip {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.case__strip-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ha-gold-deep);
}

.case__strip-label svg {
  color: var(--ha-gold-deep);
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
