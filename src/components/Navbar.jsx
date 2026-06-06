import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiHome,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";
import { FaUniversity, FaBitcoin } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/allpvausa.png";

const navLinks = [
  { name: "Home", href: "/", icon: <FiHome /> },
  {
    name: "Bank-1",
    icon: <FaUniversity />,
    dropdown: [
      {
        name: "Verified Cash App Accounts",
        href: "/product/verified-cash-app-accounts",
      },
      {
        name: "Verified PayPal Accounts",
        href: "/product/verified-paypal-accounts",
      },
      {
        name: "Verified Go2Bank Accounts",
        href: "/product/verified-go2bank-accounts",
      },
      {
        name: "Verified Coinbase Accounts",
        href: "/product/verified-coinbase-accounts",
      },
      {
        name: "Verified Payoneer Accounts",
        href: "/product/verified-payoneer-accounts",
      },
      {
        name: "Verified Wise Accounts",
        href: "/product/verified-wise-accounts",
      },
      {
        name: "Verified Stripe Accounts",
        href: "/product/verified-stripe-accounts",
      },
      {
        name: "Verified Chime Accounts",
        href: "/product/verified-chime-accounts",
      },
      {
        name: "Verified US Bank Accounts",
        href: "/product/verified-us-bank-accounts",
      },
    ],
  },
  {
    name: "Bank-2",
    icon: <FaUniversity />,
    dropdown: [
      {
        name: "Verified Alipay Accounts",
        href: "/product/verified-alipay-accounts",
      },
      {
        name: "Verified Payeer Accounts",
        href: "/product/verified-payeer-accounts",
      },
      {
        name: "Verified Skrill Accounts",
        href: "/product/verified-skrill-accounts",
      },
      {
        name: "Verified WebMoney Accounts",
        href: "/product/verified-webmoney-accounts",
      },
      {
        name: "Verified Venmo Accounts",
        href: "/product/verified-venmo-accounts",
      },
      {
        name: "Verified Bluebird Accounts",
        href: "/product/verified-bluebird-accounts",
      },
      {
        name: "Verified Neteller Accounts",
        href: "/product/verified-neteller-accounts",
      },
      {
        name: "Verified Zelle Accounts",
        href: "/product/verified-zelle-accounts",
      },
      {
        name: "Verified Never Pay Accounts",
        href: "/product/verified-never-pay-accounts",
      },
      {
        name: "Verified Perfect Money Accounts",
        href: "/product/verified-perfect-money-accounts",
      },
    ],
  },
  {
    name: "Crypto",
    icon: <FaBitcoin />,
    dropdown: [
      {
        name: "Verified SoFi Accounts",
        href: "/product/verified-sofi-accounts",
      },
      {
        name: "Verified Binance Accounts",
        href: "/product/verified-binance-accounts",
      },
      {
        name: "Verified Paxful Accounts",
        href: "/product/verified-paxful-accounts",
      },
      {
        name: "Verified Crypto.com Accounts",
        href: "/product/verified-cripto-com-accounts",
      },
      {
        name: "Verified RedotPay Accounts",
        href: "/product/verified-redotpay-accounts",
      },
      {
        name: "verified Mexc Accounts",
        href: "/product/verified-mexc-accounts",
      },
      {
        name: "Verified Huobi Accounts",
        href: "/product/verified-huobi-accounts",
      },
      {
        name: "Verified Bybit Accounts",
        href: "/product/verified-bybit-accounts",
      },
      {
        name: "Verified OKX Accounts",
        href: "/product/verified-okx-accounts",
      },
      {
        name: "Verified Bitget Accounts",
        href: "/product/verified-bitget-accounts",
      },
      {
        name: "Verified KuCoin Accounts",
        href: "/product/verified-kucoin-accounts",
      },
    ],
  },
  {
    name: "Social",
    icon: <RiShareForwardLine />,
    dropdown: [
      {
        name: "Verified Facebook Accounts",
        href: "/product/verified-facebook-accounts",
      },
      {
        name: "Verified Airbnb Accounts",
        href: "/product/verified-airbnb-accounts",
      },
      {
        name: "Verified Instagram Accounts",
        href: "/product/verified-instagram-accounts",
      },
      {
        name: "Verified Google Voice Accounts",
        href: "/product/verified-google-voice-accounts",
      },
      {
        name: "Verified Facebook Ads Accounts",
        href: "/product/verified-facebook-ads-accounts",
      },
      {
        name: "Verified LinkedIn Accounts",
        href: "/product/verified-linkedin-accounts",
      },
      {
        name: "Verified TextNow Accounts",
        href: "/product/verified-textnow-accounts",
      },
      {
        name: "Verified Telegram Accounts",
        href: "/product/verified-telegram-accounts",
      },
    ],
  },
  {
    name: "Mail",
    icon: <FiMail />,
    dropdown: [
      { name: "Gmail Accounts", href: "/product/buy-verified-gmail-accounts" },
      {
        name: "Edu Mail Accounts",
        href: "/product/verified-edu-mail-accounts",
      },
      { name: "Yahoo Accounts", href: "/product/verified-yahoo-accounts" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    queueMicrotask(() => {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
    });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <img src={logo} alt="Logo" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-none">
              All PVA USA
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                    <span className="text-base">{link.icon}</span>
                    {link.name}
                    <FiChevronDown className="transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    <span className="text-base">{link.icon}</span>
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400 transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <Link
              to="/login"
              className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-lg shadow-indigo-600/20 transition-all"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 w-full max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition"
                    onClick={() =>
                      link.dropdown
                        ? toggleDropdown(link.name)
                        : setMobileMenuOpen(false)
                    }
                  >
                    {link.dropdown ? (
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 w-full">
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="flex items-center gap-3 text-slate-700 dark:text-slate-200 w-full"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    )}
                    {link.dropdown && (
                      <FiChevronDown
                        className={`text-slate-500 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 py-2 flex flex-col gap-2 border-l-2 border-slate-100 dark:border-slate-800 ml-6 mb-2">
                          {link.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
