/* ── 3D Black Market Icons ───────────────────────── */

function ForexIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <radialGradient id="bk-coin1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="50%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#000000"/>
        </radialGradient>
        <radialGradient id="bk-coin2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="50%" stopColor="#4b5563"/>
          <stop offset="100%" stopColor="#111827"/>
        </radialGradient>
        <filter id="bk-s1" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.6"/>
        </filter>
      </defs>
      {/* Euro coin back */}
      <g filter="url(#bk-s1)">
        <ellipse cx="61" cy="48" rx="22" ry="7" fill="#000"/>
        <ellipse cx="61" cy="40" rx="22" ry="22" fill="url(#bk-coin2)"/>
        <ellipse cx="61" cy="40" rx="22" ry="22" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeOpacity="0.4"/>
        <ellipse cx="54" cy="32" rx="8" ry="5" fill="white" fillOpacity="0.12" transform="rotate(-20 54 32)"/>
        <text x="61" y="47" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fillOpacity="0.9" fontFamily="system-ui">€</text>
      </g>
      {/* Dollar coin front */}
      <g filter="url(#bk-s1)">
        <ellipse cx="36" cy="48" rx="22" ry="7" fill="#000"/>
        <ellipse cx="36" cy="40" rx="22" ry="22" fill="url(#bk-coin1)"/>
        <ellipse cx="36" cy="40" rx="22" ry="22" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.5"/>
        <ellipse cx="28" cy="32" rx="8" ry="5" fill="white" fillOpacity="0.18" transform="rotate(-20 28 32)"/>
        <text x="36" y="47" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fillOpacity="0.95" fontFamily="system-ui">$</text>
      </g>
      {/* Swap arrows */}
      <path d="M54 18 Q72 10 78 22" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M75 20 L78 22 L76 25" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SharesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="bk-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="bk-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
        <linearGradient id="bk-bar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1d5db"/>
          <stop offset="100%" stopColor="#4b5563"/>
        </linearGradient>
        <filter id="bk-s2" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>
      {/* Bar 1 */}
      <g filter="url(#bk-s2)">
        <polygon points="12,54 20,54 23,50 15,50" fill="#6b7280"/>
        <polygon points="20,54 23,50 23,68 20,72" fill="#000"/>
        <rect x="12" y="54" width="8" height="18" rx="1" fill="url(#bk-bar1)"/>
      </g>
      {/* Bar 2 */}
      <g filter="url(#bk-s2)">
        <polygon points="28,40 36,40 39,36 31,36" fill="#9ca3af"/>
        <polygon points="36,40 39,36 39,68 36,72" fill="#000"/>
        <rect x="28" y="40" width="8" height="32" rx="1" fill="url(#bk-bar2)"/>
      </g>
      {/* Bar 3 */}
      <g filter="url(#bk-s2)">
        <polygon points="44,26 52,26 55,22 47,22" fill="#d1d5db"/>
        <polygon points="52,26 55,22 55,68 52,72" fill="#111827"/>
        <rect x="44" y="26" width="8" height="46" rx="1" fill="url(#bk-bar3)"/>
      </g>
      <path d="M16 52 L32 38 L48 24 L62 14" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M58 12 L62 14 L60 18" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="52" r="3" fill="#6b7280"/>
      <circle cx="32" cy="38" r="3" fill="#9ca3af"/>
      <circle cx="48" cy="24" r="3" fill="#d1d5db"/>
      <line x1="8" y1="72" x2="70" y2="72" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CommoditiesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="bk-barrel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111827"/>
          <stop offset="30%" stopColor="#374151"/>
          <stop offset="60%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <radialGradient id="bk-barrel-top" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </radialGradient>
        <filter id="bk-s3" x="-20%" y="-10%" width="150%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#bk-s3)">
        <rect x="22" y="24" width="44" height="42" rx="4" fill="url(#bk-barrel)"/>
        <rect x="22" y="29" width="44" height="5" fill="#000" fillOpacity="0.4"/>
        <rect x="22" y="42" width="44" height="5" fill="#000" fillOpacity="0.4"/>
        <rect x="22" y="55" width="44" height="5" fill="#000" fillOpacity="0.4"/>
        <line x1="30" y1="24" x2="30" y2="66" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="58" y1="24" x2="58" y2="66" stroke="#000" strokeWidth="1.5" strokeOpacity="0.4"/>
        <rect x="34" y="24" width="8" height="42" fill="white" fillOpacity="0.07" rx="2"/>
        <ellipse cx="44" cy="24" rx="22" ry="7" fill="url(#bk-barrel-top)"/>
        <ellipse cx="44" cy="24" rx="22" ry="7" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeOpacity="0.5"/>
        <ellipse cx="44" cy="66" rx="22" ry="7" fill="#374151"/>
        <ellipse cx="44" cy="20" rx="9" ry="3" fill="#d1d5db" fillOpacity="0.7"/>
        <text x="44" y="47" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fillOpacity="0.8" fontFamily="system-ui" letterSpacing="2">OIL</text>
      </g>
    </svg>
  );
}

function MetalsIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="bk-gold-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="50%" stopColor="#4b5563"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="bk-gold-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5e7eb"/>
          <stop offset="100%" stopColor="#6b7280"/>
        </linearGradient>
        <linearGradient id="bk-gold-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <filter id="bk-s4" x="-10%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.6"/>
        </filter>
      </defs>
      {/* Bar 3 bottom */}
      <g filter="url(#bk-s4)" opacity="0.7">
        <polygon points="16,68 68,68 72,62 20,62" fill="url(#bk-gold-top)"/>
        <polygon points="68,68 72,62 72,56 68,62" fill="url(#bk-gold-side)"/>
        <rect x="16" y="62" width="52" height="6" rx="2" fill="url(#bk-gold-f)"/>
      </g>
      {/* Bar 2 mid */}
      <g filter="url(#bk-s4)">
        <polygon points="20,58 64,58 68,52 24,52" fill="url(#bk-gold-top)"/>
        <polygon points="64,58 68,52 68,44 64,50" fill="url(#bk-gold-side)"/>
        <rect x="20" y="50" width="44" height="8" rx="2" fill="url(#bk-gold-f)"/>
      </g>
      {/* Bar 1 top */}
      <g filter="url(#bk-s4)">
        <polygon points="24,46 60,46 64,40 28,40" fill="url(#bk-gold-top)"/>
        <polygon points="60,46 64,40 64,28 60,34" fill="url(#bk-gold-side)"/>
        <rect x="24" y="34" width="36" height="12" rx="2" fill="url(#bk-gold-f)"/>
        <rect x="30" y="35" width="8" height="10" rx="1" fill="white" fillOpacity="0.15"/>
        <text x="42" y="44" textAnchor="middle" fontSize="10" fontWeight="900" fill="white" fillOpacity="0.7" fontFamily="system-ui">Au</text>
      </g>
      <text x="70" y="26" fontSize="12" fill="#9ca3af">✦</text>
      <text x="78" y="38" fontSize="8" fill="#6b7280">✦</text>
    </svg>
  );
}

