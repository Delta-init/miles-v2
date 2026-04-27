const products = [
  {
    title: "Forex",
    body: "Trade with tight spreads and low trading costs. Access the most competitive spreads in the industry.",
    stat: "70+ Pairs",
    trend: "up",
    points: "0,50 25,30 50,40 75,20 100,35 125,15 150,25",
    color: "from-green-500/20 to-emerald-400/10",
    accent: "#16a34a",
  },
  {
    title: "Shares",
    body: "Invest in leading global companies and diversify your investment portfolio with ease.",
    stat: "500+ Stocks",
    trend: "up",
    points: "0,45 25,40 50,35 75,38 100,25 125,20 150,18",
    color: "from-blue-500/20 to-cyan-400/10",
    accent: "#2563eb",
  },
  {
    title: "Commodities",
    body: "Access the global commodity market with comprehensive tools and resources at your fingertips.",
    stat: "Oil · Gas · Wheat",
    trend: "down",
    points: "0,20 25,28 50,22 75,35 100,30 125,40 150,38",
    color: "from-orange-500/20 to-amber-400/10",
    accent: "#d97706",
  },
  {
    title: "Metals",
    body: "Trade gold, silver, platinum and palladium — diverse opportunities across precious metals markets.",
    stat: "Gold · Silver · Platinum",
    trend: "up",
    points: "0,48 25,42 50,38 75,30 100,25 125,18 150,12",
    color: "from-yellow-500/20 to-yellow-300/10",
    accent: "#ca8a04",
  },
  {
    title: "Indices",
    body: "Trade the S&P 500, Dow Jones and more with low spreads and lightning-fast order execution.",
    stat: "S&P · NASDAQ · DAX",
    trend: "up",
    points: "0,50 25,38 50,42 75,28 100,20 125,22 150,10",
    color: "from-purple-500/20 to-violet-400/10",
    accent: "#7c3aed",
  },
];

function MiniChart({
  points,
  accent,
  trend,
}: {
  points: string;
  accent: string;
  trend: "up" | "down";
}) {
  return (
    <svg viewBox="0 0 150 60" fill="none" className="w-full h-16">
      {/* Area fill */}
      <defs>
        <linearGradient id={`grad-${accent}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,60 ${points} 150,60`}
        fill={`url(#grad-${accent})`}
      />
      <polyline
        points={points}
        stroke={accent}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      {(() => {
        const last = points.trim().split(" ").pop()?.split(",");
        if (!last) return null;
        return (
          <circle
            cx={last[0]}
            cy={last[1]}
            r="3"
            fill={accent}
          />
        );
      })()}
    </svg>
  );
}

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
              {/* Chart thumbnail */}
              <div
                className={`rounded-xl bg-gradient-to-br ${p.color} border border-border mb-5 px-4 pt-4 pb-1 relative overflow-hidden`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium">{p.title}</span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: p.accent }}
                  >
                    {p.stat}
                  </span>
                </div>
                <MiniChart points={p.points} accent={p.accent} trend={p.trend as "up" | "down"} />
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
