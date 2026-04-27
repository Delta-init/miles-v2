"use client";
import { useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   Icons — original colours; greyscale by default,
   real colour revealed on hover
══════════════════════════════════════════════════ */

function PipIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="pip-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
        <linearGradient id="pip-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#065f46"/>
          <stop offset="100%" stopColor="#047857"/>
        </linearGradient>
        <linearGradient id="pip-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <filter id="pip-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#064e3b" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#pip-shadow)">
        <rect x="14" y="18" width="40" height="48" rx="5" fill="url(#pip-body)"/>
        <polygon points="54,18 60,12 60,60 54,66" fill="url(#pip-side)"/>
        <polygon points="14,18 54,18 60,12 20,12" fill="url(#pip-top)"/>
        <rect x="19" y="23" width="30" height="12" rx="3" fill="#064e3b" fillOpacity="0.7"/>
        <rect x="21" y="25" width="22" height="3" rx="1" fill="#34d399" fillOpacity="0.9"/>
        <rect x="21" y="30" width="14" height="2" rx="1" fill="#34d399" fillOpacity="0.5"/>
        {[40,50,58].map((y, row) =>
          [19,28,37,46].map((x, col) => (
            <rect key={`${row}-${col}`} x={x} y={y} width="7" height="5" rx="1.5"
              fill={row === 2 && col === 3 ? "#34d399" : "#064e3b"}
              fillOpacity={row === 2 && col === 3 ? "0.9" : "0.6"}/>
          ))
        )}
        <rect x="16" y="20" width="12" height="20" rx="3" fill="white" fillOpacity="0.08"/>
      </g>
    </svg>
  );
}

function MarginIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="mg-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="mg-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <filter id="mg-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#1e3a8a" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#mg-shadow)">
        <path d="M14 54 A 26 26 0 0 1 66 54" stroke="#1e3a8a" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M14 54 A 26 26 0 0 1 50 18" stroke="url(#mg-bar)" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M12 54 A 28 28 0 0 1 68 54" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.5"/>
        {/* Needle — amber/gold */}
        <line x1="40" y1="54" x2="22" y2="28" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="40" cy="54" r="6" fill="#1d4ed8"/>
        <circle cx="40" cy="54" r="6" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="38" cy="52" r="2" fill="white" fillOpacity="0.3"/>
        <text x="14" y="66" fontSize="7" fill="#60a5fa" fontWeight="700" fontFamily="system-ui">0</text>
        <text x="36" y="12" fontSize="7" fill="#60a5fa" fontWeight="700" fontFamily="system-ui">50</text>
        <text x="62" y="66" fontSize="7" fill="#60a5fa" fontWeight="700" fontFamily="system-ui">100</text>
        <rect x="28" y="60" width="24" height="8" rx="3" fill="url(#mg-top)"/>
        <polygon points="28,60 52,60 55,56 31,56" fill="#93c5fd" fillOpacity="0.6"/>
      </g>
    </svg>
  );
}

function ProfitIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="coin-g" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
        <linearGradient id="coin-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
        <filter id="profit-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#451a03" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#profit-shadow)">
        <ellipse cx="42" cy="62" rx="20" ry="6" fill="#78350f"/>
        <rect x="22" y="52" width="40" height="10" fill="url(#coin-edge)"/>
        <ellipse cx="42" cy="52" rx="20" ry="6" fill="url(#coin-g)"/>
        <ellipse cx="40" cy="46" rx="20" ry="6" fill="#92400e"/>
        <rect x="20" y="36" width="40" height="10" fill="url(#coin-edge)"/>
        <ellipse cx="40" cy="36" rx="20" ry="6" fill="url(#coin-g)"/>
        <ellipse cx="36" cy="33" rx="7" ry="3" fill="white" fillOpacity="0.2"/>
        <ellipse cx="38" cy="30" rx="20" ry="6" fill="#92400e"/>
        <rect x="18" y="20" width="40" height="10" fill="url(#coin-edge)"/>
        <ellipse cx="38" cy="20" rx="20" ry="6" fill="url(#coin-g)"/>
        <ellipse cx="34" cy="17" rx="7" ry="3" fill="white" fillOpacity="0.25"/>
        <text x="38" y="23" textAnchor="middle" fontSize="8" fontWeight="900" fill="#451a03" fontFamily="system-ui">$$$</text>
        {/* Arrow up — green */}
        <path d="M64 28 L64 12" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 16 L64 12 L68 16" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function ConverterIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="cv1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#4ade80"/>
          <stop offset="60%" stopColor="#16a34a"/>
          <stop offset="100%" stopColor="#052e16"/>
        </radialGradient>
        <radialGradient id="cv2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="60%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#78350f"/>
        </radialGradient>
        <filter id="cv-shadow"><feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/></filter>
      </defs>
      <g filter="url(#cv-shadow)">
        <ellipse cx="28" cy="44" rx="16" ry="5" fill="#052e16"/>
        <ellipse cx="28" cy="38" rx="16" ry="16" fill="url(#cv1)"/>
        <ellipse cx="23" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.18" transform="rotate(-20 23 32)"/>
        <text x="28" y="43" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="system-ui">$</text>
        <ellipse cx="52" cy="44" rx="16" ry="5" fill="#78350f"/>
        <ellipse cx="52" cy="38" rx="16" ry="16" fill="url(#cv2)"/>
        <ellipse cx="47" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.18" transform="rotate(-20 47 32)"/>
        <text x="52" y="43" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="system-ui">€</text>
        <path d="M36 22 Q40 16 44 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M42 20 L44 22 L42 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 58 Q40 64 36 58" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M38 60 L36 58 L38 56" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <radialGradient id="clock-face" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#e0e7ff"/>
          <stop offset="60%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#312e81"/>
        </radialGradient>
        <linearGradient id="clock-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4338ca"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </linearGradient>
        <filter id="clock-shadow"><feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1e1b4b" floodOpacity="0.6"/></filter>
      </defs>
      <g filter="url(#clock-shadow)">
        <ellipse cx="40" cy="52" rx="28" ry="8" fill="#1e1b4b"/>
        <rect x="12" y="22" width="56" height="30" rx="28" fill="url(#clock-edge)"/>
        <circle cx="40" cy="36" r="24" fill="url(#clock-face)"/>
        <ellipse cx="32" cy="26" rx="9" ry="6" fill="white" fillOpacity="0.18" transform="rotate(-20 32 26)"/>
        {[
          {x1:40,y1:17,x2:40,y2:21,major:true},
          {x1:49.5,y1:19.5,x2:48.1,y2:22.1,major:false},
          {x1:57.5,y1:26.5,x2:55.6,y2:28.2,major:false},
          {x1:59,y1:36,x2:55,y2:36,major:true},
          {x1:57.5,y1:45.5,x2:55.6,y2:43.8,major:false},
          {x1:49.5,y1:52.5,x2:48.1,y2:49.9,major:false},
          {x1:40,y1:55,x2:40,y2:51,major:true},
          {x1:30.5,y1:52.5,x2:31.9,y2:49.9,major:false},
          {x1:22.5,y1:45.5,x2:24.4,y2:43.8,major:false},
          {x1:21,y1:36,x2:25,y2:36,major:true},
          {x1:22.5,y1:26.5,x2:24.4,y2:28.2,major:false},
          {x1:30.5,y1:19.5,x2:31.9,y2:22.1,major:false},
        ].map((m,i) => (
          <line key={i} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2}
            stroke="white" strokeWidth={m.major?2:1} strokeOpacity="0.7" strokeLinecap="round"/>
        ))}
        <line x1="40" y1="36" x2="40" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="40" y1="36" x2="52" y2="32" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="40" cy="36" r="3" fill="white"/>
        <circle cx="40" cy="36" r="1.5" fill="#6366f1"/>
      </g>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
      <defs>
        <linearGradient id="cal-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6"/>
          <stop offset="100%" stopColor="#be185d"/>
        </linearGradient>
        <linearGradient id="cal-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbcfe8"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
        <linearGradient id="cal-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9d174d"/>
          <stop offset="100%" stopColor="#831843"/>
        </linearGradient>
        <filter id="cal-shadow"><feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#500724" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#cal-shadow)">
        <polygon points="58,16 64,10 64,66 58,72" fill="url(#cal-side)"/>
        <polygon points="14,16 58,16 64,10 20,10" fill="url(#cal-top)"/>
        <rect x="14" y="16" width="44" height="56" rx="4" fill="url(#cal-front)"/>
        <rect x="14" y="16" width="44" height="14" rx="4" fill="#be185d"/>
        <rect x="14" y="24" width="44" height="6" fill="#be185d"/>
        <rect x="24" y="10" width="5" height="10" rx="2.5" fill="#f9a8d4" stroke="#be185d" strokeWidth="1"/>
        <rect x="43" y="10" width="5" height="10" rx="2.5" fill="#f9a8d4" stroke="#be185d" strokeWidth="1"/>
        <text x="36" y="27" textAnchor="middle" fontSize="7" fontWeight="900" fill="white" fontFamily="system-ui" letterSpacing="1">EVENTS</text>
        {[
          [20,38],[28,38],[36,38],[44,38],[52,38],
          [20,46],[28,46],[36,46],[44,46],[52,46],
          [20,54],[28,54],[36,54],
        ].map(([cx,cy],i) => (
          <rect key={i} x={cx-4} y={cy-4} width="8" height="6" rx="1.5"
            fill={i===4?"#fbbf24":i===7?"#f43f5e":"white"}
            fillOpacity={i===4||i===7?"1":"0.25"}/>
        ))}
        <circle cx="52" cy="38" r="5" fill="#fbbf24" fillOpacity="0.9"/>
        <text x="52" y="41" textAnchor="middle" fontSize="6" fontWeight="900" fill="#451a03" fontFamily="system-ui">!</text>
        <rect x="16" y="18" width="10" height="30" rx="3" fill="white" fillOpacity="0.07"/>
      </g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   3-D Tilt Card
