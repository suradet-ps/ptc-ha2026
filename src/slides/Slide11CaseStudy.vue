<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'

const showcases = [
  {
    year: '2568',
    src: '/images/moph-2025.jpeg',
    alt: 'นำเสนอผลงานนวัตกรรม งานประชุมวิชาการสาธารณสุข ประจำปี 2568',
    pos: '80% top',
  },
  {
    year: '2569',
    src: '/images/moph-2026.jpeg',
    alt: 'นำเสนอผลงานนวัตกรรม งานประชุมวิชาการสาธารณสุข ประจำปี 2569',
    pos: 'center top',
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
            <p class="case__period">ตัวแทนเขตสุขภาพที่ 4 · 2568 และ 2569</p>
          </div>
        </header>
        <p class="case__desc">
          กลุ่มงานเภสัชกรรมได้รับคัดเลือกเป็นตัวแทนเขตสุขภาพที่ 4
          นำเสนอผลงานนวัตกรรมบนเวทีระดับประเทศ 2 ปีซ้อน
        </p>
        <div class="case__shots">
          <figure v-for="s in showcases" :key="s.year" class="case__shot">
            <img :src="s.src" :alt="s.alt" :style="{ objectPosition: s.pos }" />
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
          ศึกษาดูงานระบบจัดซื้อและบริหารคลังเวชภัณฑ์ยาของโรงพยาบาลสระโบสถ์
          เพื่อนำไปปรับใช้ต่อยอดในพื้นที่
        </p>
        <div class="case__photo">
          <img src="/images/invs-meet.jpeg" alt="โรงพยาบาลโคกเจริญศึกษาดูงานการใช้งานโปรแกรม INVS" />
        </div>
        <footer class="case__foot">
          <span class="chip chip--navy"><Icon name="package" :size="13" />INVS · คลังเวชภัณฑ์ยา</span>
        </footer>
      </article>

      <article class="card case__card">
        <header class="case__head">
          <span class="icon-badge icon-badge--ok"><Icon name="shield" :size="19" /></span>
          <div>
            <h3 class="case__title">ผ่านมาตรฐานความปลอดภัยด้านยา</h3>
            <p class="case__period">ประจำปี 2569 · กระทรวงสาธารณสุข</p>
          </div>
        </header>
        <p class="case__desc">
          ผ่านเกณฑ์การประเมินมาตรฐานความปลอดภัยด้านยา ทุกหัวข้อการประเมิน
          ได้รับเกียรติบัตรจากกระทรวงสาธารณสุข
        </p>
        <div class="case__photo case__photo--doc">
          <img src="/images/dasp.png" alt="เกียรติบัตรผ่านมาตรฐานความปลอดภัยด้านยา จากกระทรวงสาธารณสุข" />
        </div>
        <footer class="case__foot">
          <span class="chip chip--ok"><Icon name="check" :size="13" />ผ่านทุกหัวข้อการประเมิน</span>
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
        สร้างชื่อเสียงและความเชื่อมั่นต่อระบบยาของโรงพยาบาล
      </span>
    </div>
  </SlideLayout>
</template>

<style scoped>
.case__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  flex: 1;
  min-height: 0;
  margin-top: 12px;
}

.case__card {
  display: flex;
  flex-direction: column;
  padding: 13px 15px 11px;
  min-height: 0;
}

.case__head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.case__head .icon-badge {
  width: 34px;
  height: 34px;
}

.case__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-strong);
  line-height: 1.3;
}

.case__period {
  font-size: 12px;
  color: var(--ink-faint);
  margin-top: 2px;
}

.case__desc {
  margin-top: 8px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.case__shots {
  flex: 1;
  min-height: 0;
  margin-top: 10px;
  display: flex;
  gap: 8px;
}

.case__shot {
  position: relative;
  flex: 1;
  min-width: 0;
  margin: 0;
  border-radius: 11px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: var(--surface-tint);
}

.case__shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case__shot-year {
  position: absolute;
  left: 7px;
  bottom: 7px;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(7, 38, 63, 0.72);
}

.case__photo {
  flex: 1;
  min-height: 0;
  margin-top: 10px;
  border-radius: 11px;
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

.case__photo--doc {
  background: #ffffff;
}

.case__photo--doc img {
  object-fit: contain;
  object-position: center;
}

.case__foot {
  display: flex;
  gap: 8px;
  padding-top: 9px;
}

.case__strip {
  margin-top: 10px;
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
