<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import LogoMark from '@/components/LogoMark.vue'
import { config } from '@/data/config'
</script>

<template>
  <article class="slide slide--dark title">
    <div class="title__ring title__ring--one" />
    <div class="title__ring title__ring--two" />

    <div class="title__main">
      <div class="title__left">
        <p class="title__kicker anim anim-1">HA Standard 6th Edition</p>
        <h1 class="title__headline anim anim-2">
          ระบบยาโรงพยาบาล
          <span class="title__rule" />
        </h1>
        <p class="title__sub anim anim-3">
          การนำเสนอต่อ{{ config.audience }}
        </p>
        <p class="title__sub2 anim anim-3">
          ตาม{{ config.standard }}
        </p>

        <div class="title__quote anim anim-4">
          <Icon name="target" :size="18" />
          <span>ระบบยาโรงพยาบาลเป็นวาระขององค์กร ไม่ใช่แค่ฝ่ายเภสัชกรรม</span>
        </div>
      </div>

      <div class="title__right anim anim-3">
        <div class="title__card">
          <LogoMark :size="96" />
          <p class="title__hospital">{{ config.hospitalName }}</p>
          <p class="title__team">{{ config.teamName }}</p>
          <div class="title__badges">
            <span class="title__badge">15 นาที</span>
            <span class="title__badge title__badge--gold">HA ฉบับที่ 6</span>
          </div>
        </div>
      </div>
    </div>

    <div class="title__meta anim anim-4">
      <span><Icon name="users" :size="16" />{{ config.teamName }}</span>
      <span class="title__dot" />
      <span><Icon name="calendar" :size="16" />{{ config.presentationDate }}</span>
      <span class="title__dot" />
      <span><Icon name="clock" :size="16" />นำเสนอ 14:30 + สำรอง 0:30</span>
    </div>

    <div class="title__strip">
      <span class="title__strip-red" />
      <span class="title__strip-gold" />
      <span class="title__strip-blue" />
    </div>
  </article>
</template>

<style scoped>
.title {
  padding: 58px 68px 34px;
  justify-content: space-between;
}

.title__ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.14);
  pointer-events: none;
}

.title__ring--one {
  width: 560px;
  height: 560px;
  top: -220px;
  right: -140px;
}

.title__ring--two {
  width: 380px;
  height: 380px;
  top: -60px;
  right: 60px;
  border-color: rgba(250, 15, 12, 0.35);
}

.title__main {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 44px;
  align-items: center;
  flex: 1;
}

.title__kicker {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #9cc6ec;
}

.title__kicker::after {
  content: '+';
  color: var(--ha-red);
  font-size: 21px;
  margin-left: 6px;
}

.title__headline {
  margin-top: 14px;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.22;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.title__rule {
  display: block;
  width: 96px;
  height: 6px;
  margin-top: 20px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--ha-red) 0%, var(--ha-gold) 100%);
}

.title__sub {
  margin-top: 22px;
  font-size: 24px;
  font-weight: 500;
  color: #eaf3fb;
  line-height: 1.5;
}

.title__sub2 {
  margin-top: 6px;
  font-size: 19px;
  color: #a9c9e6;
  line-height: 1.5;
}

.title__quote {
  margin-top: 26px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.09);
  border-left: 4px solid var(--ha-red);
  font-size: 17.5px;
  font-weight: 500;
  color: #ffffff;
}

.title__quote svg {
  color: var(--ha-gold);
  flex: none;
}

.title__right {
  display: flex;
  justify-content: flex-end;
}

.title__card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  padding: 30px 26px 26px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
}

.title__hospital {
  font-size: 21px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 4px;
  text-align: center;
}

.title__team {
  font-size: 15px;
  color: #a9c9e6;
  margin-top: -6px;
}

.title__badges {
  display: flex;
  gap: 9px;
  margin-top: 5px;
}

.title__badge {
  font-size: 13.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(13, 95, 168, 0.5);
  border: 1px solid rgba(140, 195, 240, 0.4);
  color: #eaf3fb;
}

.title__badge--gold {
  background: rgba(234, 204, 85, 0.16);
  border-color: rgba(234, 204, 85, 0.55);
  color: var(--ha-gold);
}

.title__meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  color: #b9d3ea;
  padding-bottom: 22px;
}

.title__meta span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.title__meta svg {
  color: #72a6d6;
}

.title__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.title__strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 7px;
  display: flex;
}

.title__strip-red {
  flex: 1;
  background: var(--ha-red);
}

.title__strip-gold {
  flex: 1;
  background: var(--ha-gold);
}

.title__strip-blue {
  flex: 2;
  background: linear-gradient(90deg, var(--ha-blue), var(--ha-navy));
}
</style>
