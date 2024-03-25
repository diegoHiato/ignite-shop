import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

interface Props {
  searchParams?: {
    session_id: string | undefined
  }
}

export default async function Success({ searchParams }: Props) {
  const sessionId = searchParams?.session_id

  if (!sessionId) {
    redirect('/')
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product
  const productName = product.name
  const productPrincipalIamge = product.images[0]

  return (
    <div className="mx-auto flex h-[656px] flex-col items-center justify-center gap-16">
      <h1 className="text-4xl font-bold text-custom-neutral-500">
        Purchase Successful ✅
      </h1>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8">
        <div className="relative flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-pattern p-2">
          <Image
            src={productPrincipalIamge}
            alt=""
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <p className="max-w-[560px] text-center text-2xl text-custom-neutral-500">
          Yeah! <strong>{customerName}</strong> your{' '}
          <strong>{productName}</strong> is already incoming!
        </p>
      </div>

      <Link
        href="/"
        className="text-principal-500 hover:text-principal-300 block text-xl font-bold transition-colors"
      >
        Back to products
      </Link>
    </div>
  )
}
