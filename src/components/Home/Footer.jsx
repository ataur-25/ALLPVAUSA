export default function Footer() {
  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Shipping & Returns Policy", href: "/shipping-returns" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "404", href: "/404" },
  ];

  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/MarcushZr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Dp2AWtBhW/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.013 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.926-1.956 1.875v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.086 24 18.092 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/accounts/login/?hl=en",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    // <footer className="pt-16 pb-8 border-t border-white/5">
    <footer className="pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Iridescent Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="relative w-full h-full pt-[75%]">
          <iframe
            src="https://player.vimeo.com/video/1198827421?autoplay=1&loop=1&muted=1&background=1"
            className="absolute top-0 left-0 w-full h-full opacity-0 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Iridescent background"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src="src\assets\allpvausa.png"
                alt="ALLPVAUSA Logo"
                className="w-6 h-6"
              />

              <span className="text-white font-semibold text-xl tracking-tight">
                ALLPVAUSA
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#999] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>

            <ul className="space-y-3">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/17095079679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#999] hover:text-white transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +1 (709) 507-9679
                </a>
              </li>

              {/* Telegram */}
              <li>
                <a
                  href="https://t.me/allpvausa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#999] hover:text-white transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.97 9.294c-.148.658-.534.82-1.082.51l-2.99-2.204-1.442 1.388c-.16.16-.295.295-.603.295l.216-3.06 5.57-5.034c.242-.216-.053-.337-.374-.121l-6.885 4.334-2.966-.926c-.645-.203-.658-.645.135-.955l11.59-4.467c.537-.196 1.006.121.801.946z" />
                  </svg>
                  @allpvausa
                </a>
              </li>

              {/* Gmail */}
              <li>
                <a
                  href="mailto:allpvausa@gmail.com"
                  className="flex items-center gap-2 text-[#999] hover:text-white transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.5v15c0 .825-.675 1.5-1.5 1.5h-21C.675 21 0 20.325 0 19.5v-15C0 3.675.675 3 1.5 3h21C23.325 3 24 3.675 24 4.5zm-1.5 0L12 12 1.5 4.5v15h21v-15z" />
                  </svg>
                  allpvausa@gmail.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2 text-[#999] text-sm">
                <svg
                  className="w-4 h-4 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                </svg>
                <span>Newfoundland and Labrador, Canada</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Find us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Bottom Right 360 Rotate Image */}
        <div className="relative">
          <img
            src="src\assets\hero-6aro.webp"
            alt="decor"
            className="absolute bottom-[30px] left-[-40px] w-30 sm:w-28 lg:w-60 opacity-50 animate-spin-slow pointer-events-none"
          />
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[#999] text-sm">
            Copyright &copy;ALLPVAUSA <span className="mx-1">—</span>{" "}
            <span className="text-[#999]">Powered by Z</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
