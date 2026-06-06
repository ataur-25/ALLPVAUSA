import { ArrowRight } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function About() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative h-full min-h-[420px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src={asset("about-sphere.jpg")}
                alt="background"
                className="w-full h-full object-cover scale-110 blur-md opacity-25"
              />
            </div>

            {/* Floating Avatar */}
            <div className="relative z-10 animate-floatSlow">
              <img
                src="src\assets\avatars\women.png"
                alt="avatar"
                className="w-[180px] sm:w-[220px] lg:w-[260px] translate-y-[150px] drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10">
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-6">
              Access premium{" "}
              <span className="font-display italic text-white/70">
                verified accounts
              </span>{" "}
              through a secure marketplace built for speed, trust, and safety.
            </p>

            <p className="text-lg text-[#999] leading-relaxed mb-10">
              We provide a trusted platform where buyers and sellers can trade
              digital accounts with instant delivery, secure transactions, and
              reliable quality assurance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#0c0c1d] rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Explore Accounts
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .animate-floatSlow {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
