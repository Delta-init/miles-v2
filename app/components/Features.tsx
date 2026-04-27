const reasons = [
  { title: "Integrity", body: "We adhere to the highest ethical standards, ensuring trust and reliability in every interaction." },
  { title: "Client-Centric Approach", body: "We prioritize your needs and objectives with 24×7 service support dedicated to your success." },
  { title: "Personalized Services", body: "Each client is unique. We craft bespoke solutions tailored specifically to your financial goals." },
  { title: "Expert Guidance", body: "Extensive market knowledge and expertise help you make informed decisions with confidence." },
  { title: "Collaboration", body: "We work closely with you to understand your goals and build a strategy that delivers results." },
  { title: "Fast Execution & Easy Withdrawals", body: "Trades executed promptly and funds accessible whenever you need them." },
  { title: "Education & Live Mentorship", body: "Comprehensive educational videos and live mentorship to sharpen your trading edge." },
  { title: "Research & Analysis", body: "In-depth research and analysis keep you ahead of market trends and opportunities." },
  { title: "Transparent Communication", body: "Clear and open communication keeps you fully informed every step of the way." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Why Miles Capital</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Nine reasons traders choose us.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div key={r.title} className={`card p-7 ${
              i % 4 === 0 ? "card-green" : i % 4 === 1 ? "card-blue" : i % 4 === 2 ? "card-yellow" : "card-red"
            }`}>
              <div className="text-xs text-muted">0{i + 1}</div>
              <h3 className="text-xl font-medium mt-3">{r.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
