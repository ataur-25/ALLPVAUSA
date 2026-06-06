import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiShield as Shield,
    FiClock as Clock,
    FiAward as Award,
    FiCheck as Check,
    FiShoppingCart as ShoppingCart
} from 'react-icons/fi';

// ── PurchaseModal ─────────────────────────────────────────
function PurchaseModal({ isOpen, product, onClose }) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#0d1b2e] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-black text-white mb-2">
                    {product.title}
                </h2>

                <p className="text-gray-400 text-sm mb-6">
                    {product.desc}
                </p>

                <div className="text-4xl font-black text-green-400 mb-6">
                    {product.price}
                </div>

                <a
                    href="https://t.me/your_telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-black uppercase hover:scale-105 transition"
                >
                    Order via Telegram
                </a>
            </motion.div>
        </div>
    );
}

// ── Products ──────────────────────────────────────────────
const products = [
    {
        title: "Fresh Cash App Accounts",
        price: "$6.00",
        desc: "Freshly created Cash App accounts with secure access and clean history.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
        stock: "2.7K In Stock",
        badge: "Fresh",
    },
    {
        title: "Aged Cash App Accounts",
        price: "$20.00",
        desc: "Aged Cash App accounts with trusted activity and stronger account reputation.",
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
        stock: "1.3K In Stock",
        badge: "Best Seller",
    },
    {
        title: "Verified Cash App",
        price: "$40.00",
        desc: "Fully verified Cash App accounts with secure recovery information included.",
        img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200",
        stock: "950 In Stock",
        badge: "Verified",
    },
    {
        title: "Bulk Cash App Package",
        price: "$399",
        desc: "Large Cash App account package for agencies, resellers and payment solutions.",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
        stock: "Bulk Ready",
        badge: "Bulk",
    },
];

export default function CashAppAccounts() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#07152d] via-[#050816] to-[#08111f]" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e30_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

                {/* Glow */}
                <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-green-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[140px]" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black tracking-tight"
                        >
                            Buy Verified{" "}
                            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                                Cash App Accounts
                            </span>
                        </motion.h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Premium verified Cash App accounts with secure access,
                            instant delivery and trusted account quality.
                        </p>
                    </div>

                    {/* Trust Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">

                        <div className="flex items-center gap-3">
                            <Shield className="text-emerald-400" />
                            Fully Verified Accounts
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="text-green-400" />
                            Instant Delivery
                        </div>

                        <div className="flex items-center gap-3">
                            <Award className="text-lime-400" />
                            Secure Recovery Access
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {products.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.35 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.3)]"
                            >

                                {/* badge */}
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/20 text-green-300 text-xs font-bold backdrop-blur-xl">
                                    {item.badge}
                                </div>

                                {/* image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090912] via-[#09091270] to-transparent" />
                                </div>

                                {/* content */}
                                <div className="p-6 relative z-10">

                                    <h3 className="text-xl font-black">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* stock */}
                                    <div className="mt-4 text-sm font-bold text-emerald-400">
                                        {item.stock}
                                    </div>

                                    {/* features */}
                                    <div className="mt-5 space-y-3">
                                        {[
                                            "Instant Delivery",
                                            "Secure Access",
                                            "High Quality",
                                        ].map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <Check className="w-4 h-4 text-green-400" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* bottom */}
                                    <div className="mt-6 flex items-center justify-between">

                                        <div className="text-3xl font-black">
                                            {item.price}
                                        </div>

                                        <button
                                            onClick={() =>
                                                setSelectedProduct(item)
                                            }
                                            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-black uppercase hover:scale-105 transition"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            Buy
                                        </button>
                                    </div>
                                </div>

                                {/* hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-24 text-center text-gray-400 text-sm">
                        All Cash App accounts are manually checked • 24/7 support •
                        Secure login & recovery included
                    </div>
                </div>
            </section>

            {/* Modal */}
            <PurchaseModal
                isOpen={!!selectedProduct}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}