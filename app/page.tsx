export default function Home() {
  const faqs = [
    {
      q: 'Which data sources can I connect?',
      a: 'Stripe for revenue metrics, Google Analytics for traffic, and more integrations added regularly. Setup takes under 5 minutes.'
    },
    {
      q: 'How are the weekly snapshots delivered?',
      a: 'Every Monday you receive an email with your investor-ready PDF report plus an in-app dashboard with AI-generated insights and trend highlights.'
    },
    {
      q: 'Can I share reports directly with investors?',
      a: 'Yes. Each report has a shareable link and a downloadable PDF formatted to match what investors expect — MRR, churn, growth rate, and more.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Founders Raising or Managing Investor Relations
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Weekly Investor-Ready<br />
          <span className="text-[#58a6ff]">Metrics Snapshots</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Connect Stripe and your analytics tools. Get automated weekly reports with AI-generated insights — formatted exactly how investors want to see your numbers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $49/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['MRR & ARR', 'Auto-calculated from Stripe'], ['Churn & Growth', 'Weekly trend analysis'], ['AI Insights', 'Plain-English summaries']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep investors informed</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Stripe + Google Analytics integration',
              'Automated weekly PDF reports',
              'AI-generated insights & commentary',
              'Shareable investor report links',
              'Email delivery every Monday',
              'Unlimited historical snapshots'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Today
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Startup Metrics Snapshot. All rights reserved.
      </footer>
    </main>
  )
}
