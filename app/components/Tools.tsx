const tools = [
  {
    icon: "🧮",
    title: "Pip Calculator",
    body: "Calculate pip values for any currency pair in seconds. Know exactly what each pip is worth before you trade.",
    link: "https://milescap.com",
  },
  {
    icon: "📐",
    title: "Margin Calculator",
    body: "Determine the required margin for your trades. Manage leverage confidently and avoid margin calls.",
    link: "https://milescap.com",
  },
  {
    icon: "💰",
    title: "Profit Calculator",
    body: "Estimate potential profits and losses before entering a position. Plan every trade with precision.",
    link: "https://milescap.com",
  },
  {
    icon: "💱",
    title: "Currency Converter",
    body: "Convert between 150+ currencies at live interbank rates. Essential for multi-currency portfolios.",
    link: "https://milescap.com",
  },
  {
    icon: "🕐",
    title: "Market Hours",
    body: "Track Forex, commodity, and index session times worldwide. Never miss a market opening again.",
    link: "https://milescap.com",
  },
  {
    icon: "📅",
    title: "Economic Calendar",
    body: "Stay ahead of high-impact news events. Filter by currency, impact level, and time zone.",
    link: "https://milescap.com",
  },
];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <a
              key={t.title}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-7 group hover:ring-1 hover:ring-accent/40 transition-all"
            >
              <div className="text-3xl mb-4">{t.icon}</div>
              <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                {t.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{t.body}</p>
              <span className="text-accent text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool →
              </span>
            </a>
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
