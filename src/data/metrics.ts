/* ข้อมูลจริงจากเอกสารของโรงพยาบาล
   ที่มา: รายงานตัวชี้วัดโรงพยาบาล ปี 2569 (ต.ค. 2568 - มิ.ย. 2569)
   และรายงาน II-6 ระบบการจัดการด้านยา */

export const dataNote = '2569* = ข้อมูลปี 2569 (ต.ค. 2568 - มิ.ย. 2569)'

export const years = ['2563', '2564', '2565', '2566', '2567', '2568', '2569*']

export const medErrorOpd = {
  unit: 'ต่อ 1,000 ใบสั่งยา',
  target: 5,
  prescribing: [3.14, 2.12, 4.12, 4.35, 2.13, 0.57, 0.09],
  transcribing: [0.65, 0.34, 0.12, 0.11, 0.11, 0, 0],
  preDispensing: [7.52, 6.23, 7.45, 8.45, 5.45, 1, 0.17],
  dispensing: [1.04, 0.54, 0.45, 0.34, 0.2, 0.03, 0.06],
  administration: [0, 0, 0, 0, 0.02, 0, 0],
}

export const medErrorIpd = {
  unit: 'ต่อ 1,000 วันนอน',
  target: 5,
  prescribing: [1.44, 1.34, 2.01, 2.54, 1.23, 0.61, 0],
  transcribing: [0.42, 0.21, 0.06, 0.05, 0.03, 0.4, 0],
  preDispensing: [6.54, 5.14, 6.23, 7.12, 2.14, 0.4, 0],
  dispensing: [1.21, 0.84, 0.56, 0.21, 0.08, 0.4, 0.13],
  administration: [0.69, 0.65, 0.54, 0.45, 0.21, 0.61, 0.13],
}

export const safetyResults = {
  levelEUp: 0,
  repeatedAllergy: 0,
  rcaRate: 100,
}

export const rdu = {
  total: 12,
  passed: 9,
  period: 'ปี 2569',
  failedItems: [
    {
      label: 'ยาปฏิชีวนะในโรคติดเชื้อที่ระบบการหายใจช่วงบนและหลอดลมอักเสบเฉียบพลันในผู้ป่วยนอก',
      value: '50.97% · เป้า < 20',
    },
    {
      label: 'ยาปฏิชีวนะในบาดแผลสดจากอุบัติเหตุ',
      value: '58.47% · เป้า < 40',
    },
    {
      label: 'ผู้ป่วยนอกโรคหืดได้รับยา inhaled corticosteroid',
      value: '73% · เป้า > 80',
    },
  ],
  failedDetail: 'อยู่ระหว่างทบทวนแนวทางสั่งใช้ยาและติดตามผลผ่าน HDC',
}

export const drugInventory = {
  /* จำนวนยาปัจจุบันจากระบบ DrugLists ณ ต.ค. 2569 (รายงาน II-6 เดิม 293 รายการ) */
  total: 306,
  edPercent: 97.61,
  nedPercent: 2.39,
  reservePoints: 2,
  emergencyBoxes: 2,
  stockCheck: 'เภสัชกรตรวจร่วมกับพยาบาลเดือนละ 1 ครั้ง และพยาบาลตรวจเช็คทุกวัน',
}

export const highAlert = {
  total: 14,
  level1Count: 3,
  level1: ['Norepinephrine inj.', 'KCl inj.', 'rt-PA (Alteplase)'],
  level2Count: 11,
}

export const pdsaTranscribing = {
  title: 'ลด Transcribing error ด้วย Scan Order',
  before: 0.42,
  after: 0,
  reduction: 100,
  unit: 'ต่อ 1,000 วันนอน',
  period: '2563 - 2569*',
  opdBefore: 0.65,
  opdAfter: 0,
}

export const hospitalScale = {
  pharmacists: 3,
  pharmacyStaffTotal: 7,
  subDistricts: 5,
  opdPrescriptions: 64982,
  ipdPatientDays: 5441,
}
