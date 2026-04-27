"use client";
import { useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   3-D Account Icons
══════════════════════════════════════════════════ */

function ClassicIcon() {
  return (
    <svg viewBox="0 0 72 60" fill="none" className="w-16 h-14">
      <defs>
        <radialGradient id="cl-medal" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#d1d5db"/>
          <stop offset="55%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </radialGradient>
        <linearGradient id="cl-ribbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <filter id="cl-shadow"><feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#1f2937" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#cl-shadow)">
        {/* Ribbon left */}
        <polygon points="28,8 36,8 32,30 24,30" fill="url(#cl-ribbon)" opacity="0.9"/>
        {/* Ribbon right */}
        <polygon points="36,8 44,8 48,30 40,30" fill="#059669" opacity="0.9"/>
        {/* Medal edge/depth */}
        <ellipse cx="36" cy="42" rx="16" ry="5" fill="#374151"/>
        {/* Medal face */}
        <circle cx="36" cy="36" r="16" fill="url(#cl-medal)"/>
        {/* Medal shine */}
        <ellipse cx="30" cy="29" rx="6" ry="4" fill="white" fillOpacity="0.22" transform="rotate(-25 30 29)"/>
        {/* Medal rim */}
        <circle cx="36" cy="36" r="16" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeOpacity="0.5"/>
        {/* Star */}
        <text x="36" y="41" textAnchor="middle" fontSize="16" fill="#4b5563" fontWeight="900" fontFamily="system-ui">★</text>
        {/* Label */}
        <text x="36" y="52" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#9ca3af" fontFamily="system-ui" letterSpacing="1">CLASSIC</text>
      </g>
    </svg>
  );
}

function ExecutiveIcon() {
  return (
    <svg viewBox="0 0 72 60" fill="none" className="w-16 h-14">
      <defs>
        <radialGradient id="ex-medal" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
        <linearGradient id="ex-ribbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="ex-crown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <filter id="ex-shadow"><feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#451a03" floodOpacity="0.55"/></filter>
        <filter id="ex-glow">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#ex-shadow)">
        {/* Ribbon */}
        <polygon points="26,6 36,6 32,28 22,28" fill="url(#ex-ribbon)" opacity="0.95"/>
        <polygon points="36,6 46,6 50,28 40,28" fill="#047857" opacity="0.95"/>
        {/* Glow behind medal */}
        <circle cx="36" cy="38" r="18" fill="#f59e0b" fillOpacity="0.15" filter="url(#ex-glow)"/>
        {/* Medal edge */}
        <ellipse cx="36" cy="44" rx="17" ry="5.5" fill="#92400e"/>
        {/* Medal face */}
        <circle cx="36" cy="38" r="17" fill="url(#ex-medal)"/>
        {/* Shine */}
        <ellipse cx="29" cy="30" rx="7" ry="4.5" fill="white" fillOpacity="0.25" transform="rotate(-25 29 30)"/>
        {/* Rim */}
        <circle cx="36" cy="38" r="17" fill="none" stroke="#fde68a" strokeWidth="1.5" strokeOpacity="0.6"/>
        {/* Crown */}
        <path d="M26 38 L26 32 L30 35 L36 28 L42 35 L46 32 L46 38 Z" fill="url(#ex-crown)" stroke="#d97706" strokeWidth="0.8"/>
        {/* Crown gems */}
        <circle cx="36" cy="30" r="2" fill="#ef4444"/>
        <circle cx="28" cy="34" r="1.5" fill="#60a5fa"/>
        <circle cx="44" cy="34" r="1.5" fill="#34d399"/>
        {/* Label */}
        <text x="36" y="54" textAnchor="middle" fontSize="5" fontWeight="800" fill="#d97706" fontFamily="system-ui" letterSpacing="0.8">EXECUTIVE</text>
      </g>
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 72 60" fill="none" className="w-16 h-14">
      <defs>
        <radialGradient id="pm-gem" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#e0e7ff"/>
          <stop offset="40%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#3730a3"/>
        </radialGradient>
        <linearGradient id="pm-face1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5b4fc"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
        <linearGradient id="pm-face2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
        <linearGradient id="pm-face3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#4338ca"/>
        </linearGradient>
        <filter id="pm-shadow"><feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#1e1b4b" floodOpacity="0.6"/></filter>
        <filter id="pm-glow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#pm-shadow)">
        {/* Glow */}
        <ellipse cx="36" cy="38" rx="20" ry="12" fill="#6366f1" fillOpacity="0.2" filter="url(#pm-glow)"/>
        {/* Diamond gem — faceted */}
        {/* Top crown */}
        <polygon points="36,8 26,24 36,20 46,24" fill="url(#pm-face1)"/>
        {/* Left upper */}
        <polygon points="26,24 20,32 36,20" fill="#a5b4fc" fillOpacity="0.8"/>
        {/* Right upper */}
        <polygon points="46,24 52,32 36,20" fill="#c7d2fe" fillOpacity="0.7"/>
        {/* Center */}
        <polygon points="36,20 20,32 36,48 52,32" fill="url(#pm-face2)"/>
        {/* Left lower */}
        <polygon points="20,32 28,48 36,48" fill="url(#pm-face3)" fillOpacity="0.9"/>
        {/* Right lower */}
        <polygon points="52,32 44,48 36,48" fill="#4338ca" fillOpacity="0.8"/>
        {/* Shine facets */}
        <polygon points="36,8 42,20 36,20" fill="white" fillOpacity="0.4"/>
        <polygon points="36,8 30,20 36,20" fill="white" fillOpacity="0.2"/>
        <polygon points="36,20 44,28 48,24" fill="white" fillOpacity="0.15"/>
        {/* Bottom point shadow */}
        <ellipse cx="36" cy="50" rx="10" ry="3" fill="#1e1b4b" fillOpacity="0.4"/>
        {/* Label */}
        <text x="36" y="58" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#818cf8" fontFamily="system-ui" letterSpacing="0.8">PREMIUM</text>
      </g>
    </svg>
  );
}

function IslamicIcon() {
  return (
    <svg viewBox="0 0 72 60" fill="none" className="w-16 h-14">
      <defs>
        <radialGradient id="is-moon" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#fef3c7"/>
          <stop offset="55%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#d97706"/>
        </radialGradient>
        <linearGradient id="is-shield-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#065f46"/>
        </linearGradient>
        <linearGradient id="is-shield-s" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#047857"/>
          <stop offset="100%" stopColor="#064e3b"/>
        </linearGradient>
        <linearGradient id="is-shield-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <filter id="is-shadow"><feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#064e3b" floodOpacity="0.55"/></filter>
        <filter id="is-glow">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#is-shadow)">
        {/* 3D Shield */}
        {/* Side */}
        <path d="M50,10 L56,6 L56,42 Q56,52 48,58 L42,54 Q50,48 50,40 Z" fill="url(#is-shield-s)"/>
        {/* Top face */}
        <path d="M22,10 L50,10 L56,6 L28,6 Z" fill="url(#is-shield-top)"/>
        {/* Front */}
        <path d="M22,10 L50,10 L50,40 Q50,52 36,58 Q22,52 22,40 Z" fill="url(#is-shield-f)"/>
        {/* Shield inner border */}
        <path d="M25,12 L47,12 L47,40 Q47,50 36,55 Q25,50 25,40 Z" fill="none" stroke="#6ee7b7" strokeWidth="0.8" strokeOpacity="0.5"/>
        {/* Shield shine */}
        <path d="M24,12 L30,12 L30,44 Q29,50 27,52 Q24,48 24,40 Z" fill="white" fillOpacity="0.07"/>

        {/* Crescent moon */}
        <circle cx="36" cy="30" r="10" fill="url(#is-moon)" filter="url(#is-glow)"/>
        <circle cx="40" cy="27" r="8" fill="#065f46"/>
        {/* Moon shine */}
        <ellipse cx="30" cy="25" rx="3.5" ry="2.5" fill="white" fillOpacity="0.3" transform="rotate(-30 30 25)"/>

        {/* Stars */}
        <text x="44" y="28" fontSize="6" fill="#fbbf24" fontFamily="system-ui">★</text>
        <text x="28" y="40" fontSize="4" fill="#fbbf24" fontFamily="system-ui" fillOpacity="0.7">★</text>

        {/* Label */}
        <text x="36" y="57" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#6ee7b7" fontFamily="system-ui" letterSpacing="0.8">ISLAMIC</text>
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   3-D Tilt Card
══════════════════════════════════════════════════ */
function Card3D({
  children,
  highlight,
  glowColor,
  shadowColor,
}: {
  children: React.ReactNode;
  highlight: boolean;
  glowColor: string;
  shadowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: highlight
      ? `0 0 0 1.5px ${shadowColor}80, 0 8px 32px -8px ${shadowColor}50`
      : `0 4px 20px -6px ${shadowColor}25`,
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
      transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(14px)`,
      boxShadow: highlight
        ? `0 0 0 1.5px ${shadowColor}80, ${(x - 0.5) * -16}px ${(y - 0.5) * 16 + 14}px 44px -8px ${shadowColor}65`
        : `${(x - 0.5) * -14}px ${(y - 0.5) * 14 + 10}px 36px -6px ${shadowColor}45`,
    });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      boxShadow: highlight
        ? `0 0 0 1.5px ${shadowColor}80, 0 8px 32px -8px ${shadowColor}50`
        : `0 4px 20px -6px ${shadowColor}25`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      className="card p-7 flex flex-col relative overflow-hidden cursor-default rounded-2xl"
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(260px circle at 50% 10%, ${glowColor}, transparent 70%)` }}
      />
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   Data
══════════════════════════════════════════════════ */
const accounts = [
  {
    Icon: ClassicIcon,
    name: "Classic",
    desc: "Perfect for beginners entering the market for the first time.",
    points: ["Forex & Commodities", "MT5 platform access", "Email support", "Educational resources"],
    highlight: false,
    glow: "rgba(156,163,175,0.15)",
    shadow: "#6b7280",
    accent: "#9ca3af",
    bg: "from-gray-400/10 to-slate-300/5",
    iconBg: "from-gray-500/15 to-gray-400/5",
  },
  {
    Icon: ExecutiveIcon,
    name: "Executive",
    desc: "For active traders who need more tools and faster execution.",
    points: ["All Classic features", "Metals & Indices", "Priority support", "Advanced analytics", "Tighter spreads"],
    highlight: true,
    glow: "rgba(245,158,11,0.18)",
    shadow: "#f59e0b",
    accent: "#f59e0b",
    bg: "from-amber-400/15 to-yellow-300/5",
    iconBg: "from-amber-400/20 to-yellow-300/8",
  },
  {
    Icon: PremiumIcon,
    name: "Premium",
    desc: "For serious traders demanding the best conditions.",
    points: ["All Executive features", "Dedicated account manager", "Live mentorship", "Research reports", "Fastest execution"],
    highlight: false,
    glow: "rgba(99,102,241,0.15)",
    shadow: "#6366f1",
    accent: "#818cf8",
    bg: "from-indigo-500/10 to-violet-400/5",
    iconBg: "from-indigo-500/15 to-violet-400/8",
  },
  {
    Icon: IslamicIcon,
    name: "Islamic",
    desc: "Swap-free accounts fully compliant with Islamic finance principles.",
    points: ["No swap/rollover fees", "All markets access", "Swap Free T&C apply", "Dedicated support"],
    highlight: false,
    glow: "rgba(16,185,129,0.15)",
    shadow: "#10b981",
    accent: "#34d399",
    bg: "from-emerald-500/10 to-teal-400/5",
    iconBg: "from-emerald-500/15 to-teal-400/8",
  },
];

export default function Accounts() {
  return (
    <section id="accounts" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip mb-4">Account Types</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Choose the account that fits you.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            From Classic to Islamic — every account comes with MT5 and full market access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accounts.map((a) => (
            <Card3D
              key={a.name}
              highlight={a.highlight}
              glowColor={a.glow}
              shadowColor={a.shadow}
            >
              {/* Most popular badge */}
              {a.highlight && (
                <div
                  className="absolute -top-px left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, transparent, ${a.shadow}, transparent)` }}
                />
              )}
              {a.highlight && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black px-3 py-1 rounded-full text-white tracking-widest uppercase"
                  style={{ background: `linear-gradient(135deg, #f59e0b, #d97706)`, boxShadow: `0 4px 12px ${a.shadow}60` }}
                >
                  ★ Most Popular
                </span>
              )}

              {/* Icon stage */}
              <div
                className={`w-full h-28 rounded-xl bg-gradient-to-br ${a.iconBg} border border-border mb-5 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-25" />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ background: `radial-gradient(50% 70% at 50% 70%, ${a.glow}, transparent)` }}
                />
                <div className="relative group hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  <a.Icon />
                </div>
              </div>

              {/* Accent line */}
              <div
                className="w-8 h-0.5 rounded-full mb-3"
                style={{ background: `linear-gradient(to right, ${a.accent}, transparent)` }}
              />

              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: a.accent }}>
                {a.name} Account
              </div>
              <p className="text-sm mt-2 leading-relaxed text-muted">{a.desc}</p>

              <ul className="mt-5 space-y-2.5 text-sm flex-1">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
                      style={{ background: `${a.accent}25`, color: a.accent }}
                    >
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="https://milescap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center mt-6 rounded-xl py-2.5 text-sm font-semibold text-center transition-all"
                style={
                  a.highlight
                    ? {
                        background: `linear-gradient(135deg, #f59e0b, #d97706)`,
                        color: "white",
                        boxShadow: `0 6px 20px ${a.shadow}50`,
                      }
                    : {
                        background: "transparent",
                        border: `1px solid ${a.accent}40`,
                        color: a.accent,
                      }
                }
              >
                Open Account →
              </a>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
