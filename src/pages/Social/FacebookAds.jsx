import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp as Ads,
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

        <div className="text-3xl font-black text-sky-400 mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-white font-black hover:scale-105 transition"
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
    title: "Fresh Facebook Ads Accounts",
    price: "$15.00",
    desc: "Fresh Facebook Ads accounts ready for advertising campaigns.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    stock: "4K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Facebook Ads Accounts",
    price: "$40.00",
    desc: "Trusted aged Ads accounts with spending history & stability.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    stock: "1.8K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Business Manager Accounts",
    price: "$85.00",
    desc: "Verified Facebook Business Manager accounts with secure access.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    stock: "700 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Facebook Ads Package",
    price: "$500",
    desc: "Bulk Ads accounts package for agencies & marketing teams.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function FacebookAdsAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07152d] via-[#050816] to-[#08111f]" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf830_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Facebook Ads Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Facebook Ads accounts with secure access, instant
              delivery and trusted performance.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-sky-400" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-cyan-400" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold">
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
                    <Ads className="text-sky-400" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-sky-400 font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {[
                      "Instant Delivery",
                      "Secure Login",
                      "High Spending Limit",
                    ].map((f, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-sky-400" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black">{item.price}</div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-sky-400/10 to-blue-500/10" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Ads accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 py-8 text-white font-sans antialiased leading-relaxed">
            {/* Title Section */}
            <header className="mb-10 text-center md:text-left border-b border-gray-200 pb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                The Definitive Guide to Buy Verified Facebook Ads Accounts:
                Scale Your Marketing and Maximize ROI with AllPVAUSA
              </h1>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Premium Digital Assets & Infrastructure Guide
              </p>
            </header>

            {/* Main Content */}
            <article className="space-y-6 text-white">
              <p>
                In the fast-paced world of digital marketing, running paid
                traffic campaigns is the fastest way to acquire customers, scale
                e-commerce stores, and build multi-million dollar brands. Among
                all digital advertising channels, Meta (Facebook) Ads remains an
                absolute titan, driving billions of dollars in revenue for
                businesses worldwide.
              </p>

              <p>
                However, ask any professional media buyer, dropshipper, or
                agency owner about their biggest headache, and the answer will
                universally be:{" "}
                <span className="font-semibold text-red-600">
                  Meta Account Suspensions
                </span>
                .
              </p>

              <p>
                Facebook’s automated compliance algorithms have become
                incredibly strict. Whether it is a minor policy
                misunderstanding, a sudden shift in your billing location, or
                simply scaling your ad spend too quickly, Meta's bots frequently
                disable ad accounts, restrict Business Managers (BM), and ban
                personal profiles without warning. When your advertising
                infrastructure goes down, your leads stop, your sales drop, and
                your business bleeds money.
              </p>

              <p>
                To bypass these operational roadblocks, top-tier agencies and
                smart independent marketers do not waste weeks trying to create
                or appeal restricted profiles manually. Instead, they choose to
                buy verified Facebook Ads accounts.
              </p>

              <p>
                At AllPVAUSA, we specialize in providing high-trust, elite
                digital assets tailored to keep your advertising campaigns
                running 24/7 without a single second of downtime. In this
                comprehensive guide, we will break down why purchasing premium
                Facebook advertising accounts is a necessity for modern
                businesses, how to deploy them safely, and why AllPVAUSA is the
                global leader in verified account provisioning.
              </p>

              {/* Section 1 */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What Exactly are Verified Facebook Ads Accounts?
                </h2>
                <p className="mb-4">
                  When you look into expanding your media buying infrastructure,
                  it is vital to know that a standard, freshly made personal
                  profile is not optimized for business spending. A high-quality
                  Verified Facebook Ads Account is a multi-layered ecosystem
                  explicitly optimized for heavy media buying.
                </p>
                <p className="mb-4">
                  When you purchase a premium package from AllPVAUSA, you are
                  getting a structurally secure asset that typically includes:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong className="text-gray-900">
                      Identity-Verified (Reinstated) Profiles:
                    </strong>{" "}
                    A high-trust personal profile where real human identities
                    have been submitted to Meta to permanently clear advertising
                    restrictions.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Active Business Manager (BM):
                    </strong>{" "}
                    A fully verified Business Manager (with or without daily
                    spending caps) ready to house your pixels, custom audiences,
                    and pages.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Pre-Warmed Ad Accounts:
                    </strong>{" "}
                    Ad accounts that have cleared preliminary system flags and
                    are structurally ready to accept billing methods and launch
                    high-budget campaigns.
                  </li>
                  <li>
                    <strong className="text-gray-900">2FA Protection:</strong>{" "}
                    Secure two-factor authentication integration to ensure you
                    can log in from any network smoothly without triggering
                    suspicious location prompts.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Media Buyers Trust AllPVAUSA to Buy Facebook Ads Accounts
                </h2>
                <p className="mb-4">
                  Relying on a single personal account for your business is an
                  incredibly risky strategy. If that profile gets flagged, your
                  entire sales pipeline collapses. Purchasing bulk verified ad
                  assets from a reliable platform like AllPVAUSA unlocks massive
                  competitive advantages:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      1. Instant Campaign Redundancy & Stability
                    </h3>
                    <p>
                      Experienced marketers know that you should never have a
                      single point of failure. By setting up a multi-account
                      network via AllPVAUSA, you can distribute your budget
                      across several distinct Facebook Ads accounts. If Meta
                      flags one account due to a competitive ad report or
                      landing page error, your backup accounts remain perfectly
                      operational. Your campaigns continue to generate revenue
                      seamlessly while your team addresses the flag on the
                      primary asset.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      2. High Out-of-the-Box Daily Spending Limits
                    </h3>
                    <p>
                      Fresh, unverified ad accounts usually start with highly
                      restrictive daily spending limits (often capped at $25 to
                      $50 per day). If you are looking to scale a winning
                      product rapidly, this limitation will suffocate your
                      growth. The verified Facebook Ads structures available at
                      AllPVAUSA feature elevated trust scores, allowing you to
                      bypass low limits quickly and spend hundreds or thousands
                      of dollars daily to maximize your conversion windows.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      3. Maximum Resistance to Algorithmic Flags
                    </h3>
                    <p>
                      Meta's automated bots look for footprints. If they see a
                      brand-new profile suddenly launching multiple target
                      campaigns with high budgets, they flag it instantly as
                      suspicious. Our Aged and Identity-Verified Accounts carry
                      historical trust and a legitimate digital footprint. They
                      bypass initial bot-level compliance filters, giving you a
                      smooth, worry-free launch environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      4. Smooth Integration of Virtual Credit Cards (VCCs)
                    </h3>
                    <p>
                      High-quality verified ad accounts handle billing updates
                      far better than fresh profiles. When you connect your
                      corporate payment methods or virtual credit cards to our
                      seasoned ad accounts, Meta's internal fraud filters
                      recognize the profile's high trust score, greatly reducing
                      the risk of a "suspicious payment activity" lockout.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Table / Matrix */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Feature Matrix: AllPVAUSA Account Tiers vs. Standard Market
                  Alternatives
                </h2>
                <p className="mb-4">
                  When it comes to digital assets, quality determines survival.
                  Here is how the premium inventory at AllPVAUSA compares to
                  low-grade, bot-generated alternatives sold elsewhere:
                </p>

                <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-900 font-semibold">
                        <th className="p-3 border-r border-gray-200">
                          Operational Feature
                        </th>
                        <th className="p-3 border-r border-gray-200 bg-blue-50 text-blue-900">
                          Premium AllPVAUSA Ads Accounts
                        </th>
                        <th className="p-3">Low-Quality Cheap Alternatives</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Verification Method
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50">
                          Real Phone (PVA) + Real Government ID Submission
                        </td>
                        <td className="p-3">
                          Automated Registration Scripts / Fake Bots
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Two-Factor Authentication (2FA)
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50">
                          Provided with Full Dynamic Secret Keys
                        </td>
                        <td className="p-3">Missing or Single-Use SMS Only</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Account Longevity
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50">
                          Long-Term (Built with residential proxy footprints)
                        </td>
                        <td className="p-3 text-red-600">
                          Mass Suspensions within 24-48 hours
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Ad Delivery Success Rate
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50 text-emerald-700 font-semibold">
                          Exceptionally High
                        </td>
                        <td className="p-3">
                          Extremely Low (Flags upon first ad submission)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Delivery File Format
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50">
                          Complete Excel/CSV with Cookies, 2FA, and Mail Login
                        </td>
                        <td className="p-3">Only Username and Password</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-900 border-r border-gray-200">
                          Customer Support &amp; Warranty
                        </td>
                        <td className="p-3 border-r border-gray-200 bg-blue-50/50">
                          24/7 Dedicated Support &amp; Solid Replacement Window
                        </td>
                        <td className="p-3 text-gray-400">
                          No Support / Ghost Vendors
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Architecture Diagram */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Structural Setup: How Professional Agencies Configure Their
                  Buying Network
                </h2>
                <p className="mb-4">
                  To help you get the most out of your purchase from AllPVAUSA,
                  here is a look at how top-tier digital agencies configure
                  their multi-account architectures for maximum protection:
                </p>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm my-4 border border-gray-800 shadow-inner">
                  <pre className="leading-tight">
                    {`                  [ Master Business Manager (BM) ]
                     (Holds Pixels & Data Assets)
                                 |
         +-----------------------+-----------------------+
         |                                               |
[ Agency Ad Account #1 ]               [ Agency Ad Account #2 ]
(Purchased from AllPVAUSA)             (Purchased from AllPVAUSA)
         |                                               |
[ Campaign Batch A ]                    [ Campaign Batch B ]`}
                  </pre>
                </div>

                <p>
                  By keeping your core data assets (pixels, custom lists) safely
                  inside a master data-holding BM and sharing them with separate
                  active ad accounts purchased from AllPVAUSA, you isolate your
                  operational risks perfectly. If one active ad account runs
                  into a policy issue, your data assets remain completely safe
                  and uncompromised.
                </p>
              </section>

              {/* Section 5: Warning Box */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Avoid the Trap of Cheap, Bot-Generated Accounts
                </h2>
                <p className="mb-4">
                  The internet is flooded with low-grade providers selling
                  mass-produced accounts for a couple of dollars. Buying these
                  assets is a recipe for disaster.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
                  <p className="text-sm text-amber-800 font-semibold mb-1">
                    ⚠️ Industry Warning from AllPVAUSA:
                  </p>
                  <p className="text-sm text-amber-700">
                    Automated scripts create thousands of accounts
                    simultaneously on low-grade data center IP subnets. Meta
                    tracks these server blocks effortlessly. When you log into a
                    poorly farmed account and immediately input your credit
                    card, you are stepping straight into an algorithmic trap
                    that will lead to an immediate, permanent ban.
                  </p>
                </div>

                <p>
                  Furthermore, avoid vendors selling compromised or hacked
                  personal accounts. These profiles are highly illegal,
                  unethical, and a ticking time bomb—the original owner will
                  change the password eventually, locking you out of all your
                  active campaign budgets. At AllPVAUSA, all our accounts are
                  legitimately created, verified, and safely farmed specifically
                  for professional business operations.
                </p>
              </section>

              {/* Section 6: Steps Framework */}
              <section className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Best Practices: How to Safely Log In and Manage Your Purchased
                  Ad Accounts
                </h2>
                <p className="mb-4">
                  Securing a high-trust asset is only half the battle; the way
                  your team accesses and interacts with the account dictates its
                  lifespan. Follow our official operational framework to ensure
                  your accounts stay fully active:
                </p>

                <div className="space-y-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-gray-950 mb-1">
                        Deploy Anti-Detect Browsers
                      </h4>
                      <p className="text-sm">
                        Never log into multiple Facebook advertising profiles
                        using a standard, plain browser like your everyday
                        Chrome or Safari. Meta reads your machine's hardware
                        signatures, canvas fingerprints, and local device
                        configurations. Use premium anti-detect browsers like
                        Multilogin, AdsPower, or{" "}
                        <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-red-600">
                          {"Dolphin{anty}"}
                        </span>
                        . These tools generate completely distinct virtual
                        browser environments, simulating completely different
                        physical computers for each account.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-gray-950 mb-1">
                        Use Premium Dedicated Proxies
                      </h4>
                      <p className="text-sm">
                        Pair each profile inside your anti-detect browser with a
                        high-quality SOCKS5 residential or 4G/5G mobile proxy.
                        Never use free or public VPN services. Ensure the
                        location of the proxy matches the native country of the
                        account you ordered from AllPVAUSA (for instance, use a
                        premium US proxy for a US identity-verified account) to
                        keep Meta’s security bots completely happy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-gray-950 mb-1">
                        Always Import Cookies First
                      </h4>
                      <p className="text-sm">
                        When you purchase an account from us, we provide a
                        complete .json cookie string. Make sure to import these
                        cookies directly into your anti-detect browser profile
                        before you navigate to the Facebook login screen. This
                        fills the browser with realistic web movement history,
                        ensuring Meta recognizes the login as a normal, natural
                        return rather than a suspicious new entry.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-gray-950 mb-1">
                        Follow a Soft Account Warmup Process
                      </h4>
                      <p className="text-sm mb-2">
                        Do not buy an account and try to drop a $1,000/day
                        conversion ad within the first five minutes. Give the
                        account a couple of days to adjust to your proxy
                        network:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm bg-gray-50 p-3 rounded border border-gray-100">
                        <li>
                          <strong className="text-gray-900">Day 1:</strong> Log
                          in using cookies, browse the newsfeed naturally for
                          5-10 minutes, view a few videos, and close the
                          session.
                        </li>
                        <li>
                          <strong className="text-gray-900">Day 2:</strong> Like
                          a few business pages in your target niche and leave a
                          safe comment or two.
                        </li>
                        <li>
                          <strong className="text-gray-900">Day 3:</strong> Link
                          your billing method (ideally a unique Virtual Credit
                          Card) to the account.
                        </li>
                        <li>
                          <strong className="text-gray-900">Day 4:</strong>{" "}
                          Launch a very low-budget page engagement or post-like
                          campaign ($2 to $5/day) to fully lock in the account’s
                          operational compliance before scaling your primary
                          offers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs Accordion / Block */}
              <section className="pt-6 border-t border-gray-100 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-950 mb-2">
                      Why does AllPVAUSA include a 2FA secret key with every
                      account?
                    </h4>
                    <p className="text-sm text-gray-700">
                      The 2FA (Two-Factor Authentication) secret key gives you
                      absolute independence. When you log into the account via a
                      new proxy or device, Facebook will request a login code.
                      Instead of waiting around for an external verification
                      code or SIM card access, you can drop our secret key into
                      an authenticator tool (like Google Authenticator or a web
                      key generator) to instantly get your entry code.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-950 mb-2">
                      Can I change the account's primary email and password?
                    </h4>
                    <p className="text-sm text-gray-700">
                      Yes. Once you have securely logged into the asset and
                      allowed it to settle on your new proxy IP for 48-72 hours,
                      you can absolutely update the security credentials and
                      link your backup emails to ensure 100% exclusive, private
                      ownership over the account.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-950 mb-2">
                      What happens if an account fails to log in right after
                      delivery?
                    </h4>
                    <p className="text-sm text-gray-700">
                      At AllPVAUSA, user experience and business integrity are
                      our highest priorities. We provide a solid replacement
                      warranty window on our account packages. If an asset
                      exhibits any delivery defects or login errors straight out
                      of the box, our 24/7 technical support team will swap it
                      out for a clean, fully functional asset immediately.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-950 mb-2">
                      Should I use the same credit card across all my purchased
                      ad accounts?
                    </h4>
                    <p className="text-sm text-gray-700">
                      We highly advise against using a single payment card
                      across multiple independent ad account structures. If one
                      account faces a policy suspension, Meta may flag or
                      blacklist that specific card number, which could cause a
                      chain reaction across your other assets. For best results,
                      utilize reliable virtual credit card (VCC) providers to
                      issue a clean, separate card number for each unique ad
                      account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion & CTA */}
              <section className="pt-8 text-center bg-blue-50 p-6 rounded-2xl border border-blue-100 my-8">
                <h2 className="text-2xl font-bold text-blue-950 mb-4">
                  Conclusion: Secure Your Marketing Freedom Today with AllPVAUSA
                </h2>
                <p className="text-blue-900 mb-6 max-w-2xl mx-auto">
                  In an environment where digital advertising rules change
                  overnight, relying on a single, fragile advertising account is
                  an unnecessary gamble with your company's revenue. When you
                  buy verified Facebook Ads accounts from a premium provider,
                  you are investing in absolute peace of mind, scalability, and
                  long-term business protection.
                </p>
                <p className="text-blue-900 mb-6 max-w-2xl mx-auto font-medium">
                  Stop letting unexpected suspensions stall your company's
                  growth, break your marketing momentum, or delay your product
                  launches. Build a resilient, high-trust, and completely
                  unshakeable advertising network designed to handle high
                  budgets and aggressive scaling.
                </p>
                <p className="text-sm text-blue-950 font-semibold mb-4">
                  Partner with the most trusted name in digital asset
                  provisioning. Explore our premium inventory of aged, PVA, and
                  identity-verified accounts, and take absolute control over
                  your marketing destiny today.
                </p>

                <div className="mt-6">
                  <a
                    href="https://allpvausa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition duration-200 transform hover:-translate-y-0.5 text-md"
                  >
                    Visit AllPVAUSA Now &amp; Secure Your Accounts
                  </a>
                </div>
              </section>
            </article>
          </div>
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
