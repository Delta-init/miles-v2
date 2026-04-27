const pillars = [
  {
    title: "Consulting",
    body: "Expert consulting to shape your trading strategy and help you reach your financial goals.",
    points: ["Market analysis", "Risk assessment", "Goal-based planning"],
  },
  {
    title: "Strategy",
    body: "Tailored strategies designed to maximize your gains while minimizing exposure to risk.",
    points: ["Custom trade plans", "Portfolio diversification", "Risk management"],
  },
  {
    title: "Investment",
    body: "Navigate investments effortlessly. Your financial success is the expertise that drives us.",
    points: ["Multi-asset access", "Expert guidance", "Performance tracking"],
  },
];

export default function Pillars() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Pillars of Excellence</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Three pillars. One mission.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            We enable millions of people to achieve their financial dreams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="card p-8 flex flex-col">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-accent/15 via-white to-background border border-border mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent/30">{p.title[0]}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="text-muted mt-2 text-sm">{p.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-ghost w-full justify-center mt-6">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
