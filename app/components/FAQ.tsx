const faqs = [
  {
    q: "Is Miles Capital regulated?",
    a: "Yes. Miles Capital is regulated under The Financial Services Commission (FSC) of Mauritius. License number: GB22201008. Company number: 194281.",
  },
  {
    q: "What trading platforms do you offer?",
    a: "We offer MetaTrader 5 (MT5) on desktop, web, and mobile. MT5 provides advanced charting, lightning-fast execution, and access to all our markets.",
  },
  {
    q: "How do I open an account?",
    a: "Simply register online, verify your identity through our digital onboarding system, fund your account, and start trading — the whole process takes minutes.",
  },
  {
    q: "What account types are available?",
    a: "We offer Classic, Executive, Premium, and Islamic (swap-free) accounts to suit traders of all levels and requirements.",
  },
  {
    q: "How do I withdraw my funds?",
    a: "Withdrawals are processed quickly and securely through multiple methods. Simply submit a withdrawal request through your account dashboard.",
  },
  {
    q: "Do you offer educational resources?",
    a: "Yes — we provide comprehensive educational videos, live mentorship sessions, and in-depth research and analysis to help you trade smarter.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip mb-4">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Common questions answered.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className={`card p-6 group [&[open]_.icon]:rotate-45 ${
              i % 4 === 0 ? "card-green" : i % 4 === 1 ? "card-blue" : i % 4 === 2 ? "card-yellow" : "card-red"
            }`}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium">{f.q}</span>
                <span className="icon transition-transform text-accent text-xl">+</span>
              </summary>
              <p className="text-muted text-sm mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