══════════════════════════════════════════════════ */
function Card3D({ children, href }: { children: React.ReactNode; href: string }) {
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
    setStyle({
      transform: `perspective(800px) rotateX(${(y-0.5)*-12}deg) rotateY(${(x-0.5)*12}deg) translateZ(10px)`,
      boxShadow: `${(x-0.5)*-14}px ${(y-0.5)*14+10}px 36px -6px rgba(0,0,0,0.25)`,
    });
  };

  const onLeave = () => setStyle({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: "0 4px 20px -6px rgba(0,0,0,0.12)",
  });

  return (
    <a ref={ref} href={href} target="_blank" rel="noopener noreferrer"
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      className="group card p-7 relative overflow-hidden flex flex-col rounded-2xl cursor-pointer"
    >
      {children}
    </a>
  );
}

/* ══════════════════════════════════════════════════
   Tools data
══════════════════════════════════════════════════ */
const tools = [
  { Icon: PipIcon,       title: "Pip Calculator",    body: "Calculate pip values for any currency pair in seconds. Know exactly what each pip is worth before you trade." },
  { Icon: MarginIcon,    title: "Margin Calculator",  body: "Determine the required margin for your trades. Manage leverage confidently and avoid margin calls." },
  { Icon: ProfitIcon,    title: "Profit Calculator",  body: "Estimate potential profits and losses before entering a position. Plan every trade with precision." },
  { Icon: ConverterIcon, title: "Currency Converter", body: "Convert between 150+ currencies at live interbank rates. Essential for multi-currency portfolios." },
  { Icon: ClockIcon,     title: "Market Hours",       body: "Track Forex, commodity, and index session times worldwide. Never miss a market opening again." },
  { Icon: CalendarIcon,  title: "Economic Calendar",  body: "Stay ahead of high-impact news events. Filter by currency, impact level, and time zone." },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="chip mb-4">Trading Tools</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl">
              The tools that give you the edge.
            </h2>
          </div>
          <p className="text-muted max-w-md">
            Professional-grade calculators and market resources — all free, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t) => (
            <Card3D key={t.title} href="https://milescap.com">
              {/* Icon box */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-slate-200/60 to-gray-100/40 border border-border flex items-center justify-center mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="icon-grey relative group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
                  <t.Icon />
                </div>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{t.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{t.body}</p>
              <span className="text-accent text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                Use tool →
              </span>
            </Card3D>
          ))}
        </div>

        <div className="mt-6 card p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-accent/5 border-accent/20">
          <div>
            <h3 className="text-xl font-semibold">All tools are completely free</h3>
            <p className="text-muted mt-1 text-sm">No account required. Open to all traders, all levels.</p>
          </div>
          <a href="https://milescap.com" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            Access All Tools →
          </a>
        </div>
      </div>
    </section>
  );
}
