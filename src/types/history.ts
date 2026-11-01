/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type RegionType = '歐洲' | '亞非洲' | '中國' | '美澳洲';

// 5 大濃縮領域分類，全域文字彼此獨立不重複 (20個完全不重複的中文字)
export type CanonicalDomainType = 
  | '政治軍事' 
  | '經濟貿易' 
  | '科技工程' 
  | '文學藝術' 
  | '宗教哲理';

// 兼容歷代底層原始資料庫之領域標記
export type LegacyDomainType =
  | '政治/法律' 
  | '軍事/征服'
  | '文化/藝術' 
  | '科學/技術' 
  | '科技/醫學'
  | '宗教/哲學' 
  | '思想/哲學'
  | '宗教/信仰'
  | '經濟/貿易'
  | '經濟/社會'
  | '社會/探索';

export type DomainType = CanonicalDomainType | LegacyDomainType;

export const DOMAIN_OPTIONS: CanonicalDomainType[] = [
  '政治軍事',
  '經濟貿易',
  '科技工程',
  '文學藝術',
  '宗教哲理'
];

export interface HistoricalEvent {
  id: number;
  region?: RegionType;       // 大洲分類
  period?: string;           // 歷史斷代時期（歐洲5期、亞非6期、美澳3期、中國8期）
  subRegion?: string;        // 原始底層過渡欄位（正規化時已徹底轉為時期）
  century: string;          // 世紀
  centuryNum: number;       // 數值世紀
  year: number;             // 年份數值
  yearDisplay: string;      // 年份顯示
  title: string;            // 事件標題
  domain: DomainType;       // 領域
  figures: string[];        // 相關人
  timeContext: string;      // 相關時
  location: string;         // 關鍵地理位置
  artifactsOrLegacy: string;// 相關物
  impactSummary: string;    // 文明影響
  impactScore: number;      // 影響力評分
  literatureCount: number;  // 關聯文獻估算數
}

// 經過標準化處理後輸出給 UI 與 API 的嚴格資料結構
export interface NormalizedHistoricalEvent extends HistoricalEvent {
  region: RegionType;
  period: string;
  domain: CanonicalDomainType;
}

export type SortField = 'year' | 'impactScore' | 'literatureCount' | 'id';
export type SortDirection = 'asc' | 'desc';

// 各大洲歷史時期劃分標準 (嚴格遵守數量限制：歐洲 < 6，亞非 < 7，美澳 < 4)
export const PERIODS_BY_REGION: Record<RegionType, string[]> = {
  '歐洲': [
    '古典希臘羅馬時代',
    '中世紀與拜占庭',
    '文藝復興與啟蒙革新',
    '工業革命與國族爭鋒',
    '世界大戰與當代歐洲'
  ],
  '亞非洲': [
    '遠古尼羅與兩河文明',
    '古典帝國與波斯泛希臘',
    '伊斯蘭黃金時代與中古擴張',
    '火藥帝國與前近代亞非',
    '殖民抗爭與近代民族覺醒',
    '戰後獨立與當代新亞非'
  ],
  '中國': [
    '先秦文明與諸子百家',
    '秦漢大一統與制度建構',
    '魏晉南北朝分裂與融合',
    '隋唐五代盛世與變革',
    '兩宋遼金元大帝國',
    '明清近世與東南轉型',
    '晚清變局與近現代革命',
    '當代兩岸與現代化進程'
  ],
  '美澳洲': [
    '原民文明與殖民建構',
    '獨立革命與近代擴張',
    '現代霸權與當代變革'
  ]
};
