import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiLinkedin as Linkedin,
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

        <div className="text-3xl font-black text-[#0A66C2] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white font-black hover:scale-105 transition"
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
    title: "Fresh LinkedIn Accounts",
    price: "$18.00",
    desc: "Freshly created LinkedIn accounts with secure login access.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    stock: "3.5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged LinkedIn Accounts",
    price: "$50.00",
    desc: "Trusted aged LinkedIn accounts with profile activity history.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    stock: "1.6K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified LinkedIn Accounts",
    price: "$110.00",
    desc: "Fully verified LinkedIn accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stock: "780 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk LinkedIn Package",
    price: "$750",
    desc: "Bulk LinkedIn accounts package for agencies & recruiters.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function LinkedinAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06111f] via-[#050816] to-[#07182d]" />

        {/* LinkedIn Style Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0A66C230_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">
                LinkedIn Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality LinkedIn accounts with secure access, instant
              delivery and trusted authenticity.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-[#0A66C2]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#4da3ff]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#7fc1ff]" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#0A66C2]/20 text-[#9ed0ff] text-xs font-bold">
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
                    <Linkedin className="text-[#0A66C2]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#0A66C2] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#0A66C2]" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#0A66C2]">
                      {item.price}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* LinkedIn Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#0A66C2]/20 to-[#004182]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#0A66C2]/0 group-hover:border-[#0A66C2]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All LinkedIn accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}

          {/* Main Header */}
          <header className="mb-12 border-b border-slate-800 pb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              The Ultimate Guide to Buy Verified LinkedIn Accounts: Scale B2B
              Lead Generation, Recruitment, and Outreach with AllPVAUSA
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              In the modern corporate world, LinkedIn has evolved from a simple
              job-seeking directory into the world’s largest B2B networking,
              lead generation, and social selling platform. With over one
              billion professional users, it is the ultimate goldmine for B2B
              marketers, enterprise sales teams, affiliate marketers, and
              corporate recruiters. If you want to connect with CEOs,
              decision-makers, tech founders, or high-ticket clients, LinkedIn
              is where they live.
            </p>
          </header>

          {/* Introduction Section */}
          <section className="space-y-6 text-slate-200 leading-relaxed mb-12">
            <p>
              However, scaling your operations on LinkedIn is no longer as
              simple as sending a few connection requests. To maintain platform
              quality, LinkedIn has implemented some of the strictest AI
              surveillance systems in the digital space. Fresh or unverified
              profiles that attempt to send bulk connection requests, run
              scraping tools, or launch heavy message sequences are flagged
              instantly, leading to mandatory ID verification or permanent
              account restrictions.
            </p>
            <p>
              For serious businesses and sales teams, waiting weeks to build a
              single profile manually is a massive operational delay. This is
              exactly why top-performing growth hackers and B2B agencies choose
              to buy verified LinkedIn accounts.
            </p>
            <p>
              At AllPVAUSA, we provide premium, fully verified, and aged
              LinkedIn accounts designed to handle heavy professional networking
              and high-volume lead generation. In this definitive guide, we will
              explore how purchasing high-trust LinkedIn profiles can
              supercharge your business expansion and why AllPVAUSA is the
              premier global marketplace for verified digital assets.
            </p>
          </section>

          {/* Section: What are Verified LinkedIn Accounts? */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What are Verified LinkedIn Accounts?
            </h2>
            <p className="text-slate-200 mb-6 leading-relaxed">
              A LinkedIn account needs a verified and organic digital footprint
              to survive high-volume business activities. Standard, bot-created
              profiles lack the backend trust required to access advanced
              features or handle outbound communication filters.
            </p>
            <p className="text-slate-200 mb-4 font-semibold">
              When you buy verified LinkedIn account structures from AllPVAUSA,
              you unlock high-grade assets equipped with:
            </p>
            <ul className="space-y-4 text-slate-200 list-none pl-0">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">✓</span>
                <div>
                  <strong className="text-white">
                    Phone Verified Accounts (PVA):
                  </strong>{" "}
                  Every account is fully activated via text with a unique, real
                  mobile number, removing immediate security bottlenecks.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">✓</span>
                <div>
                  <strong className="text-white">
                    Identity-Verified (ID Checked) Profiles:
                  </strong>{" "}
                  Premium tier accounts where real identification processes have
                  been completed to grant the profile maximum system trust.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">✓</span>
                <div>
                  <strong className="text-white">
                    Aged LinkedIn Profiles:
                  </strong>{" "}
                  Accounts that have been seasoned for months or years, carrying
                  a natural history, profile photos, connections, and realistic
                  platform activity.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">✓</span>
                <div>
                  <strong className="text-white">Email Access Included:</strong>{" "}
                  Every delivery package comes with complete login details for
                  both the LinkedIn profile and the connected email address.
                </div>
              </li>
            </ul>
          </section>

          {/* Section: Why Top B2B Agencies Rely on AllPVAUSA */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Why Top B2B Agencies Rely on AllPVAUSA to Buy LinkedIn Accounts
            </h2>
            <p className="text-slate-200 mb-8 leading-relaxed">
              If your entire business outreach rests on a single personal or
              executive LinkedIn profile, you are exposed to a major operational
              bottleneck. If LinkedIn restricts that single profile, your B2B
              sales pipeline stalls immediately. Securing verified accounts from
              AllPVAUSA provides structural protection and unlocks multiple
              growth advantages:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  1. Bypass Strict Weekly Connection Invitation Limits
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  To prevent spam, LinkedIn enforces a strict weekly connection
                  limit (typically around 100 connection requests per week per
                  account). For a sales team aiming to reach thousands of
                  prospects monthly, this restriction makes scaling impossible.
                  By distributing your outreach campaign across multiple
                  verified LinkedIn accounts purchased from AllPVAUSA, you
                  multiply your outbound connection capacity by 5x, 10x, or 20x
                  without breaking platform algorithms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  2. High-Volume Cold Message Campaigns (InMail Arbitrage)
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Cold messaging on LinkedIn has one of the highest conversion
                  rates in digital marketing. Using a network of authentic,
                  pre-warmed profiles allows your sales reps to reach out to
                  distinct target audiences simultaneously. If one profile hits
                  a temporary warning for messaging too fast, your other sales
                  channels keep running smoothly, maintaining a steady influx of
                  booked meetings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3. Bulletproof B2B Data Scraping and Lead Extraction
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Growth hackers use advanced tools like Sales Navigator
                  scrapers or PhantomBuster to extract emails, company data, and
                  employee lists. Doing this on a primary account is dangerous.
                  Utilizing seasoned, phone-verified profiles from AllPVAUSA
                  allows your data collection scripts to run efficiently in the
                  background, keeping your corporate identity fully protected.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  4. Enterprise Recruitment and Mass Job Posting
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Corporate headhunters and recruitment agencies often need to
                  manage talent searches across various industries, cities, and
                  departments simultaneously. Operating multiple verified
                  profiles allows your HR team to cast a wider net, post
                  numerous job opportunities, and engage top talent natively
                  without triggering suspicious-behavior flags.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Technical Comparison Table */}
          <section className="mb-12 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technical Comparison: AllPVAUSA Profiles vs. Cheap Market Bots
            </h2>
            <p className="text-slate-200 mb-6 leading-relaxed">
              Quality is the thin line between a successful sales quarter and a
              permanently banned account. Review how the specialized inventory
              at AllPVAUSA stands up against cheap, automated alternatives:
            </p>

            <div className="overflow-x-auto border border-slate-800 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="p-4 text-white font-bold text-sm uppercase tracking-wider">
                      Performance Metric
                    </th>
                    <th className="p-4 text-white font-bold text-sm uppercase tracking-wider">
                      Premium AllPVAUSA LinkedIn Accounts
                    </th>
                    <th className="p-4 text-white font-bold text-sm uppercase tracking-wider">
                      Cheap, Bot-Farmed Profiles
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50 text-slate-300 text-sm">
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Registration Blueprint
                    </td>
                    <td className="p-4">
                      Clean residential/mobile IP addresses
                    </td>
                    <td className="p-4">
                      Shared, low-grade data center IP pools
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Verification Level
                    </td>
                    <td className="p-4">
                      Full Phone Verification (PVA) + Optional ID Check
                    </td>
                    <td className="p-4">
                      No verification or temporary fake numbers
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Profile Integrity
                    </td>
                    <td className="p-4">
                      Complete profiles with human-like configurations
                    </td>
                    <td className="p-4">
                      Empty bios, missing photos, or gibberish names
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Platform Longevity
                    </td>
                    <td className="p-4">
                      High stability for long-term outbound scaling
                    </td>
                    <td className="p-4">
                      Banned within 12 to 24 hours of first login
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Data Package Included
                    </td>
                    <td className="p-4">
                      Full access (Username, Password, 2FA, Email login)
                    </td>
                    <td className="p-4">Only Username and Password strings</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">
                      Customer Protection
                    </td>
                    <td className="p-4">
                      24/7 Live Support & Secure Replacement Window
                    </td>
                    <td className="p-4">No warranty / Ghost vendors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Operational Blueprint */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Operational Blueprint: How to Safely Manage Multiple LinkedIn
              Accounts
            </h2>
            <p className="text-slate-200 mb-8 leading-relaxed">
              To preserve the elite trust scores of your newly purchased
              LinkedIn accounts, your team must maintain clean digital hygiene.
              Follow this step-by-step framework to maximize account longevity:
            </p>

            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Step 1: Implement an Anti-Detect Browser
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Never log into several separate LinkedIn profiles from
                  standard browser tabs on your daily machine. LinkedIn monitors
                  your local canvas tracking data, MAC addresses, operating
                  system fingerprints, and browser plugins. Use specialized
                  tools like{" "}
                  <span className="text-white font-medium">AdsPower</span>,{" "}
                  <span className="text-white font-medium">Multilogin</span>, or{" "}
                  <span className="text-white font-medium">
                    Dolphin{"{anty}"}
                  </span>{" "}
                  to keep each profile isolated inside its own sandboxed virtual
                  environment.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Step 2: Use Dedicated SOCKS5 Residential Proxies
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Connect every single profile profile inside your anti-detect
                  browser to a premium, dedicated residential or 4G/5G mobile
                  proxy. Never utilize cheap or free public VPN networks. Match
                  your proxy's geographical location to the native country
                  profile of the account you purchased from AllPVAUSA to
                  simulate a completely legitimate, local corporate
                  professional.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Step 3: Warm Up the Accounts Gradually
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Do not buy a batch of accounts and immediately start blasting
                  50 connection requests per profile on day one. Treat the
                  account with a human touch:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                  <li>
                    <strong className="text-white">Day 1–2:</strong> Log in,
                    scroll through the home feed for 5 minutes, read a few posts
                    from corporate leaders, and log out.
                  </li>
                  <li>
                    <strong className="text-white">Day 3–4:</strong> Follow a
                    few official corporate pages or join relevant LinkedIn
                    Groups inside your target industry. Send 2 to 3 connection
                    requests to highly relevant contacts.
                  </li>
                  <li>
                    <strong className="text-white">Day 5 and beyond:</strong>{" "}
                    Gradually ramp up your connection invitations and message
                    volumes, maintaining realistic spacing and intervals between
                    actions.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I change the account's password and profile name after
                  purchasing?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes, absolutely. Once you have logged into the profile safely
                  and allowed it to settle on your proxy network for 48 to 72
                  hours, you can update the password, primary email, and profile
                  fields to align perfectly with your corporate branding.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Why is buying aged LinkedIn accounts better than creating
                  fresh ones?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Aged accounts carry historical data and internal trust within
                  the network's automated security database. Freshly registered
                  profiles are heavily restricted and closely monitored, whereas
                  aged accounts possess the durability to handle automated
                  scaling and outreach workflows much more smoothly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What kind of customer warranty does AllPVAUSA provide?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  At AllPVAUSA, we prioritize client safety. We back our
                  products with a definitive replacement warranty window. If any
                  account displays a pre-existing restriction or login failure
                  immediately upon delivery, our 24/7 technical support team
                  will provide a fresh replacement right away.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is it safe to connect Sales Navigator to these accounts?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. Our premium, verified LinkedIn accounts are fully
                  compatible with Sales Navigator subscriptions. When you
                  combine our high-trust accounts with Sales Navigator’s
                  advanced search capabilities, your B2B outreach infrastructure
                  becomes virtually unstoppable.
                </p>
              </div>
            </div>
          </section>

          {/* Section: CTA (Call to Action) */}
          <section className="rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Scale Your B2B Growth Infrastructure with AllPVAUSA Today!
            </h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              In the competitive corporate landscape, consistency is everything.
              Don't let strict weekly invitation caps, sudden ID check locks, or
              automated system flags pause your outbound marketing, halt your
              recruitment drives, or interrupt your sales pipeline.
            </p>
            <p className="text-slate-200 mb-8 max-w-xl mx-auto font-medium">
              Build a powerful, highly resilient multi-account network designed
              for heavy outbound messaging, safe scraping, and continuous
              high-ticket lead generation.
            </p>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm italic">
                Partner with the world’s most trusted digital asset marketplace.
                Explore our premium inventory of high-trust, phone-verified, and
                aged LinkedIn profiles, and take your corporate outreach to the
                next level.
              </p>
            </div>
          </section>
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
