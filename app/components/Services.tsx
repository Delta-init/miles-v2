"use client";
import { useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   Icons — original colours; greyscale by default,
   real colour revealed on hover
══════════════════════════════════════════════════ */

function ConsultingIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" className="w-32 h-28">
      <defs>
        <radialGradient id="con-head" cx="38%" cy="30%" r="62%">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="60%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#065f46"/>
        </radialGradient>
        <linearGradient id="con-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
        <linearGradient id="con-desk-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a7f3d0"/>
          <stop offset="100%" stopColor="#6ee7b7"/>
        </linearGradient>
        <linearGradient id="con-desk-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#065f46"/>
        </linearGradient>
        <linearGradient id="con-desk-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#047857"/>
          <stop offset="100%" stopColor="#064e3b"/>
        </linearGradient>
        <filter id="con-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.55"/></filter>
      </defs>
      <g filter="url(#con-shadow)">
        <circle cx="48" cy="16" r="10" fill="url(#con-head)"/>
        <ellipse cx="44" cy="12" rx="4" ry="3" fill="white" fillOpacity="0.2" transform="rotate(-25 44 12)"/>
        <path d="M30 52 Q30 34 48 34 Q66 34 66 52 Z" fill="url(#con-body)"/>
        <path d="M48 34 L42 46 L48 42 L54 46 Z" fill="#065f46" fillOpacity="0.7"/>
        <path d="M48 42 L46 52 L48 50 L50 52 Z" fill="#fbbf24"/>
        <polygon points="16,58 80,58 86,52 22,52" fill="url(#con-desk-top)"/>
        <rect x="16" y="58" width="64" height="10" rx="2" fill="url(#con-desk-front)"/>
        <polygon points="80,58 86,52 86,62 80,68" fill="url(#con-desk-side)"/>
        <rect x="24" y="44" width="18" height="12" rx="2" fill="white" fillOpacity="0.9"/>
        <polyline points="26,52 28,48 30,50 32,46 34,48 36,44 38,46" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <rect x="46" y="44" width="14" height="3" rx="1.5" fill="#fbbf24" transform="rotate(-15 46 44)"/>
        <polygon points="46,52 48,52 47,56" fill="#f59e0b"/>
        <rect x="62" y="46" width="10" height="10" rx="3" fill="#065f46" stroke="#34d399" strokeWidth="1"/>
        <path d="M72 49 Q76 49 76 52 Q76 55 72 55" stroke="#34d399" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M65 44 Q66 41 65 39" stroke="#a7f3d0" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.7"/>
        <path d="M68 43 Q69 40 68 38" stroke="#a7f3d0" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.5"/>
      </g>
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" className="w-32 h-28">
      <defs>
        <linearGradient id="str-board" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
        <linearGradient id="str-board-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="str-board-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#1e40af"/>
        </linearGradient>
        <filter id="str-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#str-shadow)">
        <polygon points="72,8 80,2 80,62 72,68" fill="url(#str-board-side)"/>
        <polygon points="16,8 72,8 80,2 24,2" fill="url(#str-board-top)"/>
        <rect x="16" y="8" width="56" height="60" rx="3" fill="url(#str-board)"/>
        <rect x="18" y="10" width="10" height="40" rx="2" fill="white" fillOpacity="0.04"/>
        {[14,22,30,38,46].map(x =>
          [14,22,30,38,46].map(y => (
            <rect key={`${x}-${y}`} x={x+18} y={y+10} width="7" height="7" rx="0.5"
              fill={(Math.floor(x/8)+Math.floor(y/8))%2===0?"#1e3a8a":"#1e293b"} fillOpacity="0.7"/>
          ))
        )}
        {/* King — gold */}
        <rect x="34" y="24" width="8" height="10" rx="2" fill="#f59e0b"/>
        <rect x="32" y="22" width="12" height="4" rx="2" fill="#fbbf24"/>
        <rect x="36" y="18" width="4" height="5" rx="1" fill="#fde68a"/>
        <path d="M35 18 L38 15 L41 18" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <ellipse cx="38" cy="35" rx="5" ry="2" fill="#000" fillOpacity="0.3"/>
        {/* Knight — blue */}
        <rect x="56" y="40" width="8" height="8" rx="2" fill="#3b82f6"/>
        <rect x="54" y="38" width="12" height="4" rx="2" fill="#60a5fa"/>
        <path d="M56 38 Q58 32 63 33 Q64 36 62 38" fill="#93c5fd" stroke="#3b82f6" strokeWidth="0.8"/>
        <ellipse cx="60" cy="47" rx="5" ry="2" fill="#000" fillOpacity="0.25"/>
        {/* Rook — rose */}
        <rect x="22" y="44" width="8" height="8" rx="1" fill="#f43f5e"/>
        <rect x="20" y="42" width="12" height="4" rx="1" fill="#fb7185"/>
        <rect x="20" y="40" width="3" height="3" rx="0.5" fill="#fda4af"/>
        <rect x="24" y="40" width="3" height="3" rx="0.5" fill="#fda4af"/>
        <rect x="28" y="40" width="3" height="3" rx="0.5" fill="#fda4af"/>
        <ellipse cx="26" cy="51" rx="5" ry="2" fill="#000" fillOpacity="0.25"/>
        {/* Arrow */}
        <path d="M30 34 L42 24" stroke="#34d399" strokeWidth="1.5" strokeDasharray="2 1.5" strokeLinecap="round"/>
        <path d="M40 22 L42 24 L40 26" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function InvestmentIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" className="w-32 h-28">
      <defs>
        <linearGradient id="inv-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#6d28d9"/>
        </linearGradient>
        <linearGradient id="inv-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="inv-bar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <radialGradient id="inv-coin" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#d97706"/>
        </radialGradient>
        <filter id="inv-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1e1b4b" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#inv-shadow)">
        {/* Bar 1 — violet */}
        <polygon points="14,52 22,52 25,48 17,48" fill="#c4b5fd" fillOpacity="0.7"/>
        <polygon points="22,52 25,48 25,68 22,72" fill="#4c1d95"/>
        <rect x="14" y="52" width="8" height="18" rx="1" fill="url(#inv-bar1)"/>
        {/* Bar 2 — green tallest */}
        <polygon points="28,34 36,34 39,30 31,30" fill="#6ee7b7" fillOpacity="0.8"/>
        <polygon points="36,34 39,30 39,68 36,72" fill="#065f46"/>
        <rect x="28" y="34" width="8" height="36" rx="1" fill="url(#inv-bar2)"/>
        <rect x="27" y="27" width="12" height="7" rx="2" fill="#10b981"/>
        <text x="33" y="33" textAnchor="middle" fontSize="5" fontWeight="800" fill="white" fontFamily="system-ui">+28%</text>
        {/* Bar 3 — blue */}
        <polygon points="42,44 50,44 53,40 45,40" fill="#93c5fd" fillOpacity="0.7"/>
        <polygon points="50,44 53,40 53,68 50,72" fill="#1e3a8a"/>
        <rect x="42" y="44" width="8" height="26" rx="1" fill="url(#inv-bar3)"/>
        {/* Trend line — green */}
        <path d="M18 60 L32 40 L46 48 L64 20" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M60 18 L64 20 L62 24" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="60" r="3" fill="#a78bfa"/>
        <circle cx="32" cy="40" r="3" fill="#34d399"/>
        <circle cx="46" cy="48" r="3" fill="#60a5fa"/>
        <circle cx="64" cy="20" r="4" fill="#34d399"/>
        {/* Gold coin */}
        <ellipse cx="74" cy="56" rx="12" ry="4" fill="#92400e"/>
        <ellipse cx="74" cy="52" rx="12" ry="12" fill="url(#inv-coin)"/>
        <ellipse cx="70" cy="47" rx="5" ry="3" fill="white" fillOpacity="0.2" transform="rotate(-20 70 47)"/>
        <text x="74" y="56" textAnchor="middle" fontSize="10" fontWeight="900" fill="#451a03" fontFamily="system-ui">$</text>
        <line x1="10" y1="72" x2="86" y2="72" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   3-D Tilt Card
══════════════════════════════════════════════════ */
function Card3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: "0 4px 24px -6px rgba(0,0,0,0.12)",
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setStyle({
      transform: `perspective(900px) rotateX(${(y-0.5)*-14}deg) rotateY(${(x-0.5)*14}deg) translateZ(14px)`,
      boxShadow: `${(x-0.5)*-18}px ${(y-0.5)*18+12}px 44px -8px rgba(0,0,0,0.25)`,
    });
  };

  const onLeave = () => setStyle({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: "0 4px 24px -6px rgba(0,0,0,0.12)",
  });

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      className="group card p-8 flex flex-col relative overflow-hidden cursor-default rounded-2xl"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(320px circle at 40% 20%, rgba(0,0,0,0.03), transparent 70%)" }}/>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   Data
══════════════════════════════════════════════════ */
const pillars = [
  {
    Icon: ConsultingIcon,
    title: "Consulting",
    body: "Expert consulting to shape your trading strategy and help you reach your financial goals.",
    points: ["Market analysis", "Risk assessment", "Goal-based planning"],
  },
  {
    Icon: StrategyIcon,
    title: "Strategy",
    body: "Tailored strategies designed to maximize your gains while minimizing exposure to risk.",
    points: ["Custom trade plans", "Portfolio diversification", "Risk management"],
  },
  {
    Icon: InvestmentIcon,
    title: "Investment",
    body: "Navigate investments effortlessly. Your financial success is the expertise that drives us.",
    points: ["Multi-asset access", "Expert guidance", "Performance tracking"],
  },
];

export default function Pillars() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Pillars of Excellence</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Three pillars. One mission.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            We enable millions of people to achieve their financial dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <Card3D key={p.title}>
              {/* Icon stage */}
              <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-slate-200/60 to-gray-100/40 border border-border mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="icon-grey relative group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  <p.Icon />
                </div>
              </div>

              <div className="w-10 h-1 rounded-full mb-4 bg-gradient-to-r from-accent to-transparent" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{p.body}</p>

              <ul className="mt-5 space-y-2.5 text-sm flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-muted">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] bg-accent/15 text-accent">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-ghost w-full justify-center mt-6 group-hover:border-accent/50 transition-colors">
                Learn more
              </a>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
