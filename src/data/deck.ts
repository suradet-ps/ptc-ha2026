export interface SlideMeta {
  readonly n: number
  readonly slug: string
  readonly nav: string
  readonly kicker: string
  readonly title: string
  readonly keyMessage: string
  readonly standardRef?: string
  readonly minutes: number
  readonly notes: string
  readonly evidence: readonly string[]
}

export const deck: readonly SlideMeta[] = [
  {
    n: 1,
    slug: 'title',
    nav: 'Title',
    kicker: 'HA Standard 6th Edition',
    title: 'ระบบยาโรงพยาบาล',
    keyMessage: 'ระบบยาโรงพยาบาลเป็นวาระขององค์กร ไม่ใช่แค่ฝ่ายเภสัชกรรม',
    minutes: 0.5,
    notes:
      'เรียนทีมสำรวจฯ วันนี้ทีมระบบยาจะนำเสนอภาพรวมระบบยาใน 15 นาที โดยเน้นการกำกับดูแล ความปลอดภัย และผลลัพธ์ตามมาตรฐานฉบับที่ 6 พร้อมแผนพัฒนาที่ตอบข้อเสนอแนะของทีมสำรวจครับ/ค่ะ',
    evidence: ['เอกสารแต่งตั้งทีมระบบยา', 'แผนพัฒนาระบบยา'],
  },
  {
    n: 2,
    slug: 'agenda',
    nav: 'Agenda',
    kicker: 'Agenda',
    title: 'ภาพรวมการนำเสนอ 6 ประเด็นหลัก',
    keyMessage: 'การนำเสนอครอบคลุม 6 ประเด็นหลักของระบบยา',
    minutes: 0.5,
    notes:
      'ผม/ดิฉันจะไล่ตั้งแต่โครงสร้างการกำกับดูแล การคัดเลือกยา ความปลอดภัย การใช้ยาสมเหตุผล เทคโนโลยี ไปจนถึงตัวชี้วัดและแผนพัฒนาที่ตอบข้อเสนอแนะครับ/ค่ะ',
    evidence: ['วาระการประชุม PTC'],
  },
  {
    n: 3,
    slug: 'governance',
    nav: 'Governance',
    kicker: 'Governance',
    title: 'Governance / PTC',
    keyMessage: 'PTC เป็นกลไกหลักในการกำกับดูแลระบบยาทั้งองค์กร',
    standardRef: 'II-6.1 ก (1)',
    minutes: 1.5,
    notes:
      'PTC ของเราทำงานร่วมกับ รพ.สต. ทั้ง 5 แห่งและทีมนำทางคลินิก มีตัวอย่างจริงคือการทบทวนบัญชียาเพิ่ม Atorvastatin 40 mg ในกลุ่ม ASCVD ความคลาดเคลื่อนทางยาทุกรายรายงานต่อคณะกรรมการความเสี่ยงทุกเดือน และทีมพัฒนา PTC Monitor (ptcos.rxdevman.com) เป็นระบบติดตามแผนพัฒนาคุณภาพยาและมติที่ประชุม PTC แบบ Real-time ครับ/ค่ะ',
    evidence: [
      'คำสั่งแต่งตั้ง PTC',
      'รายงานการประชุม PTC และมติบัญชียา 1/2567',
      'รายงานความคลาดเคลื่อนต่อคณะกรรมการความเสี่ยง',
      'ระบบ PTC Monitor (ptcos.rxdevman.com)',
    ],
  },
  {
    n: 4,
    slug: 'selection',
    nav: 'Selection',
    kicker: 'Selection & Procurement',
    title: 'การคัดเลือกและจัดหายา',
    keyMessage: 'ใช้หลักฐานเชิงประจักษ์ และมีระบบสำรองที่มั่นคง',
    standardRef: 'II-6.1 ค',
    minutes: 1.5,
    notes:
      'ปัจจุบันโรงพยาบาลมียา 306 รายการ โดยร้อยละ 97.6 อยู่ในบัญชียาหลักแห่งชาติ ทีมเราพัฒนา DrugLists Web App สำหรับบริหารบัญชียา ราคา และสถานะการใช้งานแบบ Real-time ด้านคลังยาใช้โปรแกรม INVS จัดซื้อและบริหารเวชภัณฑ์ พร้อมส่งข้อมูล 5 แฟ้มให้กระทรวงสาธารณสุข หากยาขาดจะยืมจากโรงพยาบาลแม่ข่าย และมีจุดสำรองยา 2 จุดพร้อม Emergency box ใช้เมื่อห้องยาปิดครับ/ค่ะ',
    evidence: [
      'ระบบ DrugLists และบัญชียาโรงพยาบาล',
      'โปรแกรม INVS และการส่งข้อมูล 5 แฟ้ม',
      'บัญชีรายการยาสำรอง 2 จุด และ Emergency box',
      'บันทึกตรวจสอบสต๊อกยารายเดือน',
    ],
  },
  {
    n: 5,
    slug: 'safety',
    nav: 'Safety',
    kicker: 'Medication Safety',
    title: 'ความปลอดภัยด้านยา',
    keyMessage: 'ความปลอดภัยด้านยาเป็นหัวใจของระบบยา',
    standardRef: 'II-6.1 ก (5) · II-6.2 ก (2)',
    minutes: 2,
    notes:
      'High Alert 14 รายการมีแนวทางสั่งใช้เหมือนกันทั้งองค์กร ความคลาดเคลื่อนทุกรายรายงานผ่าน NRLS เข้าสู่การวิเคราะห์ RCA และในปีนี้ไม่มีเหตุรุนแรงระดับ E ขึ้นไปเลยครับ/ค่ะ',
    evidence: [
      'แนวทาง High Alert 14 รายการ (ระดับ 1 จำนวน 3 รายการ)',
      'รายงาน Medication Error ผ่าน NRLS',
      'รายงาน RCA และรายงาน ADR',
    ],
  },
  {
    n: 6,
    slug: 'rdu-ams',
    nav: 'RDU / AMS',
    kicker: 'RDU / AMS',
    title: 'การใช้ยาสมเหตุผลและ AMS',
    keyMessage: 'ใช้ยาสมเหตุผลครบ 12 ตัวชี้วัด และกำกับยาปฏิชีวนะอย่างเข้มงวด',
    standardRef: 'II-6.1 ก (2)',
    minutes: 1.5,
    notes:
      'ตัวชี้วัด RDU ผ่าน 11 จาก 12 ข้อ อีก 1 ข้อเราวิเคราะห์แล้วว่าเกิดจากข้อจำกัดของระบบข้อมูล HDC และอยู่ระหว่างประสานแก้ไข ส่วนยาปฏิชีวนะนอกบัญชีต้องมีใบ consult แพทย์เฉพาะทางหรือผลเพาะเชื้อทุกครั้งครับ/ค่ะ',
    evidence: [
      'รายงานตัวชี้วัด RDU 12 ข้อ (HDC)',
      'แนวทางสั่งยาปฏิชีวนะนอกบัญชีโรงพยาบาล',
      'รายงานการทบทวนคำสั่งใช้ยาโดยเภสัชกร',
    ],
  },
  {
    n: 7,
    slug: 'digital',
    nav: 'Digital Health',
    kicker: 'Digital Health & AI',
    title: 'เทคโนโลยีดิจิทัลและแผน AI',
    keyMessage: 'ต่อยอดระบบดิจิทัลที่มีอยู่ สู่ AI-Assisted Drug Alert',
    standardRef: 'II-6.1 ข (4) · II-6.2 ก (3)',
    minutes: 1.5,
    notes:
      'ระบบ HOSxP ของเราเตือนข้อควรระวังและข้อห้ามใช้ เช่น ผู้ป่วย G6PD ตั้งครรภ์ และ Warfarin มีระบบ scan order และเภสัชกรทบทวนทุกคำสั่ง และมีแผนต่อยอดสู่ AI-Assisted Drug Alert ตามข้อเสนอแนะครับ/ค่ะ',
    evidence: [
      'ระบบ HOSxP: Drug Alert, Scan Order',
      'แบบบันทึกการทบทวนคำสั่งใช้ยาของเภสัชกร',
      'แผน CQI: AI-Assisted Drug Alert',
    ],
  },
  {
    n: 8,
    slug: '3p-safety',
    nav: '3P Safety',
    kicker: '3P Safety',
    title: 'ความปลอดภัย 3 มิติ',
    keyMessage: 'ความปลอดภัยต้องครอบคลุมทั้งผู้ป่วย เจ้าหน้าที่ และสาธารณะ',
    standardRef: 'II-6.1 ข (1) · II-6.2 ค',
    minutes: 1,
    notes:
      'ความปลอดภัยของเราครอบคลุมผู้ป่วยจากตัวชี้วัดความคลาดเคลื่อน เจ้าหน้าที่จากการอบรมและการประเมินความรู้ก่อนขึ้นเวรนอกเวลา และสาธารณะผ่านการออกหน่วยปฐมภูมิและห่วงโซ่ความเย็นวัคซีนครับ/ค่ะ',
    evidence: [
      'บันทึกอบรม HAD ADR Med Rec (3-4 เม.ย. 2567)',
      'ใบประเมินความรู้เจ้าพนักงานเภสัชกรรมก่อนขึ้นเวร',
      'รายงานการออกหน่วยปฐมภูมิและ Cold Chain วัคซีน',
    ],
  },
  {
    n: 9,
    slug: 'kpi',
    nav: 'KPI Dashboard',
    kicker: 'KPI Dashboard',
    title: 'ตัวชี้วัดระบบยา',
    keyMessage: 'ตัวชี้วัดสะท้อนผลลัพธ์และใช้ขับเคลื่อนการพัฒนา',
    standardRef: 'II-6.1 ก (3)',
    minutes: 1.5,
    notes:
      'ตัวชี้วัดความคลาดเคลื่อนทุกประเภทผ่านเป้าหมาย ระดับ E ขึ้นไปและแพ้ยาซ้ำเป็นศูนย์ต่อเนื่อง เหลือเพียงตัวชี้วัด RDU 1 ข้อที่อยู่ระหว่างแก้ไขระบบข้อมูลครับ/ค่ะ',
    evidence: [
      'ตารางผลลัพธ์ II-6 ปี 2563 - 2567',
      'Dashboard ระบบยา',
      'รายงาน KPI ต่อ PTC รายไตรมาส',
    ],
  },
  {
    n: 10,
    slug: 'pdsa',
    nav: 'PDSA',
    kicker: 'Continuous Improvement',
    title: 'การปรับปรุงต่อเนื่องด้วย PDSA',
    keyMessage: 'เราแก้ปัญหาด้วยข้อมูลและวัดผลได้จริง',
    standardRef: 'II-6.2 ก',
    minutes: 1,
    notes:
      'ตัวอย่าง PDSA จริงคือการยกเลิก copy order แล้วเปลี่ยนเป็น scan order ให้เภสัชกรคัดลอกคำสั่งแทนพยาบาล ทำให้ transcribing error ผู้ป่วยในลดจาก 0.42 เหลือ 0.03 ต่อพันวันนอนครับ/ค่ะ',
    evidence: [
      'รายงาน RCA Transcribing error',
      'แนวปฏิบัติ Scan Order และเภสัชกรคัดลอกคำสั่ง',
      'รายงาน PDSA ต่อ PTC',
    ],
  },
  {
    n: 11,
    slug: 'case-study',
    nav: 'Case Study',
    kicker: 'Case Study',
    title: 'ผลสำเร็จที่จับต้องได้',
    keyMessage: 'ผลลัพธ์จริงจากการทำงานเชิงรุกของทีมเภสัชกรรม',
    standardRef: 'II-6.2 ก (2) · ข (5)',
    minutes: 1,
    notes:
      'จุดที่ภาคภูมิใจคือการบริบาลเภสัชกรรมผู้ป่วยในทุกรายที่รับนอน และการออกหน่วยปฐมภูมิที่มีเภสัชกรจ่ายยาร่วมกับแพทย์ที่ รพ.สต. รวมถึงคลินิกโรคเรื้อรังที่เภสัชกรค้นหาปัญหาการใช้ยาก่อนพบแพทย์ครับ/ค่ะ',
    evidence: [
      'รายงานบริบาลเภสัชกรรมผู้ป่วยในและ Med Rec',
      'รายงานการออกหน่วยปฐมภูมิ รพ.สต.นิยมชัย',
      'รายงานคลินิกโรคเรื้อรัง (Ambulatory Care)',
    ],
  },
  {
    n: 12,
    slug: 'roadmap',
    nav: 'Roadmap',
    kicker: 'Roadmap',
    title: 'แผนพัฒนาระบบยา 3 ปี',
    keyMessage: 'แผนพัฒนาเชิงรุกตอบข้อเสนอแนะ สรพ. ครบทุกประเด็น',
    standardRef: 'II-6.1 ก (1)(iv)',
    minutes: 0.75,
    notes:
      'แผนทั้ง 3 ระยะตอบข้อเสนอแนะของทีมสำรวจครบทุกประเด็น ตั้งแต่ทีมความปลอดภัยด้านยา การตามรอยแนวปฏิบัติ ไปจนถึง AI-Assisted Drug Alert โดยมีตัวชี้วัดความสำเร็จชัดเจนและทบทวนทุก 6 เดือนครับ/ค่ะ',
    evidence: [
      'แผน CQI ตอบข้อเสนอแนะ สรพ. (19-20 ก.พ. 2568)',
      'แผนยุทธศาสตร์ระบบยาและแผนงบประมาณ',
    ],
  },
  {
    n: 13,
    slug: 'thanks',
    nav: 'Thank You',
    kicker: 'Thank You & Q&A',
    title: 'ขอบคุณครับ/ค่ะ',
    keyMessage: 'ขอบคุณและพร้อมให้ข้อมูลเพิ่มเติม',
    minutes: 0.25,
    notes:
      'ขอบคุณทีมสำรวจฯ ครับ/ค่ะ หากมีข้อซักถามทีมระบบยาพร้อมให้ข้อมูลและหลักฐานเพิ่มเติมครับ/ค่ะ',
    evidence: ['รายชื่อผู้รับผิดชอบ', 'ช่องทางติดต่อ'],
  },
]

export const slideCount = deck.length

export const plannedMinutes = deck.reduce((sum, slide) => sum + slide.minutes, 0)

export function cumulativeSecondsThrough(n: number): number {
  return deck
    .filter((slide) => slide.n <= n)
    .reduce((sum, slide) => sum + slide.minutes * 60, 0)
}
