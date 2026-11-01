/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { HistoricalEvent } from '../types/history.ts';

/**
 * 下載字串為檔案公用函式
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * 匯出為標準 UTF-8 附帶 BOM 的 CSV 文件（保證 Excel、Numbers、Google Sheets 與 Python 讀取無中文亂碼）
 */
export function exportToCSV(events: HistoricalEvent[], filename = '世界歷史一千六百大事_精確數據庫.csv'): void {
  const headers = [
    '編號',
    '大洲',
    '歷史時期',
    '世紀',
    '世紀數值',
    '年份數值',
    '年份顯示',
    '事件標題',
    '領域分類',
    '相關人物',
    '相關時間',
    '關鍵地理位置',
    '相關物件或遺產',
    '文明影響詳述',
    '文明影響力評分',
    '關聯文獻估算數'
  ];

  const escapeCSV = (value: string | number | string[] | undefined | null): string => {
    if (value === null || value === undefined) return '""';
    let str = Array.isArray(value) ? value.join('；') : String(value);
    // RFC 4180: 若包含引號、逗號或換行符號，需用雙引號包覆，且內部引號需雙寫
    str = str.replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = events.map(event => [
    escapeCSV(event.id),
    escapeCSV(event.region),
    escapeCSV(event.period),
    escapeCSV(event.century),
    escapeCSV(event.centuryNum),
    escapeCSV(event.year),
    escapeCSV(event.yearDisplay),
    escapeCSV(event.title),
    escapeCSV(event.domain),
    escapeCSV(event.figures),
    escapeCSV(event.timeContext),
    escapeCSV(event.location),
    escapeCSV(event.artifactsOrLegacy),
    escapeCSV(event.impactSummary),
    escapeCSV(event.impactScore),
    escapeCSV(event.literatureCount)
  ].join(','));

  // 添加 UTF-8 BOM 標記 (\uFEFF)
  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  downloadBlob(blob, filename);
}

/**
 * 匯出為標準格式化 JSON 陣列文件
 */
export function exportToJSON(events: HistoricalEvent[], filename = '世界歷史一千六百大事_結構化數據庫.json'): void {
  const jsonContent = JSON.stringify(events, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  downloadBlob(blob, filename);
}

/**
 * 複製單筆或整批事件 JSON 資料到剪貼簿
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // 降級備用
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error('複製到剪貼簿失敗:', err);
    return false;
  }
}
