/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect, useRef } from 'react';
import { Lock, KeyRound, Eye, EyeOff, ShieldCheck, AlertCircle, ArrowRight, Sun, Moon } from 'lucide-react';

interface LoginGateProps {
  onAuthenticated: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({
  onAuthenticated,
  theme,
  onToggleTheme,
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 自動聚焦於密碼輸入框
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (password.trim() === '8888') {
      setIsSuccess(true);
      try {
        sessionStorage.setItem('chronology_auth_unlocked', '1');
      } catch (err) {
        console.warn('sessionStorage is unavailable', err);
      }
      setTimeout(() => {
        onAuthenticated();
      }, 450);
    } else {
      setIsShaking(true);
      setErrorMsg('存取密碼不正確，請重新輸入');
      setPassword('');
      setTimeout(() => {
        setIsShaking(false);
        inputRef.current?.focus();
      }, 500);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen w-full flex flex-col justify-between items-center transition-colors duration-300 relative overflow-hidden ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-stone-50 text-stone-900'
    }`}>
      {/* 背景裝飾光暈與網格紋理 */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-amber-600/15' : 'bg-amber-400/20'
        }`} />
        <div className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-indigo-600/10' : 'bg-stone-300/30'
        }`} />
      </div>

      {/* 頂部功能條：主題切換按鈕 */}
      <header className="w-full max-w-5xl px-6 py-5 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-serif tracking-widest text-amber-500/90 uppercase">
            Chronology Archive Security Gate
          </span>
        </div>
        <button
          onClick={onToggleTheme}
          type="button"
          title={isDark ? '切換淺色模式' : '切換深色模式'}
          className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
            isDark 
              ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300' 
              : 'border-stone-200 bg-white/80 hover:bg-stone-100 text-stone-700'
          }`}
        >
          {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
          <span>{isDark ? '淺色模式' : '深色模式'}</span>
        </button>
      </header>

      {/* 中央主卡片 */}
      <main className="w-full max-w-md px-6 py-8 my-auto z-10">
        <div className={`rounded-2xl border p-8 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/90 border-slate-800 shadow-black/60'
            : 'bg-white/95 border-stone-200 shadow-stone-300/40'
        } ${isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''} ${isSuccess ? 'scale-95 opacity-80' : ''}`}>
          
          {/* 典雅歷史徽章圖示 */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border relative shadow-inner ${
              isSuccess 
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' 
                : isDark 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                  : 'bg-amber-100 border-amber-300 text-amber-700'
            }`}>
              {isSuccess ? (
                <ShieldCheck className="w-8 h-8 animate-bounce" />
              ) : (
                <Lock className="w-8 h-8" />
              )}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-slate-900" />
            </div>

            <h1 className="text-2xl font-serif font-bold tracking-wide mb-1.5">
              世界文明對照年表
            </h1>
            <p className={`text-xs font-serif leading-relaxed ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
              世界歷史大事結構化時間軸資料庫
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-amber-500/30 bg-amber-500/10 text-amber-500">
              <KeyRound className="w-3 h-3" />
              <span>系統存取驗證</span>
            </div>
          </div>

          {/* 表單區塊 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="gate-password-input" 
                className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}
              >
                請輸入存取密碼
              </label>
              <div className="relative">
                <input
                  id="gate-password-input"
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="請輸入存取密碼"
                  autoComplete="current-password"
                  disabled={isSuccess}
                  className={`w-full px-4 py-3 rounded-xl text-sm border font-mono tracking-wider transition-all outline-none pr-11 ${
                    errorMsg 
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30 bg-rose-500/5' 
                      : isDark
                        ? 'bg-slate-950/70 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        : 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20'
                  }`}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? '隱藏密碼' : '顯示密碼'}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors ${
                    isDark ? 'text-slate-400 hover:text-slate-200' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* 錯誤提示 */}
              {errorMsg && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-500 font-sans animate-fade-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            {/* 提交按鈕 */}
            <button
              type="submit"
              disabled={isSuccess || !password.trim()}
              className={`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                isSuccess
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-amber-600 hover:bg-amber-500 active:scale-[0.99] text-white shadow-amber-900/20 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {isSuccess ? (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>驗證成功，正在載入年表...</span>
                </>
              ) : (
                <>
                  <span>驗證並進入年表</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* 底部版權聲明 */}
      <footer className="w-full max-w-5xl px-6 py-6 text-center text-[11px] z-10 opacity-70">
        <p className="font-serif">
          © 2026 世界文明對照年表 · 版權所有，未經授權禁止轉載、複製或下載。
        </p>
      </footer>

      {/* 晃動動畫自定義樣式 */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};
