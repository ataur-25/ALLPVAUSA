import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFacebook as Facebook,
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
    title: "Fresh Facebook Accounts",
    price: "$8.00",
    desc: "Freshly created Facebook accounts with secure login access.",
    img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200",
    stock: "5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Facebook Accounts",
    price: "$20.00",
    desc: "Old Facebook accounts with trusted activity history.",
    img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200",
    stock: "2K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Facebook Accounts",
    price: "$45.00",
    desc: "Phone & email verified Facebook accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200",
    stock: "1.1K In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Facebook Account Package",
    price: "$300",
    desc: "Bulk Facebook accounts for agencies, marketing & automation.",
    img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function FacebookAccounts() {
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
                Facebook Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              High quality Facebook accounts with secure access, instant
              delivery and trusted authenticity.
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
                    <Facebook className="text-sky-400" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-sky-400 font-bold text-sm">
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
                          <Check className="w-4 h-4 text-sky-400" />
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
            All Facebook accounts are tested • Instant delivery • 24/7 support
          </div>

          <div className="text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header Section */}
              <header className="border-b border-zinc-800 pb-8 space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  The Ultimate Guide to Buy Verified Facebook Accounts: Scale
                  Your Ads, Marketplace, and Social Marketing
                </h1>
                <p className="text-lg text-white leading-relaxed pt-4">
                  In the digital marketing world, Facebook remains an absolute
                  powerhouse. With billions of active users, it is the go-to
                  platform for businesses, e-commerce brands, and affiliate
                  marketers looking to generate leads, drive traffic, and
                  maximize revenue. Whether you are running complex Meta ad
                  campaigns, scaling your dropshipping business via Facebook
                  Marketplace, or managing viral social media groups, your
                  operational success depends on one major factor: your digital
                  assets.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  However, anyone who has spent time running ads on Meta knows
                  how incredibly strict the platform has become. Facebook’s
                  automated security bots routinely flag new profiles, disable
                  Business Managers (BM), and ban advertising access without
                  warning. For serious marketers, creating new accounts manually
                  is no longer a viable option due to mandatory identity
                  verification, IP tracking, and instant algorithmic flags.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  This is exactly why smart digital marketers and agencies
                  choose to buy verified Facebook accounts. Purchasing
                  high-quality, pre-verified, and aged profiles is the most
                  effective way to bypass technical restrictions, build
                  structural stability into your marketing loop, and ensure your
                  business never faces unexpected downtime.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  In this ultimate, comprehensive guide, we will explore why
                  purchasing phone-verified and identity-verified Facebook
                  accounts is essential for your business, how it can safeguard
                  your ad spend, and what you must look for to avoid scams and
                  protect your brand infrastructure.
                </p>
              </header>

              {/* Section 1 */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  What are Verified Facebook Accounts?
                </h2>
                <p className="text-white leading-relaxed">
                  Not all Facebook profiles are built the same. When looking to
                  purchase digital assets, you will encounter different types of
                  profiles tailored for specific use cases. Understanding these
                  differences ensures you get the exact tool for your marketing
                  needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      PVA Facebook Accounts (Phone Verified Accounts)
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      These profiles are created using unique IP configurations
                      and are fully verified via SMS with a dedicated, real
                      phone number. This prevents immediate security checks upon
                      login.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      ID Verified Facebook Accounts (Reinstated Profiles)
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      These are premium, high-trust assets. The original owners
                      or creators have already submitted a government-issued ID
                      (like a driver's license or passport) to Meta to clear an
                      advertising restriction. Because they have passed manual
                      human verification, Meta’s bots grant them maximum trust,
                      making them nearly immune to immediate bans.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Aged Facebook Accounts
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      These are accounts created months or years ago with an
                      active history, realistic timelines, and natural
                      engagement footprints.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Business Manager (BM) Ready Accounts
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      Profiles that come pre-linked with verified or
                      unlimited-spending Business Manager structures, allowing
                      you to launch high-budget ad campaigns instantly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  Why Should You Buy Verified Facebook Accounts in Bulk?
                </h2>
                <p className="text-white leading-relaxed">
                  If you run an online brand, relying on a single personal
                  Facebook profile is a massive operational risk. If your
                  primary account gets flagged, your entire sales pipeline stops
                  immediately. Buying bulk verified accounts provides a
                  structural safety net and unlocks several scaling advantages:
                </p>
                <div className="space-y-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      1. Uninterrupted Meta Ad Campaigns
                    </h4>
                    <p className="text-white leading-relaxed pl-4">
                      Meta's advertising algorithm uses strict, automated
                      patterns. If an ad account gets flagged for a minor policy
                      misunderstanding, it can pull down the connected profile.
                      By purchasing multiple verified Facebook accounts, you can
                      distribute your pixel data, backup your custom audiences,
                      and deploy campaigns across separate, isolated profiles.
                      If one goes down, your backup account takes over
                      instantly, maintaining a steady flow of leads and sales.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      2. High Trust Scores for Scaling Ad Spend
                    </h4>
                    <p className="text-white leading-relaxed pl-4">
                      Brand-new accounts have zero credibility in Meta's
                      network. If you create a fresh profile today and try to
                      spend $500 on ads tomorrow, the platform will lock the
                      account for suspicious activity. Verified and Aged
                      Facebook Accounts possess historical trust. They smoothly
                      pass initial compliance algorithms, allowing you to warm
                      up ad budgets faster and unlock higher daily spending
                      limits without triggering verification holds.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      3. Dominating Facebook Marketplace & Dropshipping
                    </h4>
                    <p className="text-white leading-relaxed pl-4">
                      Facebook Marketplace and Buy-and-Sell groups are goldmines
                      for local e-commerce, real estate, and dropshipping.
                      However, Facebook limits the number of listings a single
                      account can publish per day and restricts listing
                      visibility to specific geographic radiuses. Buying bulk
                      verified Facebook profiles allows you to position listings
                      across multiple accounts, targeting different cities and
                      expanding your organic reach exponentially.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      4. Efficient Group and Page Management
                    </h4>
                    <p className="text-white leading-relaxed pl-4">
                      Building an authoritative brand community requires active
                      moderation and engagement. Using multiple authentic
                      profiles allows agencies to manage large Facebook Groups,
                      interact natively with customers in comment sections, and
                      cross-promote brand pages without triggering automated
                      "spammy behavior" flags from a single admin account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 - Table */}
              <section className="space-y-6 overflow-x-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  Structural Comparison: Fresh PVA Accounts vs. Aged ID Verified
                  Accounts
                </h2>
                <p className="text-white leading-relaxed">
                  To determine which digital asset aligns with your business
                  objectives, review this functional breakdown:
                </p>
                <table className="min-w-full divide-y divide-zinc-800 border border-zinc-800 mt-4">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                      >
                        Feature / Metric
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                      >
                        Fresh Facebook PVA Accounts
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                      >
                        Aged ID Verified Accounts (Reinstated)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800/50 divide-y divide-zinc-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Account Age
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Newly registered (0–30 days old)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        6 months to 10+ years old
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Identity Verification Status
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Phone verified via SMS
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Government ID submitted & approved by Meta
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Trust and Authority Score
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Moderate
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Exceptionally High
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Ad Account Stability
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Requires careful, slow warmup
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Ready for high-budget campaigns
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Marketplace Access
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Standard limits
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Maximum listing visibility
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Price Point
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Budget-friendly / Scalable
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        Premium tier pricing
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        Best Used For
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        Basic scraping, page likes, group sharing
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        Heavy ad spend, BM management, high-ticket sales
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  The Strategic Value of "Reinstated" ID Verified Profiles
                </h2>
                <p className="text-white leading-relaxed">
                  For professional media buyers, Reinstated Facebook Accounts
                  are the gold standard. When Meta restricts an ordinary
                  advertising account, it requires a submission of real
                  identification documents. Accounts that pass this strict
                  manual review receive a permanent compliance trust badge
                  inside their Account Quality dashboard.
                </p>
                <div className="bg-slate-800/50 border-l-4 border-white p-4 my-4">
                  <p className="text-white italic font-medium">
                    Marketer's Insight: Think of a reinstated ID-verified
                    account as a shield. Because Meta has already verified the
                    profile's identity, the automated filters treat its activity
                    with far less suspicion. This allows you to launch custom
                    audience targeting, test higher-risk landing pages, and
                    scale ad budgets with an unprecedented level of peace of
                    mind.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  The Hidden Risks of Buying Low-Quality, Bot-Generated Accounts
                </h2>
                <p className="text-white leading-relaxed">
                  The digital asset marketplace contains many low-grade vendors
                  selling mass-produced, poorly farmed accounts for unusually
                  cheap prices. Buying these accounts can heavily compromise
                  your marketing workflows.
                </p>
                <div className="space-y-4 pl-4">
                  <p className="text-white">
                    <strong className="text-white">
                      Script-Generated Bulk Accounts:
                    </strong>{" "}
                    Accounts created in mass batches using automated
                    registration scripts on identical data center IP ranges.
                    Meta detects these footprints effortlessly, resulting in an
                    immediate sweep that deletes the entire batch within days.
                  </p>
                  <p className="text-white">
                    <strong className="text-white">
                      Hacked or Stolen Profiles:
                    </strong>{" "}
                    Some fraudulent vendors sell cracked accounts taken from
                    real users without authorization. This is highly unethical,
                    completely illegal, and a major security threat. The
                    original owner will eventually recover the account, causing
                    you to lose all connected business managers and pixel data.
                    Always ensure you are buying legitimately created, farmed,
                    or ethically sourced business assets.
                  </p>
                  <p className="text-white">
                    <strong className="text-white">
                      Accounts Lacking Cookie History:
                    </strong>{" "}
                    If an account has zero browsing history or cookies, logging
                    into it from a new location instantly triggers an automated
                    security lockout.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  What to Look for When Choosing a Vendor to Buy Facebook
                  Accounts
                </h2>
                <p className="text-white leading-relaxed">
                  To maximize your operational security and protect your
                  marketing investments, verify that your provider meets these
                  strict standards:
                </p>
                <div className="space-y-6 pt-2 pl-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      1. Delivery of Comprehensive Account Data
                    </h4>
                    <p className="text-white leading-relaxed">
                      A reliable, professional asset vendor will deliver your
                      purchased bulk accounts in a secure spreadsheet file
                      containing:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2 text-white">
                      <li>The exact Facebook Username and Password</li>
                      <li>
                        The linked Email Address along with its Email Login
                        Password
                      </li>
                      <li>
                        The Two-Factor Authentication (2FA) Secret Key
                        (essential for bypassing security prompts)
                      </li>
                      <li>
                        The account's Date of Birth and Cookie Data (JSON
                        format)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      2. Dedicated 2FA Integration
                    </h4>
                    <p className="text-white leading-relaxed">
                      Never buy an account that does not include 2FA. When you
                      log into a purchased account from a new device or
                      location, Facebook will require an authentication code. By
                      utilizing the provided 2FA secret key in an app like
                      Google Authenticator or a web generator, you can instantly
                      log in without waiting on an external vendor or phone
                      number.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      3. Account Replacement Warranties
                    </h4>
                    <p className="text-white leading-relaxed">
                      Top-tier service providers always offer a definitive
                      warranty window (typically 24 to 48 hours). If an account
                      fails to log in, shows a pre-existing ban, or encounters
                      an issue immediately upon delivery, a reputable provider
                      will swap it out for a clean asset at no additional cost.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  Operational Framework: How to Safely Use Purchased Facebook
                  Accounts
                </h2>
                <p className="text-white leading-relaxed">
                  Securing premium accounts is only the first phase; your login
                  habits and browser setups determine how long those assets
                  remain functional. Follow this step-by-step framework to
                  protect your purchased Facebook profiles from automated
                  platform flags:
                </p>
                <div className="space-y-6 pt-4">
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50 space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Step 1: Utilize Specialized Anti-Detect Browsers
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      Never log into multiple purchased Facebook accounts using
                      standard Chrome or Firefox profiles on your regular
                      operating system. Facebook heavily tracks your canvas
                      fingerprint, WebGL data, media devices, and network MAC
                      addresses. Use specialized anti-detect tools (such as
                      Multilogin, AdsPower, or Dolphin{"{anty}"}). These
                      applications create isolated, unique browser environments
                      for every account, making them look like completely
                      independent physical devices.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50 space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Step 2: Pair Every Account with High-Quality Proxies
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      Never use cheap or free public VPNs. Allocate a premium,
                      dedicated SOCKS5 residential or 4G/5G mobile proxy to each
                      individual Facebook account. Match the location of your
                      proxy to the native country profile of the account you
                      purchased (e.g., if you bought a USA verified account, use
                      a high-trust USA residential proxy).
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50 space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Step 3: Import Cookies Before Logging In
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      If your vendor provides a .json cookie string, import it
                      directly into your anti-detect browser profile before
                      opening the Facebook website. This populates your browser
                      with active web history, tricking Facebook’s security
                      layers into recognizing you as a returning user rather
                      than a suspicious new login.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-6 rounded-lg bg-slate-800/50 space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Step 4: Follow a Gradual Account Warmup Plan
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      Do not buy an account and immediately jump into the Ads
                      Manager to launch a high-budget campaign. Give the account
                      time to adjust to your new network environment:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2 text-white text-sm">
                      <li>
                        <strong>Day 1:</strong> Log in via cookies, look through
                        the newsfeed for 5-10 minutes, like 1 or 2 ordinary
                        posts, and close the browser.
                      </li>
                      <li>
                        <strong>Day 2:</strong> Watch a few Facebook Watch
                        videos, scroll through a couple of groups, and add a
                        minor piece of profile information.
                      </li>
                      <li>
                        <strong>Day 3–4:</strong> Create a basic organic Fan
                        Page or link the account to your target Business Manager
                        as an employee/admin.
                      </li>
                      <li>
                        <strong>Day 5 and beyond:</strong> Launch a low-budget
                        page engagement ad ($2-$5/day) to fully cement the ad
                        account's validity before scaling your primary
                        conversion campaigns.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8 - FAQs */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-white pl-4">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Why do I need a 2FA secret key with my purchased account?
                    </h4>
                    <p className="text-white leading-relaxed">
                      The 2FA secret key allows you to generate dynamic security
                      codes yourself. Because you will be accessing the account
                      from a new device and proxy IP, Facebook will demand a
                      login code. Having the 2FA key allows you to bypass this
                      instantly without needing access to a physical SIM card.
                    </p>
                  </div>
                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Can I run Facebook ads immediately after purchasing a
                      verified profile?
                    </h4>
                    <p className="text-white leading-relaxed">
                      While premium ID-verified (reinstated) accounts are highly
                      resilient, it is always a best practice to follow a 2-3
                      day gentle warmup routine. This allows the account's trust
                      score to sync seamlessly with your new proxy IP address.
                    </p>
                  </div>
                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Is it possible to change the primary login details?
                    </h4>
                    <p className="text-white leading-relaxed">
                      Yes. Once you have logged in securely and warmed the
                      account up for a few days, you can safely update the
                      passwords and link your backup emails to ensure absolute,
                      exclusive ownership over the asset.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Will my accounts get banned if I use the same credit card?
                    </h4>
                    <p className="text-white leading-relaxed">
                      Using a single credit card across dozens of separate ad
                      accounts is a massive risk footprint. If one account gets
                      banned for a severe violation, Meta may blacklist that
                      specific card, causing a chain reaction. Use virtual
                      credit card (VCC) providers to issue a unique, dedicated
                      card number for each business manager asset.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <footer className="border-t border-zinc-800 pt-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Conclusion: Take Control of Your Media Buying Infrastructure
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  In an era of hyper-strict platform moderation, relying on a
                  single ad asset is the fastest way to stall your business
                  growth. When you buy verified Facebook accounts, you are not
                  just acquiring profiles—you are buying operational
                  consistency, stability, and the freedom to scale your brand
                  without fear of sudden bans.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Protect your revenue, protect your ad spend, and stop wasting
                  valuable hours dealing with endless identity verification
                  loops. Partner with an established, premium digital asset
                  provider, invest in identity-verified or high-trust aged
                  packages, and construct a bulletproof multi-account framework
                  built for long-term marketing success.
                </p>
                <p className="text-xl font-bold text-white pt-4 text-center border border-zinc-800 p-4 rounded-lg bg-slate-800/50">
                  Secure your verified marketing assets today and scale your
                  brand with total confidence!
                </p>
              </footer>
            </div>
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
