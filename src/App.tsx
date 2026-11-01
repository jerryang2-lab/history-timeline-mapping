/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useMemo, useEffect } from 'react';
import { 
  allHistoricalEvents, 
  centuryList, 
  domainList, 
  regionFilterList,
  getPeriodsForRegion,
  getFeaturedLocation,
  getFeaturedFigure,
  getFigureWikiUrl,
  getFeaturedArtifact,
  getArtifactWikiUrl
} from './data/index.ts';
import { 
  HistoricalEvent, 
  NormalizedHistoricalEvent, 
  SortField, 
  SortDirection, 
  DomainType, 
  RegionType, 
  CanonicalDomainType,
  PERIODS_BY_REGION
} from './types/history.ts';
import { exportToCSV, exportToJSON, copyToClipboard } from './utils/exporter.ts';
import { TimelineView } from './components/TimelineView.tsx';
import { LoginGate } from './components/LoginGate.tsx';
import { 
  FileSpreadsheet, 
  FileJson, 
  Copy, 
  Check, 
  Search, 
  MapPin, 
  User, 
  BookOpen, 
  Award, 
  X, 
  ArrowUpDown, 
  RotateCcw, 
  Layers, 
  Info,
  Calendar,
  Globe,
  Clock,
  Moon,
  Sun,
  LayoutGrid,
  Columns3,
  ExternalLink
} from 'lucide-react';

