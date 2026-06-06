import { ArrowRight } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function Portfolio() {
  const projects = [
    {
      title: "Verified Digital Assets",
      category: "Authenticated & Secure Accounts",
      image:
        "https://media.istockphoto.com/id/1058694620/photo/data-security-system-shield-protection-verification.webp?a=1&b=1&s=612x612&w=0&k=20&c=2r0g1fQ7WS-qTUSAW8ODiD76vMAreavIjriLNpO-up0=",
    },
    {
      title: "Premium Account Access",
      category: "High-Value Digital Profiles",
      image:
        "https://images.pexels.com/photos/7058702/pexels-photo-7058702.jpeg",
    },
    {
      title: "Instant Ownership Transfer",
      category: "Automated & Fast Delivery System",
      image:
        "https://plus.unsplash.com/premium_photo-1739995619648-e463f3ecdbc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5zdGFudCUyME93bmVyc2hpcCUyMFRyYW5zZmVyfGVufDB8fDB8fHww",
    },
    {
      title: "Secure Trade System",
      category: "End-to-End Encrypted Transactions",
      image:
        "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW5kLXRvLUVuZCUyMEVuY3J5cHRlZCUyMFRyYW5zYWN0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Premium Digital Marketplace
              <br />
              Built for Trust & Speed
            </h2>
            <p className="text-white/60 mt-3 max-w-xl">
              Buy and sell verified accounts with secure transactions, instant
              delivery, and complete transparency.
            </p>
          </div>

          <a
            href="https://t.me/allpvausa"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-all group whitespace-nowrap"
          >
            explore all assets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href="https://t.me/allpvausa"
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/10 hover:border-white/20 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white font-semibold text-base mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
