import { useState } from "react";
import { motion } from "framer-motion";
import {
    FiShield as Shield,
    FiClock as Clock,
    FiAward as Award,
    FiCheck as Check,
    FiShoppingCart as ShoppingCart,
} from "react-icons/fi";

// ── Purchase Modal ─────────────────────────────
function PurchaseModal({ isOpen, product, onClose }) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0d1b2e] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-black text-white mb-2">
                    {product.title}
                </h2>

                <p className="text-gray-400 text-sm mb-6">
                    {product.desc}
                </p>

                <div className="text-4xl font-black text-sky-400 mb-6">
                    {product.price}
                </div>

                <a
                    href="https://t.me/your_telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black uppercase hover:scale-105 transition"
                >
                    Order via Telegram
                </a>
            </motion.div>
        </div>
    );
}

// ── Products ─────────────────────────────
const products = [
    {
        title: "Fresh Bluebird Accounts",
        price: "$8.00",
        desc: "Fresh Bluebird accounts with clean setup and secure access.",
        img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=1200",
        stock: "2.1K In Stock",
        badge: "Fresh",
    },
    {
        title: "Aged Bluebird Accounts",
        price: "$25.00",
        desc: "Aged Bluebird accounts with stable history and trusted activity.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
        stock: "1.2K In Stock",
        badge: "Best Seller",
    },
    {
        title: "Verified Bluebird Accounts",
        price: "$50.00",
        desc: "Fully verified Bluebird accounts with recovery access included.",
        img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200",
        stock: "780 In Stock",
        badge: "Verified",
    },
    {
        title: "Bulk Bluebird Package",
        price: "$399",
        desc: "Bulk Bluebird accounts for agencies and resellers.",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
        stock: "Bulk Ready",
        badge: "Bulk",
    },
];

// ── MAIN COMPONENT ─────────────────────────────
export default function BluebirdAccounts() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#061225] via-[#050816] to-[#071a33]" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf830_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

                {/* Glow */}
                <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-sky-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px]" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black"
                        >
                            Buy Verified{" "}
                            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Bluebird Accounts
                            </span>
                        </motion.h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                            Premium Bluebird accounts with secure access, instant delivery
                            and high quality trusted profiles.
                        </p>
                    </div>

                    {/* Trust Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
                        <div className="flex items-center gap-3">
                            <Shield className="text-sky-400" />
                            Secure Accounts
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-blue-400" />
                            Instant Delivery
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="text-cyan-400" />
                            Premium Quality
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {products.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
                            >
                                {/* badge */}
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold">
                                    {item.badge}
                                </div>

                                {/* image */}
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full object-cover group-hover:scale-110 transition"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
                                </div>

                                {/* content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-black">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-2">
                                        {item.desc}
                                    </p>

                                    <div className="mt-3 text-sm text-sky-400 font-bold">
                                        {item.stock}
                                    </div>

                                    <div className="mt-5 space-y-2">
                                        {["Instant Delivery", "Secure", "High Quality"].map(
                                            (f, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 text-sm text-gray-300"
                                                >
                                                    <Check className="text-sky-400 w-4 h-4" />
                                                    {f}
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="text-3xl font-black">
                                            {item.price}
                                        </div>

                                        <button
                                            onClick={() => setSelectedProduct(item)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black text-xs hover:scale-105 transition"
                                        >
                                            <ShoppingCart size={16} />
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PurchaseModal
                isOpen={!!selectedProduct}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}