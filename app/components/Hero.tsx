export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 glow" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
        <span className="chip mb-6">
          <span className="dot-accent" />
          Regulated by FSC Mauritius · License GB22201008
        </span>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight gradient-text leading-[1.05]">
          Grow Your Wealth
          <br />
          With Miles Capital
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted text-base md:text-lg">
          At Miles Capital, we believe in empowering your financial journey with
          cutting-edge solutions and unparalleled support.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#contact" className="btn-primary">
            Create Account
            <span aria-hidden>→</span>
          </a>
          <a href="#platforms" className="btn-ghost">
            Open Demo Account
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { k: "26,380+", v: "Happy Customers" },
            { k: "$278M+", v: "Withdrawal Amount" },
            { k: "$530M+", v: "Annual Transactions" },
          ].map((s) => (
            <div key={s.k} className="card p-5">
              <div className="text-2xl font-semibold">{s.k}</div>
              <div className="text-xs text-muted mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
