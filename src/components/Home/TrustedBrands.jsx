export default function TrustedBrands() {
  const brands = [
    { name: "Render", logo: "https://cdn.simpleicons.org/render/ffffff" },
    { name: "Railway", logo: "https://cdn.simpleicons.org/railway/ffffff" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/ffffff" },
    { name: "Appwrite", logo: "https://cdn.simpleicons.org/appwrite/ffffff" },
    { name: "Strapi", logo: "https://cdn.simpleicons.org/strapi/ffffff" },
    { name: "Sanity", logo: "https://cdn.simpleicons.org/sanity/ffffff" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/ffffff" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/ffffff" },
    { name: "Hasura", logo: "https://cdn.simpleicons.org/hasura/ffffff" },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/ffffff" },
  ];

  return (
    <section className="py-12 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Title */}
          <p className="text-white/60 text-base font-bold tracking-wide whitespace-nowrap">
            Trusted by leading tools:
          </p>

          {/* Marquee */}
          <div className="relative flex-1 overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />

            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Scrolling logos */}
            <div className="flex w-max gap-16 items-center animate-marquee hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, index) => (
                <img
                  key={index}
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto 
                  opacity-50 
                  grayscale 
                  hover:grayscale-0 
                  hover:opacity-100 
                  hover:scale-110 
                  transition-all 
                  duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
