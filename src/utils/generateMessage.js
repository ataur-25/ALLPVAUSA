export function generateMessage({ orderId, product, quantity, total, coupon }) {
    let msg = `🛍️ *New Order Details* \n\n`;
    msg += `*Order ID:* ${orderId}\n`;
    msg += `*Product:* ${product.title}\n`;
    msg += `*Quantity:* ${quantity}\n`;
    if (coupon) {
        msg += `*Coupon:* ${coupon}\n`;
    }
    msg += `*Total Price:* $${total.toFixed(2)}\n\n`;
    msg += `Please confirm my order.`;
    
    return msg;
}
