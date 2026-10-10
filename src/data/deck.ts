export interface SlideMeta {
  readonly n: number
  readonly slug: string
  readonly nav: string
  readonly kicker: string
  readonly title: string
  readonly keyMessage: string
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
      'เรียนทีมสำรวจฯ วันนี้ทีมระบบยาจะนำเสนอภาพรวมระบบยาใน 15 นาที โดยเน้นการกำกับดูแล ความปลอดภัย และผลลัพธ์ตามมาตรฐานฉบับที่ 6 ครับ/ค่ะ',
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
      'ผม/ดิฉันจะไล่ตั้งแต่โครงสร้างการกำกับดูแล การคัดเลือกยา ความปลอดภัย การใช้ยาสมเหตุผล เทคโนโลยี ไปจนถึงตัวชี้วัดและกรณีตัวอย่างครับ/ค่ะ',
    evidence: ['วาระการประชุม PTC'],
  },
  {
    n: 3,
    slug: 'governance',
    nav: 'Governance',
    kicker: 'Governance',
    title: 'Governance / PTC',
    keyMessage: 'PTC เป็นกลไกหลักในการกำกับดูแลระบบยาทั้งองค์กร',
    minutes: 1.5,
    notes:
      'จุดแข็งของเราคือ PTC ไม่ได้เป็นเพียงที่ประชุม แต่เป็นกลไกตัดสินใจระดับองค์กร มีผู้บริหารร่วมเป็นประธาน ทำให้การขับเคลื่อนระบบยามีน้ำหนักและเชื่อมโยงทุกฝ่ายครับ/ค่ะ',
    evidence: ['คำสั่งแต่งตั้ง PTC', 'รายงานการประชุมย้อนหลัง 12 เดือน', 'นโยบายระบบยา'],
  },
  {
    n: 4,
    slug: 'selection',
    nav: 'Selection',
    kicker: 'Selection & Procurement',
    title: 'การคัดเลือกและจัดหายา',
    keyMessage: 'ใช้หลักฐานเชิงประจักษ์ และมีระบบสำรองที่มั่นคง',
    minutes: 1.5,
    notes:
      'เราไม่ได้จัดหายาตามความคุ้นเคย แต่มีกระบวนการทบทวนหลักฐานและมีระบบแจ้งเตือนเมื่อยาขาด เพื่อให้ผู้ป่วยได้รับยาต่อเนื่องครับ/ค่ะ',
    evidence: ['บัญชียาโรงพยาบาล', 'รายงานการขาดยา', 'สัญญาจัดซื้อจัดจ้าง'],
  },
  {
    n: 5,
    slug: 'safety',
    nav: 'Safety',
    kicker: 'Medication Safety',
    title: 'ความปลอดภัยด้านยา',
    keyMessage: 'ความปลอดภัยด้านยาเป็นหัวใจของระบบยา',
    minutes: 2,
    notes:
      'เรามีระบบป้องกันความคลาดเคลื่อนทางยาหลายชั้น ตั้งแต่การสั่งยา การจ่ายยา การให้ยา ไปจนถึงการติดตามอาการไม่พึงประสงค์ และมีการวิเคราะห์สาเหตุเชิงระบบทุกครั้งครับ/ค่ะ',
    evidence: ['นโยบาย High Alert', 'รายงาน Medication Error', 'รายงาน ADR'],
  },
  {
    n: 6,
    slug: 'rdu-ams',
    nav: 'RDU / AMS',
    kicker: 'RDU / AMS',
    title: 'การใช้ยาสมเหตุผลและ AMS',
    keyMessage: 'RDU และ Antimicrobial Stewardship ช่วยลด AMR',
    minutes: 1.5,
    notes:
      'ทีม AMS ของเราประกอบด้วยแพทย์ เภสัชกร พยาบาล และจุลชีววิทยา ร่วมกันทบทวนการใช้ยาต้านจุลชีพทุกวัน ทำให้สามารถปรับแนวทางให้สอดคล้องกับผลเพาะเชื้อในโรงพยาบาลครับ/ค่ะ',
    evidence: ['นโยบาย AMS', 'รายงาน RDU', 'Antibiotic Guideline'],
  },
  {
    n: 7,
    slug: 'digital',
    nav: 'Digital Health',
    kicker: 'Digital Health & AI',
    title: 'เทคโนโลยีดิจิทัลและ AI',
    keyMessage: 'เทคโนโลยีดิจิทัลและ AI ยกระดับความปลอดภัยและการเข้าถึง',
    minutes: 1.5,
    notes:
      'ตามมาตรฐานฉบับที่ 6 ที่ให้ความสำคัญกับ Digital Health เราได้นำ AI มาช่วยคัดกรองใบสั่งยา และมี Telepharmacy ที่ทำให้ รพ.สต. เครือข่ายเข้าถึงเภสัชกรได้ครับ/ค่ะ',
    evidence: ['ระบบ IT ที่ใช้งาน', 'รายงานผลการคัดกรอง', 'ข้อมูลการให้บริการ Telepharmacy'],
  },
  {
    n: 8,
    slug: '3p-safety',
    nav: '3P Safety',
    kicker: '3P Safety',
    title: 'ความปลอดภัย 3 มิติ',
    keyMessage: 'ความปลอดภัยต้องครอบคลุมทั้งผู้ป่วย เจ้าหน้าที่ และสาธารณะ',
    minutes: 1,
    notes:
      'มาตรฐานฉบับที่ 6 เน้น 3P Safety เราจึงไม่ได้ดูแลแค่ผู้ป่วย แต่รวมถึงเจ้าหน้าที่ที่เตรียมยา และสาธารณะจากการจัดการยาหมดอายุและ AMR ครับ/ค่ะ',
    evidence: ['นโยบายความปลอดภัยเจ้าหน้าที่', 'โครงการทิ้งยาอย่างปลอดภัย'],
  },
  {
    n: 9,
    slug: 'kpi',
    nav: 'KPI Dashboard',
    kicker: 'KPI Dashboard',
    title: 'ตัวชี้วัดระบบยา',
    keyMessage: 'ตัวชี้วัดสะท้อนผลลัพธ์และใช้ขับเคลื่อนการพัฒนา',
    minutes: 1.5,
    notes:
      'ตัวชี้วัดเหล่านี้ถูกติดตามทุกไตรมาส และรายงานต่อ PTC เพื่อนำไปสู่การปรับปรุงครับ/ค่ะ ตัวเลขบางตัวดีขึ้นอย่างชัดเจนหลังทำ PDSA',
    evidence: ['รายงาน KPI รายไตรมาส', 'Dashboard ระบบยา'],
  },
  {
    n: 10,
    slug: 'pdsa',
    nav: 'PDSA',
    kicker: 'Continuous Improvement',
    title: 'การปรับปรุงต่อเนื่องด้วย PDSA',
    keyMessage: 'เราแก้ปัญหาด้วยข้อมูล ไม่ใช่ความรู้สึก',
    minutes: 1,
    notes:
      'ตัวอย่างนี้แสดงให้เห็นว่าเราไม่ได้แก้ปัญหาด้วยความรู้สึก แต่ใช้ข้อมูลนำไปสู่วงจร PDSA และขยายผลอย่างเป็นระบบครับ/ค่ะ',
    evidence: ['รายงานโครงการ PDSA', 'เอกสารปรับปรุงนโยบาย'],
  },
  {
    n: 11,
    slug: 'case-study',
    nav: 'Case Study',
    kicker: 'Case Study',
    title: 'ผลสำเร็จที่จับต้องได้',
    keyMessage: 'ผลลัพธ์จริงจากการทำงานร่วมกันของคนและเทคโนโลยี',
    minutes: 1,
    notes:
      'กรณีนี้เป็นตัวอย่างที่เราภูมิใจ เพราะแสดงถึงการทำงานร่วมกันระหว่างเทคโนโลยีและเภสัชกร จนลดความเสี่ยงให้ผู้ป่วยได้จริงครับ/ค่ะ',
    evidence: ['รายงานโครงการ', 'ข้อมูล adherence'],
  },
  {
    n: 12,
    slug: 'roadmap',
    nav: 'Roadmap',
    kicker: 'Roadmap',
    title: 'แผนพัฒนาระบบยา 3 ปี',
    keyMessage: 'แผนพัฒนาต่อเนื่องให้สอดคล้องมาตรฐานฉบับที่ 6',
    minutes: 0.75,
    notes:
      'แผนต่อไปของเราคือขยายระบบดิจิทัลให้ครอบคลุมมากขึ้น และยกระดับสู่ closed-loop medication เพื่อความปลอดภัยสูงสุดครับ/ค่ะ',
    evidence: ['แผนยุทธศาสตร์ระบบยา', 'แผนงบประมาณ'],
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
