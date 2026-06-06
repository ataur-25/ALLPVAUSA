import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail as Mail,
  FiShield as Shield,
  FiClock as Clock,
  FiAward as Award,
  FiCheck as Check,
  FiShoppingCart as ShoppingCart,
} from "react-icons/fi";

// ── Modal ─────────────────────────────
function PurchaseModal({ isOpen, product, onClose }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0d1b2e] border border-white/10 rounded-3xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-purple-400 mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black hover:scale-105 transition"
        >
          Order via Telegram
        </a>
      </motion.div>
    </div>
  );
}

// ── Products ─────────────────────────────
const products = [
  {
    title: "Fresh Yahoo Accounts",
    price: "$4.00",
    desc: "New Yahoo accounts with clean IP and no previous activity.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    stock: "4K+ Available",
    badge: "Fresh",
  },
  {
    title: "Aged Yahoo Accounts",
    price: "$12.00",
    desc: "Old Yahoo accounts with trusted activity history.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    stock: "1.8K+ Available",
    badge: "Best Seller",
  },
  {
    title: "Verified Yahoo Accounts",
    price: "$28.00",
    desc: "Phone verified Yahoo accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
    stock: "900+ Available",
    badge: "Verified",
  },
  {
    title: "Bulk Yahoo Package",
    price: "$180",
    desc: "Bulk Yahoo accounts for marketing & automation use.",
    img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function YahooAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07152d] via-[#050816] to-[#08111f]" />
        <div className="absolute inset-0 bg-[radial-gradient(#a855f730_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Yahoo Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              High quality Yahoo accounts with secure login, instant delivery
              and trusted verification.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-purple-400" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-indigo-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-purple-300" />
              Secure Access
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                {/* badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
                  {item.badge}
                </div>

                {/* image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                </div>

                {/* con */}
                <div className="p-6">
                  <h3 className="text-xl font-black flex items-center gap-2">
                    <Mail className="text-purple-400" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-purple-400 font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {["Instant Delivery", "Secure Login", "High Quality"].map(
                      (f, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <Check className="w-4 h-4 text-purple-400" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black">{item.price}</div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-purple-500/10 to-indigo-500/10" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm pb-20">
            Yahoo accounts are delivered instantly • 24/7 support • Secure
            access guaranteed
          </div>

          {/* Content */}

          <section className="space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When it comes to reliability, longevity, and high deliverability,
              Yahoo Mail remains a top choice for marketers worldwide. However,
              creating hundreds or thousands of Yahoo accounts manually is
              practically impossible due to strict phone verification (PVA)
              systems, IP tracking, and anti-spam algorithms. This is where the
              strategy to buy verified Yahoo accounts becomes a game-changer.
            </p>

            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-3">
                What are Verified Yahoo Accounts (PVA)?
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                A PVA (Phone Verified Account) Yahoo account is an email address
                created using a unique, dedicated IP address and successfully
                verified using a real phone number. Accounts that successfully
                clear this hurdle are flagged as authentic by Yahoo's security
                systems.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-sm font-semibold text-blue-400 mb-2">
                  Reputable provider accounts usually include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-blue-400">⚡</span> 100% Phone
                    Verification
                  </li>
                  <li className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-blue-400">🌐</span> Unique IP Creation
                  </li>
                  <li className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-blue-400">🛡️</span> Recovery Email
                    Added
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="[https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)"
              alt="Digital marketing analytics and email outreach setup"
              className="w-full h-[320px] object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Why Should You Buy Verified Yahoo Accounts in Bulk?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8">
              Relying on a single account limits your potential and triggers
              automated security bots. Bulk infrastructure unlocks key
              structural advantages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Supercharging Mass Email Marketing",
                  desc: "Distribute your outreach campaign across hundreds of verified Yahoo accounts to safely send large volumes without hitting daily caps or ruining your sender reputation.",
                },
                {
                  title: "Higher Email Deliverability & Inbox Rates",
                  desc: "Verified and Aged Yahoo Accounts have established credibility. They pass through spam filters smoothly, ensuring your pitch lands in the primary inbox.",
                },
                {
                  title: "Business Scaling on Socials & Classifieds",
                  desc: "Establish a massive digital footprint without restrictions on platforms like Facebook, X, Pinterest, and Craigslist that require unique emails.",
                },
                {
                  title: "Cost and Time Efficiency",
                  desc: "Skip the tedious operational nightmare of buying SIM cards, setting up virtual numbers, changing proxies, and registering accounts manually.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/40 hover:border-blue-500/40 transition-colors shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Comparison: Aged Yahoo Accounts vs. Fresh PVA Accounts
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-700/60 shadow-xl">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-slate-300 border-b border-slate-700/60">
                    <th className="p-4 font-semibold">Feature / Metric</th>
                    <th className="p-4 font-semibold">
                      Fresh Yahoo PVA Accounts
                    </th>
                    <th className="p-4 font-semibold">
                      Aged Yahoo Accounts (Old)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/30 text-slate-300">
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">Account Age</td>
                    <td className="p-4">Newly created (0–30 days old)</td>
                    <td className="p-4 text-blue-400">
                      6 months to several years old
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">Trust Score</td>
                    <td className="p-4">Moderate</td>
                    <td className="p-4 text-green-400 font-medium">
                      Exceptionally High
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">
                      Spam Filter Tolerance
                    </td>
                    <td className="p-4">Standard</td>
                    <td className="p-4">Maximum</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">
                      Daily Sending Limit
                    </td>
                    <td className="p-4">Low to moderate (warmup needed)</td>
                    <td className="p-4">High out-of-the-box limits</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">Price Point</td>
                    <td className="p-4">Budget-friendly / Affordable</td>
                    <td className="p-4">Premium pricing</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="p-4 font-medium text-white">
                      Best Used For
                    </td>
                    <td className="p-4">
                      General sign-ups, short-term scraping
                    </td>
                    <td className="p-4 text-slate-200">
                      High-ticket outreach, link building
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Key Benefits of Yahoo Mail
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <strong className="text-white block mb-0.5">
                    Massive User Base & Trust
                  </strong>
                  Messages originating from Yahoo servers carry an inherent
                  trust value, reducing domain blacklisting risks.
                </li>
                <li>
                  <strong className="text-white block mb-0.5">
                    Robust Anti-Spam Compliance
                  </strong>
                  Strict SPF, DKIM, and DMARC system alignment ensures your
                  emails are treated as premium traffic.
                </li>
                <li>
                  <strong className="text-white block mb-0.5">
                    Generous Storage & Clean UI
                  </strong>
                  Vast storage makes it easy to handle large influxes of replies
                  and track metrics seamlessly.
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                How Marketers Leverage Bulk Accounts
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <span className="text-blue-400 font-semibold block">
                    SEO & Link Building
                  </span>
                  Signing up for Web 2.0, niche forums, and directories cleanly
                  without leaving a footprint footprint pattern.
                </li>
                <li>
                  <span className="text-blue-400 font-semibold block">
                    Data Scraping & Research
                  </span>
                  Seamlessly rotating credentials when a single automated
                  scraper triggers platform rate limits.
                </li>
                <li>
                  <span className="text-blue-400 font-semibold block">
                    E-commerce & Brand Reviews
                  </span>
                  Organically managing client support channels and monitoring
                  competitors across Amazon, Shopify, or eBay.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-red-950/20 border border-red-900/40 rounded-2xl p-6 shadow-xl">
            <div className="flex gap-3 items-start">
              <span className="text-red-400 text-xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">
                  The Risks of Buying Cheap, Unverified Accounts
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Avoid non-PVA accounts created by automated bots using
                  low-quality public scripts. These accounts lack unique IP
                  assignments and are usually banned by Yahoo within 24 to 48
                  hours.
                </p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Mass Suspensions across matching data center subnets.</li>
                  <li>
                    Frequent, broken security prompts during log-in phases.
                  </li>
                  <li>
                    Data Vulnerability due to fraudulent reselling of identical
                    batches.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="[https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80)"
              alt="Secure network proxy management setup"
              className="w-full h-[300px] object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              What to Look for When Choosing a Vendor
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Full Login Credentials",
                  desc: "A reliable vendor delivers details in clean CSV/Excel format including email, password, PVA status, and recovery email data.",
                },
                {
                  step: "02",
                  title: "Replacement & Refund Guarantees",
                  desc: "Choose providers offering a clear 48 to 72-hour warranty period to check integration integrity before deployment.",
                },
                {
                  step: "03",
                  title: "Residential Proxy Creation",
                  desc: "Verify accounts are registered via dedicated residential/mobile proxies to properly simulate natural human sign-ups.",
                },
                {
                  step: "04",
                  title: "Secure Payment Gateways",
                  desc: "Ensure checkout pathways use encrypted SSL checkouts alongside protected methods like PayPal or Crypto options.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex gap-4"
                >
                  <span className="text-2xl font-black text-blue-500/60 tracking-wider">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Best Practices: How to Safely Use Purchased Yahoo Accounts
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              How you log in and maintain your assets determines their
              longevity. Follow this core framework:
            </p>

            <div className="space-y-6 relative border-l-2 border-slate-700 pl-4 sm:pl-6 ml-2">
              {[
                {
                  label: "Step 1: Use High-Quality Proxies",
                  text: "Never log into multiple accounts from a single IP. Use high-quality HTTP or SOCKS5 residential/mobile proxies. Maximize 2–3 accounts per proxy IP.",
                },
                {
                  label: "Step 2: Utilize Anti-Detect Browsers",
                  text: "Standard environments leak browser profiles. Use dedicated systems like Multilogin, AdsPower, or Dolphin{anty} to create clean isolated profiles.",
                },
                {
                  label: "Step 3: Warm Up Accounts Gradually",
                  text: "Scale safely. Days 1-3: browse articles, send 1-2 testing emails. Days 4-7: ramp to 5-10 daily emails. Week 2+: scale up to targeted production workflows.",
                },
                {
                  label: "Step 4: Keep Recovery Data Accessible",
                  text: "Maintain secure offline access to spreadsheets. If security flags check location changes, pass validation hurdles using the recovery email parameters.",
                },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-1 bg-blue-500 w-3 h-3 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {step.label}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Are these Yahoo accounts safe for long-term marketing?",
                  a: "Yes. As long as you purchase Phone Verified Accounts (PVA) created via unique residential IPs and manage them using dedicated proxies and anti-detect browsers, they can be used for years.",
                },
                {
                  q: "Can I change the passwords after purchasing?",
                  a: "Absolutely. In fact, it is highly recommended to change the account passwords and recovery details immediately after the delivery warranty period ends to ensure total, exclusive ownership.",
                },
                {
                  q: "What is the delivery turnaround time for bulk orders?",
                  a: "For standard packages (50–500 accounts), top-tier vendors offer instant automated delivery via email or dashboard download. Custom large-scale orders might take 12 to 24 hours.",
                },
                {
                  q: "Is it legal to buy verified Yahoo accounts?",
                  a: "Buying accounts does not violate any local laws; however, it does go against the standard Terms of Service (ToS) of major tech platforms. Proper proxy management and human-like warming techniques are essential.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 p-5 rounded-xl border border-slate-800/80"
                >
                  <h4 className="font-semibold text-white text-sm sm:text-base flex items-center gap-2 mb-1">
                    <span className="text-blue-400">Q.</span> {faq.q}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm pl-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
            <h4 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
              Target SEO Optimization Matrix:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "how to create Yahoo account",
                "Yahoo login",
                "recover Yahoo password",
                "buy verified yahoo accounts",
                "bulk yahoo pva accounts",
                "aged yahoo accounts",
                "Yahoo security tips",
                "secure Yahoo account",
                "Yahoo features",
                "Yahoo account recovery",
                "Yahoo sign in",
              ].map((keyword, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/40"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </section>

          <footer className="text-center pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">
              Conclusion: Scale Your Outreach with Confidence
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Investing in bulk digital assets is the fastest way to break past
              technical limitations and aggressively scale your online
              marketing, lead generation, and brand visibility. Partner with a
              trusted, professional provider, choose aged or PVA packages
              tailored to your specific campaign roadmap, and execute your
              digital outreach with absolute confidence.
            </p>
          </footer>
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
