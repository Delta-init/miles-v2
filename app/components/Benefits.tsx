/* ── 3D Market Icons ─────────────────────────────── */

function ForexIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        {/* Dollar coin gradient */}
        <radialGradient id="coin1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#052e16" />
        </radialGradient>
        {/* Euro coin gradient */}
        <radialGradient id="coin2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>
        {/* Coin edge */}
        <linearGradient id="edge1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
        <filter id="shadow1" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#052e16" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* Euro coin (back) */}
      <g filter="url(#shadow1)">
        {/* Edge/depth */}
        <ellipse cx="61" cy="48" rx="22" ry="7" fill="#14532d"/>
        {/* Face */}
        <ellipse cx="61" cy="40" rx="22" ry="22" fill="url(#coin2)"/>
        {/* Rim */}
        <ellipse cx="61" cy="40" rx="22" ry="22" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.4"/>
        {/* Shine */}
        <ellipse cx="54" cy="32" rx="8" ry="5" fill="white" fillOpacity="0.15" transform="rotate(-20 54 32)"/>
        {/* € symbol */}
        <text x="61" y="47" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fillOpacity="0.95" fontFamily="system-ui">€</text>
      </g>

      {/* Dollar coin (front) */}
      <g filter="url(#shadow1)">
        {/* Edge/depth */}
        <ellipse cx="36" cy="48" rx="22" ry="7" fill="#052e16"/>
        {/* Face */}
        <ellipse cx="36" cy="40" rx="22" ry="22" fill="url(#coin1)"/>
        {/* Rim */}
        <ellipse cx="36" cy="40" rx="22" ry="22" fill="none" stroke="#86efac" strokeWidth="1.5" strokeOpacity="0.5"/>
        {/* Shine */}
        <ellipse cx="28" cy="32" rx="8" ry="5" fill="white" fillOpacity="0.2" transform="rotate(-20 28 32)"/>
        {/* $ symbol */}
        <text x="36" y="47" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fillOpacity="0.95" fontFamily="system-ui">$</text>
      </g>

      {/* Swap arrows */}
      <path d="M54 18 Q72 10 78 22" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M75 20 L78 22 L76 25" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function SharesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="bar1f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="bar2f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <linearGradient id="bar3f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <filter id="shadow2" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#1e3a8a" floodOpacity="0.4"/>
        </filter>
      </defs>

      {/* Bar 1 */}
      <g filter="url(#shadow2)">
        {/* Top face */}
        <polygon points="12,54 20,54 23,50 15,50" fill="#93c5fd"/>
        {/* Side face */}
        <polygon points="20,54 23,50 23,68 20,72" fill="#1d4ed8"/>
        {/* Front face */}
        <rect x="12" y="54" width="8" height="18" rx="1" fill="url(#bar1f)"/>
      </g>

      {/* Bar 2 */}
      <g filter="url(#shadow2)">
        <polygon points="28,40 36,40 39,36 31,36" fill="#bfdbfe"/>
        <polygon points="36,40 39,36 39,68 36,72" fill="#1e40af"/>
        <rect x="28" y="40" width="8" height="32" rx="1" fill="url(#bar2f)"/>
      </g>

      {/* Bar 3 */}
      <g filter="url(#shadow2)">
        <polygon points="44,26 52,26 55,22 47,22" fill="#dbeafe"/>
        <polygon points="52,26 55,22 55,68 52,72" fill="#1d4ed8"/>
        <rect x="44" y="26" width="8" height="46" rx="1" fill="url(#bar3f)"/>
      </g>

      {/* Trend line */}
      <path d="M16 52 L32 38 L48 24 L62 14" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="none" fill="none"/>
      {/* Arrow head */}
      <path d="M58 12 L62 14 L60 18" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Dot on line */}
      <circle cx="16" cy="52" r="3" fill="#60a5fa"/>
      <circle cx="32" cy="38" r="3" fill="#93c5fd"/>
      <circle cx="48" cy="24" r="3" fill="#bfdbfe"/>

      {/* Base */}
      <line x1="8" y1="72" x2="70" y2="72" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
    </svg>
  );
}

function CommoditiesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="barrel-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e"/>
          <stop offset="25%" stopColor="#d97706"/>
          <stop offset="60%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
        <radialGradient id="barrel-top" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fcd34d"/>
          <stop offset="100%" stopColor="#b45309"/>
        </radialGradient>
        <radialGradient id="barrel-bot" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#78350f"/>
        </radialGradient>
        <filter id="shadow3" x="-20%" y="-10%" width="150%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#451a03" floodOpacity="0.5"/>
        </filter>
      </defs>

      <g filter="url(#shadow3)">
        {/* Barrel body */}
        <rect x="22" y="24" width="44" height="42" rx="4" fill="url(#barrel-side)"/>

        {/* Barrel ribs (horizontal bands) */}
        <rect x="22" y="29" width="44" height="5" rx="0" fill="#92400e" fillOpacity="0.5"/>
        <rect x="22" y="42" width="44" height="5" rx="0" fill="#92400e" fillOpacity="0.5"/>
        <rect x="22" y="55" width="44" height="5" rx="0" fill="#92400e" fillOpacity="0.5"/>

        {/* Vertical ribs */}
        <line x1="30" y1="24" x2="30" y2="66" stroke="#78350f" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="58" y1="24" x2="58" y2="66" stroke="#78350f" strokeWidth="1.5" strokeOpacity="0.4"/>

        {/* Highlight stripe */}
        <rect x="34" y="24" width="8" height="42" fill="white" fillOpacity="0.07" rx="2"/>

        {/* Top ellipse */}
        <ellipse cx="44" cy="24" rx="22" ry="7" fill="url(#barrel-top)"/>
        {/* Top rim */}
        <ellipse cx="44" cy="24" rx="22" ry="7" fill="none" stroke="#fcd34d" strokeWidth="1.5" strokeOpacity="0.6"/>

        {/* Bottom ellipse */}
        <ellipse cx="44" cy="66" rx="22" ry="7" fill="url(#barrel-bot)"/>

        {/* Cap on top */}
        <ellipse cx="44" cy="20" rx="9" ry="3" fill="#fde68a" fillOpacity="0.8"/>
        <ellipse cx="44" cy="20" rx="9" ry="3" fill="none" stroke="#b45309" strokeWidth="1"/>

        {/* OIL text */}
        <text x="44" y="47" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fillOpacity="0.85" fontFamily="system-ui" letterSpacing="2">OIL</text>
      </g>
    </svg>
  );
}

function MetalsIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="gold-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="50%" stopColor="#d97706"/>
          <stop offset="100%" stopColor="#92400e"/>
        </linearGradient>
        <linearGradient id="gold-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef3c7"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <linearGradient id="gold-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
        <filter id="shadow4" x="-10%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#451a03" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* Bar 3 (bottom-back) */}
      <g filter="url(#shadow4)">
        <polygon points="16,68 68,68 72,62 20,62" fill="url(#gold-top)" opacity="0.7"/>
        <polygon points="68,68 72,62 72,56 68,62" fill="url(#gold-side)" opacity="0.7"/>
        <rect x="16" y="62" width="52" height="6" rx="2" fill="url(#gold-front)" opacity="0.7"/>
      </g>

      {/* Bar 2 (middle) */}
      <g filter="url(#shadow4)">
        <polygon points="20,58 64,58 68,52 24,52" fill="url(#gold-top)"/>
        <polygon points="64,58 68,52 68,44 64,50" fill="url(#gold-side)"/>
        <rect x="20" y="50" width="44" height="8" rx="2" fill="url(#gold-front)"/>
        {/* Shine */}
        <rect x="26" y="51" width="6" height="6" rx="1" fill="white" fillOpacity="0.2"/>
      </g>

      {/* Bar 1 (top-front) */}
      <g filter="url(#shadow4)">
        <polygon points="24,46 60,46 64,40 28,40" fill="url(#gold-top)"/>
        <polygon points="60,46 64,40 64,28 60,34" fill="url(#gold-side)"/>
        <rect x="24" y="34" width="36" height="12" rx="2" fill="url(#gold-front)"/>
        {/* Shine */}
        <rect x="30" y="35" width="8" height="10" rx="1" fill="white" fillOpacity="0.25"/>
        {/* Au label */}
        <text x="42" y="44" textAnchor="middle" fontSize="10" fontWeight="900" fill="#451a03" fontFamily="system-ui" letterSpacing="1">Au</text>
      </g>

      {/* Stars/sparkle */}
      <text x="70" y="26" fontSize="12" fill="#fbbf24">✦</text>
      <text x="78" y="38" fontSize="8" fill="#fde68a">✦</text>
    </svg>
  );
}

function IndicesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="candle-bull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#6d28d9"/>
        </linearGradient>
        <linearGradient id="candle-bear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
        <linearGradient id="candle-top-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ddd6fe"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <filter id="shadow5" x="-15%" y="-15%" width="150%" height="150%">
          <feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#2e1065" floodOpacity="0.5"/>
        </filter>
        {/* Glow */}
        <filter id="glow5">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[20,32,44,56,68].map(y => (
        <line key={y} x1="10" y1={y} x2="86" y2={y} stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.2"/>
      ))}

      {/* Candle 1 — bearish */}
      <g filter="url(#shadow5)">
        <line x1="20" y1="24" x2="20" y2="62" stroke="#a78bfa" strokeWidth="1.5"/>
        {/* 3d top */}
        <polygon points="14,38 26,38 29,34 17,34" fill="url(#candle-top-face)"/>
        {/* 3d side */}
        <polygon points="26,38 29,34 29,54 26,58" fill="#4c1d95"/>
        {/* front */}
        <rect x="14" y="38" width="12" height="20" rx="1" fill="url(#candle-bear)"/>
      </g>

      {/* Candle 2 — bullish */}
      <g filter="url(#shadow5)">
        <line x1="40" y1="18" x2="40" y2="64" stroke="#c4b5fd" strokeWidth="1.5"/>
        <polygon points="34,28 46,28 49,24 37,24" fill="url(#candle-top-face)"/>
        <polygon points="46,28 49,24 49,50 46,54" fill="#3b0764"/>
        <rect x="34" y="28" width="12" height="26" rx="1" fill="url(#candle-bull)"/>
        {/* Shine */}
        <rect x="36" y="30" width="3" height="10" rx="1" fill="white" fillOpacity="0.25"/>
      </g>

      {/* Candle 3 — bullish strong */}
      <g filter="url(#shadow5)">
        <line x1="60" y1="12" x2="60" y2="66" stroke="#ddd6fe" strokeWidth="1.5"/>
        <polygon points="54,20 66,20 69,16 57,16" fill="white" fillOpacity="0.5"/>
        <polygon points="66,20 69,16 69,58 66,62" fill="#4c1d95"/>
        <rect x="54" y="20" width="12" height="42" rx="1" fill="url(#candle-bull)"/>
        <rect x="56" y="22" width="3" height="14" rx="1" fill="white" fillOpacity="0.3"/>
      </g>

      {/* Trend arrow */}
      <path d="M14 60 Q30 48 46 36 Q62 24 76 14" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" filter="url(#glow5)" strokeDasharray="none"/>
      <path d="M72 12 L76 14 L74 18" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Base */}
      <line x1="8" y1="70" x2="88" y2="70" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  );
}

/* ── Product data ───────────────────────────────── */
const products = [
  {
    title: "Forex",
    body: "Trade with tight spreads and low trading costs. Access the most competitive spreads in the industry.",
    stat: "70+ Pairs",
    color: "from-green-500/10 to-emerald-400/5",
    Icon: ForexIcon,
  },
  {
    title: "Shares",
    body: "Invest in leading global companies and diversify your investment portfolio with ease.",
    stat: "500+ Stocks",
    color: "from-blue-500/10 to-cyan-400/5",
    Icon: SharesIcon,
  },
  {
    title: "Commodities",
    body: "Access the global commodity market with comprehensive tools and resources at your fingertips.",
    stat: "Oil · Gas · Wheat",
    color: "from-orange-500/10 to-amber-400/5",
    Icon: CommoditiesIcon,
  },
  {
    title: "Metals",
    body: "Trade gold, silver, platinum and palladium — diverse opportunities across precious metals markets.",
    stat: "Gold · Silver · Platinum",
    color: "from-yellow-500/10 to-yellow-300/5",
    Icon: MetalsIcon,
  },
  {
    title: "Indices",
    body: "Trade the S&P 500, Dow Jones and more with low spreads and lightning-fast order execution.",
    stat: "S&P · NASDAQ · DAX",
    color: "from-purple-500/10 to-violet-400/5",
    Icon: IndicesIcon,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="chip mb-4">Products</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl">
              Five markets. One powerful platform.
            </h2>
          </div>
          <p className="text-muted max-w-md">
            From Forex to Indices — everything you need to build and grow your
            trading portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={p.title} className={`card p-6 flex flex-col group transition-all ${
              i === 0 ? "card-green" : i === 1 ? "card-blue" : i === 2 ? "card-yellow" : i === 3 ? "card-yellow" : "card-red"
            }`}>
              {/* Icon thumbnail */}
              <div
                className={`rounded-2xl bg-gradient-to-br ${p.color} border border-border mb-5 h-40 flex flex-col items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <p.Icon />
                  <span className="text-xs font-semibold tracking-widest text-muted uppercase">{p.stat}</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-lg bg-accent/15 mb-3 flex items-center justify-center text-accent text-xs font-bold">
                0{i + 1}
              </div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{p.body}</p>
              <a
                href="#contact"
                className="text-accent text-sm mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more →
              </a>
            </div>
          ))}

          {/* 6th card — CTA */}
          <div className="card p-6 bg-accent/10 border-accent/30 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-medium">Ready to trade?</h3>
              <p className="text-muted text-sm mt-2">
                Start with a free demo account — no commitment required.
              </p>
            </div>
            <a
              href="https://milescap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 justify-center"
            >
              Open Demo Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
