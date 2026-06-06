export function generateOrderId(productId) {
    const random = Math.floor(10000 + Math.random() * 90000);

    return `${productId}-${random}`;
}