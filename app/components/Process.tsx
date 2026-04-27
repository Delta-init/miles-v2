const steps = [
  { n: "01", title: "Register", body: "Choose an account type and complete our fast and secure application form." },
  { n: "02", title: "Verify", body: "Use our digital onboarding system for fast and seamless verification." },
  { n: "03", title: "Fund", body: "Deposit using multiple secure funding methods available to you." },
  { n: "04", title: "Trade", body: "Begin live trading across Forex, Metals, Commodities, Indices and Shares." },
  { n: "05", title: "Analyze", body: "Utilize advanced tools and resources to analyze market trends and opportunities." },
  { n: "06", title: "Withdraw", body: "Easily withdraw your funds using our secure and fast withdrawal process." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Start trading in six simple steps.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="card p-7">
              <div className="text-4xl font-semibold gradient-text">{s.n}</div>
              <h3 className="text-lg font-medium mt-5">{s.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
