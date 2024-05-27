import Stripe from 'stripe';

export const stripeSession = async (req, res) => {
    //Setup stripe
    const stripe = new Stripe(process.env.STRIPE_KEY);
    const items = req.cartItems;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: items.map((item) => ({
            price_data: {
                currency: 'bgn',
                product_data: {
                    name: item.name,
                },
                unit_amount: Number(item.price)*100,
            },
            quantity: 1
        })),
        success_url: `${process.env.SERVER_URL}/success/${req.body.ids}`,
        cancel_url: `${process.env.SERVER_URL}/cart`,
    })
    // res.redirect(session.url);
    res.json({url: session.url})
}
