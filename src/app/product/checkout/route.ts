import { stripe } from '@/lib/stripe'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { priceId } = await request.json()

  if (!priceId) {
    return Response.json({ error: 'Price not found' })
  }

  const cancelUrl = `${process.env.NEXT_URL}`
  const successUrl = `${process.env.NEXT_URL}/success`

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

  return Response.json({ checkoutUrl: checkoutSession.url })
}
