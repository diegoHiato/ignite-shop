import { CheckoutButton } from '@/components/CheckoutButton'
import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Stripe from 'stripe'

interface ProductProps {
  params: {
    id: string
  }
}

const getProductDataFromStripe = async (id: string) => {
  const response = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })
  return response
}

export default async function Product({ params }: ProductProps) {
  const { id } = params
  const product = await getProductDataFromStripe(id)
  const price = product.default_price as Stripe.Price
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price.unit_amount as number) / 100)

  return (
    <main className="mx-auto box-border grid max-w-7xl grid-cols-2 items-stretch gap-16">
      <div className="flex h-[656px] w-full max-w-xl items-center justify-center rounded-lg bg-[linear-gradient(180deg,#1ea483_0%,#7465d4_100%)] p-1">
        <div className="relative h-[480px] w-[520px]">
          <Image
            fill
            priority
            alt="Product image without alternative text"
            sizes="100%"
            src={product.images[0]}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-base-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-principal-300">
          {formattedPrice}
        </span>

        <p className="mt-10 text-lg text-base-300">{product.description}</p>

        <CheckoutButton priceId={price.id} />
      </div>
    </main>
  )
}