export default function App() {
  // 深色 / 淺色模式切換 (預設深色模式，儲存於 localStorage)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('hist_theme_mode');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  // 同步主題設定至 documentElement
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('hist_theme_mode', theme);
    } catch {
      // 容錯防護
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // 網站存取驗證狀態 (關閉分頁或瀏覽器後重置，儲存於 sessionStorage，預設密碼 8888)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('chronology_auth_unlocked') === '1';
    } catch {
      return false;
    }
  });

  // 檢視模式切換：'timeline' (三方時間軸對比) | 'table' (資料庫表格)
  const [viewMode, setViewMode] = useState<'timeline' | 'table'>('timeline');

  // 篩選與搜尋狀態
  const [selectedRegion, setSelectedRegion] = useState<string>('全部世界');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('全部時期');
  const [selectedCentury, setSelectedCentury] = useState<string>('全部世紀');
  const [selectedDomain, setSelectedDomain] = useState<string>('全部領域');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // 檢視詳情彈窗
  const [activeEvent, setActiveEvent] = useState<NormalizedHistoricalEvent | null>(null);

  // 複製回饋提示狀態
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [showSchemaInfo, setShowSchemaInfo] = useState<boolean>(false);

  // 全站完整防複製、防下載與防選取保護機制
  useEffect(() => {
    // 1. 禁用滑鼠右鍵選單
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. 禁用反白選取後複製與剪下
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return; // 允許表單搜尋輸入框內正常編輯
      }
      e.preventDefault();
    };

    const handleCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
    };

    // 3. 禁用元素與圖片拖曳下載
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 4. 攔截快捷鍵：Ctrl/Cmd + C (複製)、Ctrl/Cmd + S (另存下載)、Ctrl/Cmd + P (列印)、Ctrl/Cmd + U (檢視原始碼)、F12/DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      const target = e.target as HTMLElement | null;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      // 攔截另存新檔 (Ctrl+S / Cmd+S)
      if (isCtrlOrMeta && key === 's') {
        e.preventDefault();
        return;
      }

      // 攔截列印 (Ctrl+P / Cmd+P)
      if (isCtrlOrMeta && key === 'p') {
        e.preventDefault();
        return;
      }

      // 攔截檢視原始碼 (Ctrl+U / Cmd+U)
      if (isCtrlOrMeta && key === 'u') {
        e.preventDefault();
        return;
      }

      // 攔截開發者工具快捷鍵 (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
      if (
        e.key === 'F12' ||
        (isCtrlOrMeta && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
      ) {
        e.preventDefault();
        return;
      }

      // 非輸入框狀態下，攔截文字複製快捷鍵 (Ctrl+C / Cmd+C)
      if (!isInput && isCtrlOrMeta && key === 'c') {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 當前可用時期清單（根據選定大洲動態連動）
  const availablePeriods = useMemo(() => {
    return ['全部時期', ...getPeriodsForRegion(selectedRegion)];
  }, [selectedRegion]);

  // 大洲切換時，連動重置時期
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedPeriod('全部時期');
    setSortField('id');
    setSortDirection('asc');
  };

  // 篩選與排序運算
  const filteredEvents = useMemo(() => {
    return allHistoricalEvents.filter(event => {
      // 大洲篩選 (若在時間軸模式且選全部世界，三軌同步呈現；若選特定大洲，則過濾)
      if (selectedRegion !== '全部世界' && event.region !== selectedRegion) {
        return false;
      }
      // 時期篩選 (獨立欄位連動)
      if (selectedPeriod !== '全部時期' && event.period !== selectedPeriod) {
        return false;
      }
      // 世紀篩選
      if (selectedCentury !== '全部世紀' && event.century !== selectedCentury) {
        return false;
      }
      // 領域篩選 (5 大無重複字元分類)
      if (selectedDomain !== '全部領域' && event.domain !== selectedDomain) {
        return false;
      }
      // 關鍵字搜尋 (標題、人物、地點、相關物、時期、影響記述、年份)
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchTitle = event.title.toLowerCase().includes(query);
        const matchFigures = event.figures.some(f => f.toLowerCase().includes(query));
        const matchLocation = event.location.toLowerCase().includes(query);
        const matchArtifacts = event.artifactsOrLegacy.toLowerCase().includes(query);
        const matchSummary = event.impactSummary.toLowerCase().includes(query);
        const matchYear = event.yearDisplay.toLowerCase().includes(query);
        const matchPeriod = event.period.toLowerCase().includes(query);
        const matchDomain = event.domain.toLowerCase().includes(query);
        if (!matchTitle && !matchFigures && !matchLocation && !matchArtifacts && !matchSummary && !matchYear && !matchPeriod && !matchDomain) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortField === 'id') {
        comparison = a.id - b.id;
      } else if (sortField === 'year') {
        comparison = a.year - b.year;
      } else if (sortField === 'impactScore') {
        comparison = a.impactScore - b.impactScore;
      } else if (sortField === 'literatureCount') {
        comparison = a.literatureCount - b.literatureCount;
      }

      if (comparison === 0) comparison = a.id - b.id;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [selectedRegion, selectedPeriod, selectedCentury, selectedDomain, searchQuery, sortField, sortDirection]);

  // 排序切換處理
  const handleSortToggle = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'year' || field === 'id' ? 'asc' : 'desc');
    }
  };

  // 重設所有篩選
  const handleResetFilters = () => {
    setSelectedRegion('全部世界');
    setSelectedPeriod('全部時期');
    setSelectedCentury('全部世紀');
    setSelectedDomain('全部領域');
    setSearchQuery('');
    setSortField('year');
    setSortDirection('asc');
  };

  // 動態導出檔名生成
  const exportFilenameCSV = useMemo(() => {
    if (selectedRegion === '歐洲') return '歐洲歷史五百大事_精確數據庫.csv';
    if (selectedRegion === '亞非洲') return '亞非洲歷史五百大事_精確數據庫.csv';
    if (selectedRegion === '中國') return '中國歷史五百大事_精確數據庫.csv';
    if (selectedRegion === '美澳洲') return '美澳洲歷史一百大事_精確數據庫.csv';
    return '世界歷史一千六百大事_全域數據庫(歐洲_亞非_中國_美澳洲).csv';
  }, [selectedRegion]);

  const exportFilenameJSON = useMemo(() => {
    if (selectedRegion === '歐洲') return '歐洲歷史五百大事_結構化數據庫.json';
    if (selectedRegion === '亞非洲') return '亞非洲歷史五百大事_結構化數據庫.json';
    if (selectedRegion === '中國') return '中國歷史五百大事_結構化數據庫.json';
    if (selectedRegion === '美澳洲') return '美澳洲歷史一百大事_結構化數據庫.json';
    return '世界歷史一千六百大事_結構化數據庫(歐洲_亞非_中國_美澳洲).json';
  }, [selectedRegion]);

  // 複製單一事件
  const handleCopySingleEvent = async (event: NormalizedHistoricalEvent, e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await copyToClipboard(JSON.stringify(event, null, 2));
    if (success) {
      setCopiedId(event.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // 5 大領域顏色標籤對應
  const getDomainColor = (domain: DomainType | string) => {
    switch (domain) {
      case '政治軍事':
        return theme === 'dark' 
          ? 'bg-blue-950/60 text-blue-300 border-blue-800/60'
          : 'bg-blue-50 text-blue-700 border-blue-200';
      case '經濟貿易':
        return theme === 'dark'
          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case '科技工程':
        return theme === 'dark'
          ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60'
          : 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case '文學藝術':
        return theme === 'dark'
          ? 'bg-purple-950/60 text-purple-300 border-purple-800/60'
          : 'bg-purple-50 text-purple-700 border-purple-200';
      case '宗教哲理':
        return theme === 'dark'
          ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
          : 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return theme === 'dark'
          ? 'bg-slate-850 text-slate-300 border-slate-700'
          : 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // 大洲標籤顏色
  const getRegionBadge = (region: RegionType) => {
    switch (region) {
      case '歐洲':
        return (
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border truncate max-w-full ${
            theme === 'dark' ? 'bg-sky-950/70 text-sky-300 border-sky-800/70' : 'bg-sky-50 text-sky-700 border-sky-200'
          }`} title="歐洲">
            歐洲
          </span>
        );
      case '中國':
        return (
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border truncate max-w-full ${
            theme === 'dark' ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/70' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`} title="中國">
            中國
          </span>
        );
      case '美澳洲':
        return (
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border truncate max-w-full ${
            theme === 'dark' ? 'bg-purple-950/70 text-purple-300 border-purple-800/70' : 'bg-purple-50 text-purple-800 border-purple-200'
          }`} title="美澳洲">
            美澳洲
          </span>
        );
      case '亞非洲':
      default:
        return (
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border truncate max-w-full ${
            theme === 'dark' ? 'bg-amber-950/70 text-amber-300 border-amber-800/70' : 'bg-amber-50 text-amber-800 border-amber-200'
          }`} title="亞非洲">
            亞非洲
          </span>
        );
    }
  };

  const isDark = theme === 'dark';

  // 若尚未通過密碼驗證，優先呈現登入門戶頁面
  if (!isAuthenticated) {
    return (
      <LoginGate
        onAuthenticated={() => setIsAuthenticated(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased transition-colors duration-150 ${
      isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 
        【頂部主導航 Header】
        左側：系統標題與全庫筆數
        中間：模式切換 (⏳ 三方時間軸 / 📊 表格檢視)
        右側：深淺色版面模式切換按鈕
      */}
      <header className={`border-b sticky top-0 z-30 shadow-2xs transition-colors backdrop-blur-md ${
        isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
      }`}>
        <div className="w-full px-3 sm:px-5 lg:px-6 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            
            {/* 左側：系統標題與全庫總筆數 */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="p-1 bg-indigo-600 text-white rounded shadow-2xs">
                <Globe className="w-4 h-4" />
              </span>
              <h1 className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">
                世界歷史大事時間軸對照資料庫
              </h1>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${
                isDark 
                  ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80' 
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}>
                全庫共 {allHistoricalEvents.length} 條
              </span>
            </div>

            {/* 中間：模式切換 (⏳ 三方時間軸對比 / 📊 表格檢視) */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap sm:flex-1 sm:justify-center px-1">
              <div className={`p-0.5 rounded-lg border flex items-center gap-1 ${
                isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
              }`}>
                <button
                  onClick={() => {
                    setViewMode('timeline');
                    setSelectedRegion('全部世界');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    viewMode === 'timeline'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-700'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  title="切換至歐美澳洲、中國、亞非洲三方橫向同期對照時間軸"
                >
                  <Columns3 className="w-3.5 h-3.5" />
                  三方時間軸
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    viewMode === 'table'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-700'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  title="切換至全欄位歷史資料庫表格檢視"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  表格檢視
                </button>
              </div>
            </div>

            {/* 右側：深色 / 淺色模式切換按鈕 */}
            <div className="flex items-center gap-2 justify-end shrink-0">
              <button
                onClick={toggleTheme}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors shadow-2xs ${
                  isDark
                    ? 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
                title={isDark ? '切換為淺色模式' : '切換為深色模式'}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>淺色</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>深色</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 
        【次級導航與篩選列】
        時期下拉選單 + 世紀導航下拉選單 + 領域下拉選單 + 搜尋框 + 排序切換 + 重設
      */}
      <div className={`border-b sticky top-[53px] z-20 shadow-2xs transition-colors backdrop-blur-md ${
        isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
      }`}>
        <div className="w-full px-3 sm:px-5 lg:px-6 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs">
            
            {/* 左側：大洲、時期、世紀、領域四大下拉選單 */}
            <div className="flex items-center gap-2 flex-wrap">
              
              {/* 大洲選擇：【表格】模式下顯示，【時間軸】模式則無 */}
              {viewMode === 'table' && (
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-0.5 text-[11px]">
                    <Globe className="w-3.5 h-3.5 text-indigo-400" />
                    大洲：
                  </span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => handleRegionChange(e.target.value)}
                    className={`text-xs rounded px-2 py-1 font-medium border focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-2xs max-w-[120px] transition-colors ${
                      isDark 
                        ? 'bg-slate-800 border-slate-700 text-slate-200' 
                        : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  >
                    {regionFilterList.map(region => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* 1. 時期下拉選單 (分組呈現中國、歐美澳洲、亞非洲斷代時期) */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-0.5 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  時期：
                </span>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className={`text-xs rounded px-2 py-1 font-medium border focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-2xs max-w-[200px] transition-colors ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-slate-200' 
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  <option value="全部時期">
                    全部時期 ({allHistoricalEvents.length})
                  </option>
                  <optgroup label="── 【中國】時期 (8期) ──">
                    {PERIODS_BY_REGION['中國'].map(period => {
                      const count = allHistoricalEvents.filter(e => e.period === period).length;
                      return (
                        <option key={period} value={period}>
                          {period} ({count})
                        </option>
                      );
                    })}
                  </optgroup>
                  <optgroup label="── 【歐美澳洲】時期 ──">
                    {[...PERIODS_BY_REGION['歐洲'], ...PERIODS_BY_REGION['美澳洲']].map(period => {
                      const count = allHistoricalEvents.filter(e => e.period === period).length;
                      return (
                        <option key={period} value={period}>
                          {period} ({count})
                        </option>
                      );
                    })}
                  </optgroup>
                  <optgroup label="── 【亞非洲】時期 (6期) ──">
                    {PERIODS_BY_REGION['亞非洲'].map(period => {
                      const count = allHistoricalEvents.filter(e => e.period === period).length;
                      return (
                        <option key={period} value={period}>
                          {period} ({count})
                        </option>
                      );
                    })}
                  </optgroup>
                </select>
              </div>

              {/* 2. 世紀導航下拉選單 */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-0.5 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  世紀：
                </span>
                <select
                  value={selectedCentury}
                  onChange={(e) => setSelectedCentury(e.target.value)}
                  className={`text-xs rounded px-2 py-1 font-medium border focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-2xs max-w-[130px] transition-colors ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-slate-200' 
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  <option value="全部世紀">
                    全部世紀 ({
                      allHistoricalEvents.filter(e => {
                        if (selectedRegion !== '全部世界' && e.region !== selectedRegion) return false;
                        if (selectedPeriod !== '全部時期' && e.period !== selectedPeriod) return false;
                        return true;
                      }).length
                    })
                  </option>
                  {centuryList.map(century => {
                    const count = allHistoricalEvents.filter(e => {
                      if (selectedRegion !== '全部世界' && e.region !== selectedRegion) return false;
                      if (selectedPeriod !== '全部時期' && e.period !== selectedPeriod) return false;
                      return e.century === century;
                    }).length;
                    return (
                      <option key={century} value={century}>
                        {century} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* 3. 領域下拉選單 (5 大無重複分類) */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-0.5 text-[11px]">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  領域：
                </span>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className={`text-xs rounded px-2 py-1 font-medium border focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-2xs max-w-[130px] transition-colors ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-slate-200' 
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  {domainList.map(domain => {
                    const count = allHistoricalEvents.filter(e => {
                      if (selectedRegion !== '全部世界' && e.region !== selectedRegion) return false;
                      if (selectedPeriod !== '全部時期' && e.period !== selectedPeriod) return false;
                      if (selectedCentury !== '全部世紀' && e.century !== selectedCentury) return false;
                      if (domain !== '全部領域' && e.domain !== domain) return false;
                      return true;
                    }).length;
                    return (
                      <option key={domain} value={domain}>
                        {domain} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

            </div>

            {/* 右側：搜尋框 + 排序切換與重設按鈕 */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              
              {/* 搜尋框（移回排序左側） */}
              <div className="relative w-44 sm:w-52 md:w-60 shrink-0">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="搜尋事件、人物、地名..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-8 pr-7 py-1 text-xs rounded border focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5"
                    title="清除搜尋"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* 表格模式下的排序按鈕群 */}
              {viewMode === 'table' && (
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-slate-400 text-[11px] mr-0.5 flex items-center gap-0.5">
                    <ArrowUpDown className="w-3 h-3" />
                    排序：
                  </span>
                  <button
                    onClick={() => handleSortToggle('id')}
                    className={`px-2 py-1 rounded border text-[11px] font-medium transition-colors ${
                      sortField === 'id'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : isDark
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                    title="依序號排序"
                  >
                    ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </button>

                  <button
                    onClick={() => handleSortToggle('year')}
                    className={`px-2 py-1 rounded border text-[11px] font-medium transition-colors ${
                      sortField === 'year'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : isDark
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                    title="依年代排序"
                  >
                    年份 {sortField === 'year' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </button>

                  <button
                    onClick={() => handleSortToggle('impactScore')}
                    className={`px-2 py-1 rounded border text-[11px] font-medium transition-colors ${
                      sortField === 'impactScore'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : isDark
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                    title="依影響力排序"
                  >
                    影響力 {sortField === 'impactScore' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                </div>
              )}

              {/* 重設按鈕 */}
              {(selectedRegion !== '全部世界' || selectedPeriod !== '全部時期' || selectedCentury !== '全部世紀' || selectedDomain !== '全部領域' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-0.5 px-2 py-1 text-[11px] text-rose-500 hover:text-rose-400 rounded hover:bg-rose-500/10 border border-rose-500/30 transition-colors ml-1 font-medium"
                  title="重設所有篩選"
                >
                  <RotateCcw className="w-3 h-3" />
                  重設
                </button>
              )}
            </div>

          </div>
        </div>

        {/* 狀態列小條 */}
        <div className={`border-t px-3 sm:px-5 lg:px-6 py-1 text-[11px] flex items-center justify-between flex-wrap gap-2 transition-colors ${
          isDark 
            ? 'bg-slate-900/60 border-slate-800 text-slate-400' 
            : 'bg-slate-50/70 border-slate-200/60 text-slate-500'
        }`}>
          <div>
            {/*篩選結果：<strong className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>{filteredEvents.length}</strong> 筆*/}
            {selectedRegion !== '全部世界' && <span className="ml-1 text-indigo-400 font-medium">[{selectedRegion}]</span>}
            {selectedPeriod !== '全部時期' && <span className="ml-1 font-medium">[{selectedPeriod}]</span>}
            {selectedCentury !== '全部世紀' && <span className="ml-1 font-medium">[{selectedCentury}]</span>}
            {selectedDomain !== '全部領域' && <span className="ml-1 font-medium">[{selectedDomain}]</span>}
            {searchQuery && <span className="ml-1 text-amber-500">（關鍵字 &quot;{searchQuery}&quot;）</span>}
          </div>
          <div className="flex items-center gap-3">
            {/*<span>
              平均影響力：<strong className="text-indigo-400 font-semibold">{
                filteredEvents.length > 0 
                  ? Math.round(filteredEvents.reduce((a, b) => a + b.impactScore, 0) / filteredEvents.length)
                  : 0
              }</strong> / 100
            </span>
            <span>
              文獻指數：<strong className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{
                (filteredEvents.reduce((a, b) => a + b.literatureCount, 0)).toLocaleString()
              }</strong>
            </span>*/}
          </div>
        </div>
      </div>

      {/* 
        【核心主視圖區域】
        ViewMode 1: 'timeline' -> 三方時間軸橫向同期對照 (歐美澳洲 | 中國 | 亞非洲)
        ViewMode 2: 'table'    -> 結構化資料庫主表格 (欄位名稱列固定位置，資料捲動往上隱藏在欄位名稱下)
      */}
      {/* 
        【核心主視圖區域】
        ViewMode 1: 'timeline' -> 三方時間軸橫向同期對照 (歐美澳洲 | 中國 | 亞非洲)，頂部三標題列固定，內容捲動隱藏其下
        ViewMode 2: 'table'    -> 結構化資料庫主表格 (深淺色下【欄位名稱】列均固定位置，資料捲動往上隱藏在欄位名稱下)
      */}
      {viewMode === 'timeline' ? (
        <main className="w-full px-2 sm:px-4 lg:px-6 py-2.5 flex-1 flex flex-col min-h-0">
          <div className={`rounded-lg border shadow-2xs overflow-hidden flex flex-col flex-1 transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <TimelineView
              events={filteredEvents}
              allEvents={allHistoricalEvents}
              selectedDomain={selectedDomain}
              selectedPeriod={selectedPeriod}
              selectedCentury={selectedCentury}
              searchQuery={searchQuery}
              onSelectEvent={(e) => setActiveEvent(e)}
              onResetFilters={handleResetFilters}
              isDarkMode={isDark}
            />
          </div>
        </main>
      ) : (
        <main className="w-full px-2 sm:px-4 lg:px-6 py-2.5 flex-1 flex flex-col min-h-0">
          <div className={`rounded-lg border shadow-2xs overflow-hidden flex flex-col flex-1 transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            {/* 
              表格可捲動容器：垂直捲動時表頭欄位名稱固定在頂部，資料列往上滑動並隱藏在欄位名稱下方
            */}
            <div className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-220px)] min-h-[420px] relative scroll-smooth">
              <table className="w-full table-fixed text-left border-separate border-spacing-0 text-xs">
                <thead className={`sticky top-0 z-20 shadow-xs ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <tr className={`font-semibold select-none text-[11px] ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <th 
                      className={`sticky top-0 z-20 py-2.5 px-1 w-[3.5%] text-center cursor-pointer border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200' 
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                      }`}
                      onClick={() => handleSortToggle('id')} 
                      title="依唯一編號排序"
                    >
                      <span className="inline-flex items-center gap-0.5 justify-center">
                        ID
                        <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1 w-[5%] text-center border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      大洲
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1 w-[9.5%] text-center border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      歷史時期
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1 w-[5.5%] text-center border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      世紀
                    </th>
                    <th 
                      className={`sticky top-0 z-20 py-2.5 px-1 w-[6.5%] text-center cursor-pointer border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200' 
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                      }`}
                      onClick={() => handleSortToggle('year')} 
                      title="依年代排序"
                    >
                      <span className="inline-flex items-center gap-0.5 justify-center">
                        年份
                        <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-2 w-[25%] border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      事件標題與文明影響摘要
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1 w-[6.5%] text-center border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      領域
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1.5 w-[10%] border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      相關人物 (人)
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1.5 w-[9.5%] border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      關鍵地 (地)
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-1.5 w-[10%] border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      相關物/遺產 (物)
                    </th>
                    <th 
                      className={`sticky top-0 z-20 py-2.5 px-1 w-[3.5%] text-center cursor-pointer border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200' 
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                      }`}
                      onClick={() => handleSortToggle('impactScore')} 
                      title="依影響力評分排序"
                    >
                      <span className="inline-flex items-center gap-0.5 justify-center">
                        影響
                        <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </th>
                    <th 
                      className={`sticky top-0 z-20 py-2.5 px-1 w-[3.5%] text-right cursor-pointer border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200' 
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                      }`}
                      onClick={() => handleSortToggle('literatureCount')} 
                      title="依關聯文獻估算數排序"
                    >
                      <span className="inline-flex items-center gap-0.5 justify-end">
                        文獻
                        <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </th>
                    <th className={`sticky top-0 z-20 py-2.5 px-0.5 w-[2%] text-center border-b shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                      isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      複製
                    </th>
                  </tr>
                </thead>
                <tbody className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  {filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan={13} className={`py-12 text-center border-b ${
                        isDark ? 'text-slate-500 border-slate-800' : 'text-slate-400 border-slate-100'
                      }`}>
                        <p className="text-sm">未找到符合條件的歷史事件</p>
                        <button
                          onClick={handleResetFilters}
                          className="mt-2 text-xs text-indigo-500 hover:text-indigo-400 font-medium underline"
                        >
                          清空篩選條件
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((event) => (
                      <tr
                        key={event.id}
                        onClick={() => setActiveEvent(event)}
                        className={`cursor-pointer transition-colors group ${
                          isDark 
                            ? 'hover:bg-indigo-950/30 border-b border-slate-800/80' 
                            : 'hover:bg-indigo-50/50 border-b border-slate-100'
                        }`}
                      >
                        {/* 編號 (ID) */}
                        <td 
                          className="py-1.5 px-1 text-center font-mono text-[11px] text-slate-400"
                          title={`全局 ID #${event.id}`}
                        >
                          <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            #{event.id}
                          </span>
                        </td>

                        {/* 大洲 */}
                        <td className="py-1.5 px-1 text-center overflow-hidden">
                          {getRegionBadge(event.region)}
                        </td>

                        {/* 歷史時期 */}
                        <td className="py-1.5 px-1 text-center overflow-hidden" title={event.period}>
                          <span className={`px-1.5 py-0.5 rounded text-[10.5px] border inline-block truncate max-w-full font-medium ${
                            isDark 
                              ? 'bg-slate-800 text-slate-300 border-slate-700' 
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {event.period}
                          </span>
                        </td>

                        {/* 世紀 */}
                        <td className="py-1.5 px-1 text-center font-medium text-slate-400" title={event.century}>
                          <span className={`px-1 py-0.5 rounded text-[10.5px] border inline-block truncate max-w-full ${
                            isDark 
                              ? 'bg-slate-800/60 text-slate-400 border-slate-700/60' 
                              : 'bg-slate-50 text-slate-600 border-slate-200'
                          }`}>
                            {event.century}
                          </span>
                        </td>

                        {/* 年份 */}
                        <td className={`py-1.5 px-1 font-mono font-bold text-center text-[11px] truncate ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`} title={event.yearDisplay}>
                          {event.yearDisplay}
                        </td>

                        {/* 事件標題與簡述 */}
                        <td className="py-1.5 px-2 overflow-hidden">
                          <div className={`font-semibold transition-colors truncate text-[11.5px] ${
                            isDark 
                              ? 'text-slate-100 group-hover:text-indigo-400' 
                              : 'text-slate-900 group-hover:text-indigo-600'
                          }`} title={event.title}>
                            {event.title}
                          </div>
                          <div className={`text-[10.5px] truncate mt-0.5 leading-snug ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`} title={event.impactSummary}>
                            {event.impactSummary}
                          </div>
                        </td>

                        {/* 領域 (5 大無重複分類) */}
                        <td className="py-1.5 px-1 text-center overflow-hidden">
                          <span className={`px-1.5 py-0.5 rounded text-[10.5px] font-medium border inline-block truncate max-w-full ${getDomainColor(event.domain)}`} title={event.domain}>
                            {event.domain}
                          </span>
                        </td>

                        {/* 相關人 */}
                        <td className="py-1.5 px-1.5 text-[10.5px] overflow-hidden" title={event.figures.join('、')}>
                          <div className="flex flex-wrap gap-1 max-h-10 overflow-hidden">
                            {event.figures.map((figure, i) => (
                              <span 
                                key={i} 
                                className={`inline-block px-1 py-0.2 rounded truncate max-w-full text-[10px] ${
                                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {figure}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* 關鍵地理位置 */}
                        <td className="py-1.5 px-1.5 text-[10.5px] overflow-hidden text-slate-400" title={event.location}>
                          <div className="flex items-start gap-0.5">
                            <MapPin className="w-2.5 h-2.5 text-slate-400 mt-0.5 shrink-0" />
                            <span className="line-clamp-2 leading-tight">{event.location}</span>
                          </div>
                        </td>

                        {/* 相關物/遺產 */}
                        <td className="py-1.5 px-1.5 text-[10.5px] overflow-hidden text-slate-400" title={event.artifactsOrLegacy}>
                          <span className="line-clamp-2 leading-tight">
                            {event.artifactsOrLegacy}
                          </span>
                        </td>

                        {/* 影響力評分 */}
                        <td className="py-1.5 px-1 text-center">
                          <div className="flex flex-col items-center gap-0.5">
                            <span className={`font-bold font-mono text-[11px] ${
                              isDark ? 'text-slate-200' : 'text-slate-800'
                            }`}>
                              {event.impactScore}
                            </span>
                            <div className={`w-5 h-1 rounded-full overflow-hidden ${
                              isDark ? 'bg-slate-800' : 'bg-slate-200'
                            }`}>
                              <div 
                                className="bg-indigo-600 h-full rounded-full" 
                                style={{ width: `${event.impactScore}%` }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* 關聯文獻估算數 */}
                        <td className={`py-1.5 px-1 text-right font-mono text-[11px] ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className="font-medium">{event.literatureCount.toLocaleString()}</span>
                        </td>

                        {/* 操作 (單筆複製) */}
                        <td className="py-1.5 px-0.5 text-center" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={(e) => handleCopySingleEvent(event, e)}
                            className={`p-1 rounded transition-colors inline-flex items-center justify-center ${
                              isDark 
                                ? 'text-slate-400 hover:text-indigo-400 hover:bg-slate-800' 
                                : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100'
                            }`}
                            title="複製單筆事件 JSON"
                          >
                            {copiedId === event.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* 表格底部資訊列 */}
            <div className={`border-t px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-xs gap-2 shrink-0 transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              <div>
                呈現 {filteredEvents.length} 條歷史大事（全庫共 {allHistoricalEvents.length} 條：歐洲 500 + 亞非 500 + 中國 500 + 美澳洲 100）
              </div>
              <div className="flex items-center gap-3">
                <span>點選橫列檢視完整人時地物解析</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* 欄位規格說明區塊 (可收摺，置於頁尾上方) */}
      {showSchemaInfo && (
        <div className={`border-t px-4 sm:px-6 py-4 text-xs transition-colors ${
          isDark 
            ? 'bg-slate-900 border-slate-800 text-slate-200' 
            : 'bg-slate-900 text-slate-100 border-slate-800'
        }`}>
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <h3 className="font-semibold text-sm text-white">世界歷史 1,600 大事結構化欄位精確定義 (Data Schema)</h3>
              </div>
              <button 
                onClick={() => setShowSchemaInfo(false)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-300 leading-relaxed text-[11px]">
              <div className="bg-slate-800/70 p-2.5 rounded border border-slate-700">
                <span className="font-mono text-indigo-300 font-semibold">1. 大洲與歷史時期</span>
                <p className="mt-1 text-slate-300">
                  <strong className="text-white">全面取消地理分區，以歷史時期獨立呈現：</strong>
                  <br />• 歐洲 (5 期 &lt; 6)：古典希臘羅馬、中世紀拜占庭、文藝復興啟蒙、工業革命國族、世界大戰當代。
                  <br />• 亞非 (6 期 &lt; 7)：遠古尼羅兩河、古典帝國波斯、伊斯蘭黃金中古、火藥帝國前近代、殖民抗爭民族覺醒、戰後當代新亞非。
                  <br />• 美澳 (3 期 &lt; 4)：原民文明殖民建構、獨立革命近代擴張、現代霸權當代變革。
                  <br />• 中國 (8 期)：先秦文明與諸子百家、秦漢大一統與制度建構、魏晉南北朝分裂與融合、隋唐五代盛世與變革、兩宋遼金元大帝國、明清近世與東南轉型、晚清變局與近現代革命、當代兩岸與現代化進程。
                </p>
              </div>
              <div className="bg-slate-800/70 p-2.5 rounded border border-slate-700">
                <span className="font-mono text-indigo-300 font-semibold">2. 五大無重複文字領域</span>
                <p className="mt-1 text-slate-300">
                  <strong className="text-white">5 大領域（20 個完全相異中文字，無任何重複）：</strong>
                  <br />• <span className="text-blue-300">政治軍事</span>：政體建構、法典憲制、征戰條約
                  <br />• <span className="text-emerald-300">經濟貿易</span>：絲路航運、金融貨幣、產業革命
                  <br />• <span className="text-cyan-300">科技工程</span>：科學發現、水利建築、交通航天
                  <br />• <span className="text-purple-300">文學藝術</span>：史詩典籍、文藝思潮、造型建築
                  <br />• <span className="text-amber-300">宗教哲理</span>：神學經典、哲學體系、思想宗派
                </p>
              </div>
              <div className="bg-slate-800/70 p-2.5 rounded border border-slate-700">
                <span className="font-mono text-indigo-300 font-semibold">3. 人、時、地、物精確存儲</span>
                <p className="mt-1 text-slate-300">
                  <strong className="text-white">人時地物四度空間錨定：</strong>
                  <br />• <strong>人 (figures)</strong>：歷史核心人物與組織陣列。
                  <br />• <strong>時 (timeContext & year)</strong>：純數值坐標與具體時段記述。
                  <br />• <strong>地 (location)</strong>：精確古地名與現代地理主權國家。
                  <br />• <strong>物 (artifactsOrLegacy)</strong>：條約法典、原稿古蹟、發明與遺產。
                </p>
              </div>
              <div className="bg-slate-800/70 p-2.5 rounded border border-slate-700">
                <span className="font-mono text-indigo-300 font-semibold">4. 影響力與文獻量化指標</span>
                <p className="mt-1 text-slate-300">
                  <strong className="text-white">量化研究依據：</strong>
                  <br />• <strong>文明影響力 (1-100)</strong>：跨洲制度深遠度與文明重構指數。
                  <br />• <strong>關聯文獻估算規模</strong>：全球近代學術專著、權威文獻研究規模指數。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 頁尾 Footer：將【架構與分期規範】、【導出 CSV】、【導出 JSON】按鈕移到頁尾 */}
      <footer className={`border-t mt-auto py-2.5 px-3 sm:px-5 lg:px-6 shadow-xs z-10 transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="text-slate-400 text-[11px] flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              世界歷史大事時間軸對照資料庫
            </span>
            <span>•</span>
            <span>全庫共 {allHistoricalEvents.length} 條（歐洲 500 + 亞非 500 + 中國 500 + 美澳洲 100）</span>
            <span>•</span>
            <span>前 3100 年至西元 2025 年</span>
          </div>

          {/* 動作按鈕群：架構與分期規範、導出 CSV、導出 JSON */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setShowSchemaInfo(!showSchemaInfo)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors shadow-2xs ${
                showSchemaInfo
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              {showSchemaInfo ? '隱藏規格' : '架構與分期規範'}
            </button>

            <button
              onClick={() => exportToCSV(filteredEvents, exportFilenameCSV)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors shadow-2xs ${
                isDark
                  ? 'border-emerald-700/60 bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60'
                  : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
              title={`導出為標準 UTF-8 帶 BOM 的 CSV 文件 (${exportFilenameCSV})`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" />
              導出 CSV ({filteredEvents.length})
            </button>

            <button
              onClick={() => exportToJSON(filteredEvents, exportFilenameJSON)}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded bg-indigo-600 text-white hover:bg-indigo-700 shadow-2xs transition-colors"
              title={`導出為標準格式化 JSON 格式檔案 (${exportFilenameJSON})`}
            >
              <FileJson className="w-3.5 h-3.5" />
              導出 JSON ({filteredEvents.length})
            </button>
          </div>
        </div>

        {/* 版權聲明宣告 */}
        <div className={`mt-2 pt-2 border-t text-center text-[11px] tracking-wide select-none transition-colors ${
          isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-100 text-slate-400'
        }`}>
          © 2026 世界文明對照年表 · 版權所有，未經授權禁止轉載、複製或下載。
        </div>
      </footer>

      {/* 事件詳細人時地物解析彈窗 (Event Detail Inspector Drawer) */}
      {activeEvent && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveEvent(null)}
        >
          <div 
            className={`rounded-xl shadow-2xl max-w-2xl w-full border overflow-hidden transform transition-all animate-in zoom-in-95 duration-150 ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 彈窗頭部 */}
            <div className={`px-5 py-3.5 flex items-start justify-between border-b ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-white border-slate-900'
            }`}>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-xs px-2 py-0.5 bg-slate-800 text-indigo-300 rounded font-semibold border border-slate-700">
                    ID #{activeEvent.id}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded font-medium bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                    {activeEvent.region}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {activeEvent.period}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded font-medium bg-slate-700 text-slate-300 border border-slate-600">
                    {activeEvent.century}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {activeEvent.yearDisplay}
                  </span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${getDomainColor(activeEvent.domain)}`}>
                    {activeEvent.domain}
                  </span>
                </div>
                <h2 className="text-base font-bold mt-2 text-white leading-snug">
                  {activeEvent.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveEvent(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 彈窗內容：人、時、地、物與文明影響 */}
            <div className="p-5 space-y-3.5 text-xs max-h-[75vh] overflow-y-auto">
              {/* 人物與時段 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`p-2.5 rounded border ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1 text-slate-400 font-medium mb-1">
                    <User className="w-3.5 h-3.5 text-indigo-500" />
                    <span>重要人物（人）：</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {activeEvent.figures.map((fig, idx) => {
                      const wikiUrl = getFigureWikiUrl(fig, activeEvent.id);
                      return (
                        <a
                          key={idx}
                          href={wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 border px-1.5 py-0.5 rounded font-medium text-[11px] transition-all cursor-pointer ${
                            isDark 
                              ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-indigo-400 hover:text-indigo-300 hover:bg-slate-700/80' 
                              : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50'
                          }`}
                          title={`在維基百科查看「${fig}」條目`}
                        >
                          <span>{fig}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className={`p-2.5 rounded border ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1 text-slate-400 font-medium mb-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>重要時段（時）：</span>
                  </div>
                  <div className={`font-medium font-mono text-[11px] ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {activeEvent.timeContext}
                  </div>
                </div>
              </div>

              {/* 地理與相關物 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`p-2.5 rounded border ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-slate-400 font-medium mb-1 whitespace-nowrap overflow-x-auto">
                    <div className="flex items-center gap-1 shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>重要地理（地）：</span>
                    </div>
                    {(() => {
                      const geo = getFeaturedLocation(activeEvent.id);
                      if (geo) {
                        return (
                          <a
                            href={geo.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-mono font-medium bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors shrink-0"
                            title={`在 Google Maps 開啟坐標：${geo.coords}（${geo.siteName}）`}
                          >
                            <span>{geo.coords}</span>
                            <ExternalLink className="w-3 h-3 opacity-75" />
                          </a>
                        );
                      }
                      return null;
                    })()}
                  </div>
                  <div className={`font-medium text-[11px] leading-relaxed ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {activeEvent.location}
                  </div>
                </div>

                <div className={`p-2.5 rounded border ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-slate-400 font-medium mb-1 whitespace-nowrap overflow-x-auto">
                    <div className="flex items-center gap-1 shrink-0">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>重要遺產（物）：</span>
                    </div>
                    {(() => {
                      const artifact = getFeaturedArtifact(activeEvent.id);
                      if (artifact) {
                        return (
                          <a
                            href={artifact.wikiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-medium bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors shrink-0"
                            title={`在維基百科查看「${artifact.artifactName}」條目`}
                          >
                            <span>{artifact.artifactName}</span>
                            <ExternalLink className="w-3 h-3 opacity-75" />
                          </a>
                        );
                      }
                      return null;
                    })()}
                  </div>
                  <div className={`font-medium text-[11px] leading-relaxed ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {activeEvent.artifactsOrLegacy}
                  </div>
                </div>
              </div>

              {/* 文明影響詳述 */}
              <div className={`p-3 rounded border ${
                isDark 
                  ? 'bg-indigo-950/40 border-indigo-900/60' 
                  : 'bg-indigo-50/50 border-indigo-100'
              }`}>
                <div className="flex items-center gap-1 text-indigo-400 font-semibold mb-1.5">
                  <Award className="w-3.5 h-3.5 text-indigo-500" />
                  <span>文明深遠影響 (Civilizational Impact)：</span>
                </div>
                <p className={`leading-relaxed text-xs ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {activeEvent.impactSummary}
                </p>
              </div>

              {/* 指標與數據評估 */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className={`p-2.5 rounded border flex items-center justify-between ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <div className="text-slate-400 text-[10px]">文明影響力評分</div>
                    <div className="text-lg font-bold font-mono text-indigo-400">
                      {activeEvent.impactScore} <span className="text-[10px] font-normal text-slate-500">/ 100</span>
                    </div>
                  </div>
                  <div className={`w-14 h-1.5 rounded-full overflow-hidden ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}>
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${activeEvent.impactScore}%` }} />
                  </div>
                </div>

                <div className={`p-2.5 rounded border flex items-center justify-between ${
                  isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <div className="text-slate-400 text-[10px]">關聯文獻估算規模</div>
                    <div className={`text-lg font-bold font-mono ${
                      isDark ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {activeEvent.literatureCount.toLocaleString()} <span className="text-[10px] font-normal text-slate-500">篇/部</span>
                    </div>
                  </div>
                  <BookOpen className="w-5 h-5 text-slate-400 opacity-60" />
                </div>
              </div>
            </div>

            {/* 彈窗底欄 */}
            <div className={`px-5 py-2.5 border-t flex items-center justify-between ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[11px] text-slate-400">
                支援以標準 JSON 格式直接複製
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleCopySingleEvent(activeEvent, e)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border transition-colors ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {copiedId === activeEvent.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  {copiedId === activeEvent.id ? '已複製 JSON' : '複製單筆 JSON'}
                </button>
                <button
                  onClick={() => setActiveEvent(null)}
                  className="px-3 py-1 text-xs font-medium rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
