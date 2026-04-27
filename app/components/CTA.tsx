export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 glow" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight gradient-text">
              Ready to grow your wealth
              <br />with Miles Capital?
            </h2>
            <p className="text-muted mt-5 max-w-md mx-auto">
              Join 26,380+ traders already growing with us. Regulated by FSC Mauritius.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a href="https://milescap.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Create Account <span aria-hidden>→</span>
              </a>
              <a href="mailto:info@milescap.com" className="btn-ghost">
                Email Us →
              </a>
            </div>
            <p className="text-muted text-xs mt-6">
              📍 Sterling Tower, 14 Poudrière St, Port-Louis, Mauritius &nbsp;·&nbsp;
              📞 +230 245 6703 &nbsp;·&nbsp;
              ✉️ info@milescap.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
