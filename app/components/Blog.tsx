const posts = [
  {
    tag: "Education",
    date: "April 20, 2025",
    title: "Understanding Forex Trading: A Beginner's Complete Guide",
    excerpt:
      "Forex is the world's largest financial market. Learn how currency pairs work, what drives exchange rates, and how to place your first trade with confidence.",
    readTime: "6 min read",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    tag: "Market Insights",
    date: "April 15, 2025",
    title: "Gold vs USD: What Really Drives Precious Metal Prices?",
    excerpt:
      "Gold and the US Dollar share an inverse relationship — but it's not that simple. Explore the key macro factors that move metals markets and how to position yourself.",
    readTime: "5 min read",
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    tag: "Platform",
    date: "April 10, 2025",
    title: "MetaTrader 5: 5 Features Every Trader Should Be Using",
    excerpt:
      "MT5 is far more powerful than most traders realise. From algorithmic trading to advanced market depth analysis, discover the features that separate pros from beginners.",
    readTime: "4 min read",
    color: "from-blue-500/20 to-cyan-500/10",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="chip mb-4">Blog & Insights</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl">
              Market knowledge. Trader edge.
            </h2>
          </div>
          <a
            href="https://milescap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0"
          >
            View all posts →
          </a>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a
              key={p.title}
              href="https://milescap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card overflow-hidden group hover:ring-1 hover:ring-accent/40 transition-all flex flex-col"
            >
              {/* Thumbnail */}
              <div
                className={`h-44 bg-gradient-to-br ${p.color} relative overflow-hidden border-b border-border`}
              >
                <div className="absolute inset-0 bg-grid opacity-60" />
                {/* Mini chart lines decoration */}
                <svg
                  className="absolute bottom-4 left-4 right-4 opacity-40"
                  viewBox="0 0 200 60"
                  fill="none"
                >
                  <polyline
                    points="0,50 30,35 60,40 90,20 120,30 150,10 180,25 200,15"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="0,55 30,48 60,52 90,40 120,45 150,35 180,42 200,38"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-foreground/30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <span className="chip">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span>{p.readTime}</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
