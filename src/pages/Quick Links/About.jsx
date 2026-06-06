import React from "react";
import Layout from "../../layouts/Layout";

const About = () => {
  return (
    <Layout>
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 overflow-hidden bg-transparent text-white">
        {/* Background glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

        <div className="max-w-6xl text-center z-10">
          {/* Brand */}
          <p className="text-sm tracking-[6px] uppercase text-gray-300 mb-4">
            Allpvausa Studio
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Crafting Digital{" "}
            <span className="text-purple-400">Experiences</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-14">
            At <span className="text-white font-semibold">Allpvausa</span>, we
            design and develop modern, high-performance websites and
            applications that blend creativity, technology, and strategy to help
            brands grow in the digital world.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To empower businesses with impactful digital solutions that
                drive growth, engagement, and long-term success.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To become a globally trusted digital agency known for
                innovation, creativity, and user-focused design.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creativity, transparency, quality, and client success guide
                every project we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
