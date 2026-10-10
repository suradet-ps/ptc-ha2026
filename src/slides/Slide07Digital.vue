<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SlideLayout from '@/components/SlideLayout.vue'

const systems = [
  {
    name: 'TB Plus',
    desc: 'โปรแกรมบริหารจัดการคลินิกวัณโรค',
    src: '/images/tb-plus.png',
    alt: 'โปรแกรม TB Plus บริหารจัดการคลินิกวัณโรค',
    pos: 'top left',
  },
  {
    name: 'Warfarin Care',
    desc: 'โปรแกรมบริหารจัดการคลินิกยาวาร์ฟาริน',
    src: '/images/warfarin-care.png',
    alt: 'โปรแกรม Warfarin Care ติดตาม INR ผู้ป่วยยาวาร์ฟาริน',
    pos: 'top left',
  },
  {
    name: 'One Pharm',
    desc: 'ระบบประเมินประสิทธิภาพการบริหารคลังยา',
    src: '/images/one-pharm.png',
    alt: 'ระบบ One Pharm ประเมินประสิทธิภาพการบริหารคลังยา',
    pos: 'top center',
  },
  {
    name: 'HOSxP DASH',
    desc: 'Dashboard ดูปริมาณการใช้ยาของโรงพยาบาล',
    src: '/images/hosxp-dash.png',
    alt: 'ระบบ HOSxP DASH แสดงปริมาณการใช้ยาของโรงพยาบาล',
    pos: 'top left',
  },
]
</script>

<template>
  <SlideLayout :n="7">
    <template #head-extra>
      <span class="chip chip--gold"><Icon name="sparkle" :size="14" />นวัตกรรมดิจิทัลของทีม 4 ระบบ</span>
      <span class="chip chip--ok"><Icon name="check-circle" :size="14" />ใช้งานจริงในโรงพยาบาล</span>
    </template>

    <div class="dig__grid anim anim-2">
      <figure v-for="s in systems" :key="s.name" class="dig__tile">
        <img :src="s.src" :alt="s.alt" :style="{ objectPosition: s.pos }" />
        <figcaption class="dig__cap">
          <p class="dig__cap-name">
            <Icon name="monitor" :size="15" />
            {{ s.name }}
          </p>
          <p class="dig__cap-desc">{{ s.desc }}</p>
        </figcaption>
      </figure>
    </div>
  </SlideLayout>
</template>

<style scoped>
.dig__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  flex: 1;
  min-height: 0;
  margin-top: 14px;
}

.dig__tile {
  position: relative;
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #ffffff;
  box-shadow: var(--shadow-card);
}

.dig__tile img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dig__cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 34px 16px 12px;
  background: linear-gradient(to top, rgba(7, 38, 63, 0.92), rgba(7, 38, 63, 0));
}

.dig__cap-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15.5px;
  font-weight: 600;
  color: #ffffff;
}

.dig__cap-name svg {
  flex: none;
  color: #9cc6ec;
}

.dig__cap-desc {
  margin-top: 2px;
  font-size: 12.5px;
  color: #cfe3f5;
}
</style>
