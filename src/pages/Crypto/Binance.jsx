import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp as Binance,
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
        className="bg-[#0d1b2e] border border-[#F3BA2F]/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#F3BA2F]/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-[#F3BA2F] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#F3BA2F] to-[#d99c00] text-black font-black hover:scale-105 transition duration-300"
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
    title: "Fresh Binance Accounts",
    price: "$30.00",
    desc: "Freshly created Binance accounts with secure login access.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
    stock: "2.8K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Binance Accounts",
    price: "$90.00",
    desc: "Trusted aged Binance accounts with trading activity history.",
    img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
    stock: "1.3K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Binance Accounts",
    price: "$180.00",
    desc: "Fully verified Binance accounts with secure recovery access.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
    stock: "700 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Binance Package",
    price: "$1200",
    desc: "Bulk Binance accounts package for agencies & crypto businesses.",
    img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function BinanceAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a1400] via-[#050816] to-[#1b1200]"
        />

        {/* Animated Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(#F3BA2F30_1px,transparent_1px)] bg-[length:60px_60px]"
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
              <span className="bg-gradient-to-r from-[#F3BA2F] to-[#ffcf4d] bg-clip-text text-transparent">
                Binance Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Binance accounts with secure access, instant
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
              <Shield className="text-[#F3BA2F]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#ffd666]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#ffe8a3]" />
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
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#F3BA2F]/20 text-[#ffe082] text-xs font-bold"
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
                    <Binance className="text-[#F3BA2F]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#F3BA2F] font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {["Instant Delivery", "Secure Login", "High Quality"].map(
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
                          <Check className="w-4 h-4 text-[#F3BA2F]" />
                          {f}
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#F3BA2F]">
                      {item.price}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F3BA2F] to-[#d99c00] text-black text-xs font-black uppercase transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </motion.button>
                  </div>
                </div>

                {/* Binance Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#F3BA2F]/20 to-[#ffcf4d]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#F3BA2F]/0 group-hover:border-[#F3BA2F]/40 transition duration-500" />
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
            All Binance accounts are tested • Instant delivery • 24/7 support
          </motion.div>

          {/* Content */}

          <div className="text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Title Header */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Buy Verified Binance Accounts: Scale Your Crypto Trading and
                  Secure Global Transactions with AllPVAUSA
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In the fast-moving world of digital finance, cryptocurrency
                    has become a primary channel for global B2B payments,
                    e-commerce transactions, and high-yield investments. For
                    digital entrepreneurs, freelancers, affiliate marketers, and
                    agency owners, navigating cross-border payouts requires a
                    highly flexible financial framework. When it comes to
                    liquidity, security, and global reach, Binance stands out as
                    the world’s largest and most trusted cryptocurrency
                    exchange.
                  </p>
                  <p>
                    However, operating at scale on Binance is no longer simple
                    due to strict compliance regulations. Following global
                    anti-money laundering (AML) laws, Binance enforces mandatory
                    KYC (Know Your Customer) verification. Without full identity
                    confirmation, accounts face extremely low withdrawal limits,
                    high transaction friction, or instant account freezes. For
                    global agencies or remote team leaders, waiting through
                    endless verification lines or handling regional restrictions
                    can stall entire business operations.
                  </p>
                  <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-lg">
                    To bypass these operational delays and maintain continuous
                    transaction loops, smart marketers and crypto traders choose
                    to buy verified Binance accounts.
                  </p>
                  <p>
                    At AllPVAUSA, we provide premium, fully identity-verified,
                    and secure Binance accounts designed to keep your business
                    transactions running smoothly. In this ultimate guide, we
                    will look into why purchasing high-trust Binance profiles is
                    an essential move for your workflow and why AllPVAUSA is the
                    global leader in verified digital asset provisioning.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=400&q=80"
                    alt="Cryptocurrency Candlestick Chart"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=400&q=80"
                    alt="Crypto Trading Platform on Smartphone"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What are Verified Binance Accounts? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What are Verified Binance Accounts?
                </h2>
                <p className="text-neutral-400">
                  A basic, unverified Binance profile is highly restricted. To
                  handle high volumes of fiat or cryptocurrency deposits, P2P
                  trading, and instant API withdrawals, an account must clear
                  intensive compliance filters.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Fully Identity-Verified (KYC Passed)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      The account has completed the mandatory real ID and facial
                      verification steps, unlocking maximum daily transaction
                      and withdrawal limits.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Phone Verified (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Fully linked with a unique, dedicated mobile number to
                      eliminate immediate SMS verification blocks during
                      security checkpoints.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Complete Security Handover
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every package includes the exact Binance login
                      credentials, 2FA backup keys (Google Authenticator), and
                      full entry details to the registered creation email.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Clean Proxy Footprint
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Created using dedicated residential IP setups to ensure
                      maximum account longevity and stability upon delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Strategic Advantages */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Strategic Advantages of Buying Binance Accounts from AllPVAUSA
                </h2>
                <p className="text-neutral-400">
                  Relying on a single personal exchange account creates a major
                  bottleneck for a scaling digital brand. Securing verified
                  Binance accounts from AllPVAUSA provides an immediate safety
                  net and unlocks massive structural advantages:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. Unlocked High-Volume Withdrawal and Trading Limits
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Unverified or basic tiers are heavily limited on how much
                      capital they can move daily. Our premium KYC-verified
                      Binance accounts grant you access to high-tier daily
                      withdrawal limits (often up to millions of dollars in
                      crypto). This allows your agency to pay international
                      vendors, settle bulk software invoices, or move trading
                      profits instantly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. Smooth, Multi-Account P2P Trading
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Peer-to-Peer (P2P) trading is an exceptional way to
                      convert crypto into local fiat currency. However,
                      high-volume P2P traders often run into regional limits or
                      unexpected account flags. Distributing your capital
                      exchanges across multiple verified accounts from AllPVAUSA
                      lowers your risk profile, insulates your main funds, and
                      keeps your conversion channels completely active.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
                      alt="Blockchain and Secure Digital Ledger Technology"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Automated API Integration for Trading Bots
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      If your development team or agency uses automated
                      algorithmic trading bots, rate-limiting and account
                      restrictions can ruin your strategy. Operating a network
                      of distinct, verified Binance profiles allows you to
                      distribute your API keys across separate accounts,
                      securing uninterrupted automated data feeds and market
                      execution.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Overcoming Geographic and Regional Restrictions
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Binance restricts or modifies its feature sets depending
                      on the user's home country. If your business operates
                      globally but your team is based in a highly restricted
                      zone, buying a fully verified account mapped to a
                      business-friendly region ensures you can access standard
                      features, high-leverage futures, and complete asset pools
                      without technical friction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Comparison Table */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Technical Comparison: AllPVAUSA Premium Accounts vs.
                  Unverified Bots
                </h2>
                <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-slate-800/50/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs font-semibold text-neutral-400 uppercase">
                        <th className="p-4">Performance Metric</th>
                        <th className="p-4 text-amber-400">
                          Premium AllPVAUSA Binance Accounts
                        </th>
                        <th className="p-4">
                          Cheap, Script-Generated Profiles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          KYC Verification Level
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
                          IP Footprint
                        </td>
                        <td className="p-4">
                          Clean, dedicated Residential IPs
                        </td>
                        <td className="p-4 text-neutral-500">
                          Blacklisted, shared data center proxy pools
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Security Packages
                        </td>
                        <td className="p-4">
                          Includes Login + Mail + 2FA Secret Keys
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Missing backup keys or 2FA data strings
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Transaction Durability
                        </td>
                        <td className="p-4">
                          Built to handle high-volume deposits safely
                        </td>
                        <td className="p-4 text-neutral-500">
                          Frozen or locked immediately on the first trade
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Support
                        </td>
                        <td className="p-4 text-amber-400">
                          24/7 Live Support & Secure Replacement Windows
                        </td>
                        <td className="p-4 text-neutral-500">
                          No after-sales care / Ghost vendors
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Operational Blueprint */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Operational Blueprint: How to Safely Manage Multiple Binance
                  Accounts
                </h2>
                <p className="text-neutral-400">
                  To maintain the high trust score of your purchased Binance
                  account and fully protect your digital capital, your team must
                  execute strict digital safety protocols:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 1: Deploy an Advanced Anti-Detect Browser
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Never log into several separate financial accounts using
                        regular browser tabs. Use specialized browsers like
                        AdsPower, Multilogin, or Dolphin{"{anty}"} to isolate
                        your Binance portal into an entirely unique, sandboxed
                        virtual environment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 2: Connect via High-Quality Static Residential
                        Proxies
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Pair every single Binance account inside your
                        anti-detect browser with a premium SOCKS5 static
                        residential proxy. Ensure the country location of your
                        proxy matches the native KYC data of the account.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 3: Keep 2FA Codes Secure
                      </h4>
                      <p className="text-sm text-neutral-400">
                        When you receive your login package, configure the
                        provided 2FA secret key in your Google Authenticator app
                        or a secure offline key manager to generate dynamic
                        access codes instantly.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 4: Handle Capital Movement with Gradual Warmup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Do not instantly drop large volumes on day one. Spend
                        day 1 logging in via 2FA and reviewing dashboards. Run
                        small test transactions on days 2-3 before scaling your
                        asset management volumes.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=500&q=80"
                      alt="Two-Factor Authentication Security Layout"
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
                      Why does AllPVAUSA provide a 2FA secret key with every
                      account?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      The 2FA secret key provides total independence. Whenever
                      Binance prompts a security check, you can drop this secret
                      key into an authenticator tool to instantly generate
                      dynamic access codes yourself, without waiting on an
                      external SIM card.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Can I update the security details after purchasing?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, absolutely. Once you have logged into the account
                      securely and allowed it to stabilize on your premium proxy
                      network for 48 to 72 hours, you can update the passwords
                      and change the secondary tracking details to ensure 100%
                      private, exclusive ownership.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      What kind of replacement warranty does AllPVAUSA offer?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      At AllPVAUSA, client trust and operational security are
                      our highest values. Every package comes with a clear
                      replacement warranty window. If you experience a login
                      failure or find a delivery issue straight out of the box,
                      simply contact our 24/7 technical support team, and we
                      will issue a fresh replacement immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final Statement / Call to Action */}
              <section className="p-6 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Secure Your Financial Freedom with AllPVAUSA Today!
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Don't let intensive verification queues, strict regional
                  limits, or sudden platform holds stall your cryptocurrency
                  trading strategies, API bot executions, or global B2B payouts.
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
