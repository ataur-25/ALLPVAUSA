import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail as Mail,
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
    title: "Fresh Edu Email Accounts",
    price: "$5.00",
    desc: "Freshly created edu email accounts with clean login access.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    stock: "3.2K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Edu Email Accounts",
    price: "$15.00",
    desc: "Old verified edu emails with higher trust & stability.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    stock: "1.5K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Edu Email Accounts",
    price: "$30.00",
    desc: "Fully verified edu email accounts with recovery access.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    stock: "900 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Edu Email Package",
    price: "$250",
    desc: "Bulk edu email accounts for agencies, marketing & automation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function EduEmailAccounts() {
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
                Edu Email Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              High quality EDU email accounts with secure access, instant
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
                    <Mail className="text-sky-400" />
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
            All EDU emails are tested • Instant delivery • 24/7 support
          </div>

          {/* Content bg-slate-800/50 */}
          <div className="text-neutral-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Title Header */}
              <header className="border-b border-neutral-800 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  The Ultimate Guide to Buy Verified EDU Mail: Unlock Premium
                  Student Discounts and Developer Tools
                </h1>
              </header>

              {/* Introduction Section */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    In today’s digital era, access to premium software, cloud
                    infrastructure, and educational resources is essential for
                    students, freelancers, developers, and digital marketers
                    alike. However, subscribing to multiple premium platforms
                    can cost thousands of dollars every year.
                  </p>
                  <p>
                    This is where an .edu email address becomes an invaluable
                    asset. An EDU mail is an official email address issued by
                    educational institutions (colleges or universities) to their
                    students and staff. Because tech companies want to support
                    the next generation of professionals, possessing an EDU
                    email unlocks massive, exclusive student discounts, free
                    developer packs, and premium software trials.
                  </p>
                  <p className="font-semibold text-white bg-slate-800/50 border border-neutral-800 p-4 rounded-lg">
                    If you are no longer a student or your institution doesn't
                    provide these emails, the strategic option to buy verified
                    EDU mail accounts allows you to legally and safely access
                    these life-changing discounts, saving you thousands of
                    dollars annually.
                  </p>
                  <p>
                    In this comprehensive guide, we will break down the
                    incredible benefits of verified EDU emails, how to use them
                    safely, and what to look for when choosing a reliable
                    provider.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                    alt="Students working on laptops and studying"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80"
                    alt="Coding interface and student developer setup"
                    className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                  />
                </div>
              </section>

              {/* Section 1: What is a Verified EDU Mail Account? */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What is a Verified EDU Mail Account?
                </h2>
                <p className="text-neutral-400">
                  A Verified EDU Mail Account is a fully activated email address
                  ending with the .edu domain extension, sourced directly from
                  legitimate educational portals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Active Status
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Fully verified and registered with institutional portals
                      for instant credibility across platform filters.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Webmail Access
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Direct access via official university mail portals or
                      major trusted platforms like Office 365 or Google
                      Workspace.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-800/50 border border-neutral-800 rounded-xl">
                    <h3 className="font-semibold text-white mb-1">
                      Exclusive Inbox Control
                    </h3>
                    <p className="text-sm text-neutral-400">
                      A completely private inbox where you can securely receive
                      validation codes and subscription links.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: The Incredible Benefits */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  The Incredible Benefits of Having an EDU Email Address
                </h2>
                <p className="text-neutral-400">
                  The primary reason professionals and businesses look to buy
                  verified EDU mail is the sheer volume of financial perks and
                  premium tools it unlocks. Here are some of the most popular
                  discounts you can claim instantly:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      1. GitHub Student Developer Pack (The Holy Grail for
                      Coders)
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      For developers, designers, and tech enthusiasts, the
                      GitHub Student Developer Pack is worth thousands of
                      dollars. By verifying your EDU email, you get free access
                      to premium developer tools, cloud hosting credits
                      (DigitalOcean, Azure, AWS), free domains via Namecheap,
                      and premium subscriptions to Canva, Termius, and
                      JetBrains.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      2. Massive Cloud Infrastructure Credits
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      If you run a business, test scripts, or host web tools,
                      cloud costs add up quickly. A verified EDU mail grants you
                      starter credits on Amazon Web Services (AWS), over $100 in
                      free trial credits on Microsoft Azure without a credit
                      card requirement, and customized learning paths on Google
                      Cloud.
                    </p>
                  </div>

                  <div className="my-6">
                    <img
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                      alt="Developer workspace with web tools UI design"
                      className="w-full h-56 object-cover rounded-xl border border-neutral-800 shadow-md"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      3. Entertainment and Streaming Discounts
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Get 6 months of Amazon Prime completely free (followed by
                      a 50% discount on subscription renewals) featuring Prime
                      Video, free shipping, and Prime Gaming. Additionally,
                      unlock the Spotify Premium &amp; Hulu bundle at a mere
                      fraction of the standard consumer monthly price.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      4. Premium Software &amp; Design Tools
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      Save over 60% on the standard retail tier for Adobe
                      Creative Cloud (Photoshop, Illustrator, Premiere Pro). You
                      also receive 1-year free educational access to Autodesk
                      (AutoCAD &amp; Maya) and premium features on Canva for
                      Education completely free.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Summary Table */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Summary of Potential Savings with an EDU Mail
                </h2>
                <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-slate-800/50/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-slate-800/50 text-xs font-semibold text-neutral-400 uppercase">
                        <th className="p-4">Premium Platform</th>
                        <th className="p-4">Standard Annual Cost</th>
                        <th className="p-4 text-sky-400">
                          Cost with Verified EDU Mail
                        </th>
                        <th className="p-4 text-emerald-400">
                          Your Net Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-300 divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Amazon Prime
                        </td>
                        <td className="p-4">$139 / year</td>
                        <td className="p-4">$0 (First 6 Mos) then $69/year</td>
                        <td className="p-4 text-emerald-400 font-medium">
                          $70 - $139
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          GitHub Developer Pack
                        </td>
                        <td className="p-4">$2,000+ (Value)</td>
                        <td className="p-4 text-sky-400 font-medium">FREE</td>
                        <td className="p-4 text-emerald-400 font-medium">
                          $2,000+
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Adobe Creative Cloud
                        </td>
                        <td className="p-4">$659.88 / year</td>
                        <td className="p-4">$239.88 / year</td>
                        <td className="p-4 text-emerald-400 font-medium">
                          $420.00
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Microsoft Azure Cloud
                        </td>
                        <td className="p-4">Based on usage</td>
                        <td className="p-4 text-sky-400">$100 Free Credits</td>
                        <td className="p-4 text-emerald-400 font-medium">
                          $100.00
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Spotify + Hulu Bundle
                        </td>
                        <td className="p-4">$263.76 / year</td>
                        <td className="p-4">$71.88 / year</td>
                        <td className="p-4 text-emerald-400 font-medium">
                          $191.88
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Marketers and Freelancers Leverage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  How Marketers and Freelancers Leverage Purchased EDU Emails
                </h2>
                <p className="text-neutral-400">
                  While individual students use these accounts for learning,
                  digital marketers and freelancers utilize them to scale
                  operational infrastructure at minimal costs:
                </p>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="bg-slate-800/50 border border-neutral-800 p-4 rounded-xl">
                    <span className="font-bold text-white block mb-1">
                      Setting Up Budget-Friendly Web Hosting Environments
                    </span>
                    Instead of paying high monthly fees for VPS hosting during
                    the developmental phase of a website, developers buy
                    verified EDU mail to secure free cloud instances on
                    DigitalOcean or Azure.
                  </li>
                  <li className="bg-slate-800/50 border border-neutral-800 p-4 rounded-xl">
                    <span className="font-bold text-white block mb-1">
                      Accessing Advanced AI and Content Tools
                    </span>
                    Many modern AI platforms, academic research tools, and
                    productivity checkers (like Notion, Evernote, and various
                    premium grammar tools) offer free premium tiers exclusively
                    to educational domain configurations.
                  </li>
                  <li className="bg-slate-800/50 border border-neutral-800 p-4 rounded-xl">
                    <span className="font-bold text-white block mb-1">
                      Testing and Development Environments
                    </span>
                    QA engineers and software testers use bulk EDU accounts to
                    register on platforms to simulate how student verification
                    systems function, ensuring software pipelines deploy
                    academic discounts smoothly.
                  </li>
                </ul>
              </section>

              {/* Risks Section - Styled Alert Box */}
              <section className="p-6 bg-rose-950/20 border border-rose-900/60 rounded-xl space-y-4">
                <h3 className="text-xl font-bold text-rose-400 flex items-center gap-2">
                  <span>⚠️</span> Risks of Buying Low-Quality, Bot-Generated EDU
                  Mails
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  The market features many low-grade sellers offering automated,
                  temporary EDU emails for pennies. Buying these unverified
                  accounts can severely hurt your workflows. Avoid "Temp-Mail"
                  style EDU accounts or profiles generated using exploit scripts
                  on public school portals. When an exploit is patched, the
                  email is deleted instantly—causing you to lose all connected
                  premium subscriptions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300 pt-2">
                  <div className="border border-rose-900/40 p-3 bg-slate-800/50 rounded-lg">
                    <span className="font-bold text-white block mb-1">
                      Sudden Deactivation
                    </span>{" "}
                    School sweeps lock cracked profiles instantly.
                  </div>
                  <div className="border border-rose-900/40 p-3 bg-slate-800/50 rounded-lg">
                    <span className="font-bold text-white block mb-1">
                      Loss of Subscriptions
                    </span>{" "}
                    Re-verification prompts cancel active cloud/tool sets.
                  </div>
                  <div className="border border-rose-900/40 p-3 bg-slate-800/50 rounded-lg">
                    <span className="font-bold text-white block mb-1">
                      Data Security Risks
                    </span>{" "}
                    Exploit vendors can maintain access tokens to your active
                    details.
                  </div>
                </div>
              </section>

              {/* Section 5: What to look for */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  What to Look for When You Buy Verified EDU Mail
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/50/60 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      1. Guarantee of Longevity and Stability
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Ensure accounts are legally registered and manually
                      processed to last comfortably from months to multiple
                      years.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50/60 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      2. Custom Username Options vs. Random
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Reliable vendors provide customized name configurations to
                      seamlessly match your authentic business portfolio billing
                      parameters.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50/60 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      3. Clear Replacement Warranty Policy
                    </h4>
                    <p className="text-xs text-neutral-400">
                      A clear 48 to 72-hour protection bracket secures your
                      initial transition phase against unexpected login network
                      faults.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50/60 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      4. Seamless Portal Access
                    </h4>
                    <p className="text-xs text-neutral-400">
                      The email must leverage industry standard platforms such
                      as standard Google Workspace webmail dashboards or Office
                      365 interfaces.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Step-by-Step Maintenance Guide */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Step-by-Step: How to Safely Maintain Your Purchased EDU Mail
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-neutral-800 text-white font-bold rounded-lg h-7 w-7 flex items-center justify-center shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">
                          Update Security Settings Immediately
                        </h5>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Log into the university portal using default logs,
                          instantly deploy a strong alphanumeric password, and
                          assign a backup mobile number if enabled.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-neutral-800 text-white font-bold rounded-lg h-7 w-7 flex items-center justify-center shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">
                          Avoid Spam Activities
                        </h5>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Do not engage in cold email outreach or outbound
                          newsletter loops. Automated flags will trigger instant
                          domain bans for promo-blasting profiles.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-neutral-800 text-white font-bold rounded-lg h-7 w-7 flex items-center justify-center shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">
                          Secure Your Connected Subscriptions
                        </h5>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Isolate credentials. Make sure you use totally
                          separate passwords on individual tools (like Amazon or
                          GitHub) compared to the master webmail inbox password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=500&q=80"
                      alt="Digital Account Access Key Security Settings"
                      className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                    />
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Can I link my purchased EDU mail to my personal Amazon or
                      Spotify account?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      In most cases, companies require a clean registration to
                      activate student discounts. It is highly recommended to
                      create a fresh account using the EDU mail directly to
                      prevent system flags or conflicts with your existing
                      billing details.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      How long does a verified EDU email address stay active?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      A high-quality, legally registered EDU mail can remain
                      functional for years. However, because educational
                      institutions maintain ultimate control over their domains,
                      the longevity depends on the university's specific
                      internal policies.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Do I need a credit card to activate the GitHub Student
                      Pack?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      No. The GitHub Student Developer Pack itself does not
                      require a credit card. However, specific individual
                      partners inside the pack (like certain cloud providers)
                      might require a valid credit card or payment authorization
                      to prevent system abuse, even though they won't charge
                      you.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-neutral-800 rounded-lg">
                    <h4 className="font-semibold text-white mb-1">
                      Is it safe to buy custom EDU accounts?
                    </h4>
                    <p className="text-sm text-neutral-400">
                      Yes, provided you purchase them from a reliable, verified
                      supplier. Custom accounts are excellent because they
                      utilize your real name, which matches your legal IDs if a
                      premium platform ever requests identity verification.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final Outro / Call to Action Box */}
              <section className="p-6 bg-slate-800/50 border border-neutral-800 rounded-xl text-center space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Maximize Your Savings and Tech Stack
                </h2>
                <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
                  Acquiring the right digital tools shouldn't cost you an arm
                  and a leg. Empower your workflow, cut down your recurring
                  software bills, and scale your cloud networks with total
                  confidence today!
                </p>
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
