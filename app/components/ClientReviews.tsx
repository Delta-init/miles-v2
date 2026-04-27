const reviews = [
  {
    name: "Ahmed Al-Rashid",
    title: "Professional Forex Trader",
    country: "🇦🇪 UAE",
    stars: 5,
    body: "Miles Capital gave me access to the tightest spreads I've seen on EUR/USD. The MT5 platform is blazing fast and withdrawals are processed same day. Highly recommend.",
  },
  {
    name: "Priya Nair",
    title: "Portfolio Investor",
    country: "🇸🇬 Singapore",
    stars: 5,
    body: "Switched from another broker after years. The account managers here actually understand your goals. Customer support is responsive 24/7 and the educational content is excellent.",
  },
  {
    name: "Jean-Pierre Moreau",
    title: "Commodities Trader",
    country: "🇫🇷 France",
    stars: 5,
    body: "Trading gold and oil with Miles Capital is seamless. No requotes, instant execution and transparent pricing. The Islamic account option was also a great addition for clients in my network.",
  },
  {
    name: "Samuel Osei",
    title: "Retail Trader",
    country: "🇬🇭 Ghana",
    stars: 5,
    body: "As a beginner, the live mentorship sessions were game-changing. My account manager walked me through risk management step by step. I've grown my account steadily over 8 months.",
  },
  {
    name: "Maria Santos",
    title: "IB Partner",
    country: "🇧🇷 Brazil",
    stars: 5,
    body: "The IB programme is one of the best in the industry. Transparent commissions, real-time reporting, and the team is always available to support my referred clients.",
  },
  {
    name: "Tariq Hussain",
    title: "Swing Trader",
    country: "🇵🇰 Pakistan",
    stars: 5,
    body: "I've tried six brokers over the years. Miles Capital stands out for its regulated environment and consistent withdrawal processing. I trust this broker with my capital.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientReviews() {
  return (
    <section id="reviews" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="chip mb-4">Client Reviews</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Trusted by traders worldwide.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Over 26,380 traders from 50+ countries trust Miles Capital with
            their financial growth.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { k: "4.9/5", v: "Average Rating" },
            { k: "26,380+", v: "Active Traders" },
            { k: "50+", v: "Countries Served" },
          ].map((s) => (
            <div key={s.k} className="card p-5 text-center">
              <div className="text-2xl font-semibold">{s.k}</div>
              <div className="text-xs text-muted mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.name} className="card p-6 flex flex-col gap-4">
              <Stars count={r.stars} />
              <p className="text-sm leading-relaxed text-foreground/80">"{r.body}"</p>
              <div className="mt-auto pt-4 border-t border-border flex items-center gap-3">
                {/* Avatar initial */}
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted">
                    {r.title} · {r.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
