import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend as Telegram,
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

        <div className="text-3xl font-black text-[#229ED9] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#229ED9] to-[#0088cc] text-white font-black hover:scale-105 transition"
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
    title: "Fresh Telegram Accounts",
    price: "$10.00",
    desc: "Freshly created Telegram accounts with secure login access.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    stock: "7K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Telegram Accounts",
    price: "$30.00",
    desc: "Trusted aged Telegram accounts with stable activity history.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stock: "3K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Telegram Accounts",
    price: "$70.00",
    desc: "Fully verified Telegram accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    stock: "1.2K In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Telegram Package",
    price: "$500",
    desc: "Bulk Telegram accounts package for agencies & automation.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function TelegramAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131d] via-[#050816] to-[#071c2d]" />

        {/* Telegram Style Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#229ED930_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#229ED9] to-[#0088cc] bg-clip-text text-transparent">
                Telegram Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Telegram accounts with secure access, instant
              delivery and trusted authenticity.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-[#229ED9]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#5ec8ff]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#9bddff]" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#229ED9]/20 text-[#a7e6ff] text-xs font-bold">
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
                    <Telegram className="text-[#229ED9]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#229ED9] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#229ED9]" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#229ED9]">
                      {item.price}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#229ED9] to-[#0088cc] text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* Telegram Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#229ED9]/20 to-[#0088cc]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#229ED9]/0 group-hover:border-[#229ED9]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm pb-20">
            All Telegram accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}

          <div className="text-neutral-100 min-h-screen font-sans antialiased selection:bg-purple-600 selection:text-white">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                The Ultimate Guide to Buy Verified Instagram Accounts
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Scale Your Brand, Influencer Marketing, and Social Reach with{" "}
                <span className="text-purple-400 font-semibold">AllPVAUSA</span>
              </p>
            </div>
            {/* Background Decorative Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
              <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
              <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px]"></div>
            </div>

            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
              {/* Introduction Section */}
              <section className="prose prose-invert max-w-none">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  In the visual-driven world of modern social media, Instagram
                  is an absolute goldmine for businesses, e-commerce stores, and
                  digital creators. With over two billion monthly active users,
                  it is the premier platform for launching viral marketing
                  campaigns, building influencer authority, and driving massive
                  targeted traffic to your sales funnels. Whether you are
                  running a dropshipping brand, a digital marketing agency, or
                  managing multiple client profiles, your growth depends on the
                  strength of your social media infrastructure.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mt-4">
                  However, scaling your organic reach or managing automated
                  marketing campaigns on Instagram has become incredibly
                  difficult. Instagram’s automated AI security filters are
                  notoriously strict. Fresh profiles created from the same
                  network are regularly hit with instant shadowbans, mandatory
                  phone verification loops, or action blocks for minor
                  activities. If your primary account faces a sudden
                  restriction, your brand’s daily visibility and sales pipelines
                  freeze instantly.
                </p>
                <div className="my-8 p-6 rounded-xl bg-slate-800/50 border border-neutral-800 flex gap-4 items-start">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                  </div>
                  <p className="text-neutral-200 font-medium m-0">
                    To bypass these algorithmic bottlenecks and maintain a
                    consistent market presence, top-performing growth hackers
                    and modern brands choose to buy verified Instagram accounts.
                  </p>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  At <strong>AllPVAUSA</strong>, we provide premium,
                  phone-verified, and aged Instagram accounts designed to handle
                  heavy social media marketing and immediate campaign
                  deployment. In this definitive guide, we will break down why
                  purchasing high-quality Instagram accounts is a game-changer
                  for your business and why AllPVAUSA is your ultimate partner
                  for secure digital assets.
                </p>
              </section>

              {/* Section 1: What are Verified Instagram Accounts? */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <span className="text-purple-500">#</span> What are Verified
                  Instagram Accounts?
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  An Instagram account needs a trusted, clean configuration to
                  survive heavy promotional activities. Standard, bot-created
                  profiles lack the foundational security scores needed to scale
                  without getting flagged.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-xl bg-slate-800/50/60 border border-neutral-800 hover:border-neutral-700 transition">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Phone Verified Accounts (PVA)
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every account is fully verified via SMS using a unique,
                      dedicated mobile number, preventing immediate security
                      locks during login.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-800/50/60 border border-neutral-800 hover:border-neutral-700 transition">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Aged Instagram Profiles
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Seasoned accounts created months or years ago. These carry
                      established algorithmic trust, making them much more
                      resilient to action blocks.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-800/50/60 border border-neutral-800 hover:border-neutral-700 transition">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Email Access Included
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every delivery package comes with complete login details
                      for both the Instagram profile and the original creation
                      email (OG Email), ensuring total ownership.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-800/50/60 border border-neutral-800 hover:border-neutral-700 transition">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Bio-Optimized Structures
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Clean profiles configured with human-like footprints,
                      profile pictures, and natural engagement histories.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Why Top Marketers Rely on AllPVAUSA */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Why Top Marketers Rely on AllPVAUSA to Buy Instagram Accounts
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Operating a modern digital brand or affiliate marketing
                  network with a single personal Instagram account is a major
                  bottleneck. Securing verified digital assets from AllPVAUSA
                  protects your business and unlocks several scaling advantages:
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold shrink-0 border border-purple-500/20">
                      1
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Instant Campaign Scale and Action Immunity
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        Instagram enforces strict daily limits on actions like
                        following, liking, commenting, and sending Direct
                        Messages (DMs). If you exceed these limits from one
                        profile, your account gets hit with an action block or
                        shadowban. By distributing your outreach, influencer
                        hunting, and engagement campaigns across multiple
                        verified accounts from AllPVAUSA, you multiply your
                        daily marketing volume without triggering system alarms.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold shrink-0 border border-purple-500/20">
                      2
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Immediate Access to Advanced Features
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        Brand-new accounts face a waiting period before they are
                        granted full feature access, high-limit link sharing, or
                        stable ad account access. Purchasing Aged Instagram
                        Accounts skips this trial phase entirely. These profiles
                        come with pre-existing network trust, allowing you to
                        launch high-ticket marketing funnels and bio link
                        strategies right away.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold shrink-0 border border-purple-500/20">
                      3
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Bulletproof Instagram DM Automation & Lead Generation
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        Mass DM outreach is an incredibly powerful channel for
                        securing B2B clients, promoting e-commerce discounts,
                        and booking discovery calls. Growth hackers use
                        automation tools to send personalized offers to
                        thousands of targeted users. Running this strategy
                        safely requires a strong pool of phone-verified PVA
                        accounts. AllPVAUSA provides clean, durable accounts
                        that act as the backbone for your bulk outreach systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold shrink-0 border border-purple-500/20">
                      4
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Flawless Social Proof and Niche Dominance
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        In digital space, perception is reality. E-commerce
                        brands and agencies buy bulk verified accounts to manage
                        their own comment moderation networks, build organic
                        social proof on promotional posts, and cross-promote
                        brand initiatives naturally. This native engagement
                        helps push your content into the Instagram Explore page
                        algorithm.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Comparison Table */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Technical Comparison: AllPVAUSA Accounts vs. Cheap Market Bots
                </h2>
                <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-slate-800/50/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                        <th className="p-4">Performance Metric</th>
                        <th className="p-4 text-purple-400">
                          Premium AllPVAUSA Accounts
                        </th>
                        <th className="p-4">Cheap, Bot-Farmed Profiles</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-neutral-800 text-neutral-300">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          IP Footprint
                        </td>
                        <td className="p-4">
                          Individual, clean residential/mobile IPs
                        </td>
                        <td className="p-4 text-neutral-500">
                          Shared, blacklisted data center IP pools
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Verification Level
                        </td>
                        <td className="p-4 text-emerald-400">
                          Full Phone Verification (PVA) via real SMS
                        </td>
                        <td className="p-4 text-neutral-500">
                          No verification or temporary virtual numbers
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Account Handover
                        </td>
                        <td className="p-4">
                          Username, Password, 2FA, & OG Email Access
                        </td>
                        <td className="p-4 text-neutral-500">
                          Only basic Username and Password text strings
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Algorithmic Resilience
                        </td>
                        <td className="p-4 text-emerald-400">
                          High tolerance against sudden action blocks
                        </td>
                        <td className="p-4 text-rose-500 font-medium">
                          Permanently banned on the first login attempt
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Profile Setup
                        </td>
                        <td className="p-4">
                          High-quality configurations with photos & bios
                        </td>
                        <td className="p-4 text-neutral-500">
                          Empty descriptions, random letters, or bot looks
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Customer Protection
                        </td>
                        <td className="p-4">
                          24/7 Dedicated Support & Fast Replacements
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
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Operational Blueprint: How to Safely Manage Multiple Instagram
                  Accounts
                </h2>
                <p className="text-neutral-400">
                  To preserve the exceptional trust scores of your newly
                  purchased Instagram accounts, your team must maintain
                  excellent digital hygiene. Follow this step-by-step framework
                  to maximize account longevity:
                </p>

                <div className="relative border-l-2 border-neutral-800 ml-4 pl-6 space-y-10 mt-8">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 ring-4 ring-neutral-950"></span>
                    <h3 className="text-lg font-semibold text-white">
                      Step 1: Deploy a Specialized Anti-Detect Browser
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
                      Never log into several separate Instagram profiles using
                      standard browser windows or multiple account switches on
                      your personal smartphone. Instagram tracks device
                      identifiers, canvas fingerprints, MAC addresses, and WebGL
                      structures. Use advanced software tools like AdsPower,
                      Multilon, or Dolphin{"{anty}"} to isolate every account
                      into its own sandboxed virtual device.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 ring-4 ring-neutral-950"></span>
                    <h3 className="text-lg font-semibold text-white">
                      Step 2: Connect via Premium Residential Proxies
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
                      Pair every single Instagram account inside your
                      anti-detect browser with a high-quality SOCKS5 residential
                      or 4G/5G mobile proxy. Never utilize free VPN services or
                      low-grade proxies. Match your proxy's location to the
                      native country profile of the account you purchased from
                      AllPVAUSA to ensure the automated system registers a
                      completely natural, local human login.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 ring-4 ring-neutral-950"></span>
                    <h3 className="text-lg font-semibold text-white">
                      Step 3: Always Utilize Cookie Login Data
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
                      When you purchase an account package from us, we provide a
                      complete cookie data string. Import these cookies directly
                      into your virtual browser profile before opening the
                      Instagram login screen. This fills your browser
                      environment with authentic web history, ensuring Instagram
                      recognizes the login as a safe, returning user session
                      rather than a suspicious entry.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 ring-4 ring-neutral-950"></span>
                    <h3 className="text-lg font-semibold text-white">
                      Step 4: Warm Up the Accounts Gradually
                    </h3>
                    <div className="text-neutral-400 text-sm mt-1 space-y-2 bg-slate-800/50/50 p-4 rounded-xl border border-neutral-800">
                      <p>
                        Do not buy a batch of accounts and immediately start
                        blasting hundreds of DMs or follows on day one. Give the
                        account a couple of days to adjust to your proxy
                        network:
                      </p>
                      <p>
                        <strong>Day 1–2:</strong> Log in, view a few Instagram
                        Stories, watch some Reels, like 1 or 2 niche-relevant
                        posts, and close the session.
                      </p>
                      <p>
                        <strong>Day 3–4:</strong> Update the profile bio gently
                        or post an organic photo. Send 2 to 3 manual DMs to
                        trusted profiles.
                      </p>
                      <p>
                        <strong>Day 5 and beyond:</strong> Gradually ramp up
                        your automated outreach and marketing workflows while
                        keeping realistic intervals and human-like pacing
                        between actions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: FAQs */}
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4 divide-y divide-neutral-800">
                  <div className="pt-4 first:pt-0">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Can I change the account's password and profile name after
                      purchasing?
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Yes, absolutely. Once you have safely logged into the
                      profile and allowed it to stabilize on your proxy network
                      for 48 to 72 hours, you can comfortably update the login
                      passwords, profile handles, and connected email details to
                      align perfectly with your brand identity.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Why are aged Instagram accounts better than fresh ones?
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Aged accounts carry historical validity inside Instagram’s
                      core security database. Freshly registered profiles are
                      monitored very closely and face strict action
                      restrictions, whereas aged accounts possess the structural
                      durability to handle immediate marketing and outreach
                      workflows smoothly.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      What kind of customer warranty does AllPVAUSA provide?
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      At AllPVAUSA, customer satisfaction and business
                      continuity are our core pillars. We back all our account
                      packages with a definitive replacement warranty window. If
                      any asset exhibits a pre-existing restriction or a login
                      failure straight out of the box, our 24/7 technical
                      support team will provide a fresh replacement right away.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Should I link the same Facebook Page to multiple Instagram
                      profiles?
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Linking the exact same Facebook fan page or business
                      manager to dozens of separate Instagram marketing accounts
                      creates an extensive operational footprint. If one profile
                      runs into an algorithmic issue, Instagram may flag all
                      connected channels. We highly recommend keeping your
                      marketing accounts completely isolated or linking them to
                      distinct, separate assets to safeguard your network.
                    </p>
                  </div>
                </div>
              </section>
            </main>

            {/* CTA Section */}
            <section className="border-t border-neutral-800 py-16 px-4 text-center mt-20 relative overflow-hidden">
              <div className="max-w-3xl mx-auto relative z-10 space-y-6">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Scale Your Social Infrastructure with AllPVAUSA Today!
                </h2>
                <p className="text-neutral-400 leading-relaxed text-base">
                  Build a powerful, highly resilient multi-account social media
                  network designed for heavy outbound marketing, safe lead
                  generation, and continuous brand scaling. Partner with the
                  world’s leading digital asset marketplace.
                </p>
              </div>
              {/* Subtle Background Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            </section>
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
