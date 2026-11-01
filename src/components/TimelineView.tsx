/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useMemo, useRef } from 'react';
import { NormalizedHistoricalEvent, CanonicalDomainType, PERIODS_BY_REGION } from '../types/history.ts';
import { getFeaturedLocation, getFeaturedFigure, getFeaturedArtifact } from '../data/index.ts';
import { 
  Compass, 
  MapPin, 
  User,
  BookOpen,
  Calendar, 
  ChevronDown, 
  Sparkles,
  Search,
  RotateCcw
} from 'lucide-react';

interface TimelineViewProps {
  events: NormalizedHistoricalEvent[];
  allEvents: NormalizedHistoricalEvent[];
  selectedDomain: string;
  selectedPeriod: string;
  selectedCentury?: string;
  searchQuery: string;
  onSelectEvent: (event: NormalizedHistoricalEvent) => void;
  onResetFilters: () => void;
  isDarkMode: boolean;
}

// 5 大無重複領域之顏色樣式設定 (兼顧淺色與深色高對比度)
const DOMAIN_STYLES: Record<
  CanonicalDomainType, 
  { lightBadge: string; darkBadge: string; borderAccent: string; dotColor: string }
> = {
  '政治軍事': {
    lightBadge: 'bg-blue-50 text-blue-700 border-blue-200',
    darkBadge: 'bg-blue-950/70 text-blue-300 border-blue-800/70',
    borderAccent: 'border-l-blue-500',
    dotColor: 'bg-blue-500'
  },
  '經濟貿易': {
    lightBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    darkBadge: 'bg-emerald-950/70 text-emerald-300 border-emerald-800/70',
    borderAccent: 'border-l-emerald-500',
    dotColor: 'bg-emerald-500'
  },
  '科技工程': {
    lightBadge: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    darkBadge: 'bg-cyan-950/70 text-cyan-300 border-cyan-800/70',
    borderAccent: 'border-l-cyan-500',
    dotColor: 'bg-cyan-500'
  },
  '文學藝術': {
    lightBadge: 'bg-purple-50 text-purple-700 border-purple-200',
    darkBadge: 'bg-purple-950/70 text-purple-300 border-purple-800/70',
    borderAccent: 'border-l-purple-500',
    dotColor: 'bg-purple-500'
  },
  '宗教哲理': {
    lightBadge: 'bg-amber-50 text-amber-800 border-amber-200',
    darkBadge: 'bg-amber-950/70 text-amber-300 border-amber-800/70',
    borderAccent: 'border-l-amber-500',
    dotColor: 'bg-amber-500'
  }
};

