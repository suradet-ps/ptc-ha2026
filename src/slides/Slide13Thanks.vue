<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import LogoMark from '@/components/LogoMark.vue'
import { config } from '@/data/config'

const evidence = [
  'คำสั่งแต่งตั้ง PTC / AMS / ทีมระบบยา',
  'นโยบายระบบยา High Alert RDU AMS',
  'รายงานการประชุม PTC 12 เดือน',
  'รายงาน Medication Error / ADR',
  'รายงาน KPI รายไตรมาส',
  'รายงาน PDSA และแผนพัฒนาระบบยา',
]
</script>

<template>
  <article class="slide slide--dark thanks">
    <div class="thanks__ring thanks__ring--one" />
    <div class="thanks__ring thanks__ring--two" />

    <div class="thanks__main">
      <div class="thanks__left">
        <p class="thanks__kicker anim anim-1">Thank You &amp; Q&amp;A</p>
        <h1 class="thanks__headline anim anim-2">
          ขอบคุณครับ/ค่ะ
          <span class="thanks__rule" />
        </h1>
        <p class="thanks__sub anim anim-3">
          ทีมระบบยายินดีให้ข้อมูลและหลักฐานเพิ่มเติมทุกประเด็น
        </p>

        <div class="thanks__contacts anim anim-4">
          <span class="thanks__contact">
            <Icon name="users" :size="16" />{{ config.teamName }} · {{ config.presenter }}
          </span>
          <span class="thanks__contact">
            <Icon name="phone" :size="16" />{{ config.contact.phone }}
          </span>
          <span class="thanks__contact">
            <Icon name="mail" :size="16" />{{ config.contact.email }}
          </span>
        </div>
      </div>

      <div class="thanks__card anim anim-3">
        <p class="thanks__card-title">
          <Icon name="folder" :size="17" />
          หลักฐานพร้อมแสดงต่อทีมสำรวจ
        </p>
        <ul class="thanks__list">
          <li v-for="item in evidence" :key="item">
            <Icon name="check" :size="14" />
            {{ item }}
          </li>
        </ul>
        <div class="thanks__badge">
          <LogoMark :size="42" />
          <div>
            <b>{{ config.hospitalName }}</b>
            <span>{{ config.standard }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="thanks__strip">
      <span class="thanks__strip-red" />
      <span class="thanks__strip-gold" />
      <span class="thanks__strip-blue" />
    </div>
  </article>
</template>

<style scoped>
.thanks {
  padding: 54px 68px 30px;
  justify-content: center;
}

.thanks__ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.13);
  pointer-events: none;
}

.thanks__ring--one {
  width: 520px;
  height: 520px;
  bottom: -240px;
  left: -160px;
}

.thanks__ring--two {
  width: 340px;
  height: 340px;
  bottom: -90px;
  left: 90px;
  border-color: rgba(234, 204, 85, 0.3);
}

.thanks__main {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 52px;
  align-items: center;
}

.thanks__kicker {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #9cc6ec;
}

.thanks__kicker::after {
  content: '+';
  color: var(--ha-red);
  font-size: 21px;
  margin-left: 6px;
}

.thanks__headline {
  margin-top: 12px;
  font-size: 58px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
}

.thanks__rule {
  display: block;
  width: 96px;
  height: 6px;
  margin-top: 18px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--ha-red) 0%, var(--ha-gold) 100%);
}

.thanks__sub {
  margin-top: 20px;
  font-size: 20px;
  color: #cfe3f5;
  line-height: 1.55;
}

.thanks__contacts {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.thanks__contact {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #b9d3ea;
}

.thanks__contact svg {
  color: #72a6d6;
  flex: none;
}

.thanks__card {
  padding: 24px 26px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.thanks__card-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 14px;
}

.thanks__card-title svg {
  color: var(--ha-gold);
}

.thanks__list {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.thanks__list li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 14px;
  line-height: 1.5;
  color: #cfe0ee;
}

.thanks__list svg {
  flex: none;
  margin-top: 3px;
  color: #8fd6ac;
}

.thanks__badge {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  align-items: center;
  gap: 13px;
}

.thanks__badge b {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
}

.thanks__badge span {
  display: block;
  font-size: 12px;
  color: #9cc0dd;
  margin-top: 2px;
}

.thanks__strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 7px;
  display: flex;
}

.thanks__strip-red {
  flex: 1;
  background: var(--ha-red);
}

.thanks__strip-gold {
  flex: 1;
  background: var(--ha-gold);
}

.thanks__strip-blue {
  flex: 2;
  background: linear-gradient(90deg, var(--ha-blue), var(--ha-navy));
}
</style>