function IndicesIcon() {
  return (
    <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
      <defs>
        <linearGradient id="bk-cdl1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="bk-cdl2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ca3af"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
        <linearGradient id="bk-cdl3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1d5db"/>
          <stop offset="100%" stopColor="#4b5563"/>
        </linearGradient>
        <filter id="bk-s5" x="-15%" y="-15%" width="150%" height="150%">
          <feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>
      {[20,32,44,56,68].map(y => (
        <line key={y} x1="10" y1={y} x2="86" y2={y} stroke="#374151" strokeWidth="0.5" strokeOpacity="0.4"/>
      ))}
      {/* Candle 1 */}
      <g filter="url(#bk-s5)">
        <line x1="20" y1="24" x2="20" y2="62" stroke="#6b7280" strokeWidth="1.5"/>
        <polygon points="14,38 26,38 29,34 17,34" fill="#9ca3af" fillOpacity="0.5"/>
        <polygon points="26,38 29,34 29,54 26,58" fill="#000"/>
        <rect x="14" y="38" width="12" height="20" rx="1" fill="url(#bk-cdl1)"/>
      </g>
      {/* Candle 2 */}
      <g filter="url(#bk-s5)">
        <line x1="40" y1="18" x2="40" y2="64" stroke="#9ca3af" strokeWidth="1.5"/>
        <polygon points="34,28 46,28 49,24 37,24" fill="#d1d5db" fillOpacity="0.5"/>
        <polygon points="46,28 49,24 49,50 46,54" fill="#111827"/>
        <rect x="34" y="28" width="12" height="26" rx="1" fill="url(#bk-cdl2)"/>
        <rect x="36" y="30" width="3" height="10" rx="1" fill="white" fillOpacity="0.2"/>
      </g>
      {/* Candle 3 */}
      <g filter="url(#bk-s5)">
        <line x1="60" y1="12" x2="60" y2="66" stroke="#d1d5db" strokeWidth="1.5"/>
        <polygon points="54,20 66,20 69,16 57,16" fill="white" fillOpacity="0.3"/>
        <polygon points="66,20 69,16 69,58 66,62" fill="#1f2937"/>
        <rect x="54" y="20" width="12" height="42" rx="1" fill="url(#bk-cdl3)"/>
        <rect x="56" y="22" width="3" height="14" rx="1" fill="white" fillOpacity="0.25"/>
      </g>
      <path d="M14 60 Q30 48 46 36 Q62 24 76 14" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M72 12 L76 14 L74 18" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="70" x2="88" y2="70" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Product data ───────────────────────────────── */
const products = [
  {
    title: "Forex",
    body: "Trade with tight spreads and low trading costs. Access the most competitive spreads in the industry.",
    stat: "70+ Pairs",
    color: "from-slate-200/60 to-gray-100/40",
    Icon: ForexIcon,
  },
  {
    title: "Shares",
    body: "Invest in leading global companies and diversify your investment portfolio with ease.",
    stat: "500+ Stocks",
    color: "from-slate-200/60 to-gray-100/40",
    Icon: SharesIcon,
  },
  {
    title: "Commodities",
    body: "Access the global commodity market with comprehensive tools and resources at your fingertips.",
    stat: "Oil · Gas · Wheat",
    color: "from-slate-200/60 to-gray-100/40",
    Icon: CommoditiesIcon,
  },
  {
    title: "Metals",
    body: "Trade gold, silver, platinum and palladium — diverse opportunities across precious metals markets.",
    stat: "Gold · Silver · Platinum",
    color: "from-slate-200/60 to-gray-100/40",
    Icon: MetalsIcon,
  },
  {
    title: "Indices",
    body: "Trade the S&P 500, Dow Jones and more with low spreads and lightning-fast order execution.",
    stat: "S&P · NASDAQ · DAX",
    color: "from-slate-200/60 to-gray-100/40",
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
            <div key={p.title} className="card p-6 flex flex-col group hover:ring-1 hover:ring-accent/30 transition-all">
              {/* Icon thumbnail */}
              <div className={`rounded-2xl bg-gradient-to-br ${p.color} border border-border mb-5 h-40 flex flex-col items-center justify-center relative overflow-hidden`}>
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
              <a href="#contact" className="text-accent text-sm mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more →
              </a>
            </div>
          ))}

          {/* 6th card — CTA */}
          <div className="card p-6 bg-accent/10 border-accent/30 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-medium">Ready to trade?</h3>
              <p className="text-muted text-sm mt-2">Start with a free demo account — no commitment required.</p>
            </div>
            <a href="https://milescap.com" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 justify-center">
              Open Demo Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
