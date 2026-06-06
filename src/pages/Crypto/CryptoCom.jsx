import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHexagon as CryptoIcon,
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
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0d1b2e] border border-[#002D72]/40 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#1E90FF]/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-[#1E90FF] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#0066cc] text-white font-black hover:scale-105 transition duration-300"
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
    title: "Fresh Crypto.com Accounts",
    price: "$35.00",
    desc: "Freshly created Crypto.com accounts with app access and clean history.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
    stock: "2.5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Crypto.com Accounts",
    price: "$100.00",
    desc: "Trusted aged Crypto.com accounts with staking history and rewards.",
    img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
    stock: "1.1K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Crypto.com Accounts",
    price: "$200.00",
    desc: "Fully KYC verified Crypto.com accounts with card ordering eligibility.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
    stock: "600 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Crypto.com Package",
    price: "$1400",
    desc: "Bulk Crypto.com accounts package for agencies & crypto businesses.",
    img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function CryptoComAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#001029] via-[#050816] to-[#001029]"
        />

        {/* Animated Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(#1E90FF30_1px,transparent_1px)] bg-[length:60px_60px]"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-black leading-tight">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#1E90FF] to-[#63b3ff] bg-clip-text text-transparent">
                Crypto.com Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Crypto.com accounts with full app access, instant
              delivery and trusted authenticity.
            </p>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400"
          >
            <div className="flex items-center gap-3">
              <Shield className="text-[#1E90FF]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#63b3ff]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#99ccff]" />
              Secure Access
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl shadow-black/20"
              >
                {/* badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#1E90FF]/20 text-[#63b3ff] text-xs font-bold"
                >
                  {item.badge}
                </motion.div>

                {/* image */}
                <div className="h-52 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6 }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                </div>

                {/* content */}
                <div className="p-6">
                  <h3 className="text-xl font-black flex items-center gap-2">
                    <CryptoIcon className="text-[#1E90FF]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#1E90FF] font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {["Instant Delivery", "App Access", "High Quality"].map(
                      (f, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.5 + idx * 0.1 + i * 0.1,
                          }}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <Check className="w-4 h-4 text-[#1E90FF]" />
                          {f}
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#1E90FF]">
                      {item.price}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#0066cc] text-white text-xs font-black uppercase transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </motion.button>
                  </div>
                </div>

                {/* Crypto.com Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#1E90FF]/20 to-[#63b3ff]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#1E90FF]/0 group-hover:border-[#1E90FF]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-24 text-center text-gray-400 text-sm"
          >
            All Crypto.com accounts are tested • Instant delivery • 24/7 support
          </motion.div>

          {/* Content */}

          <div className="text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Title Header */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Buy Verified Crypto.com Accounts: Maximize Your Crypto
                  Trading, Staking, and Global Payouts with AllPVAUSA
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In the fast-moving cryptocurrency ecosystem, agility and
                    security are the two defining factors of a successful
                    digital operation. For institutional traders, e-commerce
                    merchants, digital agencies, and affiliate marketers,
                    utilizing high-tier crypto exchanges is essential to manage
                    global payments and maintain portfolio liquidity. Among the
                    top global platforms, Crypto.com has established itself as
                    an absolute powerhouse—offering robust mobile trading,
                    premium Visa debit cards, high-yield crypto staking, and
                    deep institutional liquidity.
                  </p>
                  <p>
                    However, operating efficiently on Crypto.com has become
                    highly challenging due to strict regulatory frameworks. To
                    comply with international anti-money laundering (AML) laws,
                    Crypto.com enforces a rigorous KYC (Know Your Customer)
                    verification process. This includes submitting biometric
                    face scans, real-time handwriting verifications, and strict
                    government ID checks. For global agencies managing
                    multi-account networks or remote teams facing regional
                    platform blocks, these compliance loops can halt daily
                    transactions and freeze business cash flows.
                  </p>
                  <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-lg">
                    To eliminate these operational delays and secure an instant
                    financial footprint, smart digital entrepreneurs choose to
                    buy verified Crypto.com accounts.
                  </p>
                  <p>
                    At AllPVAUSA, we provide premium, fully identity-verified,
                    and completely stable Crypto.com accounts designed to
                    streamline your digital transactions. In this definitive
                    guide, we will break down why purchasing high-trust
                    Crypto.com profiles is a game-changer for your workflow and
                    why AllPVAUSA is the premier choice for secure digital
                    assets.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=400&q=80"
                    alt="Bitcoin and Cryptocurrency Market Analysis"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&w=400&q=80"
                    alt="Financial Data Graph"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What are Verified Crypto.com Accounts? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What are Verified Crypto.com Accounts?
                </h2>
                <p className="text-neutral-400">
                  A basic, unverified profile on Crypto.com cannot participate
                  in active trading or handle fiat deposits. To unlock the full
                  potential of the platform—including high daily withdrawal
                  ceilings and advanced trading features—an account must possess
                  an elite compliance score.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      100% Fully Identity-Verified (KYC Passed)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every account has successfully cleared the mandatory
                      government ID scans and biometric facial verification
                      checks, providing instant access to maximum limits.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Phone Verified Accounts (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Fully linked with a unique, dedicated mobile number to
                      prevent immediate security loops or phone re-verification
                      triggers during login.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Complete Credentials &amp; Ownership Handover
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Your delivery package includes the exact platform
                      username, secure password, 2FA backup configurations
                      (Google Authenticator), and exclusive access to the
                      original registration email.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Clean Residential Footprint
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Registered and nurtured using fresh, non-blacklisted
                      residential proxy networks to ensure maximum structural
                      durability upon handover.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Strategic Advantages */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Strategic Advantages of Buying Crypto.com Accounts from
                  AllPVAUSA
                </h2>
                <p className="text-neutral-400">
                  Relying on a single personal exchange account is a massive
                  operational bottleneck for a scaling digital brand. Securing
                  verified Crypto.com assets from AllPVAUSA protects your
                  operations and unlocks several strategic benefits:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. Instant Access to High-Limit Fiat Channels
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Unverified accounts face absolute restrictions on moving
                      fiat money (USD, EUR, GBP). Our premium KYC-passed
                      Crypto.com accounts allow you to link banking networks,
                      execute instant ACH/SEPA transfers, and handle high-volume
                      deposits effortlessly. This enables your agency to pay
                      international contractors, settle software bills, or
                      withdraw profits instantly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. Multi-Account Staking &amp; Portfolio Diversification
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Crypto.com offers excellent rewards through its native CRO
                      token staking and "Crypto Earn" features. However, putting
                      all your business assets into a single profile exposes
                      your enterprise to a single point of failure. Distributing
                      your capital, stablecoins, and staking portfolios across
                      multiple verified accounts from AllPVAUSA insulates your
                      main funds and optimizes your yield-generation strategies
                      safely.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                      alt="Digital Capital Investment and Management"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Seamless Integration with Crypto.com Visa
                      Infrastructure
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      The Crypto.com prepaid Visa card is an incredible asset
                      for digital marketers who need to fund massive ad spend on
                      Meta, Google, and TikTok Ads. By managing an organized
                      pool of verified accounts, your team can access distinct
                      virtual or physical spending limits, ensuring your
                      marketing campaigns never hit sudden payment blocks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Bypassing Stringent Regional Restrictions
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Crypto.com modifies its available feature sets, trading
                      pairs, and staking options based on the user's geographic
                      location. If your business operates globally but your team
                      is based in a heavily restricted territory, purchasing an
                      account pre-mapped to a crypto-friendly jurisdiction
                      allows you to access full spot-trading asset pools without
                      technical friction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Comparison Table */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Technical Comparison: AllPVAUSA Accounts vs. Low-Grade Market
                  Alternatives
                </h2>
                <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-slate-800/50/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs font-semibold text-neutral-400 uppercase">
                        <th className="p-4">Performance Metric</th>
                        <th className="p-4 text-blue-400">
                          Premium AllPVAUSA Crypto.com Accounts
                        </th>
                        <th className="p-4">
                          Cheap, Script-Generated Profiles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Verification Status
                        </td>
                        <td className="p-4">
                          100% Fully Identity Verified (KYC Passed)
                        </td>
                        <td className="p-4 text-neutral-500">
                          Unverified or bypassed using temporary edits
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          IP History
                        </td>
                        <td className="p-4">
                          Individual, clean residential/mobile IPs
                        </td>
                        <td className="p-4 text-neutral-500">
                          Shared, blacklisted data center proxy ranges
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Security Packages
                        </td>
                        <td className="p-4">
                          Includes Account + Mail + 2FA Secret Keys
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Missing original email or 2FA backup data
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Account Durability
                        </td>
                        <td className="p-4">
                          High tolerance for immediate deposits/trades
                        </td>
                        <td className="p-4 text-neutral-500">
                          Permanently banned or frozen on the first login
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Protection
                        </td>
                        <td className="p-4 text-blue-400">
                          24/7 Dedicated Support &amp; Replacement Windows
                        </td>
                        <td className="p-4 text-neutral-500">
                          No after-sales service / Ghost vendors
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Operational Blueprint */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Operational Blueprint: How to Safely Manage Multiple
                  Crypto.com Accounts
                </h2>
                <p className="text-neutral-400">
                  To preserve the exceptional trust scores of your newly
                  purchased Crypto.com accounts and permanently secure your
                  capital, your team must practice flawless digital hygiene:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 1: Deploy a Dedicated Anti-Detect Browser
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Never log into multiple separate financial accounts
                        using a standard browser window or standard mobile apps
                        on the same device. Use advanced software tools like
                        AdsPower, Multilogin, or Dolphin{"{anty}"} to sandbox
                        every account into its own isolated virtual device.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 2: Bind to Premium Static Residential Proxies
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Because Crypto.com continuously monitors access
                        locations, connecting from an inconsistent or
                        international IP will trigger an instant security
                        freeze. Pair every virtual browser profile with a
                        premium, high-quality SOCKS5 static residential proxy
                        matching the native KYC profile data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 3: Secure Your 2FA Authentication Setup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Upon receiving your account delivery data, immediately
                        import the provided 2FA secret key into your Google
                        Authenticator or an offline key manager. This allows
                        your team to independently generate dynamic access codes
                        required for transactions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 4: Execute a Natural Capital Warmup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Do not instantly transfer major funds on day one. Treat
                        the account with a realistic human pacing: log in via
                        2FA and browse the dashboard on day 1, execute a small
                        test deposit on days 2–3, and then gradually scale up
                        your allocations.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=500&q=80"
                      alt="Cybersecurity and Account Security Protocol"
                      className="w-full h-80 object-cover rounded-xl border border-neutral-800"
                    />
                  </div>
                </div>
              </section>

              {/* Section 5: FAQs */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Can I modify the security settings and passwords after
                      purchase?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, absolutely. Once you have logged into the account
                      securely and allowed it to stabilize on your dedicated
                      proxy network for 48 to 72 hours, you can comfortably
                      update the login passwords and secure your recovery
                      details to ensure 100% private, exclusive ownership.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Why does AllPVAUSA include the original email (OG Email)
                      with every package?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Providing the original creation email ensures total
                      security. Since many automated platform confirmations or
                      password reset requests route directly through the
                      registered email address, having full access to that inbox
                      guarantees you maintain complete, absolute control over
                      your Crypto.com account.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      What kind of customer warranty does AllPVAUSA offer?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      At AllPVAUSA, business continuity and customer trust are
                      our core pillars. Every digital asset package comes backed
                      by a definitive replacement warranty window. If you
                      encounter a login issue or find a delivery defect straight
                      out of the box, simply reach out to our 24/7 technical
                      support team, and we will issue a fresh replacement
                      immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* Outro / Call to Action */}
              <section className="p-6 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Take Control of Your Global Crypto Infrastructure Today!
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Don't let endless verification queues, strict regional limits,
                  or sudden identity verification loops stall your
                  cryptocurrency trading strategies, portfolio staking, or
                  global corporate payouts.
                </p>
                <div>
                  <a
                    href="https://t.me/allpvausa"
                    className="inline-block bg-white text-black font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-neutral-200 transition duration-200"
                  >
                    Connect Now
                  </a>
                </div>
              </section>
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
