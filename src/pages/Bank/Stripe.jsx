import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiCreditCard as StripeIcon,
    FiShield as Shield,
    FiClock as Clock,
    FiAward as Award,
    FiCheck as Check,
    FiShoppingCart as ShoppingCart
} from 'react-icons/fi';

function PurchaseModal({ isOpen, product, onClose }) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0d1b2e] border border-[#635BFF]/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#635BFF]/10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-black text-white">
                    {product.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                    {product.desc}
                </p>

                <div className="text-3xl font-black text-[#635BFF] mt-5">
                    {product.price}
                </div>

                <a
                    href="https://t.me/your_telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#635BFF] to-[#4a44cc] text-white font-black hover:scale-105 transition duration-300"
                >
                    Order Now
                </a>
            </motion.div>
        </div>
    );
}

const products = [
    {
        title: "Fresh Stripe Accounts",
        price: "$50.00",
        desc: "Freshly created Stripe accounts with payment gateway access and clean profile.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
        stock: "1.8K In Stock",
        badge: "Fresh",
    },
    {
        title: "Aged Stripe Accounts",
        price: "$150.00",
        desc: "Trusted aged Stripe accounts with transaction history and payout activity.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=1200",
        stock: "800 In Stock",
        badge: "Best Seller",
    },
    {
        title: "Verified Stripe Accounts",
        price: "$300.00",
        desc: "Fully verified Stripe accounts with business verification and full API access.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
        stock: "420 In Stock",
        badge: "Verified",
    },
    {
        title: "Bulk Stripe Package",
        price: "$2200",
        desc: "Bulk Stripe accounts package for agencies & e-commerce businesses.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        stock: "Bulk Ready",
        badge: "Bulk",
    },
];

export default function StripeAccounts() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#0f0d29] via-[#050816] to-[#0f0d29]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="absolute inset-0 bg-[radial-gradient(#635BFF30_1px,transparent_1px)] bg-[length:60px_60px]"
                />

                <div className="container mx-auto px-6 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-7xl font-black leading-tight">
                            Buy Verified{" "}
                            <span className="bg-gradient-to-r from-[#635BFF] to-[#8b85ff] bg-clip-text text-transparent">
                                Stripe Accounts
                            </span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Premium quality Stripe accounts with payment gateway access,
                            instant delivery and trusted authenticity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-3">
                            <Shield className="text-[#635BFF]" />
                            Verified Accounts
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="text-[#8b85ff]" />
                            Instant Delivery
                        </div>

                        <div className="flex items-center gap-3">
                            <Award className="text-[#b0adff]" />
                            Secure Access
                        </div>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {products.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.15,
                                    duration: 0.6
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03
                                }}
                                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl shadow-black/20"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#635BFF]/20 text-[#8b85ff] text-xs font-bold"
                                >
                                    {item.badge}
                                </motion.div>

                                <div className="h-52 overflow-hidden relative">
                                    <motion.img
                                        whileHover={{ scale: 1.12 }}
                                        transition={{ duration: 0.6 }}
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                                </div>

                                <div className="p-6">

                                    <h3 className="text-xl font-black flex items-center gap-2">
                                        <StripeIcon className="text-[#635BFF]" />
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-2">
                                        {item.desc}
                                    </p>

                                    <div className="mt-3 text-[#635BFF] font-bold text-sm">
                                        {item.stock}
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {[
                                            "Instant Delivery",
                                            "Payment Gateway",
                                            "High Quality"
                                        ].map((f, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.5 + idx * 0.1 + i * 0.1
                                                }}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <Check className="w-4 h-4 text-[#635BFF]" />
                                                {f}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="text-3xl font-black text-[#635BFF]">
                                            {item.price}
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedProduct(item)}
                                            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#635BFF] to-[#4a44cc] text-white text-xs font-black uppercase transition"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            Buy
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#635BFF]/20 to-[#8b85ff]/20" />

                                <div className="absolute inset-0 rounded-[30px] border border-[#635BFF]/0 group-hover:border-[#635BFF]/40 transition duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-24 text-center text-gray-400 text-sm"
                    >
                        All Stripe accounts are tested • Instant delivery • 24/7 support
                    </motion.div>
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