import { ArrowRight } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function Blog() {
  const posts = [
    {
      title: "The complete guide to secure account trading in 2027",
      image:
        "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJlJTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      date: "Apr 20, 2025",
      featured: true,
    },
    {
      title: "How verified accounts help accelerate online growth",
      image:
        "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jaWFsJTIwbWVkaWElMjBncm93dGh8ZW58MHx8MHx8fDA%3D",
      date: "Apr 20, 2025",
      featured: false,
    },
    {
      title: "Essential security practices for buying digital assets",
      image:
        "https://media.istockphoto.com/id/2233538374/photo/digital-finance-security-and-mobile-banking-protection-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-yShzyKui0AZWEUcqjeONd7-DPDix1fMrTZVkkFE6QA=",
      date: "Apr 20, 2025",
      featured: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketplace knowledge
            <br />
            <span className="font-display italic text-white/40">
              for smarter trading.
            </span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
            Stay updated with security tips, buying guides, and expert insights
            from the digital account marketplace.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <a
            href="#"
            className="group block relative rounded-2xl overflow-hidden aspect-[4/3] lg:row-span-2"
          >
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-semibold text-xl mb-4 leading-snug">
                {posts[0].title}
              </h3>

              <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Small Posts */}
          {posts.slice(1).map((post, index) => (
            <a
              key={index}
              href="#"
              className="group flex gap-6 items-center glass-card rounded-2xl p-4 hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium text-sm leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-white text-xs font-medium">
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </span>

                  <span className="text-[#999] text-xs">{post.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
