const accounts = [
  {
    name: "Classic",
    desc: "Perfect for beginners entering the market for the first time.",
    points: ["Forex & Commodities", "MT5 platform access", "Email support", "Educational resources"],
    highlight: false,
  },
  {
    name: "Executive",
    desc: "For active traders who need more tools and faster execution.",
    points: ["All Classic features", "Metals & Indices", "Priority support", "Advanced analytics", "Tighter spreads"],
    highlight: true,
  },
  {
    name: "Premium",
    desc: "For serious traders demanding the best conditions.",
    points: ["All Executive features", "Dedicated account manager", "Live mentorship", "Research reports", "Fastest execution"],
    highlight: false,
  },
  {
    name: "Islamic",
    desc: "Swap-free accounts fully compliant with Islamic finance principles.",
    points: ["No swap/rollover fees", "All markets access", "Swap Free T&C apply", "Dedicated support"],
    highlight: false,
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
            <div
              key={a.name}
              className={`card p-7 flex flex-col ${a.highlight ? "ring-1 ring-accent/60 relative" : ""}`}
            >
              {a.highlight && (
                <span className="absolute -top-3 left-6 chip bg-accent text-white border-accent text-[10px]">
                  Most Popular
                </span>
              )}
              <div className="text-sm text-muted">{a.name} Account</div>
              <p className="text-sm mt-3 leading-relaxed">{a.desc}</p>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted">
                    <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`${a.highlight ? "btn-primary" : "btn-ghost"} w-full justify-center mt-6`}
              >
                Open Account
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
