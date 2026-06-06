import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import QuantitySelector from "./QuantitySelector";
import CouponInput from "./CouponInput";
import PriceSummary from "./PriceSummary";
import CheckoutButtons from "./CheckoutButtons";

import { generateOrderId } from "../../utils/generateOrderId";
import { calculatePrice } from "../../utils/calculatePrice";
import { generateMessage } from "../../utils/generateMessage";

export default function PurchaseModal({
    isOpen,
    product,
    onClose,
}) {
    const [quantity, setQuantity] = useState(1);

    const [coupon, setCoupon] = useState("");

    const orderId = useMemo(() => {
        return product ? generateOrderId(product.id) : "";
    }, [product]);

    const subtotal = useMemo(() => {
        if (!product || !product.pricing) return 0;
        return calculatePrice(product.pricing, quantity);
    }, [product, quantity]);

    let discount = 0;

    if (coupon.toUpperCase() === "SAVE10") {
        discount = subtotal * 0.1;
    }

    if (coupon.toUpperCase() === "ADMIN20") {
        discount = subtotal * 0.2;
    }

    const total = subtotal - discount;

    const message = product ? generateMessage({
        orderId,
        product,
        quantity,
        total,
        coupon,
    }) : "";

    const telegramLink = `https://t.me/yourusername?text=${encodeURIComponent(
        message
    )}`;

    const whatsappLink = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(
        message
    )}`;

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-lg rounded-[32px] border border-white/10 bg-[#0b1220] p-8 shadow-2xl overflow-hidden"
            >

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 pointer-events-none" />

                {/* close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                    ✕
                </button>

                {/* title */}
                <h2 className="text-3xl font-black text-white">
                    {product.title}
                </h2>

                <p className="text-gray-400 mt-2 text-sm">
                    {product.description}
                </p>

                {/* order info */}
                <div className="mt-5 rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-2">

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Order ID</span>

                        <span className="text-red-400 font-bold">
                            {orderId}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Delivery</span>

                        <span className="text-green-400 font-bold">
                            {product.delivery}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Warranty</span>

                        <span className="text-sky-400 font-bold">
                            {product.warranty}
                        </span>
                    </div>

                </div>

                {/* quantity */}
                <QuantitySelector
                    quantity={quantity}
                    increase={() => setQuantity((prev) => prev + 1)}
                    decrease={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                />

                {/* coupon */}
                <CouponInput
                    coupon={coupon}
                    setCoupon={setCoupon}
                />

                {/* summary */}
                <PriceSummary
                    subtotal={subtotal}
                    discount={discount}
                    total={total}
                />

                {/* buttons */}
                <CheckoutButtons
                    telegramLink={telegramLink}
                    whatsappLink={whatsappLink}
                    paymentLink="/payment/pay"
                />

            </motion.div>

        </div>
    );
}
