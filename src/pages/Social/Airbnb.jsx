import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHome as Airbnb,
  FiShield as Shield,
  FiClock as Clock,
  FiAward as Award,
  FiCheck as Check,
  FiShoppingCart as ShoppingCart,
} from "react-icons/fi";

// ── Purchase Modal ─────────────────────────────
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

        <div className="text-3xl font-black text-[#FF5A5F] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#FF5A5F] to-[#ff385c] text-white font-black hover:scale-105 transition"
        >
          Order Now
        </a>
      </motion.div>
    </div>
  );
}

// ── Products ─────────────────────────────
const products = [
  {
    title: "Fresh Airbnb Accounts",
    price: "$20.00",
    desc: "Freshly created Airbnb accounts with secure login access.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg?q=80&w=1200",
    stock: "3K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Airbnb Accounts",
    price: "$55.00",
    desc: "Trusted aged Airbnb accounts with booking history.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
    stock: "1.4K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Airbnb Accounts",
    price: "$95.00",
    desc: "Fully verified Airbnb accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200",
    stock: "850 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Airbnb Account Package",
    price: "$650",
    desc: "Bulk Airbnb accounts package for agencies & travel businesses.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function AirbnbAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d12] via-[#050816] to-[#12070a]" />

        {/* Airbnb Color Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#FF5A5F30_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#FF5A5F] to-[#ff385c] bg-clip-text text-transparent">
                Airbnb Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Airbnb accounts with secure access, instant
              delivery and trusted authenticity.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-[#FF5A5F]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#ff7b7f]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#ff9ca0]" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#FF5A5F]/20 text-[#FFB3B5] text-xs font-bold">
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

                {/* content */}
                <div className="p-6">
                  <h3 className="text-xl font-black flex items-center gap-2">
                    <Airbnb className="text-[#FF5A5F]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#FF5A5F] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#FF5A5F]" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#FF5A5F]">
                      {item.price}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FF5A5F] to-[#ff385c] text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* Airbnb Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#FF5A5F]/20 to-[#ff385c]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#FF5A5F]/0 group-hover:border-[#FF5A5F]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Airbnb accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}

          <header className="max-w-5xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              The Definitive Guide to Buy Verified Airbnb Accounts: Scale Your
              Hosting and Travel Business Safely with AllPVAUSA
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The global travel and hospitality industry is experiencing an
              unprecedented boom. Whether you are an ambitious property manager
              looking to expand your vacation rental empire, a digital marketer
              running specialized travel agency campaigns, or an automated data
              scraper collecting hospitality market insights, Airbnb is the
              ultimate goldmine. With millions of active listings and travelers
              worldwide, it is the undisputed king of short-term rentals.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              However, scaling operations on Airbnb has become incredibly
              challenging due to strict verification protocols. Meta-level
              security bots, strict identity verifications (ID checks), phone
              verification barriers, and sudden IP flags mean that manually
              creating multiple profiles can result in instant locks or
              permanent bans. If you are a host, a single unfair guest review or
              algorithmic flag can shut down your entire income stream
              overnight.
            </p>
            <p className="text-lg text-slate-200 font-semibold leading-relaxed">
              To overcome these technical limits and build a resilient business
              model, smart hosts, agencies, and travelers choose to buy verified
              Airbnb accounts. At AllPVAUSA, we provide premium, fully verified,
              high-trust Airbnb accounts (both Host and Guest profiles) to
              ensure your business operations never hit a brick wall.
            </p>
          </header>

          <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Section 1: What are Verified Airbnb Accounts? */}
            <section className="bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                What are Verified Airbnb Accounts?
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                An Airbnb account must pass strict verification filters before
                it is considered a premium, high-trust digital asset. A
                standard, unverified profile cannot safely list properties or
                make high-value reservations. When you purchase a verified
                account package from AllPVAUSA, it comes fully loaded with the
                following security features:
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 font-bold">•</span>
                  <p>
                    <strong className="text-white">
                      PVA Status (Phone Verified Account):
                    </strong>{" "}
                    The profile is linked and verified using a real, dedicated
                    phone number, eliminating immediate SMS verification loops.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 font-bold">•</span>
                  <p>
                    <strong className="text-white">
                      Identity Verified Profile:
                    </strong>{" "}
                    Accounts that have cleared mandatory real ID or selfie
                    verification prompts, granting them a high-trust badge from
                    Airbnb’s security system.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 font-bold">•</span>
                  <p>
                    <strong className="text-white">
                      Email Verified & Secured:
                    </strong>{" "}
                    Fully connected to a private, secure email address (with
                    full login access provided to you).
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 font-bold">•</span>
                  <p>
                    <strong className="text-white">
                      Aged & Fresh Profiles:
                    </strong>{" "}
                    Depending on your strategy, we provide seasoned (aged)
                    accounts with history or fresh, clean PVA profiles ready for
                    deployment.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 2: Why Modern Hospitality Businesses Trust AllPVAUSA */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Why Modern Hospitality Businesses Trust AllPVAUSA to Buy Airbnb
                Accounts
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Operating a modern short-term rental business or travel
                arbitrage model with just one single profile is a dangerous
                strategy. Buying verified, high-quality Airbnb profiles from
                AllPVAUSA provides an immediate safety net and unlocks major
                operational advantages:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    1. Protect Your Host Business from Sudden Bans
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    As a property host, your listings are your livelihood. If a
                    disgruntled guest leaves a false report or an automated
                    system error locks your primary host account, your revenue
                    drops to zero instantly. By securing backup verified Airbnb
                    host accounts from AllPVAUSA, you can cross-list your
                    properties or transition your business seamlessly without
                    losing booking momentum.
                  </p>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    2. Bypass Strict Local Restrictions
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Airbnb often limits how many listings a single host can
                    manage in a specific zip code or city. For property
                    management agencies running corporate housing or rental
                    arbitrage models, buying bulk verified Airbnb profiles
                    allows them to distribute listings across separate accounts,
                    smoothly bypassing regional limitations and dominating local
                    search results.
                  </p>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    3. Smooth Market Research & Scraping
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Travel data is incredibly valuable. If you use automated
                    scripts or scrapers on a single Airbnb account to analyze
                    competitor pricing, amenities, or reviews, Airbnb’s rate
                    limits will flag and ban your profile within minutes. Using
                    a pool of verified PVA accounts from AllPVAUSA allows your
                    data scrapers to rotate credentials naturally and harvest
                    valuable market analytics without interruption.
                  </p>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    4. Effortless High-Volume Guest Booking
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Corporate travel desks and specialized travel agencies often
                    need to book multiple accommodations simultaneously across
                    different global locations. Doing this from a single account
                    triggers automated fraud-prevention holds. Distributing
                    reservations across multiple verified guest accounts ensures
                    smooth check-ins and zero booking disruptions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Performance Comparison Table */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Performance Comparison: AllPVAUSA Accounts vs. Low-Grade
                Competitors
              </h2>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                      <th className="p-4 font-semibold text-white">
                        Operational Feature
                      </th>
                      <th className="p-4 font-semibold text-emerald-400">
                        Premium AllPVAUSA Airbnb Accounts
                      </th>
                      <th className="p-4 font-semibold text-slate-400">
                        Low-Quality Cheap Alternatives
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Verification Method
                      </td>
                      <td className="p-4">
                        Real Phone (PVA) + Full Setup Verification
                      </td>
                      <td className="p-4">
                        Automated Registration Scripts & Fake SIMs
                      </td>
                    </tr>
                    <tr className="bg-slate-900/30">
                      <td className="p-4 font-medium text-white">
                        Security Prompts
                      </td>
                      <td className="p-4">
                        Minimal (Created on premium residential IPs)
                      </td>
                      <td className="p-4">
                        Instant verification blocks on first login
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Delivery File Format
                      </td>
                      <td className="p-4">
                        Complete Excel/CSV with Mail + Phone data
                      </td>
                      <td className="p-4">Missing primary recovery data</td>
                    </tr>
                    <tr className="bg-slate-900/30">
                      <td className="p-4 font-medium text-white">
                        Account Longevity
                      </td>
                      <td className="p-4">
                        High Stability (Built to mimic real human behavior)
                      </td>
                      <td className="p-4">
                        24 to 48 hours lifespan before suspension
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Customer Support
                      </td>
                      <td className="p-4">
                        24/7 Dedicated Support & Fast Replacements
                      </td>
                      <td className="p-4">
                        No after-sales care / Ghost vendors
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Practical Deployment */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Practical Deployment: Host vs. Guest Profiles
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Depending on your specific digital roadmap, AllPVAUSA offers
                  tailored packages to match your exact business demands.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-slate-900 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-white mb-1">
                    Airbnb Host Accounts
                  </h4>
                  <p className="text-sm text-slate-300">
                    Optimized for listing apartments, villas, experiences, and
                    co-hosting setups. These accounts possess a structure
                    optimized for adding payout methods and managing real estate
                    portfolios.
                  </p>
                </div>
                <div className="p-5 bg-slate-900 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-white mb-1">
                    Airbnb Guest Accounts
                  </h4>
                  <p className="text-sm text-slate-300">
                    Tailored for seamless global travel, high-ticket bookings,
                    coupon utilization, reviewing, and localized marketplace
                    interactions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: The Danger of Cheap, Bot-Farmed Profiles */}
            <section className="bg-red-950/20 border border-red-900/50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                The Danger of Cheap, Bot-Farmed Profiles
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                The market is saturated with unreliable vendors selling bulk
                Airbnb profiles for suspiciously low prices. Buying these
                accounts is an operational hazard.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">
                  Important Insight from AllPVAUSA:
                </strong>{" "}
                Cheap profiles are mass-created using automated browser scripts
                on shared data center IP ranges. Airbnb’s advanced AI security
                algorithms instantly flag these server blocks. The moment you
                input your real property details or banking information into a
                bot-farmed account, the system triggers a permanent
                suspension—wasting your time and compromising your sensitive
                data.
              </p>
            </section>

            {/* Section 6: Operational Blueprint */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Operational Blueprint
              </h2>
              <p className="text-slate-400 mb-8">
                How to Safely Manage Multiple Airbnb Accounts
              </p>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Use a Premium Anti-Detect Browser
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Never log into 3 or 4 different Airbnb accounts using
                      standard browser tabs (like regular Chrome or Safari) on
                      the same computer. Airbnb tracks your device’s digital
                      fingerprint, hardware profile, and canvas tracking
                      metrics. Use professional anti-detect software such as
                      AdsPower, Multilogin, or Dolphin{"{anty}"} to isolate each
                      account into its own distinct, virtual computer
                      environment.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Allocate Dedicated Residential Proxies
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Pair every single Airbnb account inside your anti-detect
                      browser with a high-quality SOCKS5 residential or 4G/5G
                      mobile proxy. Never use free or low-tier VPNs. Match your
                      proxy's city/country location to the native profile data
                      of the account you purchased from AllPVAUSA to ensure the
                      automated system detects a completely natural login.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Warm Up the Profile Gradually
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      Do not buy a verified host account and immediately list 5
                      premium properties within the first hour. Treat the asset
                      like a normal human user:
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-400 space-y-1 list-disc list-inside">
                      <li>
                        <strong className="text-white">Day 1:</strong> Log in,
                        browse a few listings in different cities, save
                        properties to a "Wishlist".
                      </li>
                      <li>
                        <strong className="text-white">Day 4:</strong> Set up
                        co-hosting preferences, fine-tune Bio, add listing
                        descriptions gently.
                      </li>
                      <li>
                        <strong className="text-white">Day 5+:</strong> Link
                        verified payout method and comfortably push listings
                        live.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border-b border-slate-800 pb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Can I change the login password and email after purchase?
                  </h4>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Yes, absolutely. Once you have logged into the account
                    securely and allowed it to stabilize on your dedicated proxy
                    network for 48 hours, you can update the passwords and link
                    your backup emails to ensure 100% exclusive, lifetime
                    control over the asset.
                  </p>
                </div>
                <div className="border-b border-slate-800 pb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Does AllPVAUSA provide an active replacement warranty?
                  </h4>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Yes! Customer satisfaction and business safety are our core
                    pillars. We provide a solid replacement warranty window on
                    our account packages. If you face any login issues or
                    delivery defects straight out of the box, our 24/7 technical
                    support team will replace the asset immediately.
                  </p>
                </div>
                <div className="border-b border-slate-800 pb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    What payment methods are accepted on AllPVAUSA?
                  </h4>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    To ensure a secure, fast, and smooth checkout experience, we
                    support a wide range of reliable payment channels, including
                    major Cryptocurrencies, Credit Cards, and secure online
                    payment gateways.
                  </p>
                </div>
                <div className="pb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Should I link the same bank account to multiple Airbnb Host
                    profiles?
                  </h4>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Linking the exact same bank account number to multiple
                    independent host profiles creates a clear operational
                    footprint. If one profile faces an issue, Airbnb may flag
                    all connected accounts. We highly recommend using distinct
                    virtual business accounts or separate merchant sub-accounts
                    for each profile to isolate your revenue streams safely.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Footer Section */}
            <section className="text-center bg-gradient-to-t from-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Scale Your Hospitality Business with Absolute Confidence Today!
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                In the modern short-term rental ecosystem, digital flexibility
                is the ultimate competitive advantage. Don't let strict platform
                rules, accidental algorithmic locks, or unfair reviews pause
                your business growth.
              </p>

              <p className="text-xs text-slate-500 mt-4">
                Secure your business growth with total peace of mind!
              </p>
            </section>
          </main>
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
