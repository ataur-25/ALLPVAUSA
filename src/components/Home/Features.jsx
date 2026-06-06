import {
  ShieldCheck,
  Zap,
  Lock,
  BadgeCheck,
  Globe,
  Rocket,
} from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
      description:
        "Every account is carefully verified to ensure authenticity and safety.",
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description:
        "End-to-end protected payments for safe and risk-free trading.",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description:
        "Get access to your purchased accounts immediately after payment.",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Deals",
      description: "Built-in trust system ensures reliable buyers and sellers.",
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Buy and sell accounts from anywhere, anytime with ease.",
    },
    {
      icon: Rocket,
      title: "Fast Growth Access",
      description:
        "Unlock ready-made digital assets to accelerate your online growth.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* LEFT BACKGROUND IMAGE WITH FLOAT ANIMATION */}
      <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 animate-float-slow">
        <img
          src={asset("hero-kontt.webp")}
          alt="background"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Glow Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[160px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Built for Secure <br />
            <span className="text-white/60 italic font-medium">
              Digital Trading
            </span>
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A modern marketplace designed for safe, fast, and transparent
            account trading experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <feature.icon className="w-5 h-5 text-black" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all"
          >
            Start Trading Now
          </a>
        </div>
      </div>

      {/* FLOAT ANIMATION STYLE */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(-50%) translateX(0px); }
          50% { transform: translateY(-52%) translateX(10px); }
          100% { transform: translateY(-50%) translateX(0px); }
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
