import { notFound } from "next/navigation";
import MilesCapitalLogo from "../../components/Logo";

const policies: Record<
  string,
  { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }
> = {
  /* ── 1. Order Execution Policy ───────────────────── */
  "order-execution-policy": {
    title: "Order Execution Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Best Execution",
        body: "Miles Capital is committed to achieving the best possible result for clients when executing orders. We consider price, costs, speed, likelihood of execution, and order size when determining best execution.",
      },
      {
        heading: "2. Execution Venues",
        body: "Orders are executed through our internal dealing desk and/or liquidity providers. We select execution venues based on their ability to deliver consistent best execution over time.",
      },
      {
        heading: "3. Order Types",
        body: "We support market orders, limit orders, stop orders, and stop-loss orders via MetaTrader 5. All orders are subject to available liquidity and prevailing market conditions.",
      },
      {
        heading: "4. Slippage",
        body: "In fast-moving markets, orders may be filled at a price different from the requested price. We implement slippage controls to minimise this effect wherever possible.",
      },
      {
        heading: "5. Conflicts of Interest",
        body: "Miles Capital maintains a Conflicts of Interest Policy to manage potential conflicts. Our remuneration structure does not incentivise staff to recommend unsuitable products.",
      },
      {
        heading: "6. Specific Client Instructions",
        body: "When you provide specific instructions, we will execute your order in accordance with those instructions. Please be aware that specific instructions may prevent us from following our best execution policy.",
      },
      {
        heading: "7. Monitoring & Review",
        body: "This policy is reviewed annually and updated as required. We monitor the quality of execution on an ongoing basis. Clients will be notified of any material changes.",
      },
    ],
  },

  /* ── 2. Payment T&C ──────────────────────────────── */
  "payment-terms": {
    title: "Payment Terms & Conditions",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Accepted Payment Methods",
        body: "We accept deposits via bank wire transfer, credit/debit card (Visa, Mastercard), and approved e-wallets. All payment methods are subject to verification and availability in your jurisdiction.",
      },
      {
        heading: "2. Minimum Deposits",
        body: "Minimum deposit amounts vary by account type: Classic — $100, Executive — $500, Premium — $2,000, Islamic — $100. Deposits below the minimum threshold will not be processed.",
      },
      {
        heading: "3. Deposit Processing",
        body: "Funds are credited to your trading account once cleared. Card deposits are typically instant; bank transfers may take 1–5 business days depending on your bank.",
      },
      {
        heading: "4. Withdrawals",
        body: "Withdrawal requests are processed within 1–3 business days. Funds are returned to the original payment method used for deposit unless otherwise agreed in writing. Proof of identity may be required before processing.",
      },
      {
        heading: "5. Fees",
        body: "Miles Capital does not charge deposit or withdrawal fees. However, your bank or payment provider may apply their own charges. Third-party fees are outside our control and are the client's responsibility.",
      },
      {
        heading: "6. Currency Conversion",
        body: "Accounts are denominated in USD by default. If you deposit in a different currency, conversion will be applied at the prevailing interbank rate plus a small conversion spread.",
      },
      {
        heading: "7. Dormant Accounts",
        body: "Accounts with no trading activity for 12 consecutive months may be subject to a monthly inactivity fee of $10. We will notify you at least 30 days before any such fee is applied.",
      },
      {
        heading: "8. AML Compliance",
        body: "All transactions are subject to Anti-Money Laundering (AML) checks. We reserve the right to request additional documentation to verify the source of funds before processing any payment.",
      },
    ],
  },

  /* ── 3. Privacy Policy ───────────────────────────── */
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Introduction",
        body: "Miles Capital Ltd is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services, in accordance with applicable data protection legislation.",
      },
      {
        heading: "2. Data We Collect",
        body: "We collect personal data including full name, email address, phone number, residential address, date of birth, government-issued ID documents, financial information, and trading history. We also collect technical data such as IP addresses, browser type, device identifiers, and cookies to improve your experience.",
      },
      {
        heading: "3. How We Use Your Data",
        body: "Your data is used to open and manage your trading account, comply with regulatory obligations (KYC/AML), process transactions, provide customer support, send relevant market updates and communications (with your consent), and improve our products and services.",
      },
      {
        heading: "4. Data Sharing",
        body: "We do not sell your personal data. We may share it with regulated third-party service providers (payment processors, identity verification services), regulatory authorities (FSC Mauritius), and professional advisors bound by confidentiality obligations.",
      },
      {
        heading: "5. Data Retention",
        body: "We retain your personal data for as long as your account is active and for a minimum of 5 years after account closure, as required by applicable law and our regulatory obligations under the FSC Mauritius.",
      },
      {
        heading: "6. Your Rights",
        body: "You have the right to access, correct, or delete your personal data. You may also object to or restrict processing and request data portability. To exercise these rights, contact us at privacy@milescap.com.",
      },
      {
        heading: "7. Cookies",
        body: "We use essential, functional, and analytics cookies. You can manage cookie preferences at any time via the Cookie Settings link in our footer. Please see our full Cookies Policy for details.",
      },
      {
        heading: "8. Security",
        body: "We implement industry-standard technical and organisational measures to protect your data, including SSL encryption, secure servers, and regular security audits.",
      },
      {
        heading: "9. Contact",
        body: "For privacy-related queries: privacy@milescap.com · +230 245 6703 · Sterling Tower 14, Poudrière St, Port-Louis, Mauritius.",
      },
    ],
  },

  /* ── 4. Risk Management Policy ───────────────────── */
  "risk-policy": {
    title: "Risk Management Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. General Risk Warning",
        body: "Trading Forex, CFDs, metals, indices, and commodities involves significant risk of loss. You may lose more than your initial investment. These products are not suitable for all investors. Please ensure you fully understand the risks involved and seek independent financial advice if necessary.",
      },
      {
        heading: "2. Leverage Risk",
        body: "Leverage amplifies both profits and losses. A small market movement can have a proportionally larger impact on your account balance. You should never trade with money you cannot afford to lose.",
      },
      {
        heading: "3. Market Risk",
        body: "Financial markets are influenced by economic events, geopolitical developments, government policies, central bank decisions, and natural disasters. These factors can cause rapid and significant price movements that may result in substantial losses.",
      },
      {
        heading: "4. Liquidity Risk",
        body: "During periods of high volatility or low market activity, liquidity may be reduced. This could result in orders being executed at prices significantly different from those requested (slippage) or orders not being filled at all.",
      },
      {
        heading: "5. Technology Risk",
        body: "Trading platforms may experience downtime, connectivity issues, or technical failures beyond our control. Miles Capital is not liable for losses caused by such circumstances. We recommend maintaining a reliable internet connection.",
      },
      {
        heading: "6. Counterparty Risk",
        body: "As a CFD broker, Miles Capital acts as the counterparty to your trades. We manage this risk through active hedging with tier-1 liquidity providers and by maintaining sufficient regulatory capital as required by the FSC Mauritius.",
      },
      {
        heading: "7. Our Risk Controls",
        body: "We employ automated margin monitoring, stop-out levels, and negative balance protection to help manage client risk. However, these controls cannot guarantee protection against all losses in extreme market conditions.",
      },
      {
        heading: "8. Restricted Jurisdictions",
        body: "Miles Capital does not offer services to residents of Iran, Somalia, Syria, Yemen, India, UAE, or the Republic of Congo. It is the client's responsibility to ensure they are legally permitted to trade CFDs in their jurisdiction.",
      },
    ],
  },

  /* ── 5. Swap Free T&C ────────────────────────────── */
  "swap-free-tc": {
    title: "Swap Free (Islamic) Terms & Conditions",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Overview",
        body: "Miles Capital offers Islamic (Swap-Free) accounts to clients who are prohibited from paying or receiving interest (riba) under Sharia law. These accounts operate without overnight swap or rollover charges.",
      },
      {
        heading: "2. Eligibility",
        body: "Islamic accounts are available to clients who declare they require a swap-free account for religious reasons. We reserve the right to request supporting documentation and may refuse or revoke swap-free status at our discretion.",
      },
      {
        heading: "3. No Swap / Rollover",
        body: "Positions held overnight will not incur standard swap fees on a Swap-Free account. Instead, an administration fee may be applied for positions held beyond a specified number of days, varying by instrument.",
      },
      {
        heading: "4. Administration Fees",
        body: "An administration fee may be charged on positions held open for more than 3 consecutive nights. The fee amount varies by instrument and is disclosed in your trading platform. These fees are not interest and are charged for account maintenance.",
      },
      {
        heading: "5. Eligible Instruments",
        body: "Swap-free status applies to Forex pairs, metals, and select indices as specified in our instrument list. Some instruments may not be available on Islamic accounts due to market structure constraints.",
      },
      {
        heading: "6. Prohibited Use",
        body: "Swap-free accounts must not be used for swap arbitrage strategies. Miles Capital reserves the right to cancel swap-free status, recover forgone swap fees, or close accounts found to be abusing this feature.",
      },
      {
        heading: "7. Changes",
        body: "Miles Capital reserves the right to modify the terms of the swap-free account offering at any time. Clients will be notified with reasonable advance notice of any material changes.",
      },
    ],
  },

  /* ── 6. Website T&C ──────────────────────────────── */
  "website-tc": {
    title: "Website Terms & Conditions",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Acceptance",
        body: "By accessing or using the Miles Capital website (milescap.com), you agree to be bound by these Website Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.",
      },
      {
        heading: "2. Intellectual Property",
        body: "All content on this website, including text, graphics, logos, images, and software, is the property of Miles Capital Ltd and is protected by applicable intellectual property laws. Unauthorised reproduction is strictly prohibited.",
      },
      {
        heading: "3. No Investment Advice",
        body: "The information provided on this website is for general informational purposes only. Nothing on this site constitutes financial, investment, or trading advice. You should obtain independent professional advice before making any financial decision.",
      },
      {
        heading: "4. Accuracy of Information",
        body: "We endeavour to keep all information accurate and up to date. However, we make no representations or warranties regarding the completeness, accuracy, or reliability of any content on this website.",
      },
      {
        heading: "5. Third-Party Links",
        body: "Our website may contain links to third-party websites. These links are provided for convenience only. Miles Capital has no control over the content of those sites and accepts no responsibility for them.",
      },
      {
        heading: "6. Limitation of Liability",
        body: "To the maximum extent permitted by law, Miles Capital shall not be liable for any direct, indirect, incidental, or consequential losses arising from your use of, or inability to use, this website.",
      },
      {
        heading: "7. Governing Law",
        body: "These terms are governed by the laws of Mauritius. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.",
      },
      {
        heading: "8. Changes",
        body: "We reserve the right to update these Website Terms & Conditions at any time. Continued use of the website following any changes constitutes your acceptance of the revised terms.",
      },
    ],
  },

  /* ── 7. Complaint Handling Policy ───────────────── */
  "complaint-policy": {
    title: "Complaint Handling Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Our Commitment",
        body: "Miles Capital is committed to providing excellent service. We take all complaints seriously and aim to resolve them promptly, fairly, and transparently.",
      },
      {
        heading: "2. How to Submit a Complaint",
        body: "You can submit a complaint by email to complaints@milescap.com or by calling +230 245 6703. Please include your account number, a description of the issue, the date it occurred, and any supporting documentation.",
      },
      {
        heading: "3. Acknowledgement",
        body: "We will acknowledge receipt of your complaint within 2 business days of receiving it. You will be given a unique reference number to track your complaint.",
      },
      {
        heading: "4. Investigation",
        body: "Our compliance team will investigate your complaint thoroughly and impartially. We aim to resolve all complaints within 15 business days. Complex cases may require up to 30 business days. We will keep you informed of progress.",
      },
      {
        heading: "5. Resolution",
        body: "We will provide a written response detailing our findings and any proposed resolution. If the outcome is not in your favour, we will clearly explain our reasoning.",
      },
      {
        heading: "6. Escalation",
        body: "If you are not satisfied with our response, you may escalate the complaint to the Financial Services Commission (FSC) of Mauritius within 6 months of our final response.",
      },
      {
        heading: "7. FSC Contact",
        body: "Financial Services Commission, FSC House, 54 Cybercity, Ebène 72201, Mauritius. Website: fscmauritius.org · Tel: +230 403 7000.",
      },
    ],
  },

  /* ── 8. Conflict of Interest Policy ─────────────── */
  "conflict-of-interest-policy": {
    title: "Conflict of Interest Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Purpose",
        body: "This policy sets out how Miles Capital Ltd identifies, manages, and mitigates conflicts of interest that may arise in the course of providing financial services to our clients.",
      },
      {
        heading: "2. What Is a Conflict of Interest",
        body: "A conflict of interest arises when the interests of Miles Capital, its employees, or associated parties may conflict with the interests of a client. This can occur in areas such as trading, remuneration, personal account dealing, and business relationships.",
      },
      {
        heading: "3. Identification",
        body: "We maintain an internal register of identified conflicts. Potential conflicts include: acting as market maker (counterparty to client trades), receipt of third-party commissions, personal account dealing by employees, and relationships with affiliated entities.",
      },
      {
        heading: "4. Management Measures",
        body: "We manage conflicts through information barriers (Chinese walls), independent compliance oversight, employee training, restrictions on personal account dealing, and fair order allocation policies.",
      },
      {
        heading: "5. Remuneration",
        body: "Miles Capital's remuneration structures do not incentivise employees to act against clients' interests. Staff are not rewarded for recommending unsuitable products or for excessive trading activity.",
      },
      {
        heading: "6. Disclosure",
        body: "Where a conflict cannot be adequately managed, we will disclose the nature of the conflict to you before providing the relevant service, allowing you to make an informed decision.",
      },
      {
        heading: "7. Review",
        body: "This policy is reviewed at least annually by our compliance function. Any material changes will be communicated to clients and reflected in our public disclosures.",
      },
    ],
  },

  /* ── 9. Cookies Policy ───────────────────────────── */
  "cookies-policy": {
    title: "Cookies Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. What Are Cookies",
        body: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, keep you logged in, and understand how you use our site so we can improve it.",
      },
      {
        heading: "2. Essential Cookies",
        body: "These cookies are necessary for the website to function and cannot be disabled. They include session cookies for login, security tokens, and load-balancing cookies. No personal data is stored.",
      },
      {
        heading: "3. Functional Cookies",
        body: "Functional cookies remember your preferences such as language, theme, and regional settings. Disabling these may affect your user experience but will not prevent you from using the site.",
      },
      {
        heading: "4. Analytics Cookies",
        body: "We use Google Analytics and similar tools to understand how visitors interact with our website. Data is aggregated and anonymised. You can opt out of analytics cookies at any time.",
      },
      {
        heading: "5. Marketing Cookies",
        body: "Marketing cookies are used to display relevant advertising on third-party platforms. We will only set marketing cookies with your explicit consent via our cookie banner.",
      },
      {
        heading: "6. Third-Party Cookies",
        body: "Some third-party services we integrate (live chat, payment processors, social media widgets) may set their own cookies. These are subject to the respective providers' privacy and cookie policies.",
      },
      {
        heading: "7. Managing Cookies",
        body: "You can control and delete cookies through your browser settings. Alternatively, use our Cookie Settings tool in the footer for granular control. Note that disabling certain cookies may impact site functionality.",
      },
      {
        heading: "8. Contact",
        body: "For cookie-related questions, contact us at privacy@milescap.com.",
      },
    ],
  },
};

