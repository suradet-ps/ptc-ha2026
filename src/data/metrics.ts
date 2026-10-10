/* ข้อมูลตัวอย่างสำหรับสาธิตการนำเสนอ
   ต้องแทนที่ด้วยตัวเลขจริงจากรายงาน KPI ของโรงพยาบาลก่อนนำเสนอจริง */

export const medicationError = {
  unit: 'ต่อ 1,000 วันนอน',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [6.8, 5.9, 4.6, 3.3, 2.4],
  target: 3.0,
  targetLabel: 'เป้าหมาย < 3.0',
  latest: 2.4,
}

export const adrReports = {
  unit: 'ราย/ปี',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [28, 33, 38, 42, 47],
  target: 40,
  targetLabel: 'เป้าหมาย ≥ 40',
  latest: 47,
}

export const rduScore = {
  unit: '%',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [54, 58, 61, 65, 68],
  target: 70,
  targetLabel: 'เป้าหมาย ≥ 70%',
  latest: 68,
}

export const antibioticDdd = {
  unit: 'DDD/1,000 วันนอน',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [42.5, 39.8, 36.4, 33.9, 31.6],
  latest: 31.6,
  change: -25.6,
}

export const drugShortage = {
  unit: 'วัน',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [4.6, 3.8, 3.1, 2.4, 1.8],
  target: 3,
  targetLabel: 'เป้าหมาย ≤ 3 วัน',
  latest: 1.8,
}

export const highAlertCompliance = {
  unit: '%',
  latest: 98.5,
  target: 100,
}

export const amsCompliance = {
  unit: '%',
  years: ['2564', '2565', '2566', '2567', '2568'],
  series: [72, 78, 83, 88, 92],
  latest: 92,
}

export const pdsa = {
  title: 'ลดความคลาดเคลื่อนยาระดับรุนแรงในยากลุ่ม High Alert',
  before: 4.8,
  after: 1.7,
  reduction: 64,
  period: 'ต.ค. 2567 - มี.ค. 2568',
  unit: 'ต่อ 1,000 วันนอน',
}

export const casePolypharmacy = {
  title: 'ลดความคลาดเคลื่อนทางยาในผู้ป่วยสูงอายุ',
  errorBefore: 6.2,
  errorAfter: 2.6,
  reduction: 58,
  period: '6 เดือน',
  unit: 'ต่อ 1,000 วันนอน',
}

export const caseTelepharmacy = {
  title: 'Telepharmacy สู่ รพ.สต. เครือข่าย',
  adherenceBefore: 58,
  adherenceAfter: 82,
  stations: 12,
  period: '12 เดือน',
}

export const medRec = {
  admission: 100,
  transfer: 100,
  discharge: 100,
}

export const medicationSafety = {
  highAlertUnits: 14,
  lasaPairs: 23,
  adrReports: 47,
  nearMissReports: 63,
}
