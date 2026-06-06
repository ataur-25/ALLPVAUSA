import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMessageSquare as TextNow,
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

        <div className="text-3xl font-black text-[#7B61FF] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#7B61FF] to-[#5B42F3] text-white font-black hover:scale-105 transition"
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
    title: "Fresh TextNow Accounts",
    price: "$8.00",
    desc: "Freshly created TextNow accounts with instant access.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stock: "5.5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged TextNow Accounts",
    price: "$25.00",
    desc: "Trusted aged TextNow accounts with active usage history.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    stock: "2.2K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified TextNow Accounts",
    price: "$60.00",
    desc: "Fully verified TextNow accounts with secure recovery access.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    stock: "950 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk TextNow Package",
    price: "$420",
    desc: "Bulk TextNow accounts package for agencies & automation.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function TextNowAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120b2f] via-[#050816] to-[#0a1030]" />

        {/* TextNow Style Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#7B61FF30_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#7B61FF] to-[#5B42F3] bg-clip-text text-transparent">
                TextNow Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality TextNow accounts with secure access, instant
              delivery and trusted authenticity.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-[#7B61FF]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#9d8bff]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#c3b8ff]" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#7B61FF]/20 text-[#d0c8ff] text-xs font-bold">
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
                    <TextNow className="text-[#7B61FF]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#7B61FF] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#7B61FF]" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#7B61FF]">
                      {item.price}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#7B61FF] to-[#5B42F3] text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* TextNow Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#7B61FF]/20 to-[#5B42F3]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#7B61FF]/0 group-hover:border-[#7B61FF]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm pb-20">
            All TextNow accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Enterprise Communication Assets
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Buy Verified TextNow Accounts
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Enhance Your Bulk SMS Marketing &amp; Business Communication
                with{" "}
                <span className="text-blue-400 font-semibold">AllPVAUSA</span>
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                alt="Digital Communication and VoIP Network"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl border border-neutral-800"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Decorative Light Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
            <div className="absolute -top-40 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-[140px]"></div>
          </div>

          {/* Main Content Layout */}
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Intro Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6 text-neutral-300 text-base leading-relaxed">
                <p>
                  In today’s fast-paced digital ecosystem, seamless and
                  cost-effective communication is the backbone of any successful
                  business strategy. Whether you are running a cold outreach
                  marketing campaign, managing SMS verification for multiple
                  digital platforms, or setting up a localized customer support
                  system in the United States or Canada, having reliable phone
                  numbers is mandatory.
                </p>
                <p>
                  Among all Virtual Number (VoIP) platforms, TextNow stands out
                  as the most popular choice for businesses and digital
                  marketers globally. It provides seamless calling, texting, and
                  communication features without the need for traditional,
                  expensive physical SIM cards. However, creating and keeping
                  multiple TextNow accounts alive can be an absolute nightmare
                  due to geography restrictions, strict device fingerprinting,
                  and aggressive automated security filters.
                </p>
                <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-xl">
                  To bypass these operational blocks and instantly scale your
                  communication infrastructure, savvy growth hackers and modern
                  brands choose to buy verified TextNow accounts.
                </p>
                <p>
                  At AllPVAUSA, we specialize in delivering premium, stable, and
                  phone-verified TextNow accounts that are structured to handle
                  bulk business communication and immediate marketing
                  deployment. In this comprehensive guide, we will look into why
                  purchasing high-quality TextNow profiles is a game-changer for
                  your workflow and why AllPVAUSA is your ultimate digital asset
                  partner.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=500&auto=format&fit=crop"
                  alt="Bulk Messaging Concept"
                  className="w-full h-64 object-cover rounded-xl border border-neutral-800 shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format&fit=crop"
                  alt="Digital Workspace Support"
                  className="w-full h-64 object-cover rounded-xl border border-neutral-800 shadow-md"
                />
              </div>
            </section>

            {/* Section 1: What are Verified TextNow Accounts */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-blue-500">#</span> What are Verified
                TextNow Accounts?
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                TextNow relies on automated security algorithms to prevent spam.
                Freshly created accounts registered using standard IP addresses
                or virtual browsers are often hit with immediate bans,
                suspension flags, or persistent phone re-verification loops.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone Verified Accounts (PVA)
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Every single profile is fully verified via unique,
                    non-virtual SMS mobile numbers, ensuring the profile carries
                    a high initial trust score.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Clean US/Canada IP Footprints
                  </h3>
                  <p className="text-sm text-neutral-400">
                    These accounts are created and nurtured using fresh, premium
                    residential proxies, perfectly matching TextNow's core
                    geographic requirements.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Full Credential Handover
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Your delivery includes the TextNow username, password,
                    associated email address login details, and recovery
                    information for 100% ownership.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Aged &amp; Maintained History
                  </h3>
                  <p className="text-sm text-neutral-400">
                    We offer seasoned TextNow accounts that have bypassed the
                    initial security scrutiny period, making them significantly
                    more resilient to sudden action blocks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Strategic Advantages */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Strategic Advantages of Buying TextNow Accounts from AllPVAUSA
                </h2>
                <p className="text-neutral-400 mt-2">
                  Relying on a single physical phone line severely limits your
                  company’s outreach and scaling capabilities. Securing verified
                  TextNow assets unlocks massive operational leverage:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      1. Seamless Bulk SMS and Cold Text Marketing
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      SMS marketing yields open rates higher than 90%, making it
                      one of the most conversion-rich channels in digital
                      marketing. However, texting hundreds of leads from one
                      number will trigger automated carrier blocks. By
                      distributing your marketing campaigns across an organized
                      pool of verified TextNow accounts from AllPVAUSA, you can
                      send higher text volumes daily without running into
                      platform restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      2. Effortless Platform Verifications (PVA Matrix)
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Modern websites—ranging from e-commerce stores and social
                      media platforms to classified ad portals like
                      Craigslist—require distinct mobile phone verifications to
                      run multiple seller or marketer accounts. TextNow provides
                      real, dedicated North American phone numbers, allowing you
                      to easily receive verification codes and scale your
                      peripheral digital account networks.
                    </p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=500&auto=format&fit=crop"
                    alt="Data Automation and Scale Network"
                    className="w-full h-80 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop"
                    alt="Global Digital Infrastructure"
                    className="w-full h-80 object-cover rounded-xl border border-neutral-800"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      3. Establish a Local US/Canada Brand Presence
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      If you are managing an international agency, digital
                      service platform, or dropshipping business from outside
                      North America, establishing local trust is key. TextNow
                      lets you choose specific US area codes. This gives your
                      overseas team a credible local voice, making American and
                      Canadian clients far more likely to answer your calls and
                      respond to your messages.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      4. Cost-Effective Scaling vs. Physical SIM Cards
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Purchasing physical SIM cards, paying for monthly cellular
                      contracts, and maintaining hardware configurations for a
                      growing remote team is incredibly expensive. Buying bulk
                      TextNow accounts provides an immediate virtual
                      communication setup at a fraction of the cost.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Technical Comparison Table */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Technical Comparison: AllPVAUSA Premium Accounts vs. Low-Grade
                Market Bots
              </h2>
              <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-slate-800/50/30">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      <th className="p-4">Performance Metric</th>
                      <th className="p-4 text-blue-400">
                        Premium AllPVAUSA TextNow Accounts
                      </th>
                      <th className="p-4">Cheap, Script-Generated Profiles</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-neutral-800 text-neutral-300">
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Creation Network
                      </td>
                      <td className="p-4">
                        Clean, premium US/Canada Residential IPs
                      </td>
                      <td className="p-4 text-neutral-500">
                        Blacklisted, cheap data center proxy pools
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Verification Score
                      </td>
                      <td className="p-4 text-emerald-400">
                        Full Phone Verification (PVA)
                      </td>
                      <td className="p-4 text-neutral-500">
                        Unverified or bypassed via temporary numbers
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Login Durability
                      </td>
                      <td className="p-4">
                        High resilience against proxy/location switches
                      </td>
                      <td className="p-4 text-rose-500 font-medium">
                        Banned or locked instantly on the first login
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Handover Security
                      </td>
                      <td className="p-4">
                        Complete TextNow + Original Email access
                      </td>
                      <td className="p-4 text-neutral-500">
                        Limited credentials with shared recovery emails
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Longevity</td>
                      <td className="p-4 text-emerald-400">
                        Excellent for long-term calling &amp; texting
                      </td>
                      <td className="p-4 text-neutral-500">
                        Numbers dropped or disabled within hours
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">
                        Customer Protection
                      </td>
                      <td className="p-4">
                        24/7 Dedicated Support &amp; Fast Replacements
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
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Operational Blueprint: How to Safely Manage Multiple TextNow
                Accounts
              </h2>
              <p className="text-neutral-400">
                To maximize the lifespan of your purchased TextNow accounts and
                maintain their high structural trust scores, your team should
                execute strict digital security protocols:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                <div className="space-y-8 border-l border-neutral-800 pl-4">
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Step 1: Isolate via Anti-Detect Browsers
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Never open multiple TextNow accounts simultaneously on
                      standard Google Chrome or Firefox tabs. TextNow’s security
                      systems scan cookies, canvas fingerprints, and browser
                      metadata. Use dedicated multi-accounting tools like
                      AdsPower, Multilogin, or {"Dolphin{anty}"} to create a
                      completely sandboxed virtual hardware profile for each
                      account.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Step 2: Bind to Premium US/Canada Residential Proxies
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Because TextNow is built strictly for North American
                      users, accessing it from an international IP will result
                      in an immediate suspension. Pair every virtual browser
                      profile with a premium, high-quality SOCKS5 US or Canadian
                      residential proxy. Never use free VPNs or shared data
                      center proxies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Step 3: Clear Browser Footprints &amp; Use Cookie Login
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Before accessing the login interface, ensure your virtual
                      profile's time zone, language settings, and location
                      strings perfectly match the proxy IP. Where applicable,
                      import provided cookie strings to emulate a natural,
                      returning user session rather than a completely fresh
                      hardware entry.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Step 4: Keep the Phone Numbers Active
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      TextNow has a strict policy regarding inactive numbers: if
                      a free number does not send a text or make a call for a
                      few days, the system recycles it. Set a weekly routine for
                      your team to send an outbound text or make a brief call
                      from each account to permanently lock in your dedicated
                      phone numbers.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
                    alt="System Monitoring Dashboard"
                    className="w-full h-96 object-cover rounded-xl border border-neutral-800 shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 5: FAQs */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-base font-semibold text-white mb-2">
                    Can I choose specific area codes when buying TextNow
                    accounts?
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Yes! If you have specific regional requirements for your
                    marketing or outreach campaigns, you can coordinate with our
                    sales team during your purchase, and we will do our best to
                    provide account packages configured with your desired
                    US/Canada area codes.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-base font-semibold text-white mb-2">
                    Are these accounts safe for long-term business use?
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Absolutely. Because our accounts are built on genuine phone
                    verifications and clean residential networks, they are
                    designed for longevity. As long as you manage them using
                    clean, dedicated proxies and follow TextNow's fair usage
                    policies, they will serve as long-term assets for your
                    business.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-800/50 border border-neutral-800">
                  <h3 className="text-base font-semibold text-white mb-2">
                    What happens if an account gets locked right after purchase?
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    At AllPVAUSA, we value your business continuity. Every
                    package comes with a clear replacement warranty window. If
                    you experience a login issue or find a pre-existing
                    restriction right out of the box, simply reach out to our
                    24/7 customer support team, and we will issue a fresh
                    replacement immediately.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Footer / CTA Section */}
          <footer className="border-t border-neutral-800 py-16 px-4 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Streamline Your Business Communication with AllPVAUSA Today!
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-base">
                Don't let geographic restrictions, strict automated security
                filters, or complex number verification setups stall your
                outbound text marketing campaigns. Build a reliable,
                high-performing virtual communication network.
              </p>

              <p className="text-xs text-neutral-600 pt-6">
                © {new Date().getFullYear()} AllPVAUSA. Secure your business
                communication infrastructure with total peace of mind.
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
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
