import { notFound } from "next/navigation";
import MilesCapitalLogo from "../../components/Logo";

const policies: Record<
  string,
  { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Introduction",
        body: "Miles Capital Ltd (we, us, our) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.",
      },
      {
        heading: "2. Data We Collect",
        body: "We collect personal data including full name, email address, phone number, residential address, date of birth, government-issued ID, financial information, and trading history. We also collect technical data such as IP addresses, browser type, and cookies to improve user experience.",
      },
      {
        heading: "3. How We Use Your Data",
        body: "Your data is used to open and manage your trading account, comply with regulatory obligations (KYC/AML), process transactions, provide customer support, send relevant market updates and communications (with your consent), and improve our services.",
      },
      {
        heading: "4. Data Sharing",
        body: "We do not sell your personal data. We may share it with regulated third-party service providers (payment processors, identity verification), regulatory authorities (FSC Mauritius), and professional advisors bound by confidentiality obligations.",
      },
      {
        heading: "5. Data Retention",
        body: "We retain your data for as long as your account is active and for a minimum of 5 years after account closure as required by applicable law and our regulatory obligations.",
      },
      {
        heading: "6. Your Rights",
        body: "You have the right to access, correct, or delete your personal data. You may also object to or restrict processing and request data portability. To exercise these rights, contact us at privacy@milescap.com.",
      },
      {
        heading: "7. Cookies",
        body: "We use essential, functional, and analytics cookies. You can manage cookie preferences at any time via the Cookie Settings link in our footer.",
      },
      {
        heading: "8. Contact",
        body: "For privacy-related queries: privacy@milescap.com · +230 245 6703 · Sterling Tower 14, Poudrière St, Port-Louis, Mauritius.",
      },
    ],
  },
  "risk-policy": {
    title: "Risk Disclosure Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. General Risk Warning",
        body: "Trading Forex, CFDs, metals, indices, and commodities involves significant risk. You may lose more than your initial investment. These products are not suitable for all investors. Please ensure you fully understand the risks involved and seek independent financial advice if necessary.",
      },
      {
        heading: "2. Leverage Risk",
        body: "Leverage amplifies both profits and losses. A small market movement can have a proportionally larger impact on your account. You should never invest money you cannot afford to lose.",
      },
      {
        heading: "3. Market Risk",
        body: "Financial markets are influenced by economic events, geopolitical developments, government policies, and natural disasters. These can cause rapid and significant price movements that may result in substantial losses.",
      },
      {
        heading: "4. Liquidity Risk",
        body: "During volatile market conditions, liquidity may be reduced. This could result in orders being executed at prices significantly different from those expected (slippage).",
      },
      {
        heading: "5. Technology Risk",
        body: "Trading platforms may experience downtime, connectivity issues, or technical failures. Miles Capital is not liable for losses caused by such circumstances beyond our control.",
      },
      {
        heading: "6. Counterparty Risk",
        body: "As a CFD broker, Miles Capital acts as the counterparty to your trades. We manage this risk through hedging and maintaining sufficient regulatory capital.",
      },
      {
        heading: "7. Restricted Jurisdictions",
        body: "Miles Capital does not offer services to residents of Iran, Somalia, Syria, Yemen, India, UAE, or the Republic of Congo. It is the client's responsibility to ensure they are legally permitted to trade in their jurisdiction.",
      },
    ],
  },
  "order-execution-policy": {
    title: "Order Execution Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Best Execution",
        body: "Miles Capital is committed to achieving the best possible result for clients when executing orders. We consider price, costs, speed, likelihood of execution, and order size.",
      },
      {
        heading: "2. Execution Venues",
        body: "Orders are executed through our internal dealing desk and/or liquidity providers. We select execution venues based on their ability to deliver consistent best execution over time.",
      },
      {
        heading: "3. Order Types",
        body: "We support market orders, limit orders, stop orders, and stop-loss orders via MetaTrader 5. All orders are subject to available liquidity and market conditions.",
      },
      {
        heading: "4. Slippage",
        body: "In fast-moving markets, orders may be filled at a price different from the requested price. We implement slippage controls to minimise this effect.",
      },
      {
        heading: "5. Conflicts of Interest",
        body: "Miles Capital maintains a Conflicts of Interest Policy to manage potential conflicts. Our remuneration structure does not incentivise staff to recommend unsuitable products.",
      },
      {
        heading: "6. Review",
        body: "This policy is reviewed annually and updated as required. Clients will be notified of any material changes.",
      },
    ],
  },
  "payment-terms": {
    title: "Payment Terms",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. Deposits",
        body: "We accept deposits via bank transfer, credit/debit card, and approved e-wallets. Minimum deposit amounts vary by account type. Funds are credited to your account once cleared.",
      },
      {
        heading: "2. Withdrawals",
        body: "Withdrawal requests are processed within 1–3 business days. Funds are returned to the original payment method unless otherwise agreed. Proof of identity may be required.",
      },
      {
        heading: "3. Fees",
        body: "Miles Capital does not charge deposit or withdrawal fees. However, your bank or payment provider may apply their own charges. Third-party fees are outside our control.",
      },
      {
        heading: "4. Currency",
        body: "Accounts are denominated in USD by default. Currency conversion fees may apply if you deposit in a different currency.",
      },
      {
        heading: "5. Dormant Accounts",
        body: "Accounts with no trading activity for 12 consecutive months may be subject to a monthly inactivity fee. We will notify you before any such fee is applied.",
      },
    ],
  },
  "complaint-policy": {
    title: "Complaint Handling Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. How to Complain",
        body: "You can submit a complaint by email to complaints@milescap.com or by calling +230 245 6703. Please include your account number, a description of the issue, and any supporting documentation.",
      },
      {
        heading: "2. Acknowledgement",
        body: "We will acknowledge receipt of your complaint within 2 business days.",
      },
      {
        heading: "3. Investigation",
        body: "Our compliance team will investigate your complaint thoroughly and impartially. We aim to resolve all complaints within 15 business days. Complex cases may take up to 30 business days.",
      },
      {
        heading: "4. Resolution",
        body: "We will provide a written response with our findings and any proposed resolution. If you are unsatisfied, you may escalate the complaint to the Financial Services Commission (FSC) of Mauritius.",
      },
      {
        heading: "5. FSC Contact",
        body: "Financial Services Commission, FSC House, 54 Cybercity, Ebène 72201, Mauritius. Website: fscmauritius.org",
      },
    ],
  },
  "cookies-policy": {
    title: "Cookies Policy",
    lastUpdated: "1 January 2025",
    sections: [
      {
        heading: "1. What Are Cookies",
        body: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.",
      },
      {
        heading: "2. Types of Cookies We Use",
        body: "Essential cookies (required for the site to function), functional cookies (remember your preferences), analytics cookies (understand site usage via aggregated data), and marketing cookies (relevant advertising, only with consent).",
      },
      {
        heading: "3. Third-Party Cookies",
        body: "We use Google Analytics and other third-party tools that may set their own cookies. These are subject to the respective providers' privacy policies.",
      },
      {
        heading: "4. Managing Cookies",
        body: "You can control cookies through your browser settings. Disabling certain cookies may affect website functionality. For granular control, use our Cookie Settings tool in the footer.",
      },
      {
        heading: "5. Contact",
        body: "For cookie-related questions, contact privacy@milescap.com.",
      },
    ],
  },
};

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

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="chip mb-4">Legal</span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
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
  );
}
