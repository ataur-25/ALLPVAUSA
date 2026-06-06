import { ArrowRight } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-[100px]" />
      <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Premium Accounts
              <br />
              <span className="font-display italic font-medium">
                Better
              </span>{" "}
              <span className="font-display italic font-medium text-white/80">
                Results.
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#999] max-w-md leading-relaxed">
              Your one-stop destination for digital services, premium
              subscriptions, gaming products, e-books, productivity tools, and
              online solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#0c0c1d] rounded-full text-sm font-semibold hover:bg-white/90 transition-colors gap-2"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors group"
              >
                Buy Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Blinking Decoration */}
          <div
            className="absolute left-25 top-38 hidden lg:block"
            style={{
              animation: "blinkGlow 4s ease-in-out infinite",
            }}
          >
            <img
              src={asset("Layer_1-1.png")}
              alt="Blinking Decoration"
              className="w-[40px] object-contain rotate-200"
            />
          </div>

          {/* Right - 3D Image */}
          <div
            className="relative hidden lg:block"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <img
              src={asset("hero-knot.jpg")}
              alt="3D Abstract"
              className="w-full max-w-lg ml-auto object-contain"
            />
          </div>
        </div>

        {/* Rotating decorative image */}
        <div
          className="absolute -left-32 top-120 hidden lg:block z-1"
          style={{
            animation: "slowRotate 40s linear infinite",
          }}
        >
          <img
            src={asset("hero-6aro.webp")}
            alt="Rotating Shape"
            className="w-[300px] object-contain"
          />
        </div>

        {/* Bottom blur orb */}
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-60">
          <img
            src={asset("hero-blur.jpg")}
            alt=""
            className="w-full h-full object-contain blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