/* ── All slugs list for the index ─────────────────── */
export const allPolicies = [
  { slug: "order-execution-policy",      label: "Order Execution Policy" },
  { slug: "payment-terms",               label: "Payment T&C" },
  { slug: "privacy-policy",              label: "Privacy Policy" },
  { slug: "risk-policy",                 label: "Risk Management Policy" },
  { slug: "swap-free-tc",                label: "Swap Free T&C" },
  { slug: "website-tc",                  label: "Website T&C" },
  { slug: "complaint-policy",            label: "Complaint Handling Policy" },
  { slug: "conflict-of-interest-policy", label: "Conflict Of Interest Policy" },
  { slug: "cookies-policy",              label: "Cookies Policy" },
];

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = policies[slug];
  if (!policy) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="outline-none focus:outline-none">
            <MilesCapitalLogo size={32} />
          </a>
          <a href="/" className="btn-ghost text-sm">
            ← Back to Home
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        {/* Sidebar — all policies */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-24 card p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
              Terms &amp; Conditions
            </h2>
            <nav className="space-y-1">
              {allPolicies.map((p) => (
                <a
                  key={p.slug}
                  href={`/legal/${p.slug}`}
                  className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-colors ${
                    p.slug === slug
                      ? "bg-accent/15 text-accent font-medium"
                      : "text-muted hover:text-foreground hover:bg-border/40"
                  }`}
                >
                  <span className={`text-accent text-xs ${p.slug === slug ? "opacity-100" : "opacity-60"}`}>›</span>
                  {p.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <span className="chip mb-4">Legal</span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            {policy.title}
          </h1>
          <p className="text-muted text-sm mt-3">Last updated: {policy.lastUpdated}</p>
          <p className="text-muted text-sm">
            Miles Capital Ltd · FSC Mauritius · License GB22201008
          </p>

          <div className="mt-12 space-y-8">
            {policy.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-semibold">{s.heading}</h2>
                <p className="text-muted text-sm leading-relaxed mt-2">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border text-xs text-muted">
            <p>
              If you have any questions about this policy, contact us at{" "}
              <a href="mailto:info@milescap.com" className="text-accent hover:underline">
                info@milescap.com
              </a>{" "}
              or call{" "}
              <a href="tel:+2302456703" className="text-accent hover:underline">
                +230 245 6703
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
