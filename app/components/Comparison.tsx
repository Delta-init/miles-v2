const programs = [
  {
    title: "Introducing Broker",
    body: "Refer clients and earn the highest rebates & commissions in the industry.",
    points: ["Highest rebates", "Real-time tracking", "Dedicated IB support"],
  },
  {
    title: "Affiliate Program",
    body: "Promote Miles Capital and earn competitive commissions on every referral.",
    points: ["Marketing materials", "Performance dashboard", "Monthly payouts"],
  },
  {
    title: "Prime of Primes",
    body: "Institutional-grade liquidity and deep market access for professional firms.",
    points: ["Deep liquidity", "Low latency", "Custom pricing"],
  },
  {
    title: "Franchise Partner",
    body: "Build your own trading business under the Miles Capital brand and infrastructure.",
    points: ["Full brand support", "Technology stack", "Training & onboarding"],
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip mb-4">Partnership</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Grow together with Miles Capital.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Highest rebates & commissions in the industry. Join our IB and institutional programs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {programs.map((p) => (
            <div key={p.title} className="card p-8 flex flex-col">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{p.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-ghost w-full justify-center mt-6">
                Apply now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
