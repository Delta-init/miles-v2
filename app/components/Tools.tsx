"use client";
import { useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   3-D Black / Monochrome SVG Icons
══════════════════════════════════════════════════ */

function PipIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="tk-pip-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="tk-pip-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f2937"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
        <linearGradient id="tk-pip-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
        <filter id="tk-pip-sh"><feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#tk-pip-sh)">
        {/* Calculator body — front */}
        <rect x="14" y="18" width="40" height="48" rx="5" fill="url(#tk-pip-body)"/>
        {/* Side face */}
        <polygon points="54,18 60,12 60,60 54,66" fill="url(#tk-pip-side)"/>
        {/* Top face */}
        <polygon points="14,18 54,18 60,12 20,12" fill="url(#tk-pip-top)"/>
        {/* Screen */}
        <rect x="19" y="23" width="30" height="12" rx="3" fill="#000" fillOpacity="0.75"/>
        <rect x="21" y="25" width="22" height="3" rx="1" fill="#9ca3af" fillOpacity="0.9"/>
        <rect x="21" y="30" width="14" height="2" rx="1" fill="#6b7280" fillOpacity="0.6"/>
        {/* Button rows */}
        {[40,50,58].map((y, row) =>
          [19,28,37,46].map((x, col) => (
            <rect key={`${row}-${col}`} x={x} y={y} width="7" height="5" rx="1.5"
              fill={row === 2 && col === 3 ? "#9ca3af" : "#000"}
              fillOpacity={row === 2 && col === 3 ? "0.9" : "0.55"}/>
          ))
        )}
        {/* Shine */}
        <rect x="16" y="20" width="12" height="20" rx="3" fill="white" fillOpacity="0.08"/>
      </g>
    </svg>
  );
}

function MarginIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="tk-mg-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
        <linearGradient id="tk-mg-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <filter id="tk-mg-sh"><feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#tk-mg-sh)">
        {/* Gauge arc background */}
        <path d="M14 54 A 26 26 0 0 1 66 54" stroke="#111827" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* Gauge arc fill */}
        <path d="M14 54 A 26 26 0 0 1 50 18" stroke="url(#tk-mg-arc)" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* Outer ring */}
        <path d="M12 54 A 28 28 0 0 1 68 54" stroke="#6b7280" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.4"/>
        {/* Needle */}
        <line x1="40" y1="54" x2="22" y2="28" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round"/>
        {/* Needle base */}
        <circle cx="40" cy="54" r="6" fill="#111827"/>
        <circle cx="40" cy="54" r="6" fill="none" stroke="#6b7280" strokeWidth="1.5"/>
        <circle cx="38" cy="52" r="2" fill="white" fillOpacity="0.25"/>
        {/* Labels */}
        <text x="14" y="66" fontSize="7" fill="#9ca3af" fontWeight="700" fontFamily="system-ui">0</text>
        <text x="36" y="12" fontSize="7" fill="#9ca3af" fontWeight="700" fontFamily="system-ui">50</text>
        <text x="60" y="66" fontSize="7" fill="#9ca3af" fontWeight="700" fontFamily="system-ui">100</text>
        {/* Base plate */}
        <rect x="28" y="60" width="24" height="8" rx="3" fill="url(#tk-mg-top)"/>
        <polygon points="28,60 52,60 55,56 31,56" fill="#9ca3af" fillOpacity="0.4"/>
      </g>
    </svg>
  );
}

function ProfitIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="tk-coin-g" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="50%" stopColor="#4b5563"/>
          <stop offset="100%" stopColor="#000000"/>
        </radialGradient>
        <linearGradient id="tk-coin-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <filter id="tk-profit-sh"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#tk-profit-sh)">
        {/* Back coin */}
        <ellipse cx="42" cy="62" rx="20" ry="6" fill="#000"/>
        <rect x="22" y="52" width="40" height="10" fill="url(#tk-coin-edge)"/>
        <ellipse cx="42" cy="52" rx="20" ry="6" fill="url(#tk-coin-g)"/>
        {/* Mid coin */}
        <ellipse cx="40" cy="46" rx="20" ry="6" fill="#000"/>
        <rect x="20" y="36" width="40" height="10" fill="url(#tk-coin-edge)"/>
        <ellipse cx="40" cy="36" rx="20" ry="6" fill="url(#tk-coin-g)"/>
        <ellipse cx="35" cy="33" rx="7" ry="3" fill="white" fillOpacity="0.15"/>
        {/* Front coin */}
        <ellipse cx="38" cy="30" rx="20" ry="6" fill="#000"/>
        <rect x="18" y="20" width="40" height="10" fill="url(#tk-coin-edge)"/>
        <ellipse cx="38" cy="20" rx="20" ry="6" fill="url(#tk-coin-g)"/>
        <ellipse cx="33" cy="17" rx="7" ry="3" fill="white" fillOpacity="0.2"/>
        <text x="38" y="23" textAnchor="middle" fontSize="8" fontWeight="900" fill="white" fillOpacity="0.7" fontFamily="system-ui">$$$</text>
        {/* Arrow up */}
        <path d="M64 28 L64 12" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 16 L64 12 L68 16" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function ConverterIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="tk-cv1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="60%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#000000"/>
        </radialGradient>
        <radialGradient id="tk-cv2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#d1d5db"/>
          <stop offset="60%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#111827"/>
        </radialGradient>
        <filter id="tk-cv-sh"><feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#tk-cv-sh)">
        {/* Left coin */}
        <ellipse cx="28" cy="44" rx="16" ry="5" fill="#000"/>
        <ellipse cx="28" cy="38" rx="16" ry="16" fill="url(#tk-cv1)"/>
        <ellipse cx="23" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.15" transform="rotate(-20 23 32)"/>
        <text x="28" y="43" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fillOpacity="0.8" fontFamily="system-ui">$</text>
        {/* Right coin */}
        <ellipse cx="52" cy="44" rx="16" ry="5" fill="#000"/>
        <ellipse cx="52" cy="38" rx="16" ry="16" fill="url(#tk-cv2)"/>
        <ellipse cx="47" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.15" transform="rotate(-20 47 32)"/>
        <text x="52" y="43" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fillOpacity="0.8" fontFamily="system-ui">€</text>
        {/* Swap arrows */}
        <path d="M36 22 Q40 16 44 22" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M42 20 L44 22 L42 24" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 58 Q40 64 36 58" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M38 60 L36 58 L38 56" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="tk-clock-face" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="60%" stopColor="#1f2937"/>
          <stop offset="100%" stopColor="#000000"/>
        </radialGradient>
        <linearGradient id="tk-clock-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
        <filter id="tk-clock-sh"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.7"/></filter>
      </defs>
      <g filter="url(#tk-clock-sh)">
        {/* Clock depth */}
        <ellipse cx="40" cy="52" rx="28" ry="8" fill="#000"/>
        <rect x="12" y="22" width="56" height="30" rx="28" fill="url(#tk-clock-edge)"/>
        {/* Clock face */}
        <circle cx="40" cy="36" r="24" fill="url(#tk-clock-face)"/>
        {/* Face shine */}
        <ellipse cx="32" cy="26" rx="9" ry="6" fill="white" fillOpacity="0.12" transform="rotate(-20 32 26)"/>
        {/* Hour marks — pre-computed */}
        {[
          {x1:40,   y1:17,   x2:40,   y2:21,   major:true },
          {x1:49.5, y1:19.5, x2:48.1, y2:22.1, major:false},
          {x1:57.5, y1:26.5, x2:55.6, y2:28.2, major:false},
          {x1:59,   y1:36,   x2:55,   y2:36,   major:true },
          {x1:57.5, y1:45.5, x2:55.6, y2:43.8, major:false},
          {x1:49.5, y1:52.5, x2:48.1, y2:49.9, major:false},
          {x1:40,   y1:55,   x2:40,   y2:51,   major:true },
          {x1:30.5, y1:52.5, x2:31.9, y2:49.9, major:false},
          {x1:22.5, y1:45.5, x2:24.4, y2:43.8, major:false},
          {x1:21,   y1:36,   x2:25,   y2:36,   major:true },
          {x1:22.5, y1:26.5, x2:24.4, y2:28.2, major:false},
          {x1:30.5, y1:19.5, x2:31.9, y2:22.1, major:false},
        ].map((m, i) => (
          <line key={i} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2}
            stroke="white" strokeWidth={m.major ? 2 : 1} strokeOpacity="0.6" strokeLinecap="round"/>
        ))}
        {/* Hour hand */}
        <line x1="40" y1="36" x2="40" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Minute hand */}
        <line x1="40" y1="36" x2="52" y2="32" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
        {/* Center dot */}
        <circle cx="40" cy="36" r="3" fill="white" fillOpacity="0.9"/>
        <circle cx="40" cy="36" r="1.5" fill="#374151"/>
      </g>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="tk-cal-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="tk-cal-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
        <linearGradient id="tk-cal-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f2937"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
        <filter id="tk-cal-sh"><feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#tk-cal-sh)">
        {/* 3D body */}
        <polygon points="58,16 64,10 64,66 58,72" fill="url(#tk-cal-side)"/>
        <polygon points="14,16 58,16 64,10 20,10" fill="url(#tk-cal-top)"/>
        <rect x="14" y="16" width="44" height="56" rx="4" fill="url(#tk-cal-front)"/>
        {/* Header bar */}
        <rect x="14" y="16" width="44" height="14" rx="4" fill="#111827"/>
        <rect x="14" y="24" width="44" height="6" fill="#111827"/>
        {/* Calendar rings */}
        <rect x="24" y="10" width="5" height="10" rx="2.5" fill="#9ca3af" stroke="#374151" strokeWidth="1"/>
        <rect x="43" y="10" width="5" height="10" rx="2.5" fill="#9ca3af" stroke="#374151" strokeWidth="1"/>
        {/* Header text */}
        <text x="36" y="27" textAnchor="middle" fontSize="7" fontWeight="900" fill="white" fillOpacity="0.8" fontFamily="system-ui" letterSpacing="1">EVENTS</text>
        {/* Grid dots — days */}
        {[
          [20,38],[28,38],[36,38],[44,38],[52,38],
          [20,46],[28,46],[36,46],[44,46],[52,46],
          [20,54],[28,54],[36,54],
        ].map(([cx, cy], i) => (
          <rect key={i} x={cx-4} y={cy-4} width="8" height="6" rx="1.5"
            fill={i === 4 ? "#d1d5db" : i === 7 ? "#9ca3af" : "white"}
            fillOpacity={i === 4 || i === 7 ? "0.85" : "0.2"}/>
        ))}
        {/* Highlight dot */}
        <circle cx="52" cy="38" r="5" fill="#9ca3af" fillOpacity="0.9"/>
        <text x="52" y="41" textAnchor="middle" fontSize="6" fontWeight="900" fill="#000" fontFamily="system-ui">!</text>
        {/* Shine */}
        <rect x="16" y="18" width="10" height="30" rx="3" fill="white" fillOpacity="0.06"/>
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   3-D Tilt Card
══════════════════════════════════════════════════ */
function Card3D({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: "0 4px 20px -6px rgba(0,0,0,0.12)",
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
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`,
      boxShadow: `${(x - 0.5) * -14}px ${(y - 0.5) * 14 + 10}px 36px -6px rgba(0,0,0,0.25)`,
    });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      boxShadow: "0 4px 20px -6px rgba(0,0,0,0.12)",
    });
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      className="card p-7 group relative overflow-hidden flex flex-col rounded-2xl cursor-pointer"
    >
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: "radial-gradient(280px circle at 30% 20%, rgba(0,0,0,0.04), transparent 70%)" }}
      />
      {children}
    </a>
  );
}

/* ══════════════════════════════════════════════════
   Tools data
══════════════════════════════════════════════════ */
const tools = [
  {
    Icon: PipIcon,
    title: "Pip Calculator",
    body: "Calculate pip values for any currency pair in seconds. Know exactly what each pip is worth before you trade.",
  },
  {
    Icon: MarginIcon,
    title: "Margin Calculator",
    body: "Determine the required margin for your trades. Manage leverage confidently and avoid margin calls.",
  },
  {
    Icon: ProfitIcon,
    title: "Profit Calculator",
    body: "Estimate potential profits and losses before entering a position. Plan every trade with precision.",
  },
  {
    Icon: ConverterIcon,
    title: "Currency Converter",
    body: "Convert between 150+ currencies at live interbank rates. Essential for multi-currency portfolios.",
  },
  {
    Icon: ClockIcon,
    title: "Market Hours",
    body: "Track Forex, commodity, and index session times worldwide. Never miss a market opening again.",
  },
  {
    Icon: CalendarIcon,
    title: "Economic Calendar",
    body: "Stay ahead of high-impact news events. Filter by currency, impact level, and time zone.",
  },
];

/* ══════════════════════════════════════════════════
   Section
══════════════════════════════════════════════════ */
export default function Tools() {
  return (
    <section id="tools" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="chip mb-4">Trading Tools</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl">
              The tools that give you the edge.
            </h2>
          </div>
          <p className="text-muted max-w-md">
            Professional-grade calculators and market resources — all free,
            all in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t) => (
            <Card3D key={t.title} href="https://milescap.com">
              {/* Icon box */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-slate-200/60 to-gray-100/40 border border-border flex items-center justify-center mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                  <t.Icon />
                </div>
              </div>

              <h3
                className="text-lg font-semibold group-hover:text-accent transition-colors"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.06)" }}
              >
                {t.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{t.body}</p>
              <span className="text-accent text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                Use tool →
              </span>
            </Card3D>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-6 card p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-accent/5 border-accent/20">
          <div>
            <h3 className="text-xl font-semibold">All tools are completely free</h3>
            <p className="text-muted mt-1 text-sm">
              No account required. Open to all traders, all levels.
            </p>
          </div>
          <a
            href="https://milescap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Access All Tools →
          </a>
        </div>
      </div>
    </section>
  );
}
