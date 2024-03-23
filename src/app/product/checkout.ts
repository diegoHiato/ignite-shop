'use server'

import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutAction(priceId: string) {
  if (!priceId) {
    return new Error('Price not found')
  }

  const cancelUrl = `${process.env.NEXT_URL}`
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  if (!checkoutSession.url) {
    return new Error('Internal server error')
  }

  redirect(checkoutSession.url)
}
