"use client";
import { useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   3-D SVG Icons
══════════════════════════════════════════════════ */

function ChartIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <defs>
        <linearGradient id="ch-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e293b"/>
        </linearGradient>
        <linearGradient id="ch-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155"/>
          <stop offset="100%" stopColor="#1e293b"/>
        </linearGradient>
        <linearGradient id="ch-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#475569"/>
          <stop offset="100%" stopColor="#334155"/>
        </linearGradient>
        <linearGradient id="ch-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e293b"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
        <filter id="ch-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ch-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.7"/></filter>
      </defs>
      <g filter="url(#ch-shadow)">
        {/* Monitor casing — 3D */}
        <polygon points="58,14 64,8 64,56 58,62" fill="url(#ch-side)"/>
        <polygon points="14,14 58,14 64,8 20,8" fill="url(#ch-top)"/>
        <rect x="14" y="14" width="44" height="48" rx="4" fill="url(#ch-body)"/>

        {/* Screen bezel */}
        <rect x="17" y="17" width="38" height="38" rx="3" fill="url(#ch-screen)"/>

        {/* Grid lines on screen */}
        {[22,28,34,40,46,52].map(y => (
          <line key={y} x1="18" y1={y} x2="54" y2={y} stroke="#334155" strokeWidth="0.5"/>
        ))}
        {[24,31,38,45,52].map(x => (
          <line key={x} x1={x} y1="18" x2={x} y2="54" stroke="#334155" strokeWidth="0.5"/>
        ))}

        {/* Candlesticks */}
        {/* Bearish */}
        <line x1="25" y1="24" x2="25" y2="48" stroke="#f87171" strokeWidth="1"/>
        <rect x="22" y="28" width="6" height="12" rx="1" fill="#ef4444"/>
        {/* Bullish */}
        <line x1="33" y1="22" x2="33" y2="50" stroke="#4ade80" strokeWidth="1"/>
        <rect x="30" y="26" width="6" height="16" rx="1" fill="#22c55e"/>
        {/* Bearish */}
        <line x1="41" y1="26" x2="41" y2="46" stroke="#f87171" strokeWidth="1"/>
        <rect x="38" y="30" width="6" height="10" rx="1" fill="#ef4444"/>
        {/* Bullish */}
        <line x1="49" y1="20" x2="49" y2="48" stroke="#4ade80" strokeWidth="1"/>
        <rect x="46" y="24" width="6" height="18" rx="1" fill="#22c55e"/>

        {/* Trend line */}
        <path d="M20 46 L28 36 L36 38 L44 28 L52 22" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="none" filter="url(#ch-glow)"/>

        {/* Stand */}
        <rect x="34" y="62" width="12" height="5" rx="2" fill="#334155"/>
        <rect x="28" y="67" width="24" height="4" rx="2" fill="#475569"/>
        <polygon points="28,67 52,67 55,63 31,63" fill="#64748b" fillOpacity="0.5"/>

        {/* Shine */}
        <rect x="16" y="16" width="8" height="24" rx="2" fill="white" fillOpacity="0.05"/>
      </g>
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <defs>
        <linearGradient id="lt-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
        <linearGradient id="lt-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e"/>
          <stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
        <linearGradient id="lt-inner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef9c3"/>
          <stop offset="100%" stopColor="#fde047"/>
        </linearGradient>
        <radialGradient id="lt-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </radialGradient>
        <filter id="lt-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#78350f" floodOpacity="0.6"/></filter>
        <filter id="lt-bloom">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Glow halo */}
      <ellipse cx="40" cy="44" rx="26" ry="26" fill="url(#lt-glow)" opacity="0.5"/>

      <g filter="url(#lt-shadow)">
        {/* 3D bolt — side face */}
        <polygon points="46,8 52,8 52,12 38,44 44,44 36,72 30,72 30,68 44,36 38,36" fill="url(#lt-side)"/>
        {/* 3D bolt — front face */}
        <polygon points="44,8 50,8 50,12 36,44 42,44 34,72 28,72 28,68 42,36 36,36" fill="url(#lt-body)"/>
        {/* Inner highlight */}
        <polygon points="40,14 44,14 44,18 32,44 36,44 30,64 28,64 28,60 40,34 36,34" fill="url(#lt-inner)" fillOpacity="0.6"/>
        {/* Core shine */}
        <polygon points="38,16 40,16 40,20 32,38 34,38 30,52 29,52 29,50 37,32 35,32" fill="white" fillOpacity="0.35"/>
      </g>

      {/* Speed lines */}
      <line x1="10" y1="28" x2="22" y2="28" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
      <line x1="6" y1="38" x2="18" y2="38" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="10" y1="48" x2="20" y2="48" stroke="#fbbf24" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35"/>
      <line x1="58" y1="34" x2="70" y2="34" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7"/>
      <line x1="60" y1="44" x2="72" y2="44" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  );
}

function MultiPlatformIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <defs>
        <linearGradient id="mp-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#4338ca"/>
        </linearGradient>
        <linearGradient id="mp-desk-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5b4fc"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
        <linearGradient id="mp-desk-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3730a3"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
        <linearGradient id="mp-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="mp-phone-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#065f46"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
        <filter id="mp-shadow"><feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.5"/></filter>
      </defs>

      {/* ── Desktop monitor (back-left) ── */}
      <g filter="url(#mp-shadow)">
        <polygon points="38,10 44,6 44,40 38,44" fill="url(#mp-desk-side)"/>
        <polygon points="8,10 38,10 44,6 14,6" fill="url(#mp-desk-top)"/>
        <rect x="8" y="10" width="30" height="34" rx="3" fill="url(#mp-desk)"/>
        {/* Screen */}
        <rect x="11" y="13" width="24" height="22" rx="2" fill="#1e1b4b"/>
        {/* Chart on screen */}
        <polyline points="13,30 17,24 21,27 25,20 29,23 33,17" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="13" y1="32" x2="33" y2="32" stroke="#4338ca" strokeWidth="0.8"/>
        {/* Stand */}
        <rect x="19" y="44" width="8" height="4" rx="1.5" fill="#4338ca"/>
        <rect x="15" y="48" width="16" height="3" rx="1.5" fill="#6366f1"/>
        <polygon points="15,48 31,48 33,44 17,44" fill="#818cf8" fillOpacity="0.5"/>
      </g>

      {/* ── Tablet (mid) ── */}
      <g filter="url(#mp-shadow)">
        <polygon points="56,18 62,14 62,62 56,66" fill="#9333ea" fillOpacity="0.8"/>
        <polygon points="36,18 56,18 62,14 42,14" fill="#c084fc" fillOpacity="0.7"/>
        <rect x="36" y="18" width="20" height="48" rx="3" fill="#7c3aed"/>
        {/* Screen */}
        <rect x="39" y="22" width="14" height="34" rx="2" fill="#1e1b4b"/>
        {/* Content bars */}
        <rect x="41" y="25" width="10" height="2" rx="1" fill="#a78bfa" fillOpacity="0.8"/>
        <rect x="41" y="29" width="7" height="1.5" rx="0.75" fill="#7c3aed" fillOpacity="0.6"/>
        {/* Mini chart */}
        <polyline points="41,40 44,36 47,38 50,33 53,35" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        {/* Home button */}
        <circle cx="46" cy="61" r="2" fill="#6d28d9" stroke="#a78bfa" strokeWidth="0.8"/>
      </g>

      {/* ── Phone (front-right) ── */}
      <g filter="url(#mp-shadow)">
        <polygon points="58,24 64,20 64,70 58,74" fill="url(#mp-phone-side)"/>
        <polygon points="48,24 58,24 64,20 54,20" fill="#6ee7b7" fillOpacity="0.7"/>
        <rect x="48" y="24" width="10" height="50" rx="3" fill="url(#mp-phone)"/>
        {/* Screen */}
        <rect x="50" y="28" width="6" height="36" rx="1.5" fill="#022c22"/>
        {/* Notch */}
        <rect x="51" y="28" width="4" height="2" rx="1" fill="#065f46"/>
        {/* Chart */}
        <polyline points="51,50 53,45 55,47 57,42" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        {/* Home bar */}
        <rect x="52" y="66" width="4" height="1.5" rx="0.75" fill="#6ee7b7" fillOpacity="0.7"/>
        {/* Shine */}
        <rect x="49" y="28" width="2" height="16" rx="1" fill="white" fillOpacity="0.15"/>
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   3-D Tilt Card
══════════════════════════════════════════════════ */
function Card3D({
  children,
  glowColor,
  shadowColor,
}: {
  children: React.ReactNode;
  glowColor: string;
  shadowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: `0 4px 24px -6px ${shadowColor}30`,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotX = (y - 0.5) * -12;
    const rotY = (x - 0.5) * 12;
    setStyle({
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px)`,
      boxShadow: `${(x - 0.5) * -16}px ${(y - 0.5) * 16 + 10}px 40px -8px ${shadowColor}55`,
    });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      boxShadow: `0 4px 24px -6px ${shadowColor}30`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      className="card p-8 group relative overflow-hidden cursor-default text-center rounded-2xl"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(280px circle at 50% 30%, ${glowColor}, transparent 70%)` }}
      />
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   Platform features
══════════════════════════════════════════════════ */
const platforms = [
  {
    Icon: ChartIcon,
    title: "Advanced Charting",
    body: "Utilize MT5's advanced charting tools with 21 timeframes and 80+ built-in technical indicators.",
    glow: "rgba(99,102,241,0.15)",
    shadow: "#4338ca",
    bg: "from-indigo-500/10 to-slate-400/5",
  },
  {
    Icon: LightningIcon,
    title: "Fast Execution",
    body: "Benefit from lightning-fast trade execution — no requotes, no delays.",
    glow: "rgba(245,158,11,0.15)",
    shadow: "#d97706",
    bg: "from-amber-400/15 to-yellow-300/5",
  },
  {
    Icon: MultiPlatformIcon,
    title: "Multi-Platform",
    body: "Trade seamlessly on desktop, web, or mobile. Your account goes wherever you go.",
    glow: "rgba(16,185,129,0.15)",
    shadow: "#059669",
    bg: "from-emerald-500/10 to-teal-400/5",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Platforms</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            MetaTrader 5 — the world&apos;s leading platform.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Available on desktop, web, and mobile. One login, all markets.
          </p>
        </div>

        {/* 3D feature cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {platforms.map((p) => (
            <Card3D key={p.title} glowColor={p.glow} shadowColor={p.shadow}>
              {/* Icon box */}
              <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${p.bg} border border-border flex items-center justify-center mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  <p.Icon />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{p.body}</p>
            </Card3D>
          ))}
        </div>

        {/* Download bar */}
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">MetaTrader 5</h3>
            <p className="text-muted mt-1">Desktop · Web · Mobile Trading</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download MT5 (Windows)
            </a>
            <a
              href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Download MT5 (Mac)
            </a>
            <a
              href="https://metatraderweb.app/trade"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Web Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
