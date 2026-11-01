/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { 
  NormalizedHistoricalEvent, 
  CanonicalDomainType, 
  RegionType, 
  PERIODS_BY_REGION 
} from '../types/history.ts';

// 歐洲五百大事 (IDs 1-500)
import { ancientEvents } from './ancient.ts';
import { romanEvents } from './roman.ts';
import { medievalEarlyEvents } from './medieval_early.ts';
import { medievalLateEvents } from './medieval_late.ts';
import { renaissanceEvents } from './renaissance.ts';
import { earlyModernEvents } from './early_modern.ts';
import { enlightenmentEvents } from './enlightenment.ts';
import { nineteenthEarlyEvents } from './nineteenth_early.ts';
import { nineteenthLateEvents } from './nineteenth_late.ts';
import { twentiethEarlyEvents } from './twentieth_early.ts';
import { twentiethLateEvents } from './twentieth_late.ts';
import { twentyfirstEvents } from './twentyfirst.ts';

// 亞非洲五百大事 (不含中國, IDs 501-1000)
import { ancientAfroAsiaEvents } from './afro_asia/ancient_afro_asia.ts';
import { classicalAfroAsiaEvents } from './afro_asia/classical_afro_asia.ts';
import { islamicGoldenEarlyEvents } from './afro_asia/islamic_golden_early.ts';
import { medievalAfroAsiaEvents } from './afro_asia/medieval_afro_asia.ts';
import { earlyModernAfroAsiaEvents } from './afro_asia/early_modern_afro_asia.ts';
import { eighteenthNineteenthEarlyAfroAsiaEvents } from './afro_asia/eighteenth_nineteenth_early_afro_asia.ts';
import { nineteenthLateAfroAsiaEvents } from './afro_asia/nineteenth_late_afro_asia.ts';
import { twentiethEarlyAfroAsiaEvents } from './afro_asia/twentieth_early_afro_asia.ts';
import { twentiethLateAfroAsiaEvents } from './afro_asia/twentieth_late_afro_asia.ts';
import { twentyfirstAfroAsiaEvents } from './afro_asia/twentyfirst_afro_asia.ts';

// 中國五百大事 (IDs 1001-1500)
import { ancientChinaEvents } from './china/ancient_china.ts';
import { medievalChinaEvents } from './china/medieval_china.ts';
import { songYuanChinaEvents } from './china/song_yuan_china.ts';
import { earlyModernChinaEvents } from './china/early_modern_china.ts';
import { contemporaryChinaEvents } from './china/contemporary_china.ts';

// 美澳洲一百大事 (IDs 1501-1600)
import { americasOceaniaEvents as rawAmericasOceaniaEvents } from './americas_oceania.ts';

/**
 * 領域分類標準化函數：
 * 將歷史資料庫中所有領域標記嚴格濃縮映射為 5 大文字完全不重複的領域：
 * 政治軍事、經濟貿易、科技工程、文學藝術、宗教哲理
 */
export function normalizeDomain(rawDomain: string, title = '', impact = ''): CanonicalDomainType {
  const d = String(rawDomain || '').trim();
  if (d.includes('軍事') || d.includes('政治') || d.includes('法律') || d.includes('征服')) {
    return '政治軍事';
  }
  if (d.includes('經濟') || d.includes('貿易')) {
    return '經濟貿易';
  }
  if (d.includes('科學') || d.includes('科技') || d.includes('醫學') || d.includes('工程')) {
    return '科技工程';
  }
  if (d.includes('文化') || d.includes('藝術') || d.includes('文學')) {
    return '文學藝術';
  }
  if (d.includes('宗教') || d.includes('哲學') || d.includes('思想') || d.includes('信仰') || d.includes('哲理')) {
    return '宗教哲理';
  }
  if (d.includes('探索') || d.includes('社會')) {
    if (/地理|航海|探索|地圖|運河|鐵路|登月|太空|極地|天文|探險|測量|望遠鏡/.test(title + impact)) {
      return '科技工程';
    }
    return '經濟貿易';
  }
  return '政治軍事';
}

