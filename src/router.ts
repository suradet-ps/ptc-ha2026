import { createRouter, createWebHashHistory } from 'vue-router'

/* ใช้ hash routing เพื่อให้ deep link และปุ่ม back/forward ของเบราว์เซอร์
   ทำงานร่วมกับสไลด์ได้ โดยไม่ต้องตั้งค่า rewrite ฝั่งเซิร์ฟเวอร์
   ตัวสไลด์ถูกจัดการโดย deck shell ใน App.vue จึงไม่ต้องมี RouterView */

const placeholder = { template: '<span />' }

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/1' },
    { path: '/:n(\\d+)', name: 'slide', component: placeholder },
    { path: '/:pathMatch(.*)*', redirect: '/1' },
  ],
})
