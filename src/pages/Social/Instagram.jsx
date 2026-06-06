import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiInstagram as Instagram,
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

        <div className="text-3xl font-black text-[#E1306C] mt-5">
          {product.price}
        </div>

        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-black hover:scale-105 transition"
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
    title: "Fresh Instagram Accounts",
    price: "$12.00",
    desc: "Freshly created Instagram accounts with secure login access.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stock: "6K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Instagram Accounts",
    price: "$35.00",
    desc: "Trusted aged Instagram accounts with real activity history.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    stock: "2.3K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Instagram Accounts",
    price: "$80.00",
    desc: "Fully verified Instagram accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    stock: "950 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Instagram Package",
    price: "$550",
    desc: "Bulk Instagram accounts package for agencies & marketing teams.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function InstagramAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0714] via-[#050816] to-[#12061a]" />

        {/* Instagram Style Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#E1306C30_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">
                Instagram Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality Instagram accounts with secure access, instant
              delivery and trusted authenticity.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-[#F58529]" />
              Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#DD2A7B]" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[#8134AF]" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#DD2A7B]/20 text-[#ffb3d1] text-xs font-bold">
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
                    <Instagram className="text-[#DD2A7B]" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-[#DD2A7B] font-bold text-sm">
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
                          <Check className="w-4 h-4 text-[#DD2A7B]" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black text-[#DD2A7B]">
                      {item.price}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* Instagram Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#F58529]/20 via-[#DD2A7B]/20 to-[#8134AF]/20" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[30px] border border-[#DD2A7B]/0 group-hover:border-[#DD2A7B]/40 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm pb-20">
            All Instagram accounts are tested • Instant delivery • 24/7 support
          </div>

          {/* Content */}
          <div
            style={{
              color: "white",
              padding: "30px",
              lineHeight: "1.6",
            }}
          >
            <h1
              style={{
                color: "white",
                marginBottom: "25px",
                fontSize: "2.2rem",
                fontWeight: "bold",
              }}
            >
              The Ultimate Guide to Buy Verified Instagram Accounts: Scale Your
              Brand, Influencer Marketing, and Social Reach with AllPVAUSA
            </h1>

            <p style={{ marginBottom: "15px" }}>
              In the visual-driven world of modern social media, Instagram is an
              absolute goldmine for businesses, e-commerce stores, and digital
              creators. With over two billion monthly active users, it is the
              premier platform for launching viral marketing campaigns, building
              influencer authority, and driving massive targeted traffic to your
              sales funnels. Whether you are running a dropshipping brand, a
              digital marketing agency, or managing multiple client profiles,
              your growth depends on the strength of your social media
              infrastructure.
            </p>

            <p style={{ marginBottom: "15px" }}>
              However, scaling your organic reach or managing automated
              marketing campaigns on Instagram has become incredibly difficult.
              Instagram’s automated AI security filters are notoriously strict.
              Fresh profiles created from the same network are regularly hit
              with instant shadowbans, mandatory phone verification loops, or
              action blocks for minor activities. If your primary account faces
              a sudden restriction, your brand’s daily visibility and sales
              pipelines freeze instantly.
            </p>

            <p style={{ marginBottom: "15px" }}>
              To bypass these algorithmic bottlenecks and maintain a consistent
              market presence, top-performing growth hackers and modern brands
              choose to buy verified Instagram accounts.
            </p>

            <p style={{ marginBottom: "25px" }}>
              At AllPVAUSA, we provide premium, phone-verified, and aged
              Instagram accounts designed to handle heavy social media marketing
              and immediate campaign deployment. In this definitive guide, we
              will break down why purchasing high-quality Instagram accounts is
              a game-changer for your business and why AllPVAUSA is your
              ultimate partner for secure digital assets.
            </p>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "1.7rem",
              }}
            >
              What are Verified Instagram Accounts?
            </h2>
            <p style={{ marginBottom: "15px" }}>
              An Instagram account needs a trusted, clean configuration to
              survive heavy promotional activities. Standard, bot-created
              profiles lack the foundational security scores needed to scale
              without getting flagged.
            </p>
            <p style={{ marginBottom: "15px" }}>
              When you purchase a verified account package from AllPVAUSA, it
              features elite technical specifications:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "25px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "white" }}>
                  Phone Verified Accounts (PVA):
                </strong>{" "}
                Every account is fully verified via SMS using a unique,
                dedicated mobile number, preventing immediate security locks
                during login.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "white" }}>
                  Aged Instagram Profiles:
                </strong>{" "}
                Seasoned accounts created months or years ago. These carry
                established algorithmic trust, making them much more resilient
                to action blocks.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "white" }}>
                  Email Access Included:
                </strong>{" "}
                Every delivery package comes with complete login details for
                both the Instagram profile and the original creation email (OG
                Email), ensuring total ownership.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "white" }}>
                  Bio-Optimized Structures:
                </strong>{" "}
                Clean profiles configured with human-like footprints, profile
                pictures, and natural engagement histories.
              </li>
            </ul>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "1.7rem",
              }}
            >
              Why Top Marketers Rely on AllPVAUSA to Buy Instagram Accounts
            </h2>
            <p style={{ marginBottom: "15px" }}>
              Operating a modern digital brand or affiliate marketing network
              with a single personal Instagram account is a major bottleneck.
              Securing verified digital assets from AllPVAUSA protects your
              business and unlocks several scaling advantages:
            </p>

            <h3
              style={{ color: "white", marginTop: "20px", fontSize: "1.3rem" }}
            >
              1. Instant Campaign Scale and Action Immunity
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Instagram enforces strict daily limits on actions like following,
              liking, commenting, and sending Direct Messages (DMs). If you
              exceed these limits from one profile, your account gets hit with
              an action block or shadowban. By distributing your outreach,
              influencer hunting, and engagement campaigns across multiple
              verified accounts from AllPVAUSA, you multiply your daily
              marketing volume without triggering system alarms.
            </p>

            <h3
              style={{ color: "white", marginTop: "20px", fontSize: "1.3rem" }}
            >
              2. Immediate Access to Advanced Features
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Brand-new accounts face a waiting period before they are granted
              full feature access, high-limit link sharing, or stable ad account
              access. Purchasing Aged Instagram Accounts skips this trial phase
              entirely. These profiles come with pre-existing network trust,
              allowing you to launch high-ticket marketing funnels and bio link
              strategies right away.
            </p>

            <h3
              style={{ color: "white", marginTop: "20px", fontSize: "1.3rem" }}
            >
              3. Bulletproof Instagram DM Automation & Lead Generation
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Mass DM outreach is an incredibly powerful channel for securing
              B2B clients, promoting e-commerce discounts, and booking discovery
              calls. Growth hackers use automation tools to send personalized
              offers to thousands of targeted users. Running this strategy
              safely requires a strong pool of phone-verified PVA accounts.
              AllPVAUSA provides clean, durable accounts that act as the
              backbone for your bulk outreach systems.
            </p>

            <h3
              style={{ color: "white", marginTop: "20px", fontSize: "1.3rem" }}
            >
              4. Flawless Social Proof and Niche Dominance
            </h3>
            <p style={{ marginBottom: "25px" }}>
              In digital space, perception is reality. E-commerce brands and
              agencies buy bulk verified accounts to manage their own comment
              moderation networks, build organic social proof on promotional
              posts, and cross-promote brand initiatives naturally. This native
              engagement helps push your content into the Instagram Explore page
              algorithm.
            </p>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "1.7rem",
              }}
            >
              Technical Comparison: AllPVAUSA Accounts vs. Cheap Market Bots
            </h2>
            <p style={{ marginBottom: "15px" }}>
              Quality determines whether your social assets survive the next
              platform update or get deleted overnight. See how the specialized
              inventory at AllPVAUSA stands up against low-grade market
              alternatives:
            </p>

            <div style={{ overflowX: "auto", marginBottom: "30px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "white",
                  border: "1px solid #444",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#222" }}>
                    <th
                      style={{
                        padding: "12px",
                        border: "1px solid #444",
                        textAlign: "left",
                      }}
                    >
                      Performance Metric
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        border: "1px solid #444",
                        textAlign: "left",
                      }}
                    >
                      Premium AllPVAUSA Instagram Accounts
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        border: "1px solid #444",
                        textAlign: "left",
                      }}
                    >
                      Cheap, Bot-Farmed Profiles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>IP Footprint</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Individual, clean residential/mobile IPs
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Shared, blacklisted data center IP pools
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#1a1a1a" }}>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>Verification Level</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Full Phone Verification (PVA) via real SMS
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      No verification or temporary virtual numbers
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>Account Handover</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Username, Password, 2FA, &amp; OG Email Access
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Only basic Username and Password text strings
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#1a1a1a" }}>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>Algorithmic Resilience</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      High tolerance against sudden action blocks
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Permanently banned on the first login attempt
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>Profile Setup</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      High-quality configurations with photos &amp; bios
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      Empty descriptions, random letters, or bot looks
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#1a1a1a" }}>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      <strong>Customer Protection</strong>
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      24/7 Dedicated Support &amp; Fast Replacements
                    </td>
                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                      No after-sales care / Ghost vendors
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "1.7rem",
              }}
            >
              Operational Blueprint: How to Safely Manage Multiple Instagram
              Accounts
            </h2>
            <p style={{ marginBottom: "15px" }}>
              To preserve the exceptional trust scores of your newly purchased
              Instagram accounts, your team must maintain excellent digital
              hygiene. Follow this step-by-step framework to maximize account
              longevity:
            </p>

            <h3
              style={{ color: "white", marginTop: "15px", fontSize: "1.2rem" }}
            >
              Step 1: Deploy a Specialized Anti-Detect Browser
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Never log into several separate Instagram profiles using standard
              browser windows or multiple account switches on your personal
              smartphone. Instagram tracks device identifiers, canvas
              fingerprints, MAC addresses, and WebGL structures. Use advanced
              software tools like AdsPower, Multilogin, or Dolphin{"{anty}"} to
              isolate every account into its own sandboxed virtual device.
            </p>

            <h3
              style={{ color: "white", marginTop: "15px", fontSize: "1.2rem" }}
            >
              Step 2: Connect via Premium Residential Proxies
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Pair every single Instagram account inside your anti-detect
              browser with a high-quality SOCKS5 residential or 4G/5G mobile
              proxy. Never utilize free VPN services or low-grade proxies. Match
              your proxy's location to the native country profile of the account
              you purchased from AllPVAUSA to ensure the automated system
              registers a completely natural, local human login.
            </p>

            <h3
              style={{ color: "white", marginTop: "15px", fontSize: "1.2rem" }}
            >
              Step 3: Always Utilize Cookie Login Data
            </h3>
            <p style={{ marginBottom: "15px" }}>
              When you purchase an account package from us, we provide a
              complete cookie data string. Import these cookies directly into
              your virtual browser profile before opening the Instagram login
              screen. This fills your browser environment with authentic web
              history, ensuring Instagram recognizes the login as a safe,
              returning user session rather than a suspicious entry.
            </p>

            <h3
              style={{ color: "white", marginTop: "15px", fontSize: "1.2rem" }}
            >
              Step 4: Warm Up the Accounts Gradually
            </h3>
            <p style={{ marginBottom: "15px" }}>
              Do not buy a batch of accounts and immediately start blasting
              hundreds of DMs or follows on day one. Give the account a couple
              of days to adjust to your proxy network:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "25px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "white" }}>Day 1–2:</strong> Log in,
                view a few Instagram Stories, watch some Reels, like 1 or 2
                niche-relevant posts, and close the session.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "white" }}>Day 3–4:</strong> Update the
                profile bio gently or post an organic photo. Send 2 to 3 manual
                DMs to trusted profiles.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "white" }}>Day 5 and beyond:</strong>{" "}
                Gradually ramp up your automated outreach and marketing
                workflows while keeping realistic intervals and human-like
                pacing between actions.
              </li>
            </ul>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "20px",
                fontSize: "1.7rem",
              }}
            >
              Frequently Asked Questions (FAQs)
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ marginBottom: "5px" }}>
                <strong>
                  Can I change the account's password and profile name after
                  purchasing?
                </strong>
              </p>
              <p>
                Yes, absolutely. Once you have safely logged into the profile
                and allowed it to stabilize on your proxy network for 48 to 72
                hours, you can comfortably update the login passwords, profile
                handles, and connected email details to align perfectly with
                your brand identity.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ marginBottom: "5px" }}>
                <strong>
                  Why are aged Instagram accounts better than fresh ones?
                </strong>
              </p>
              <p>
                Aged accounts carry historical validity inside Instagram’s core
                security database. Freshly registered profiles are monitored
                very closely and face strict action restrictions, whereas aged
                accounts possess the structural durability to handle immediate
                marketing and outreach workflows smoothly.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ marginBottom: "5px" }}>
                <strong>
                  What kind of customer warranty does AllPVAUSA provide?
                </strong>
              </p>
              <p>
                At AllPVAUSA, customer satisfaction and business continuity are
                our core pillars. We back all our account packages with a
                definitive replacement warranty window. If any asset exhibits a
                pre-existing restriction or a login failure straight out of the
                box, our 24/7 technical support team will provide a fresh
                replacement right away.
              </p>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <p style={{ marginBottom: "5px" }}>
                <strong>
                  Should I link the same Facebook Page to multiple Instagram
                  profiles?
                </strong>
              </p>
              <p>
                Linking the exact same Facebook fan page or business manager to
                dozens of separate Instagram marketing accounts creates an
                extensive operational footprint. If one profile runs into an
                algorithmic issue, Instagram may flag all connected channels. We
                highly recommend keeping your marketing accounts completely
                isolated or linking them to distinct, separate assets to
                safeguard your network.
              </p>
            </div>

            <h2
              style={{
                color: "white",
                marginTop: "30px",
                marginBottom: "15px",
                fontSize: "1.7rem",
              }}
            >
              Scale Your Social Infrastructure with AllPVAUSA Today!
            </h2>
            <p style={{ marginBottom: "15px" }}>
              In the competitive digital space, consistency and visibility are
              everything. Don't let strict platform rules, sudden action blocks,
              or automated verification holds pause your social media growth,
              halt your outbound marketing campaigns, or disrupt your e-commerce
              sales funnels.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Build a powerful, highly resilient multi-account social media
              network designed for heavy outbound marketing, safe lead
              generation, and continuous brand scaling.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Partner with the world’s leading digital asset marketplace.
              Explore our premium inventory of high-trust, phone-verified, and
              aged Instagram profiles, and take your social media reach to the
              next level.
            </p>
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
