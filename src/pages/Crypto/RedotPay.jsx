import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCreditCard as RedotpayIcon,
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
        className="bg-[#0d1b2e] border border-[#FF3B3B]/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#FF3B3B]/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-[#FF3B3B] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#FF3B3B] to-[#cc2e2e] text-white font-black hover:scale-105 transition duration-300"
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
    title: "Fresh Redotpay Accounts",
    price: "$20.00",
    desc: "Freshly created Redotpay accounts with virtual card access ready to use.",
    img: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=1200",
    stock: "4.2K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Redotpay Accounts",
    price: "$65.00",
    desc: "Trusted aged Redotpay accounts with transaction history and card usage.",
    img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200",
    stock: "1.8K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Redotpay Accounts",
    price: "$130.00",
    desc: "Fully KYC verified Redotpay accounts with physical card eligibility.",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200",
    stock: "950 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Redotpay Package",
    price: "$850",
    desc: "Bulk Redotpay accounts package for resellers & payment businesses.",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function RedotpayAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#050816] to-[#1a0808]"
        />

        {/* Animated Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(#FF3B3B30_1px,transparent_1px)] bg-[length:60px_60px]"
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
              <span className="bg-gradient-to-r from-[#FF3B3B] to-[#ff7b7b] bg-clip-text text-transparent">
                Redotpay Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Redotpay accounts with virtual card access,
              instant delivery and trusted authenticity.
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
              <Shield className="text-[#FF3B3B]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#ff7b7b]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#ffaaaa]" />
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
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#FF3B3B]/20 text-[#ff7b7b] text-xs font-bold"
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
                    <RedotpayIcon className="text-[#FF3B3B]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#FF3B3B] font-bold text-sm">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-4 space-y-2">
                    {[
                      "Instant Delivery",
                      "Virtual Card Ready",
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
                        <Check className="w-4 h-4 text-[#FF3B3B]" />
                        {f}
                      </motion.div>
                    ))}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#FF3B3B]">
                      {item.price}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FF3B3B] to-[#cc2e2e] text-white text-xs font-black uppercase transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </motion.button>
                  </div>
                </div>

                {/* Redotpay Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#FF3B3B]/20 to-[#ff7b7b]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#FF3B3B]/0 group-hover:border-[#FF3B3B]/40 transition duration-500" />
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
            All Redotpay accounts are tested • Instant delivery • 24/7 support
          </motion.div>

          {/* Content */}

          <div className="bg-neutral-950 text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Title Header */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Buy Verified RedotPay Accounts: The Ultimate Solution for
                  Instant Global Crypto Visa Cards &amp; Seamless Ad Spend
                  Management
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In the rapidly changing landscape of digital marketing,
                    e-commerce, and international freelancing, having instant
                    access to flexible payment solutions is the ultimate
                    competitive advantage. Whether you are funding massive ad
                    campaigns on Meta, Google, or TikTok Ads, paying for premium
                    cloud infrastructure, or managing worldwide business
                    expenses, traditional banking systems often slow you down
                    with heavy paperwork, compliance holds, and predatory
                    cross-border fees.
                  </p>
                  <p>
                    To bridge this gap, RedotPay has emerged as one of the
                    world's leading stablecoin-based payment platforms.
                    Providing both instant virtual and physical crypto Visa
                    debit cards, RedotPay allows businesses to deposit popular
                    cryptocurrencies (such as USDT, USDC, BTC, and ETH) via
                    multiple cost-efficient networks (like Tron, Polygon, and
                    Arbitrum) and spend them in real-time at over 100 million
                    Visa merchants globally.
                  </p>
                  <p className="font-semibold text-white bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
                    To bypass these compliance queues, secure clean payment
                    footprints, and scale your active ad campaigns immediately,
                    top-performing media buyers choose to buy verified RedotPay
                    accounts.
                  </p>
                  <p>
                    At AllPVAUSA, we provide premium, fully identity-verified,
                    and long-term stable RedotPay accounts pre-configured to
                    launch virtual crypto cards instantly. In this definitive
                    guide, we will look into how purchased RedotPay accounts can
                    revolutionize your financial workflows and why AllPVAUSA is
                    your ultimate partner for high-trust digital assets.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=400&q=80"
                    alt="Digital Virtual Credit Card Interface"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=400&q=80"
                    alt="Crypto and Digital Currency Concept"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What are Verified RedotPay Accounts? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What are Verified RedotPay Accounts?
                </h2>
                <p className="text-neutral-400">
                  An unverified RedotPay profile is functionally restricted—it
                  cannot issue virtual cards, process crypto-to-fiat
                  conversions, or execute payments. To unlock the full power of
                  RedotPay's Web3 banking infrastructure, every asset must clear
                  strict security layers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      100% Identity Verified (KYC Passed)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every account has successfully cleared real government ID
                      verifications and biometric face scans, ensuring an
                      excellent structural trust score.
                    </p>
                  </div>
                  <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Phone Verified Accounts (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Linked via unique, active non-virtual numbers to prevent
                      immediate SMS verification blocks during security checks
                      or logins.
                    </p>
                  </div>
                  <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Complete Security Handover
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Your delivery package contains the exact account login
                      credentials, 2FA secret backup keys (Google
                      Authenticator), and full entry credentials to the original
                      creation email.
                    </p>
                  </div>
                  <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Multi-Chain Asset Compatibility
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Fully optimized environments ready to receive low-fee
                      network deposits via TRC-20, Polygon, or Arbitrum
                      instantly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Strategic Advantages */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Strategic Advantages of Buying RedotPay Accounts from
                  AllPVAUSA
                </h2>
                <p className="text-neutral-400">
                  Operating an international digital agency or e-commerce
                  network with a single payment card exposes your entire
                  enterprise to a single point of failure. Securing a trusted
                  network of verified RedotPay assets unlocks critical
                  operational leverage:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. High-Limit Virtual Crypto Cards for Bulletproof Media
                      Buying
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Modern ad platforms regularly flag payment cards if
                      multiple ad accounts share the exact same credit line.
                      With verified RedotPay accounts, your team can issue
                      independent virtual crypto Visa cards capable of handling
                      up to $100,000 per transaction. This isolates your ad
                      spend, prevents chain-reaction ad account bans, and
                      ensures your marketing funnels run without interruption.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. Multi-Chain Stablecoin Spending with Zero Staking
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Unlike older crypto card alternatives that require you to
                      lock up thousands of dollars in volatile native tokens to
                      access premium features, RedotPay demands zero staking.
                      You can fund your account using cheap Tron (TRC-20) or
                      Polygon gas channels and spend stablecoins (USDT/USDC)
                      directly. The system converts your crypto to local fiat at
                      the exact millisecond of the transaction.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                      alt="Ad Account Management and Media Buying Layout"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Immediate Global Off-Ramping and ATM Access
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      For remote agencies and international freelancers,
                      converting digital crypto earnings into usable cash can be
                      tedious. RedotPay acts as the ultimate off-ramp. If you
                      choose to deploy a physical card from your purchased
                      account, you can withdraw local currency instantly at any
                      global ATM across 130+ supported countries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Bypassing Stringent Geographic and Compliance Blocks
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Financial tech platforms continuously alter feature sets
                      or restrict app onboarding based on specific regional
                      laws. If your business operates internationally but your
                      team is based in an unserviceable or heavily regulated
                      territory, buying an account pre-mapped to a
                      crypto-friendly region grants you unrestricted access to
                      the global Visa ecosystem.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Comparison Table */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Technical Comparison: AllPVAUSA Premium Accounts vs.
                  Script-Farmed Bots
                </h2>
                <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-neutral-900 text-xs font-semibold text-neutral-400 uppercase">
                        <th className="p-4">Performance Metric</th>
                        <th className="p-4 text-cyan-400">
                          Premium AllPVAUSA RedotPay Accounts
                        </th>
                        <th className="p-4">
                          Cheap, Script-Generated Profiles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          KYC Compliance Status
                        </td>
                        <td className="p-4">
                          100% Fully Identity Verified (KYC Passed)
                        </td>
                        <td className="p-4 text-neutral-500">
                          Unverified or bypassed via temporary patches
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          IP Footprint &amp; Network
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
                          Handover Package
                        </td>
                        <td className="p-4">
                          Login + Original Email + 2FA Secret Keys
                        </td>
                        <td className="p-4 text-neutral-500">
                          Basic text string username and password only
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Card Issuance Stability
                        </td>
                        <td className="p-4">
                          Immediate virtual/physical card deployment
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Locked or disabled during the payment step
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Transaction Durability
                        </td>
                        <td className="p-4">
                          Built to handle high-volume ad spend safely
                        </td>
                        <td className="p-4 text-neutral-500">
                          Permanent account freeze on the first deposit
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Protection
                        </td>
                        <td className="p-4 text-cyan-400">
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
                  Operational Blueprint: How to Safely Manage Multiple RedotPay
                  Accounts
                </h2>
                <p className="text-neutral-400">
                  To maintain the high structural trust scores of your newly
                  purchased accounts and protect your business funds, your team
                  must practice flawless digital hygiene:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 1: Deploy a Dedicated Anti-Detect Browser
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Never log into multiple distinct financial accounts
                        using standard Google Chrome tabs. Use multi-accounting
                        tools like AdsPower, Multilogin, or Dolphin{"{anty}"} to
                        sandbox every profile into its own completely isolated
                        virtual device.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 2: Connect via Premium Static US/UK/EU Residential
                        Proxies
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Because financial portals track access footprints,
                        connecting from a leaked IP triggers a block. Pair every
                        browser profile with a premium SOCKS5 static residential
                        proxy matching the account's native KYC location.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 3: Configure 2FA Security Infrastructure Instantly
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Upon receiving your data, import the provided 2FA secret
                        key into Google Authenticator or an offline manager.
                        This ensures your media buying team can independently
                        generate access codes for confirmations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 4: Implement a Natural Balance Warmup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Do not instantly run $10,000 on day one. Treat the
                        account with a realistic human cadence: log in via 2FA
                        and browse on day 1, execute a micro test deposit
                        ($15–$20) on days 2–3, and then gradually scale
                        spending.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=500&q=80"
                      alt="Two-Factor Authentication Setup and Identity Security"
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
                  <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Can I modify the login credentials and passwords after
                      purchasing?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, absolutely. Once you have logged into the account
                      securely and allowed it to stabilize on your dedicated
                      proxy network for 48 to 72 hours, you can comfortably
                      update the passwords and secondary tracking preferences to
                      ensure 100% private, exclusive ownership.
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      What is the advantage of receiving the Original Email (OG
                      Email)?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Providing the original creation email ensures complete
                      security. Because automated platform confirmations,
                      password resets, and high-tier transaction alerts route
                      directly through the registered email address, having full
                      ownership of that inbox guarantees you maintain absolute
                      authority over your account.
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      What happens if an account experiences a login failure
                      straight out of the box?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      At AllPVAUSA, customer trust and operational safety are
                      our core pillars. Every digital asset package comes backed
                      by a definitive replacement warranty window. If you
                      experience an unexpected login hold or find a delivery
                      defect right after purchase, simply reach out to our 24/7
                      technical support team, and we will issue a fresh
                      replacement immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* Outro / Call to Action */}
              <section className="p-6 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Scale Your Global Payment Infrastructure with AllPVAUSA Today!
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Don't let endless identity verification queues, strict
                  regional payment blocks, or sudden compliance loops halt your
                  virtual ad spending campaigns, e-commerce checkouts, or
                  international vendor payouts.
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
