import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiRepeat as PaxfulIcon,
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
        className="bg-[#0d1b2e] border border-[#F7931A]/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#F7931A]/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-[#F7931A] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#F7931A] to-[#cc7a14] text-black font-black hover:scale-105 transition duration-300"
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
    title: "Fresh Paxful Accounts",
    price: "$28.00",
    desc: "Freshly created Paxful accounts with P2P trading access and clean profile.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200",
    stock: "3.5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Paxful Accounts",
    price: "$85.00",
    desc: "Trusted aged Paxful accounts with trade history and positive reputation.",
    img: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200",
    stock: "1.2K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Paxful Accounts",
    price: "$160.00",
    desc: "Fully verified Paxful accounts with ID verification and high trust score.",
    img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1200",
    stock: "780 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Paxful Package",
    price: "$1100",
    desc: "Bulk Paxful accounts package for P2P traders & crypto businesses.",
    img: "https://images.unsplash.com/photo-1620381029589-796b7dbe3a27?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function PaxfulAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a1000] via-[#050816] to-[#1a1000]"
        />

        {/* Animated Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(#F7931A30_1px,transparent_1px)] bg-[length:60px_60px]"
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
              <span className="bg-gradient-to-r from-[#F7931A] to-[#ffb74d] bg-clip-text text-transparent">
                Paxful Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Paxful accounts with P2P trading access, instant
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
              <Shield className="text-[#F7931A]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#ffb74d]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#ffcc80]" />
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
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#F7931A]/20 text-[#ffb74d] text-xs font-bold"
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
                    <PaxfulIcon className="text-[#F7931A]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#F7931A] font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {[
                      "Instant Delivery",
                      "P2P Trading Ready",
                      "High Quality",
                    ].map((f, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + idx * 0.1 + i * 0.1,
                        }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-[#F7931A]" />
                        {f}
                      </motion.div>
                    ))}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#F7931A]">
                      {item.price}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F7931A] to-[#cc7a14] text-black text-xs font-black uppercase transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </motion.button>
                  </div>
                </div>

                {/* Paxful Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#F7931A]/20 to-[#ffb74d]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#F7931A]/0 group-hover:border-[#F7931A]/40 transition duration-500" />
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
            All Paxful accounts are tested • Instant delivery • 24/7 support
          </motion.div>

          {/* Content */}

          <div className="text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Title Header */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Buy Verified Paxful Accounts: Scale Your P2P Crypto Trading
                  and Secure Global Transactions with AllPVAUSA
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In the decentralized era of digital finance, peer-to-peer
                    (P2P) cryptocurrency trading has become the ultimate method
                    for moving capital, executing cross-border payments, and
                    converting gift cards to crypto. For digital marketers,
                    affiliate networks, and international agencies, having
                    access to a flexible trading environment is essential to
                    keep operational cash flows moving smoothly. Among the most
                    recognized names in the P2P space, Paxful has historically
                    built one of the largest global networks supporting over 350
                    payment methods.
                  </p>
                  <p>
                    However, running a multi-account setup or scaling a trading
                    network on Paxful requires navigating an aggressive security
                    matrix. To comply with changing global anti-money laundering
                    (AML) and compliance frameworks, the platform enforces
                    mandatory multi-level identity verifications (KYC). Without
                    a fully verified profile, users face locked trading
                    dashboards, restricted withdrawal corridors, and sudden
                    security holds. For fast-scaling agencies, waiting through
                    long verification pipelines can stall active ad campaigns or
                    freeze vendor payouts.
                  </p>
                  <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-lg">
                    To eliminate compliance bottlenecks and maintain constant
                    market access, successful P2P traders and digital agencies
                    choose to buy verified Paxful accounts.
                  </p>
                  <p>
                    At AllPVAUSA, we provide premium, fully identity-verified,
                    and completely stable Paxful accounts designed to protect
                    your operational workflow. In this definitive guide, we will
                    look into why purchasing high-trust Paxful profiles is a
                    crucial asset for your digital enterprise and why AllPVAUSA
                    is your ultimate partner for secure digital assets.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1621508654686-809f23efdabc?auto=format&fit=crop&w=400&q=80"
                    alt="Bitcoin and Cryptocurrency Concept"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&q=80"
                    alt="Digital security and networking"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What are Verified Paxful Accounts? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What are Verified Paxful Accounts?
                </h2>
                <p className="text-neutral-400">
                  An unverified or freshly made profile on a peer-to-peer
                  exchange is heavily restricted. To prevent fraud, P2P
                  platforms use automated risk filters that closely monitor
                  basic accounts, often triggering immediate bans during their
                  first transaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Fully Identity-Verified (KYC Cleared)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every profile has cleared the mandatory identity and
                      document verification levels, unlocking high transaction
                      volumes and unrestricted offer-creation rights.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Phone Verified Accounts (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Linked via unique, active mobile numbers to prevent
                      immediate SMS verification loops or access blocks during
                      login checkpoints.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Complete Security Handover
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every package includes the exact platform credentials, 2FA
                      secret backup keys (Google Authenticator), and full entry
                      access to the original registration email.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Clean Footprint Setup
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Nurtured and verified using premium residential IP pools
                      to ensure maximum account longevity and resilience upon
                      delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Strategic Advantages */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Strategic Advantages of Buying Paxful Accounts from AllPVAUSA
                </h2>
                <p className="text-neutral-400">
                  Operating an international digital platform with a single
                  exchange account creates a major point of failure. Securing a
                  network of verified accounts from AllPVAUSA provides
                  structural insulation and unlocks several growth benefits:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. Unlocked High-Tier Verification Levels
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      P2P trading limits depend strictly on your verification
                      status. Our premium verified accounts are processed
                      through multiple verification stages (including ID and
                      Address confirmation), granting you access to high-tier
                      daily and lifetime trading ceilings. This allows your
                      business to move massive capital volumes without friction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. Diversified Payment Processing and Gift Card Arbitrage
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Many digital marketers use gift cards, alternative online
                      wallets, and localized bank transfers to manage
                      international transactions. Running these diverse payment
                      methods through a single profile increases the risk of
                      receiving an algorithmic flag. Distributing your payment
                      methods across multiple verified accounts protects your
                      main trading balances and keeps your conversion channels
                      fully active.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
                      alt="Blockchain security and transaction tracking"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Freedom to Create and Publish Custom Offers
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      To maximize profitability in P2P trading, you need the
                      capability to list your own buy and sell offers instead of
                      just taking existing rates. High-tier verified accounts
                      grant you the trust score required to post competitive
                      custom public advertisements, allowing you to control your
                      margins and attract trusted trading partners.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Overcoming Regional Blocks and Compliance Shifts
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Financial platforms constantly change their operational
                      rules and feature availability depending on geographic
                      jurisdictions. If your business runs global operations but
                      your remote team is based in a highly restricted or
                      unserviceable region, buying an account pre-mapped to a
                      business-friendly territory allows you to trade assets
                      without encountering technical barriers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Comparison Table */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Technical Comparison: AllPVAUSA Premium Accounts vs. Low-Grade
                  Bots
                </h2>
                <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-slate-800/50/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs font-semibold text-neutral-400 uppercase">
                        <th className="p-4">Performance Metric</th>
                        <th className="p-4 text-emerald-400">
                          Premium AllPVAUSA Paxful Accounts
                        </th>
                        <th className="p-4">
                          Cheap, Script-Generated Profiles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Verification Level
                        </td>
                        <td className="p-4">
                          Fully Identity Verified (KYC Passed)
                        </td>
                        <td className="p-4 text-neutral-500">
                          Unverified or bypassed via temporary edits
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
                          Blacklisted, shared data center proxy ranges
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Security Package
                        </td>
                        <td className="p-4">
                          Account Login + Mail Access + 2FA Backup Keys
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Only basic Username and Password text strings
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Escrow Durability
                        </td>
                        <td className="p-4">
                          Built to handle active transactions safely
                        </td>
                        <td className="p-4 text-neutral-500">
                          Frozen or locked instantly on the first trade
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Protection
                        </td>
                        <td className="p-4 text-emerald-400">
                          24/7 Live Support &amp; Fast Replacement Window
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
                  Operational Blueprint: How to Safely Manage Multiple Verified
                  Accounts
                </h2>
                <p className="text-neutral-400">
                  To preserve the exceptional initial trust scores of your newly
                  purchased accounts and permanently secure your crypto capital,
                  your team must execute strict digital hygiene:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 1: Isolate via Advanced Anti-Detect Browsers
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Never log into separate trading accounts using standard
                        browser tabs. Use specialized multi-accounting tools
                        like AdsPower, Multilogin, or Dolphin{"{anty}"} to
                        sandbox every profile into its own isolated virtual
                        device.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 2: Bind to Premium Static Residential Proxies
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Because P2P exchanges monitor sudden location changes,
                        connecting from an inconsistent IP will cause a freeze.
                        Pair every virtual browser profile with a premium SOCKS5
                        static residential proxy matching the account's KYC
                        country location.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 3: Secure Your 2FA Authentication Tools
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Upon receiving your delivery package, import the
                        provided 2FA secret key into your Google Authenticator
                        or an offline key manager to independently and instantly
                        generate codes for escrow releases.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 4: Implement a Gradual Account Warmup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Do not instantly run large-volume trades on day one.
                        Spend day 1 monitoring the dashboard to stabilize the
                        session. Complete minor, low-risk trades on days 2–3
                        before gradually scaling up frequencies and volumes.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=500&q=80"
                      alt="Two-Factor Authentication Interface Security"
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
                      update the login passwords and change the secondary
                      security details to ensure 100% private, exclusive
                      ownership.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Why is original email access (OG Email) included in the
                      delivery?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Providing the original creation email ensures complete,
                      bulletproof control. Because automated platform
                      confirmations, password resets, and transaction
                      notifications route directly through the registered email
                      address, having full ownership of that inbox guarantees
                      you maintain absolute authority over your account.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      What kind of customer warranty does AllPVAUSA offer?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      At AllPVAUSA, customer trust and operational safety are
                      our core pillars. Every digital asset package comes backed
                      by a definitive replacement warranty window. If you
                      experience a login issue or find a delivery defect
                      straight out of the box, simply reach out to our 24/7
                      technical support team, and we will issue a fresh
                      replacement immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final Statement / Call to Action */}
              <section className="p-6 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Scale Your P2P Infrastructure with AllPVAUSA Today!
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Don't let endless verification queues, strict regional limits,
                  or sudden identity verification loops halt your peer-to-peer
                  trading workflows, gift card conversions, or global corporate
                  payouts.
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