export const TimelineView: React.FC<TimelineViewProps> = ({
  allEvents,
  selectedDomain,
  selectedPeriod,
  selectedCentury,
  searchQuery,
  onSelectEvent,
  onResetFilters,
  isDarkMode
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. 判斷選定時期所屬的文化區塊以及其涵蓋的所有世紀 (Century Set)
  const { periodScope, matchedCenturyNums } = useMemo(() => {
    if (!selectedPeriod || selectedPeriod === '全部時期') {
      return { periodScope: null, matchedCenturyNums: null };
    }

    // 找出所有屬於該時期的歷史事件
    const periodEvents = allEvents.filter(e => e.period === selectedPeriod);
    const centuries = new Set(periodEvents.map(e => e.centuryNum));

    // 判斷該時期隸屬於哪一個文化大板塊
    const isChina = PERIODS_BY_REGION['中國'].includes(selectedPeriod);
    const isWest = PERIODS_BY_REGION['歐洲'].includes(selectedPeriod) || PERIODS_BY_REGION['美澳洲'].includes(selectedPeriod);
    const isAfroAsia = PERIODS_BY_REGION['亞非洲'].includes(selectedPeriod);

    let scope: 'china' | 'west' | 'afroAsia' | 'other' = 'other';
    if (isChina) scope = 'china';
    else if (isWest) scope = 'west';
    else if (isAfroAsia) scope = 'afroAsia';

    return { periodScope: scope, matchedCenturyNums: centuries };
  }, [allEvents, selectedPeriod]);

  // 通用過濾檢查函數 (領域、世紀、關鍵字)
  const satisfiesCommonFilters = (e: NormalizedHistoricalEvent) => {
    // 領域篩選 (5 大文字不重複領域)
    if (selectedDomain && selectedDomain !== '全部領域' && e.domain !== selectedDomain) {
      return false;
    }
    // 世紀篩選
    if (selectedCentury && selectedCentury !== '全部世紀' && e.century !== selectedCentury) {
      return false;
    }
    // 關鍵字檢索
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const match = e.title.toLowerCase().includes(q) ||
                    e.figures.some(f => f.toLowerCase().includes(q)) ||
                    e.location.toLowerCase().includes(q) ||
                    e.artifactsOrLegacy.toLowerCase().includes(q) ||
                    e.impactSummary.toLowerCase().includes(q) ||
                    e.yearDisplay.toLowerCase().includes(q) ||
                    e.period.toLowerCase().includes(q) ||
                    e.domain.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  };

  // 2. 三大文化軌道事件劃分 (核心跨模塊同期世紀並列機制)
  // 當選擇【中國】模塊的時期時，相同世紀的【歐美澳洲】和【亞非洲】模塊膠囊並列呈現；
  // 若選擇【歐美澳洲】或【亞非洲】模塊的時期時，同樣呈現相同世紀的其他模塊膠囊。
  const { euroAmericasOceaniaEvents, chinaEvents, afroAsiaEvents } = useMemo(() => {
    if (!matchedCenturyNums || !periodScope) {
      // 無特定時期限制時，依通用過濾條件呈現三軌所有大事
      return {
        euroAmericasOceaniaEvents: allEvents.filter(e => (e.region === '歐洲' || e.region === '美澳洲') && satisfiesCommonFilters(e)),
        chinaEvents: allEvents.filter(e => e.region === '中國' && satisfiesCommonFilters(e)),
        afroAsiaEvents: allEvents.filter(e => e.region === '亞非洲' && satisfiesCommonFilters(e)),
      };
    }

    const euroEvents: NormalizedHistoricalEvent[] = [];
    const chEvents: NormalizedHistoricalEvent[] = [];
    const aaEvents: NormalizedHistoricalEvent[] = [];

    allEvents.forEach(e => {
      // 必須屬於該選定時期所橫跨的世紀
      if (!matchedCenturyNums.has(e.centuryNum)) return;
      if (!satisfiesCommonFilters(e)) return;

      const isEuroAmericas = e.region === '歐洲' || e.region === '美澳洲';
      const isChina = e.region === '中國';
      const isAfroAsia = e.region === '亞非洲';

      if (periodScope === 'china') {
        if (isChina) {
          if (e.period === selectedPeriod) chEvents.push(e);
        } else if (isEuroAmericas) {
          euroEvents.push(e); // 歐美澳洲相同世紀並列呈現
        } else if (isAfroAsia) {
          aaEvents.push(e);   // 亞非洲相同世紀並列呈現
        }
      } else if (periodScope === 'west') {
        if (isEuroAmericas) {
          if (e.period === selectedPeriod) euroEvents.push(e);
        } else if (isChina) {
          chEvents.push(e);   // 中國相同世紀並列呈現
        } else if (isAfroAsia) {
          aaEvents.push(e);   // 亞非洲相同世紀並列呈現
        }
      } else if (periodScope === 'afroAsia') {
        if (isAfroAsia) {
          if (e.period === selectedPeriod) aaEvents.push(e);
        } else if (isChina) {
          chEvents.push(e);   // 中國相同世紀並列呈現
        } else if (isEuroAmericas) {
          euroEvents.push(e); // 歐美澳洲相同世紀並列呈現
        }
      } else {
        if (isEuroAmericas) euroEvents.push(e);
        else if (isChina) chEvents.push(e);
        else if (isAfroAsia) aaEvents.push(e);
      }
    });

    return {
      euroAmericasOceaniaEvents: euroEvents,
      chinaEvents: chEvents,
      afroAsiaEvents: aaEvents
    };
  }, [allEvents, matchedCenturyNums, periodScope, selectedPeriod, selectedDomain, selectedCentury, searchQuery]);

  // 2. 獲取所有按時間由早至晚排序的世紀
  // 我們按數值 centuryNum 嚴格自然排序
  const centuryGroups = useMemo(() => {
    // 收集所有事件中的唯一世紀資訊
    const map = new Map<number, { centuryNum: number; centuryName: string }>();
    allEvents.forEach(e => {
      if (!map.has(e.centuryNum)) {
        map.set(e.centuryNum, { centuryNum: e.centuryNum, centuryName: e.century });
      }
    });

    const sortedCenturies = Array.from(map.values()).sort((a, b) => a.centuryNum - b.centuryNum);

    // 建立每個世紀對應的三軌事件群組
    const groups = sortedCenturies.map(c => {
      const eLeft = euroAmericasOceaniaEvents
        .filter(e => e.centuryNum === c.centuryNum)
        .sort((a, b) => a.year - b.year || a.id - b.id);
      
      const eCenter = chinaEvents
        .filter(e => e.centuryNum === c.centuryNum)
        .sort((a, b) => a.year - b.year || a.id - b.id);
      
      const eRight = afroAsiaEvents
        .filter(e => e.centuryNum === c.centuryNum)
        .sort((a, b) => a.year - b.year || a.id - b.id);

      const totalCount = eLeft.length + eCenter.length + eRight.length;

      return {
        centuryNum: c.centuryNum,
        centuryName: c.centuryName,
        leftEvents: eLeft,
        centerEvents: eCenter,
        rightEvents: eRight,
        totalCount
      };
    });

    // 僅保留有事件的世紀列（當篩選時自動聚焦有資料的世紀）
    return groups.filter(g => g.totalCount > 0);
  }, [allEvents, euroAmericasOceaniaEvents, chinaEvents, afroAsiaEvents]);

  // 世紀快速跳轉處理：使 containerRef 平滑精準捲動至指定世紀錨點
  const handleScrollToCentury = (centuryNum: number) => {
    const targetEl = document.getElementById(`century-sec-${centuryNum}`);
    if (targetEl && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const targetTop = targetEl.getBoundingClientRect().top;
      const offset = targetTop - containerTop + containerRef.current.scrollTop - 6;
      containerRef.current.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
    }
  };

  // 世紀列水平左右拖拉支援 (相容滑鼠拖拽與觸控左右滑動)
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (scrollContainerRef.current) {
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <div className="w-full flex-1 flex flex-col min-h-0">
      {/* 世紀快速錨點導航工具列 (已刪除「世紀跳轉：」文字，保留左右拖拉滑動功能) */}
      <div className={`px-3 sm:px-6 py-2 border-b flex items-center justify-between gap-3 text-xs shrink-0 select-none z-20 transition-colors ${
        isDarkMode 
          ? 'bg-slate-900 border-slate-800 text-slate-300' 
          : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
      }`}>
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar flex-1 cursor-grab active:cursor-grabbing select-none"
        >
          {centuryGroups.map(cg => (
            <button
              key={cg.centuryNum}
              onClick={() => handleScrollToCentury(cg.centuryNum)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-all border shrink-0 ${
                isDarkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 hover:border-indigo-500'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 hover:border-indigo-400'
              }`}
              title={`${cg.centuryName} (共 ${cg.totalCount} 筆大事)`}
            >
              {cg.centuryName.replace('世紀', 'C')} ({cg.totalCount})
            </button>
          ))}
        </div>
      </div>

      {/* 
        三大板塊固定位置標題列 (Fixed Track Column Headers)
        左：歐美澳洲 | 中：中國 | 右：亞非洲
        100% 不透明實色背景，捲動時下方卡片向上滾動並隱藏在此標題列下方
      */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 px-3 sm:px-6 py-2.5 border-b shrink-0 font-medium text-xs select-none shadow-xs transition-colors z-20 ${
        isDarkMode
          ? 'bg-slate-950 border-slate-800 text-slate-200'
          : 'bg-slate-100 border-slate-300 text-slate-800'
      }`}>
        {/* 左欄表頭：歐美澳洲 */}
        <div className={`flex items-center justify-between px-3 py-1.5 rounded-lg border font-bold shadow-2xs transition-colors ${
          isDarkMode 
            ? 'bg-sky-950 border-sky-800 text-sky-200' 
            : 'bg-sky-100 border-sky-300 text-sky-900'
        }`}>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="text-sm">🏛️</span>
            <span>歐美澳洲</span>
            <span className="text-[10px] font-normal opacity-85">(歐洲 + 美澳洲)</span>
          </div>
          <span className={`px-1.5 py-0.5 rounded text-[11px] font-mono font-bold ${
            isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-200 text-sky-950'
          }`}>
            {euroAmericasOceaniaEvents.length} 筆
          </span>
        </div>

        {/* 中欄表頭：中國文明 */}
        <div className={`flex items-center justify-between px-3 py-1.5 rounded-lg border font-bold shadow-2xs transition-colors ${
          isDarkMode 
            ? 'bg-emerald-950 border-emerald-800 text-emerald-200' 
            : 'bg-emerald-100 border-emerald-300 text-emerald-900'
        }`}>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="text-sm">🐉</span>
            <span>中國文明</span>
            <span className="text-[10px] font-normal opacity-85">(先秦至當代)</span>
          </div>
          <span className={`px-1.5 py-0.5 rounded text-[11px] font-mono font-bold ${
            isDarkMode ? 'bg-emerald-900 text-emerald-100' : 'bg-emerald-200 text-emerald-950'
          }`}>
            {chinaEvents.length} 筆
          </span>
        </div>

        {/* 右欄表頭：亞非洲 */}
        <div className={`flex items-center justify-between px-3 py-1.5 rounded-lg border font-bold shadow-2xs transition-colors ${
          isDarkMode 
            ? 'bg-amber-950 border-amber-800 text-amber-200' 
            : 'bg-amber-100 border-amber-300 text-amber-900'
        }`}>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="text-sm">🕌</span>
            <span>亞非洲</span>
            <span className="text-[10px] font-normal opacity-85">(西亞·埃及·南亞·非洲)</span>
          </div>
          <span className={`px-1.5 py-0.5 rounded text-[11px] font-mono font-bold ${
            isDarkMode ? 'bg-amber-900 text-amber-100' : 'bg-amber-200 text-amber-950'
          }`}>
            {afroAsiaEvents.length} 筆
          </span>
        </div>
      </div>

      {/* 
        時間軸主內容捲動區域：
        設定內部捲動容器，資料向上滑動時自然隱藏在頂部三大板塊標題列下方
      */}
      <div 
        ref={containerRef}
        className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-270px)] min-h-[420px] px-3 sm:px-6 py-4 space-y-6 scroll-smooth relative"
      >
        {centuryGroups.length === 0 ? (
          <div className={`py-16 text-center rounded-xl border border-dashed my-8 ${
            isDarkMode 
              ? 'border-slate-800 text-slate-400 bg-slate-900/40' 
              : 'border-slate-300 text-slate-500 bg-white'
          }`}>
            <Search className="w-8 h-8 mx-auto text-slate-400 mb-2 opacity-60" />
            <p className="text-sm font-medium">當前篩選條件下無符合的時間軸歷史事件</p>
            <p className="text-xs text-slate-400 mt-1">
              可嘗試調整領域、時期或清空關鍵字搜尋
            </p>
            <button
              onClick={onResetFilters}
              className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              重設所有篩選
            </button>
          </div>
        ) : (
          centuryGroups.map(group => (
            <div 
              key={group.centuryNum}
              id={`century-sec-${group.centuryNum}`}
              className="pt-2 scroll-mt-36"
            >
              {/* 世紀同期橫向刻度標題 (橫向同排對照同期大事標桿) */}
              <div className="relative flex items-center justify-center my-3">
                <div className={`absolute inset-0 flex items-center`}>
                  <div className={`w-full border-t ${
                    isDarkMode ? 'border-slate-800' : 'border-slate-200'
                  }`} />
                </div>
                <div className={`relative px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-2 border shadow-xs transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900 text-indigo-300 border-slate-700' 
                    : 'bg-white text-indigo-800 border-indigo-200'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="font-mono text-sm tracking-wide">{group.centuryName}</span>
                  <span className="text-[11px] opacity-75 font-normal">
                    (同期大事共 {group.totalCount} 筆)
                  </span>
                </div>
              </div>

              {/* 三欄橫向並排卡片網格 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                
                {/* 1. 左欄：歐美澳洲 */}
                <div className={`p-2.5 rounded-xl border flex flex-col gap-2 min-h-[90px] transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800/80' 
                    : 'bg-slate-50/80 border-slate-200/90'
                }`}>
                  <div className="flex items-center justify-between pb-1 border-b border-dashed border-sky-300/30 text-[11px] text-sky-700 dark:text-sky-400 font-medium">
                    <span>歐美澳洲 ({group.leftEvents.length})</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {group.leftEvents.length > 0 ? `${group.leftEvents[0].yearDisplay} 起` : ''}
                    </span>
                  </div>

                  {group.leftEvents.length === 0 ? (
                    <div className="py-6 text-center text-[11px] text-slate-400 dark:text-slate-500 italic">
                      該世紀無相應里程碑記載
                    </div>
                  ) : (
                    group.leftEvents.map(event => (
                      <MilestoneCard 
                        key={event.id}
                        event={event}
                        onSelect={() => onSelectEvent(event)}
                        isDarkMode={isDarkMode}
                      />
                    ))
                  )}
                </div>

                {/* 2. 中欄：中國 */}
                <div className={`p-2.5 rounded-xl border flex flex-col gap-2 min-h-[90px] transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800/80' 
                    : 'bg-slate-50/80 border-slate-200/90'
                }`}>
                  <div className="flex items-center justify-between pb-1 border-b border-dashed border-emerald-300/30 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                    <span>中國文明 ({group.centerEvents.length})</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {group.centerEvents.length > 0 ? `${group.centerEvents[0].yearDisplay} 起` : ''}
                    </span>
                  </div>

                  {group.centerEvents.length === 0 ? (
                    <div className="py-6 text-center text-[11px] text-slate-400 dark:text-slate-500 italic">
                      該世紀無相應里程碑記載
                    </div>
                  ) : (
                    group.centerEvents.map(event => (
                      <MilestoneCard 
                        key={event.id}
                        event={event}
                        onSelect={() => onSelectEvent(event)}
                        isDarkMode={isDarkMode}
                      />
                    ))
                  )}
                </div>

                {/* 3. 右欄：亞非洲 */}
                <div className={`p-2.5 rounded-xl border flex flex-col gap-2 min-h-[90px] transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800/80' 
                    : 'bg-slate-50/80 border-slate-200/90'
                }`}>
                  <div className="flex items-center justify-between pb-1 border-b border-dashed border-amber-300/30 text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                    <span>亞非洲 ({group.rightEvents.length})</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {group.rightEvents.length > 0 ? `${group.rightEvents[0].yearDisplay} 起` : ''}
                    </span>
                  </div>

                  {group.rightEvents.length === 0 ? (
                    <div className="py-6 text-center text-[11px] text-slate-400 dark:text-slate-500 italic">
                      該世紀無相應里程碑記載
                    </div>
                  ) : (
                    group.rightEvents.map(event => (
                      <MilestoneCard 
                        key={event.id}
                        event={event}
                        onSelect={() => onSelectEvent(event)}
                        isDarkMode={isDarkMode}
                      />
                    ))
                  )}
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// 精簡里程碑膠囊組件：高度嚴格限制二行文字，標題過長以 ... 表示，不呈現序號及影響力評分
interface MilestoneCardProps {
  event: NormalizedHistoricalEvent;
  onSelect: () => void;
  isDarkMode: boolean;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ event, onSelect, isDarkMode }) => {
  const geoData = getFeaturedLocation(event.id);
  const figureData = getFeaturedFigure(event.id);
  const artifactData = getFeaturedArtifact(event.id);
  const style = DOMAIN_STYLES[event.domain] || {
    lightBadge: 'bg-slate-50 text-slate-700 border-slate-200',
    darkBadge: 'bg-slate-800 text-slate-300 border-slate-700',
    borderAccent: 'border-l-indigo-500',
    dotColor: 'bg-indigo-500'
  };

  const tooltipParts = [event.yearDisplay];
  if (geoData) tooltipParts.push(`[關鍵地理: ${geoData.siteName}]`);
  if (figureData) tooltipParts.push(`[關鍵人物: ${figureData.figureName}]`);
  if (artifactData) tooltipParts.push(`[關鍵物件: ${artifactData.artifactName}]`);
  tooltipParts.push(event.domain);
  tooltipParts.push(event.title);

  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group px-2.5 py-1.5 rounded-md border border-l-[3.5px] text-left transition-all duration-150 cursor-pointer select-none focus:outline-hidden focus:ring-1 focus:ring-indigo-500 ${style.borderAccent} ${
        isDarkMode
          ? 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:shadow-xs'
          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-indigo-50/20 hover:shadow-2xs'
      }`}
      title={tooltipParts.join(' | ')}
    >
      {/* 第 1 行：年份標籤 + 小符號(放置於領域文字框外的左邊：MapPin地理、User人物、BookOpen物件) + 領域標籤 */}
      <div className="flex items-center justify-between gap-1 leading-none">
        <span className={`font-mono text-[11px] font-bold tracking-tight shrink-0 ${
          isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
        }`}>
          {event.yearDisplay}
        </span>

        <div className="flex items-center gap-1 shrink-0">
          {geoData && (
            <MapPin 
              className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" 
              aria-label={`關鍵地理位置：${geoData.siteName}`}
            />
          )}
          {figureData && (
            <User 
              className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" 
              aria-label={`關鍵人物：${figureData.figureName}`}
            />
          )}
          {artifactData && (
            <BookOpen 
              className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" 
              aria-label={`關鍵物件：${artifactData.artifactName}`}
            />
          )}
          <span className={`px-1.5 py-0.2 rounded text-[9.5px] font-semibold border leading-tight ${
            isDarkMode ? style.darkBadge : style.lightBadge
          }`}>
            {event.domain}
          </span>
        </div>
      </div>

      {/* 第 2 行：事件標題 (嚴格限制單行，過長用 ... 表示) */}
      <h4 
        className={`text-xs font-semibold leading-tight tracking-tight transition-colors truncate mt-1 ${
          isDarkMode 
            ? 'text-slate-100 group-hover:text-indigo-300' 
            : 'text-slate-900 group-hover:text-indigo-600'
        }`}
      >
        {event.title}
      </h4>
    </div>
  );
};
