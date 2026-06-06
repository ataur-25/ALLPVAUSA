export default function CouponInput({
    coupon,
    setCoupon,
}) {
    return (
        <div className="mt-6">

            <label className="text-sm text-gray-400 block mb-2">
                Coupon Code
            </label>

            <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="ENTER COUPON"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-red-400"
            />

        </div>
    );
}