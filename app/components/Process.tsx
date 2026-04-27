const steps = [
  {
    n: "01",
    title: "Register",
    body: "Choose an account type and complete our fast and secure application form.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-green-500 to-emerald-600",
    glow: "rgba(22,163,74,0.25)",
  },
  {
    n: "02",
    title: "Verify",
    body: "Use our digital onboarding system for fast and seamless verification.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="6" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
    glow: "rgba(37,99,235,0.25)",
  },
  {
    n: "03",
    title: "Fund",
    body: "Deposit using multiple secure funding methods available to you.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="4" y="12" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 18h32" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    n: "04",
    title: "Trade",
    body: "Begin live trading across Forex, Metals, Commodities, Indices and Shares.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <polyline points="4,30 12,20 20,24 28,12 36,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 8h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-orange-500 to-amber-600",
    glow: "rgba(217,119,6,0.25)",
  },
  {
    n: "05",
    title: "Analyze",
    body: "Utilize advanced tools and resources to analyze market trends and opportunities.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="2"/>
        <path d="M26 26l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-cyan-500 to-teal-600",
    glow: "rgba(6,182,212,0.25)",
  },
  {
    n: "06",
    title: "Withdraw",
    body: "Easily withdraw your funds using our secure and fast withdrawal process.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 6v20M12 18l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 32h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
    glow: "rgba(225,29,72,0.25)",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="chip mb-4">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Start trading in six simple steps.
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            From registration to your first withdrawal — the entire journey takes
            just minutes with Miles Capital.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-6">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  className={`relative flex flex-col md:flex-row items-center gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="card p-6 group hover:ring-1 hover:ring-accent/30 transition-all duration-300 relative overflow-hidden">
                      {/* Background glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(300px circle at ${isLeft ? "100% 0%" : "0% 0%"}, ${s.glow}, transparent 70%)` }}
                      />

                      <div className="relative flex items-start gap-4">
                        {/* Icon bubble */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg`}
                          style={{ boxShadow: `0 8px 24px ${s.glow}` }}
                        >
                          {s.icon}
                        </div>

                        <div className="flex-1 pt-0.5">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-bold text-muted tracking-widest uppercase">Step {s.n}</span>
                          </div>
                          <h3 className="text-xl font-semibold">{s.title}</h3>
                          <p className="text-muted text-sm mt-1.5 leading-relaxed">{s.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex w-20 shrink-0 items-center justify-center z-10">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                      style={{ boxShadow: `0 0 0 4px var(--background), 0 0 0 6px var(--border), 0 8px 20px ${s.glow}` }}
                    >
                      {s.n}
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 card p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-accent/5 border-accent/20">
          <div>
            <h3 className="text-xl font-semibold">Ready to begin your journey?</h3>
            <p className="text-muted mt-1 text-sm">
              Join 26,380+ traders — open your account in minutes.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://milescap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Create Account →
            </a>
            <a href="#contact" className="btn-ghost shrink-0">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
