<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { config } from '@/data/config'

const emit = defineEmits<{ close: [] }>()

const shortcuts: readonly { keys: string; label: string }[] = [
  { keys: '→ / Space', label: 'สไลด์ถัดไป' },
  { keys: '←', label: 'สไลด์ก่อนหน้า' },
  { keys: 'Home / End', label: 'สไลด์แรก / สไลด์สุดท้าย' },
  { keys: '1 - 9 (กดต่อเนื่อง)', label: 'ไปยังสไลด์ที่ต้องการ เช่น 1 2 = สไลด์ 12' },
  { keys: 'S หรือ N', label: 'เปิด/ปิดโน้ตผู้บรรยาย' },
  { keys: 'O', label: 'ภาพรวมสไลด์ทั้งหมด' },
  { keys: 'F', label: 'เต็มหน้าจอ' },
  { keys: 'T', label: 'เริ่ม/หยุดจับเวลา (ดับเบิลคลิกเพื่อรีเซ็ต)' },
  { keys: '?', label: 'หน้าคีย์ลัดนี้' },
  { keys: 'Esc', label: 'ปิดหน้าต่างซ้อน' },
]
</script>

<template>
  <div class="help deck-ui" @click.self="emit('close')">
    <div class="help__card">
      <header class="help__head">
        <div>
          <p class="help__kicker">คู่มือการนำเสนอ</p>
          <h3>คีย์ลัดและเคล็ดลับ</h3>
        </div>
        <button class="help__close" @click="emit('close')">
          <Icon name="x" :size="18" />
        </button>
      </header>

      <div class="help__cols">
        <section>
          <h4>คีย์ลัด</h4>
          <ul class="help__list">
            <li v-for="s in shortcuts" :key="s.keys">
              <kbd>{{ s.keys }}</kbd>
              <span>{{ s.label }}</span>
            </li>
          </ul>
        </section>

        <section>
          <h4>ก่อนนำเสนอ</h4>
          <ul class="help__bullets">
            <li>กด <kbd>F</kbd> เพื่อเต็มหน้าจอ แล้วกด <kbd>T</kbd> เริ่มจับเวลา</li>
            <li>เปิดโน้ตผู้บรรยายด้วย <kbd>S</kbd> ระบบจะย่อสไลด์ให้อัตโนมัติ</li>
            <li>ซ้อมจริงจับเวลา 15 นาที ตามแผนเวลาของแต่ละสไลด์</li>
            <li>
              สำรองข้อมูล: กด <kbd>Ctrl / Cmd + P</kbd> เลือก Save as PDF ขนาดกระดาษ
              "297mm x 167mm" เปิด Background graphics
            </li>
            <li>เตรียมแฟ้มหลักฐานตามรายการในโน้ตของแต่ละสไลด์</li>
          </ul>
          <p class="help__std">{{ config.standard }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.help {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  background: rgba(3, 14, 25, 0.82);
  backdrop-filter: blur(8px);
  padding: 24px;
}

.help__card {
  width: min(880px, 100%);
  background: #0a2338;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  padding: 26px 30px 30px;
  color: #d9e6f0;
}

.help__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.help__kicker {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6f93b1;
}

.help__head h3 {
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 4px;
}

.help__close {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #a9c0d4;
}

.help__close:hover {
  background: rgba(250, 15, 12, 0.3);
  color: #ffffff;
}

.help__cols {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 30px;
}

.help__cols h4 {
  font-size: 14px;
  font-weight: 600;
  color: #8fb4d4;
  margin-bottom: 12px;
}

.help__list {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.help__list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #cfe0ee;
}

.help__bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.help__bullets li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.6;
  color: #cfe0ee;
}

.help__bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--ha-red);
  transform: rotate(45deg);
}

kbd {
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  white-space: nowrap;
}

.help__std {
  margin-top: 16px;
  font-size: 12.5px;
  color: #6f93b1;
}

@media (max-width: 760px) {
  .help__cols {
    grid-template-columns: 1fr;
  }
}
</style>