/**
 * 歷史時期判定函數：
 * 嚴格符合數量限制：
 * - 歐洲 (< 6 個)：5 期 (古典希臘羅馬時代、中世紀與拜占庭、文藝復興與啟蒙革新、工業革命與國族爭鋒、世界大戰與當代歐洲)
 * - 亞非洲 (< 7 個)：6 期 (遠古尼羅與兩河文明、古典帝國與波斯泛希臘、伊斯蘭黃金時代與中古擴張、火藥帝國與前近代亞非、殖民抗爭與近代民族覺醒、戰後獨立與當代新亞非)
 * - 美澳洲 (< 4 個)：3 期 (原民文明與殖民建構、獨立革命與近代擴張、現代霸權與當代變革)
 * - 中國：8 期 (先秦文明與諸子百家、秦漢大一統與制度建構、魏晉南北朝分裂與融合、隋唐五代盛世與變革、兩宋遼金元大帝國、明清近世與東南轉型、晚清變局與近現代革命、當代兩岸與現代化進程)
 */
export function determinePeriod(region: RegionType, year: number, rawSubRegion?: string): string {
  if (region === '歐洲') {
    if (year <= 476) return '古典希臘羅馬時代';
    if (year <= 1491) return '中世紀與拜占庭';
    if (year <= 1788) return '文藝復興與啟蒙革新';
    if (year <= 1913) return '工業革命與國族爭鋒';
    return '世界大戰與當代歐洲';
  }

  if (region === '亞非洲') {
    if (year <= -501) return '遠古尼羅與兩河文明';
    if (year <= 621) return '古典帝國與波斯泛希臘';
    if (year <= 1257) return '伊斯蘭黃金時代與中古擴張';
    if (year <= 1799) return '火藥帝國與前近代亞非';
    if (year <= 1944) return '殖民抗爭與近代民族覺醒';
    return '戰後獨立與當代新亞非';
  }

  if (region === '美澳洲') {
    if (year <= 1775) return '原民文明與殖民建構';
    if (year <= 1913) return '獨立革命與近代擴張';
    return '現代霸權與當代變革';
  }

  // 中國：8 大歷史分期
  if (rawSubRegion && PERIODS_BY_REGION['中國'].includes(rawSubRegion)) {
    return rawSubRegion;
  }
  if (year < -221) return '先秦文明與諸子百家';
  if (year <= 220) return '秦漢大一統與制度建構';
  if (year <= 580) return '魏晉南北朝分裂與融合';
  if (year <= 959) return '隋唐五代盛世與變革';
  if (year <= 1367) return '兩宋遼金元大帝國';
  if (year <= 1839) return '明清近世與東南轉型';
  if (year <= 1948) return '晚清變局與近現代革命';
  return '當代兩岸與現代化進程';
}

