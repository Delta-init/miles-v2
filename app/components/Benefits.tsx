/* ── Custom market icons ────────────────────────── */
function ForexIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Dollar circle */}
      <circle cx="28" cy="40" r="20" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="1.5"/>
      <text x="28" y="46" textAnchor="middle" fontSize="18" fontWeight="700" fill="#16a34a" fontFamily="system-ui">$</text>
      {/* Euro circle */}
      <circle cx="52" cy="40" r="20" fill="#16a34a" fillOpacity="0.08" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2"/>
      <text x="52" y="46" textAnchor="middle" fontSize="18" fontWeight="700" fill="#16a34a" fontFamily="system-ui">€</text>
      {/* Exchange arrows */}
      <path d="M34 34 L46 34" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M43 31 L46 34 L43 37" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46 46 L34 46" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M37 43 L34 46 L37 49" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SharesIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Bar chart bars */}
      <rect x="14" y="52" width="12" height="16" rx="3" fill="#2563eb" fillOpacity="0.7"/>
      <rect x="30" y="40" width="12" height="28" rx="3" fill="#2563eb" fillOpacity="0.85"/>
      <rect x="46" y="28" width="12" height="40" rx="3" fill="#2563eb"/>
      {/* Trend line */}
      <path d="M20 50 L36 38 L52 26" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
      {/* Arrow up */}
      <path d="M58 22 L52 26 L56 32" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Base line */}
      <line x1="10" y1="70" x2="70" y2="70" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
    </svg>
  );
}

function CommoditiesIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Oil barrel body */}
      <rect x="22" y="28" width="36" height="34" rx="6" fill="#d97706" fillOpacity="0.15" stroke="#d97706" strokeWidth="1.5"/>
      {/* Barrel ribs */}
      <line x1="22" y1="38" x2="58" y2="38" stroke="#d97706" strokeWidth="1.2" strokeOpacity="0.6"/>
      <line x1="22" y1="45" x2="58" y2="45" stroke="#d97706" strokeWidth="1.2" strokeOpacity="0.6"/>
      <line x1="22" y1="52" x2="58" y2="52" stroke="#d97706" strokeWidth="1.2" strokeOpacity="0.6"/>
      {/* Barrel top ellipse */}
      <ellipse cx="40" cy="28" rx="18" ry="5" fill="#d97706" fillOpacity="0.25" stroke="#d97706" strokeWidth="1.5"/>
      {/* Cap */}
      <rect x="35" y="22" width="10" height="6" rx="2" fill="#d97706" fillOpacity="0.5" stroke="#d97706" strokeWidth="1"/>
      {/* OIL label */}
      <text x="40" y="64" textAnchor="middle" fontSize="8" fontWeight="700" fill="#d97706" fontFamily="system-ui" letterSpacing="1">OIL</text>
    </svg>
  );
}

function MetalsIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Bottom bar */}
      <rect x="12" y="55" width="56" height="14" rx="4" fill="#ca8a04" fillOpacity="0.3" stroke="#ca8a04" strokeWidth="1.5"/>
      {/* Middle bar */}
      <rect x="18" y="42" width="44" height="14" rx="4" fill="#ca8a04" fillOpacity="0.5" stroke="#ca8a04" strokeWidth="1.5"/>
      {/* Top bar */}
      <rect x="24" y="29" width="32" height="14" rx="4" fill="#ca8a04" fillOpacity="0.8" stroke="#ca8a04" strokeWidth="1.5"/>
      {/* Shine lines */}
      <line x1="28" y1="33" x2="28" y2="39" stroke="#fde68a" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
      <line x1="33" y1="33" x2="33" y2="39" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
      {/* Au label */}
      <text x="40" y="43" textAnchor="middle" fontSize="8" fontWeight="700" fill="#92400e" fontFamily="system-ui" letterSpacing="1">Au</text>
    </svg>
  );
}

function IndicesIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Grid lines */}
      <line x1="14" y1="60" x2="66" y2="60" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"/>
      <line x1="14" y1="48" x2="66" y2="48" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"/>
      <line x1="14" y1="36" x2="66" y2="36" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"/>
      <line x1="14" y1="24" x2="66" y2="24" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"/>
      {/* Candlestick 1 */}
      <line x1="22" y1="32" x2="22" y2="58" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="18" y="40" width="8" height="14" rx="1" fill="#7c3aed" fillOpacity="0.4" stroke="#7c3aed" strokeWidth="1"/>
      {/* Candlestick 2 */}
      <line x1="36" y1="28" x2="36" y2="52" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="32" y="34" width="8" height="12" rx="1" fill="#7c3aed" fillOpacity="0.6" stroke="#7c3aed" strokeWidth="1"/>
      {/* Candlestick 3 */}
      <line x1="50" y1="22" x2="50" y2="50" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="46" y="26" width="8" height="16" rx="1" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1"/>
      {/* Trend arrow */}
      <path d="M62 20 L58 26" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
      <path d="M58 20 L62 20 L62 24" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Product data ───────────────────────────────── */
const products = [
  {
    title: "Forex",
    body: "Trade with tight spreads and low trading costs. Access the most competitive spreads in the industry.",
    stat: "70+ Pairs",
    color: "from-green-500/15 to-emerald-400/5",
    Icon: ForexIcon,
  },
  {
    title: "Shares",
    body: "Invest in leading global companies and diversify your investment portfolio with ease.",
    stat: "500+ Stocks",
    color: "from-blue-500/15 to-cyan-400/5",
    Icon: SharesIcon,
  },
  {
    title: "Commodities",
    body: "Access the global commodity market with comprehensive tools and resources at your fingertips.",
    stat: "Oil · Gas · Wheat",
    color: "from-orange-500/15 to-amber-400/5",
    Icon: CommoditiesIcon,
  },
  {
    title: "Metals",
    body: "Trade gold, silver, platinum and palladium — diverse opportunities across precious metals markets.",
    stat: "Gold · Silver · Platinum",
    color: "from-yellow-500/15 to-yellow-300/5",
    Icon: MetalsIcon,
  },
  {
    title: "Indices",
    body: "Trade the S&P 500, Dow Jones and more with low spreads and lightning-fast order execution.",
    stat: "S&P · NASDAQ · DAX",
    color: "from-purple-500/15 to-violet-400/5",
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
            <div key={p.title} className="card p-6 flex flex-col">
              {/* Icon thumbnail */}
              <div
                className={`rounded-2xl bg-gradient-to-br ${p.color} border border-border mb-5 h-36 flex flex-col items-center justify-center gap-2 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="relative flex flex-col items-center gap-1">
                  <p.Icon />
                  <span className="text-xs font-semibold tracking-wide text-muted">{p.stat}</span>
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
