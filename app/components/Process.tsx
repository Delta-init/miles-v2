"use client";
import { useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Register",
    body: "Choose an account type and complete our fast and secure application form.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-green-400 to-emerald-600",
    shadow: "#16a34a",
    glow: "rgba(22,163,74,0.2)",
  },
  {
    n: "02",
    title: "Verify",
    body: "Use our digital onboarding system for fast and seamless verification.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="6" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-blue-400 to-blue-600",
    shadow: "#2563eb",
    glow: "rgba(37,99,235,0.2)",
  },
  {
    n: "03",
    title: "Fund",
    body: "Deposit using multiple secure funding methods available to you.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="4" y="12" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 18h32" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="12" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
    color: "from-violet-400 to-purple-600",
    shadow: "#7c3aed",
    glow: "rgba(124,58,237,0.2)",
  },
  {
    n: "04",
    title: "Trade",
    body: "Begin live trading across Forex, Metals, Commodities, Indices and Shares.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <polyline points="4,30 12,20 20,24 28,12 36,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 8h6v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-orange-400 to-amber-600",
    shadow: "#d97706",
    glow: "rgba(217,119,6,0.2)",
  },
  {
    n: "05",
    title: "Analyze",
    body: "Utilize advanced tools and resources to analyze market trends and opportunities.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M26 26l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-cyan-400 to-teal-600",
    shadow: "#0891b2",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    n: "06",
    title: "Withdraw",
    body: "Easily withdraw your funds using our secure and fast withdrawal process.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 6v20M12 18l8 8 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 32h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-rose-400 to-pink-600",
    shadow: "#e11d48",
    glow: "rgba(225,29,72,0.2)",
  },
];

/* ── 3D tilt card ─────────────────────────────────── */
function Card3D({
  children,
  glow,
  shadowColor,
}: {
  children: React.ReactNode;
  glow: string;
  shadowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    boxShadow: `0 4px 24px -8px ${shadowColor}40`,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotX = (y - 0.5) * -14;
    const rotY = (x - 0.5) * 14;
    setStyle({
      transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px)`,
      boxShadow: `${(x - 0.5) * -16}px ${(y - 0.5) * 16 + 12}px 40px -8px ${shadowColor}60`,
    });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      boxShadow: `0 4px 24px -8px ${shadowColor}40`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      className="card p-6 relative overflow-hidden cursor-default rounded-2xl"
    >
      {/* Glare layer */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${glow} 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ── Floating 3D node ─────────────────────────────── */
function StepNode({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="hidden md:flex w-20 shrink-0 items-center justify-center z-10">
      <div className="relative">
        {/* Outer ring pulse */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: `radial-gradient(circle, ${step.shadow}, transparent)` }}
        />
        {/* Shadow disc (3d base) */}
        <div
          className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-8 h-2 rounded-full blur-sm opacity-50"
          style={{ background: step.shadow }}
        />
        {/* The node */}
        <div
          className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-bold`}
          style={{
            boxShadow: `0 0 0 3px var(--background), 0 0 0 5px ${step.shadow}40, 0 8px 20px ${step.shadow}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
          }}
        >
          {step.n}
        </div>
      </div>
    </div>
  );
}

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
          {/* Centre connector */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #16a34a44 20%, #2563eb44 40%, #7c3aed44 60%, #d9770644 80%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  className={`relative flex flex-col md:flex-row items-center gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* 3D Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <Card3D glow={s.glow} shadowColor={s.shadow}>
                      <div className="relative flex items-start gap-4">
                        {/* 3D icon bubble */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white relative`}
                          style={{
                            boxShadow: `0 8px 20px ${s.shadow}50, inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.2)`,
                          }}
                        >
                          {/* Top shine */}
                          <div className="absolute top-1 left-2 w-6 h-2 bg-white/20 rounded-full blur-sm" />
                          {s.icon}
                        </div>

                        <div className="flex-1 pt-0.5">
                          <span className="text-[10px] font-bold text-muted tracking-widest uppercase">
                            Step {s.n}
                          </span>
                          <h3 className="text-xl font-semibold mt-0.5">{s.title}</h3>
                          <p className="text-muted text-sm mt-1.5 leading-relaxed">{s.body}</p>
                        </div>
                      </div>
                    </Card3D>
                  </div>

                  {/* Centre node with float animation */}
                  <StepNode step={s} />

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
