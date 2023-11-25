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
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-7xl mx-auto box-border">
      <div className="w-full max-w-xl h-[656px] rounded-lg p-1 bg-[linear-gradient(180deg,#1ea483_0%,#7465d4_100%)] flex items-center justify-center">
        <Image src={product.images[0]} alt="" width={520} height={480} />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-base-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-principal-300">
          {formattedPrice}
        </span>

        <p className="mt-10 text-lg text-base-300">{product.description}</p>

        <button className="mt-auto bg-principal-500 border-0 text-white rounded-lg p-5 cursor-pointer font-bold text-lg hover:bg-principal-300 hover:transition-all">
          Buy it now
        </button>
      </div>
    </main>
  )
}
