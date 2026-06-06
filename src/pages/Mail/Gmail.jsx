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

// import gmailProducts from "../../data/maill/gmailProducts";
import PurchaseModal from "../../components/checkout/PurchaseModal";

// ── Products ─────────────────────────────
const products = [
  {
    id: "gmail-fresh",
    title: "Fresh Gmail Accounts",
    price: "$3.00",
    pricing: { 1: 3, 10: 28, 50: 135, 100: 250 },
    desc: "Newly created Gmail accounts with clean IP history.",
    description:
      "Newly created Gmail accounts with clean IP history. Ideal for mass registrations and short term usage.",
    delivery: "Instant via Email",
    warranty: "24 Hours Replacement",
    img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200",
    stock: "5K+ Available",
    badge: "Fresh",
  },
  {
    id: "gmail-aged",
    title: "Aged Gmail Accounts",
    price: "$10.00",
    pricing: { 1: 10, 5: 45, 10: 85 },
    desc: "Old Gmail accounts with trusted activity history.",
    description:
      "Old Gmail accounts (1+ year old) with trusted activity history. Highly durable for campaigns.",
    delivery: "Instant via Email",
    warranty: "7 Days Replacement",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
    stock: "2K+ Available",
    badge: "Best Seller",
  },
  {
    id: "gmail-verified",
    title: "Verified Gmail Accounts",
    price: "$25.00",
    pricing: { 1: 25, 5: 110, 10: 200 },
    desc: "Phone verified Gmail accounts with recovery options.",
    description:
      "Fully phone verified Gmail accounts with complete recovery details included.",
    delivery: "Up to 2 Hours",
    warranty: "30 Days Replacement",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200",
    stock: "1K+ Available",
    badge: "Verified",
  },
  {
    id: "gmail-bulk",
    title: "Bulk Gmail Package",
    price: "$199",
    pricing: { 1: 199, 2: 380, 5: 900 },
    desc: "Bulk Gmail accounts for marketing & automation systems.",
    description:
      "High quality bulk Gmail package. Specifically farmed for automation tools and bulk email marketing.",
    delivery: "12-24 Hours",
    warranty: "3 Days Replacement",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function GmailAccounts() {
  // ✅ Added State
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07152d] via-[#050816] to-[#08111f]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ef444430_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-7xl font-black">
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                Gmail Accounts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              High quality Gmail accounts with secure access, instant delivery
              and trusted verification.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-red-400" />
              Secure Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-pink-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-red-300" />
              Verified Quality
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold">
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
                    <Mail className="text-red-400" />
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  <div className="mt-3 text-red-400 font-bold text-sm">
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
                          <Check className="w-4 h-4 text-red-400" />
                          {f}
                        </div>
                      ),
                    )}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black">{item.price}</div>

                    {/* ✅ Added onClick */}
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-red-500/10 to-pink-500/10" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            Gmail accounts are delivered instantly • 24/7 support available
          </div>

          {/* ================================================================================================= */}
          {/* Content */}

          <>
            {/* Header Section */}
            <header className="border-b border-slate-800 py-12 px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm bg-blue-950/60 px-3 py-1 rounded-full border border-blue-900/50">
                  Ultimate Guide
                </span>
                <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Gmail Account: The Complete Guide to Setup, Login, Security,
                  and Advanced Features
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Gmail isn’t just another email service—it’s the go-to platform
                  for millions around the world. Whether you’re sending a quick
                  note to a friend, running a business, or just signing up for
                  new apps, having a Gmail account streamlines everything.
                </p>
              </div>
            </header>

            {/* Main Content Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
              {/* Intro Section */}
              <section className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Google built Gmail to be fast, reliable, and easy to use.
                  Plus, it ties in with the rest of Google’s tools, so you get
                  more than just an inbox.
                </p>

                <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/60 shadow-xl backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    What Is a Gmail Account?
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    A Gmail account gives you free email powered by Google. With
                    one login, you can handle daily communication, save and
                    share files, and move easily between Gmail, Google Drive,
                    YouTube, Docs, Meet—pretty much everything Google runs. And
                    because it’s all connected, you get extra speed, tight
                    security, and rock-solid reliability.
                  </p>
                </div>
              </section>

              {/* First Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80"
                  alt="Workspace showing professional email communication"
                  className="w-full h-[350px] object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Why Choose Gmail Grid */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Why Do So Many People Use Gmail?
                </h2>
                <p className="text-slate-400 mb-6">
                  Gmail stands out, and here’s why people keep coming back:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Big Storage Space",
                      desc: "Google gives you a big chunk of free storage that you can use across Gmail, Google Drive, and Google Photos.",
                    },
                    {
                      title: "Spam Blocking That Actually Works",
                      desc: "Gmail’s filters keep your inbox clean by kicking out spam, phishing attempts, and suspicious links.",
                    },
                    {
                      title: "Sleek, Simple Interface",
                      desc: "No clutter. Everything is exactly where you expect it—quick and easy.",
                    },
                    {
                      title: "All-in-One Access",
                      desc: "One account unlocks every Google service you need.",
                    },
                    {
                      title: "Strong Security",
                      desc: "Two-step verification, alerts for suspicious activity, and flexible recovery options keep you covered.",
                    },
                    {
                      title: "Completely Free",
                      desc: "No fees, no small print.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-blue-500/50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Setup, Login & Recovery Steps */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    How to Set Up Your Gmail Account
                  </h2>
                  <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl">
                    <p className="text-slate-300 mb-6">
                      You can get started in minutes. Here’s how you do it:
                    </p>
                    <ol className="space-y-4">
                      {[
                        "Head to the Google account creation page.",
                        "Enter your full name, pick a username (that’s your new email address), and set a password.",
                        "Make a strong password—mix uppercase, lowercase, numbers, and symbols.",
                        "Add your phone number for extra security (Google will probably ask for this).",
                        "You’ll have the option to give a recovery email—definitely a good idea.",
                        "Accept Google’s terms and hit agree.",
                        "That’s it—you’re in.",
                      ].map((step, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950 text-blue-400 border border-blue-800 flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </span>
                          <span className="text-slate-300">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Login Steps */}
                  <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                      How to Log In to Gmail
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Go to the Gmail sign-in page.",
                        "Punch in your email address.",
                        "Click Next, then enter your password.",
                        "Hit Sign In—you’re good to go.",
                      ].map((step, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 items-start text-sm text-slate-300"
                        >
                          <span className="text-blue-400 font-medium">
                            0{idx + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 pt-4 border-t border-slate-700/60 text-xs text-slate-400 italic">
                      Once you’re logged in, your full inbox and every Google
                      service you need is right there.
                    </p>
                  </div>

                  {/* Recovery Steps */}
                  <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                      How to Recover a Password
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      Don’t worry if you forget your password—Google makes it
                      pretty painless to reset.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Visit the Gmail login page and click "Forgot Password?".',
                        "Enter your email.",
                        "Choose a recovery method (phone, backup email, security questions).",
                        "Follow the prompts and enter your verification code.",
                        "Set a new password—make it strong and don’t reuse old ones.",
                      ].map((step, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 items-start text-sm text-slate-300"
                        >
                          <span className="text-red-400 font-medium">✓</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Second Feature Image - Security Theme */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital security and cyber protection"
                  className="w-full h-[320px] object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Security & Advanced Features */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Security Tips */}
                <div className="bg-slate-900 border border-slate-700/80 text-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Keep Your Gmail Secure
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Your Gmail account links to a lot—banking, social, and work.
                    Keep it safe:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Turn on Two-Step Verification",
                        desc: "Google texts you a code when you log in from a new device.",
                      },
                      {
                        title: "Don’t Use Weak Passwords",
                        desc: "Skip birthdays and pet names. Go for something tough to crack.",
                      },
                      {
                        title: "Keep Tabs on Account Activity",
                        desc: "Peek at your recent logins to catch anything fishy.",
                      },
                      {
                        title: "Watch for Phishing",
                        desc: "Never click strange links or download unverified attachments.",
                      },
                      {
                        title: "Update Your Recovery Options",
                        desc: "Keep your backup phone and email current.",
                      },
                    ].map((tip, idx) => (
                      <div
                        key={idx}
                        className="border-b border-slate-800 pb-3 last:border-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-blue-400 text-sm">
                          {tip.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {tip.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Advanced Features
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Gmail does a lot more than just send emails. Cool tools you
                    should try:
                  </p>
                  <ul className="space-y-4">
                    {[
                      {
                        name: "Smart Compose",
                        detail: "Gmail helps you finish sentences as you type.",
                      },
                      {
                        name: "Filters",
                        detail:
                          "Sort messages automatically—auto-label, archive, or forward.",
                      },
                      {
                        name: "Labels and Categories",
                        detail: "Organize emails your way with custom labels.",
                      },
                      {
                        name: "Confidential Mode",
                        detail:
                          "Send messages that vanish after a set time or require passcodes.",
                      },
                      {
                        name: "Offline Access",
                        detail:
                          "Read and write emails even without an internet connection.",
                      },
                      {
                        name: "Google Meet Integration",
                        detail: "Start video meetings right from your inbox.",
                      },
                    ].map((feat, idx) => (
                      <li key={idx} className="text-sm">
                        <strong className="text-white block">
                          {feat.name}
                        </strong>
                        <span className="text-slate-300">{feat.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Business Section */}
              <section className="bg-blue-950/30 border border-blue-900/50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Using Gmail for Business
                </h2>
                <p className="text-slate-300 mb-6">
                  Gmail is the backbone for tons of companies because:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                  <li className="flex gap-2">
                    🔹 It keeps business emails tidy and professional.
                  </li>
                  <li className="flex gap-2">
                    🔹 Team collaboration is simple with Google Workspace.
                  </li>
                  <li className="flex gap-2">
                    🔹 Documents and files live securely in the cloud.
                  </li>
                  <li className="flex gap-2">
                    🔹 You can schedule meetings or share calendars easily.
                  </li>
                </ul>
                <p className="mt-4 pt-4 border-t border-blue-900/50 text-xs text-slate-400 font-medium">
                  Pro Tip: If you need company branding on your address, upgrade
                  to Google Workspace for custom domains.
                </p>
              </section>

              {/* Problem Solving & Optimization Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Troubleshooting */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Fixing Common Gmail Problems
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: "Can’t Log In?",
                        a: "Reset your password, double-check your connection.",
                      },
                      {
                        q: "Important Emails Going to Spam?",
                        a: "Mark them as “Not Spam.”",
                      },
                      {
                        q: "Worried Your Account Was Hacked?",
                        a: "Change your password straight away and run a security check.",
                      },
                      {
                        q: "Out of Storage?",
                        a: "Clean out old emails, delete bulky attachments, or upgrade storage.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 shadow-md"
                      >
                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                          Problem
                        </span>
                        <h4 className="font-semibold text-white text-sm mb-1">
                          {item.q}
                        </h4>
                        <p className="text-slate-300 text-xs">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optimization */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Tips to Optimize Gmail
                  </h3>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/60 shadow-md space-y-3">
                    {[
                      "Keep your inbox organized—archive or delete emails you don’t need.",
                      "Use search filters (by sender, date, subject) to find messages fast.",
                      "Set up labels like “Work,” “Personal,” or “Receipts.”",
                      "Unsubscribe from junk or marketing emails you never read.",
                      "Turn on keyboard shortcuts for lightning-fast navigation.",
                    ].map((tip, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <span className="text-green-400">⚡</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Importance & Future */}
              <section className="border-t border-slate-800 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Why a Gmail Account Matters
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Almost every website or app you use asks for an email. Gmail
                    has become the “universal login” for job hunting, shopping,
                    banking, social media, and so much more. If you’re online,
                    you need Gmail.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    What to Expect in the Future
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Google is serious about making Gmail smarter and safer.
                    Expect more AI-based features—like automatic sorting, email
                    drafting help, and sharper security alerts. Email’s not
                    going away, but managing it will get easier.
                  </p>
                </div>
              </section>

              {/* SEO Keywords Badges */}
              <section className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
                <h4 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
                  SEO Keywords Used In This Guide:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "how to create Gmail account",
                    "Gmail login",
                    "recover Gmail password",
                    "Gmail security tips",
                    "secure Gmail account",
                    "Gmail features",
                    "Gmail account recovery",
                    "Gmail sign in",
                  ].map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </section>

              {/* Wrapping Up / Footer */}
              <footer className="text-center pt-8 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Wrapping Up
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  A Gmail account is almost a necessity these days. It’s secure,
                  feature-packed, and works for just about everything you do
                  online. Whether you’re a student, entrepreneur, or anyone in
                  between, Gmail keeps you connected. So, get your account set
                  up, learn the basics, try the advanced tricks, and you’ll get
                  the most out of your digital life.
                </p>
              </footer>
            </div>
          </>

          {/* ================================================================================================= */}
        </div>
      </section>

      {/* ✅ Added Purchase Modal */}
      <PurchaseModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
