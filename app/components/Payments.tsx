/* ── Payment & Withdrawal Section ───────────────── */

const paymentMethods = [
  {
    label: "Wire Transfer",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="32" r="30" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
        <path d="M22 32 C22 32 26 26 32 26 C38 26 42 32 42 32" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M22 32 C22 32 26 38 32 38 C38 38 42 32 42 32" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="32" cy="32" r="4" fill="#60a5fa"/>
        <path d="M38 20 L44 20 L44 26" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 20 L44 26" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <text x="32" y="52" textAnchor="middle" fontSize="7" fontWeight="700" fill="#94a3b8" fontFamily="system-ui" letterSpacing="0.5">WIRE</text>
      </svg>
    ),
  },
  {
    label: "Mastercard",
    icon: (
      <svg viewBox="0 0 64 48" fill="none" className="w-14 h-10">
        <circle cx="24" cy="24" r="20" fill="#eb001b"/>
        <circle cx="40" cy="24" r="20" fill="#f79e1b"/>
        <path d="M32 10.5 A20 20 0 0 1 40 24 A20 20 0 0 1 32 37.5 A20 20 0 0 1 24 24 A20 20 0 0 1 32 10.5Z" fill="#ff5f00"/>
      </svg>
    ),
  },
  {
    label: "Visa",
    icon: (
      <svg viewBox="0 0 80 32" fill="none" className="w-16 h-8">
        <text x="4" y="26" fontSize="26" fontWeight="900" fill="#1a1f71" fontFamily="Arial, sans-serif" letterSpacing="-1">VISA</text>
      </svg>
    ),
  },
  {
    label: "Apple Pay",
    icon: (
      <svg viewBox="0 0 90 36" fill="none" className="w-20 h-10">
        <path d="M18 8 C16 5 13 5 12 5 C12 7 13.5 9 15 10 C16.5 11 18.5 10.5 18 8Z" fill="currentColor"/>
        <path d="M18 11 C16 10 13 11 12 13 C11 15 11 19 13 22 C14 24 15 25 16 25 C17 25 17.5 24.5 19 24.5 C20.5 24.5 21 25 22 25 C23 25 24 24 25 22 C26 20 26.5 18 26 16 C25 13.5 22 12 20 13 C19 13.5 18.5 11.5 18 11Z" fill="currentColor"/>
        <text x="30" y="23" fontSize="14" fontWeight="500" fill="currentColor" fontFamily="-apple-system, system-ui" letterSpacing="-0.3">Pay</text>
      </svg>
    ),
  },
  {
    label: "Bitcoin",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="32" r="30" fill="#f7931a"/>
        <path d="M42 28 C42 24 39 23 35 23 L35 18 L32 18 L32 23 L30 23 L30 18 L27 18 L27 23 L22 23 L22 26 L25 26 C26 26 26 27 26 27 L26 38 C26 39 25 39 24 39 L22 39 L22 42 L27 42 L27 46 L30 46 L30 42 L32 42 L32 46 L35 46 L35 42 C39 42 43 40 43 36 C43 33 41 31 38 30 C40 29 42 28 42 28Z M35 27 C37 27 39 28 39 30 C39 32 37 33 35 33 L29 33 L29 27 L35 27Z M35 36 C37 36 39 37 39 39 C39 41 37 42 35 42 L29 42 L29 36 L35 36Z" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Tether",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <polygon points="32,2 58,18 58,46 32,62 6,46 6,18" fill="#26a17b"/>
        <polygon points="32,6 55,20 55,44 32,58 9,44 9,20" fill="#1a9268"/>
        <text x="32" y="38" textAnchor="middle" fontSize="24" fontWeight="900" fill="white" fontFamily="system-ui">₮</text>
      </svg>
    ),
  },
];

export default function Payments() {
  return (
    <section id="payments" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="chip mb-5">Quick and Easy Way · Deposits and Withdrawals</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4">
            No Limits. No Commission. No Delays.
          </h2>
        </div>

        {/* Main card — dark */}
        <div
          className="rounded-3xl border border-border overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
            boxShadow: "0 24px 64px -16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-14">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <div className="w-10 h-1 rounded-full bg-gradient-to-r from-accent to-transparent mb-6"/>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Payment &amp; Withdrawal systems
              </h3>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-md">
                Take control of your trading journey with real-time insights, advanced tools, and strategic expertise that put you ahead in the ever-evolving world of Forex.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-400">
                {[
                  "Zero deposit & withdrawal fees",
                  "Processed within 1–3 business days",
                  "Multiple currencies supported",
                  "Bank-grade security on all transactions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[9px] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — payment logos grid */}
            <div className="shrink-0">
              <div className="grid grid-cols-3 gap-5">
                {paymentMethods.map((m) => (
                  <div
                    key={m.label}
                    className="group flex flex-col items-center justify-center gap-2 w-24 h-20 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    <div className="text-white">{m.icon}</div>
                    <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wide">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom strip */}
          <div className="border-t border-white/5 px-10 md:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              All transactions are secured by 256-bit SSL encryption and monitored 24/7.
            </p>
            <a
              href="https://milescap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-accent/50 hover:text-accent transition-colors"
            >
              Start Trading →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
