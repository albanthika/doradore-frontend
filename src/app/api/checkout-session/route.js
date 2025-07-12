import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST() {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'eur',
                product_data: {
                    name: 'Kontribut për DoraDore.al',
                },
                unit_amount: 500,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })

    return new Response(JSON.stringify({ id: session.id }), {
        headers: { 'Content-Type': 'application/json' },
    })
}
