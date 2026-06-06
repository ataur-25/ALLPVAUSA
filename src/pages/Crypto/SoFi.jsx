import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp as SoFiIcon,
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
        className="bg-[#0d1b2e] border border-[#00D084]/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#00D084]/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-white">{product.title}</h2>

        <p className="text-gray-400 text-sm mt-2">{product.desc}</p>

        <div className="text-3xl font-black text-[#00D084] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#00D084] to-[#00a86b] text-black font-black hover:scale-105 transition duration-300"
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
    title: "Fresh SoFi Accounts",
    price: "$25.00",
    desc: "Freshly created SoFi accounts with secure login access and clean profile.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stock: "3.1K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged SoFi Accounts",
    price: "$75.00",
    desc: "Trusted aged SoFi accounts with banking activity and transaction history.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=1200",
    stock: "1.5K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified SoFi Accounts",
    price: "$150.00",
    desc: "Fully verified SoFi accounts with ID verification and full access.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
    stock: "850 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk SoFi Package",
    price: "$950",
    desc: "Bulk SoFi accounts package for agencies & fintech businesses.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function SoFiAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#001a0d] via-[#050816] to-[#001a0d]"
        />

        {/* Animated Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(#00D08430_1px,transparent_1px)] bg-[length:60px_60px]"
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
              <span className="bg-gradient-to-r from-[#00D084] to-[#4dffbc] bg-clip-text text-transparent">
                SoFi Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality SoFi accounts with secure access, instant delivery
              and trusted authenticity.
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
              <Shield className="text-[#00D084]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#4dffbc]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#80ffdb]" />
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
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#00D084]/20 text-[#4dffbc] text-xs font-bold"
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
                    <SoFiIcon className="text-[#00D084]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#00D084] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#00D084]" />
                          {f}
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#00D084]">
                      {item.price}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#00D084] to-[#00a86b] text-black text-xs font-black uppercase transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </motion.button>
                  </div>
                </div>

                {/* SoFi Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#00D084]/20 to-[#4dffbc]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#00D084]/0 group-hover:border-[#00D084]/40 transition duration-500" />
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
            All SoFi accounts are tested • Instant delivery • 24/7 support
          </motion.div>

          {/* Content */}

          <div className="text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Main Header / Title */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Buy Verified SoFi Accounts: Streamline Digital Transactions
                  and Business FinTech Operations with AllPVAUSA
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In the evolving era of digital finance and global business
                    operations, having access to robust, high-tier financial
                    platforms is essential. For freelancers, e-commerce sellers,
                    digital marketers, and agencies operating in the
                    international space, managing cross-border transactions,
                    receiving payouts, and handling business expenses requires
                    an incredibly secure banking footprint.
                  </p>
                  <p>
                    Among modern financial technology platforms, SoFi (Social
                    Finance) has emerged as an industry leader in the United
                    States, offering seamless mobile banking, high-yield
                    savings, investment tracking, and automated financial tools.
                    However, for non-US residents, global entrepreneurs, or
                    remote agencies, setting up a fully verified SoFi account is
                    practically impossible due to mandatory US bank
                    verifications, strict geographic restrictions, and intensive
                    security documentation.
                  </p>
                  <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-lg">
                    To bypass these operational barriers and smoothly manage
                    digital funds, many businesses choose to buy verified SoFi
                    accounts from a professional digital asset provider.
                  </p>
                  <p>
                    At AllPVAUSA, we provide premium, fully verified, and secure
                    SoFi accounts designed to help your business handle
                    transactions without technical friction. In this guide, we
                    will break down why purchasing a verified SoFi profile can
                    optimize your digital financial workflow and why AllPVAUSA
                    is the global leader in high-trust account provisioning.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=400&q=80"
                    alt="Digital Finance Mobile App"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80"
                    alt="Online payment operations"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What are Verified SoFi Accounts? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What are Verified SoFi Accounts?
                </h2>
                <p className="text-neutral-400">
                  SoFi utilizes advanced AI-driven compliance and anti-fraud
                  systems. Freshly registered profiles or accounts lacking
                  correct verification parameters are flagged instantly, leading
                  to immediate transaction holds or permanent account
                  suspensions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Fully Identity-Verified Status
                    </h3>
                    <p className="text-sm text-neutral-400">
                      The account has cleared mandatory security screenings and
                      compliance verifications, ensuring high trust within the
                      network.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Phone Verified (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Linked with a dedicated, active phone number to eliminate
                      immediate SMS verification blocks during login.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Complete Credential Handover
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Your delivery package includes the exact SoFi username,
                      strong password, associated email access, and 2FA keys for
                      complete ownership.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Clean Creation Footprint
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every account is registered using high-quality, dedicated
                      residential IP ranges to ensure long-term stability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Strategic Advantages */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Strategic Advantages of Buying SoFi Accounts from AllPVAUSA
                </h2>
                <p className="text-neutral-400">
                  Operating an international digital service platform or
                  e-commerce brand requires financial flexibility. Securing
                  verified SoFi assets unlocks massive operational leverage:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. Seamless US Payouts and Marketplace Withdrawals
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      If you are running stores on Amazon or eBay, or working as
                      a freelancer on platforms like Upwork and Fiverr,
                      receiving your hard-earned payouts efficiently is key. A
                      verified SoFi account gives you access to direct deposit
                      features and official routing numbers, allowing you to
                      withdraw your US earnings smoothly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. High-Yield Capital Management
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      For businesses looking to store reserve capital or
                      operational marketing budgets, SoFi offers excellent
                      high-yield saving structures. This allows you to earn
                      passive returns on your idle business funds while keeping
                      them easily accessible for upcoming ad spend or software
                      subscriptions.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                      alt="Business Financial Management"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Smooth Integration with Digital Marketing Workflows
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Modern ad platforms (like Meta Ads, Google Ads, and TikTok
                      Ads) require trustworthy funding sources. Connecting a
                      verified SoFi virtual payment card or checking link
                      reduces the risk of triggering "suspicious payment
                      behavior" flags, ensuring your marketing campaigns stay
                      active without interruption.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Bypassing Global Border Constraints
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      If you manage a remote team or agency from outside the
                      United States, traditional banking limits can slow down
                      your growth. Buying a fully verified SoFi account gives
                      you an immediate financial footprint in the US, allowing
                      you to pay international vendors or receive client
                      invoices easily.
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
                        <th className="p-4 text-emerald-400">
                          Premium AllPVAUSA SoFi Accounts
                        </th>
                        <th className="p-4">Cheap, Automated Alternatives</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Verification Level
                        </td>
                        <td className="p-4">
                          Fully Identity-Verified & Secure
                        </td>
                        <td className="p-4 text-neutral-500">
                          Unverified or bypassed via temporary patches
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Network Footprint
                        </td>
                        <td className="p-4">
                          Clean, premium US Residential IPs
                        </td>
                        <td className="p-4 text-neutral-500">
                          Shared, blacklisted data center proxy pools
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Login Security
                        </td>
                        <td className="p-4">
                          Smooth entry via 2FA and secure keys
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Instant verification locks on the first attempt
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Account Handover
                        </td>
                        <td className="p-4">
                          SoFi + Original Email + Recovery details
                        </td>
                        <td className="p-4 text-neutral-500">
                          Only basic Username and Password text strings
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Protection
                        </td>
                        <td className="p-4 text-emerald-400">
                          24/7 Dedicated Support & Fast Replacements
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
                  Operational Blueprint: How to Safely Manage Your SoFi Account
                </h2>
                <p className="text-neutral-400">
                  To maintain the high trust score of your newly purchased SoFi
                  account and protect your business funds, your team must
                  practice excellent digital hygiene:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 1: Utilize an Anti-Detect Browser
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Never log into separate financial accounts using a
                        standard browser window. Use specialized
                        multi-accounting browsers like AdsPower, Multilogin, or
                        Dolphin{"{anty}"} to completely isolate your financial
                        portal.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 2: Bind to a Premium US Residential Proxy
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Because SoFi is built strictly for US-based operations,
                        accessing it from an international network will trigger
                        a freeze. Pair your virtual browser profile with a
                        high-quality SOCKS5 US residential proxy.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Step 3: Handle Transactions with Realistic Warmup
                      </h4>
                      <p className="text-sm text-neutral-400">
                        Do not immediately transfer huge sums on day one. Spend
                        the first few days logging in via 2FA and looking
                        through the dashboard. Initiate small deposits first to
                        confirm everything works smoothly before scaling up.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"
                      alt="Cybersecurity Network Connection"
                      className="w-full h-64 object-cover rounded-xl border border-neutral-800"
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
                      Can I change the account's password and primary details
                      after purchasing?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, absolutely. Once you have logged into the platform
                      securely and allowed it to stabilize on your premium proxy
                      network for 48 to 72 hours, you can safely update the
                      login credentials and secure your recovery details to
                      ensure 100% private ownership.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Does AllPVAUSA provide an active replacement warranty?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes! Every package comes backed by a definitive
                      replacement warranty window. If you experience a login
                      issue or find a delivery defect straight out of the box,
                      simply reach out to our 24/7 customer support team for an
                      immediate replacement.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Is it safe to use these accounts for international agency
                      payouts?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, provided you manage them correctly using high-quality
                      US residential proxies and anti-detect browsers. Keeping
                      your login environment clean ensures your transaction
                      pathways stay fully functional.
                    </p>
                  </div>
                </div>
              </section>

              {/* Outro / Final CTA statement */}
              <section className="p-6 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Take Control of Your Digital Financial Infrastructure Today!
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Don't let rigid geographic restrictions, complex corporate
                  banking barriers, or sudden verification holds slow down your
                  global agency scaling, freelance withdrawals, or ad account
                  funding.
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
