/* ปรับข้อมูลทั้งหมดของโรงพยาบาลได้ที่ไฟล์นี้ไฟล์เดียว */

export const config = {
  hospitalName: 'โรงพยาบาลสระโบสถ์',
  hospitalShort: 'รพ.สระโบสถ์',
  teamName: 'ทีมระบบยา',
  committeeName: 'คณะกรรมการเภสัชกรรมและการบำบัด (PTC)',
  presenter: 'ภก. สุรเดช ประถมศักดิ์',
  presentationDate: 'ตุลาคม 2569',
  audience: 'ทีมสำรวจ HA / สรพ.',
  standard: 'มาตรฐานโรงพยาบาลและบริการสุขภาพ ฉบับที่ 6',
  totalMinutes: 15,
  plannedMinutes: 14.5,
  bufferMinutes: 0.5,
  contact: {
    phone: '0-0000-0000',
    email: 'pharmacy@hospital.go.th',
  },
  /* แสดงป้าย "ข้อมูลตัวอย่าง" ในสไลด์ที่อ้างอิงตัวเลข KPI
     ปัจจุบันใช้ข้อมูลจริงจากรายงานของโรงพยาบาลแล้ว จึงปิดป้ายไว้ */
  showDemoBadge: false,
} as const