/**
 * 單筆事件標準化包裝器：注入 period、5 大 domain、移除地理子區域 subRegion
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeEvent(raw: any, regionFallback: RegionType): NormalizedHistoricalEvent {
  const region: RegionType = (raw.region as RegionType) || regionFallback;
  const period = determinePeriod(region, raw.year, raw.subRegion);
  const domain = normalizeDomain(raw.domain, raw.title, raw.impactSummary);

  return {
    id: raw.id,
    region,
    period,
    century: raw.century,
    centuryNum: raw.centuryNum,
    year: raw.year,
    yearDisplay: raw.yearDisplay,
    title: raw.title,
    domain,
    figures: Array.isArray(raw.figures) ? raw.figures : [],
    timeContext: raw.timeContext || '',
    location: raw.location || '',
    artifactsOrLegacy: raw.artifactsOrLegacy || '',
    impactSummary: raw.impactSummary || '',
    impactScore: typeof raw.impactScore === 'number' ? raw.impactScore : 85,
    literatureCount: typeof raw.literatureCount === 'number' ? raw.literatureCount : 5000,
  };
}

// 歐洲五百大事 (IDs 1-500)
export const europeanEvents: NormalizedHistoricalEvent[] = [
  ...ancientEvents,
  ...romanEvents,
  ...medievalEarlyEvents,
  ...medievalLateEvents,
  ...renaissanceEvents,
  ...earlyModernEvents,
  ...enlightenmentEvents,
  ...nineteenthEarlyEvents,
  ...nineteenthLateEvents,
  ...twentiethEarlyEvents,
  ...twentiethLateEvents,
  ...twentyfirstEvents,
].map(e => normalizeEvent(e, '歐洲'));

// 亞非洲五百大事 (IDs 501-1000)
export const afroAsianEvents: NormalizedHistoricalEvent[] = [
  ...ancientAfroAsiaEvents,
  ...classicalAfroAsiaEvents,
  ...islamicGoldenEarlyEvents,
  ...medievalAfroAsiaEvents,
  ...earlyModernAfroAsiaEvents,
  ...eighteenthNineteenthEarlyAfroAsiaEvents,
  ...nineteenthLateAfroAsiaEvents,
  ...twentiethEarlyAfroAsiaEvents,
  ...twentiethLateAfroAsiaEvents,
  ...twentyfirstAfroAsiaEvents,
].map(e => normalizeEvent(e, '亞非洲'));

// 中國五百大事 (IDs 1001-1500)
export const chinaEvents: NormalizedHistoricalEvent[] = [
  ...ancientChinaEvents,
  ...medievalChinaEvents,
  ...songYuanChinaEvents,
  ...earlyModernChinaEvents,
  ...contemporaryChinaEvents,
].map(e => normalizeEvent(e, '中國'));

// 美澳洲一百大事 (IDs 1501-1600)
export const americasOceaniaEvents: NormalizedHistoricalEvent[] = rawAmericasOceaniaEvents.map(e =>
  normalizeEvent(e, '美澳洲')
);

// 全球一千六百大事整合數據庫 (500 歐洲 + 500 亞非洲 + 500 中國 + 100 美澳洲)
export const allHistoricalEvents: NormalizedHistoricalEvent[] = [
  ...europeanEvents,
  ...afroAsianEvents,
  ...chinaEvents,
  ...americasOceaniaEvents,
].sort((a, b) => a.id - b.id);

// 提取所有唯一世紀標籤列表，按照歷史年代自然順序排列
export const centuryList: string[] = Array.from(
  new Set(
    [...allHistoricalEvents]
      .sort((a, b) => a.year - b.year)
      .map(e => e.century)
  )
);

// 大洲篩選清單
export const regionFilterList = [
  '全部世界',
  '歐洲',
  '亞非洲',
  '中國',
  '美澳洲'
] as const;

// 領域篩選清單：5 大無重複字元分類
export const domainList = [
  '全部領域',
  '政治軍事',
  '經濟貿易',
  '科技工程',
  '文學藝術',
  '宗教哲理'
] as const;

// 取得特定大洲或全域所有時期清單的工具輔助函數
export function getPeriodsForRegion(region: string): string[] {
  if (region === '歐洲') return PERIODS_BY_REGION['歐洲'];
  if (region === '亞非洲') return PERIODS_BY_REGION['亞非洲'];
  if (region === '中國') return PERIODS_BY_REGION['中國'];
  if (region === '美澳洲') return PERIODS_BY_REGION['美澳洲'];
  // 全部世界：聚集所有唯一時期名稱
  return Array.from(
    new Set([
      ...PERIODS_BY_REGION['歐洲'],
      ...PERIODS_BY_REGION['亞非洲'],
      ...PERIODS_BY_REGION['中國'],
      ...PERIODS_BY_REGION['美澳洲']
    ])
  );
}

// 全局統計資訊
export const datasetStatistics = {
  totalEvents: allHistoricalEvents.length,
  europeanCount: europeanEvents.length,
  afroAsianCount: afroAsianEvents.length,
  chinaCount: chinaEvents.length,
  americasOceaniaCount: americasOceaniaEvents.length,
  earliestYear: allHistoricalEvents.reduce((min, e) => (e.year < min.year ? e : min), allHistoricalEvents[0]).yearDisplay,
  latestYear: allHistoricalEvents.reduce((max, e) => (e.year > max.year ? e : max), allHistoricalEvents[0]).yearDisplay,
  averageImpactScore: Math.round(
    allHistoricalEvents.reduce((acc, curr) => acc + curr.impactScore, 0) / allHistoricalEvents.length
  ),
  totalEstimatedLiterature: allHistoricalEvents.reduce((acc, curr) => acc + curr.literatureCount, 0),
  centuryDistribution: centuryList.map(century => ({
    century,
    count: allHistoricalEvents.filter(e => e.century === century).length
  }))
};

// 匯出精選 100 個關鍵地理位置模組
export * from './featuredLocations.ts';

// 匯出精選 100 個關鍵人物模組
export * from './featuredFigures.ts';

// 匯出精選 100 個關鍵物件模組
export * from './featuredArtifacts.ts';


