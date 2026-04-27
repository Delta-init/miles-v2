const platforms = [
  {
    title: "Advanced Charting",
    body: "Utilize MT5's advanced charting tools with 21 timeframes and 80+ built-in technical indicators.",
    icon: "📊",
  },
  {
    title: "Fast Execution",
    body: "Benefit from lightning-fast trade execution — no requotes, no delays.",
    icon: "⚡",
  },
  {
    title: "Multi-Platform",
    body: "Trade seamlessly on desktop, web, or mobile. Your account goes wherever you go.",
    icon: "📱",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Platforms</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            MetaTrader 5 — the world's leading platform.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Available on desktop, web, and mobile. One login, all markets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {platforms.map((p) => (
            <div key={p.title} className="card p-8 text-center">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
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
