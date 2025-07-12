'use client'

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function DonateButton() {
    const handleDonate = async () => {
        const stripe = await stripePromise

        const response = await fetch('/api/checkout-session', {
            method: 'POST',
        })

        const session = await response.json()
        await stripe.redirectToCheckout({ sessionId: session.id })
    }

    return (
        <button
            onClick={handleDonate}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
            Dhuro tani
        </button>
    )
}
