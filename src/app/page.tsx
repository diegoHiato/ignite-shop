import { Carousel } from '@/components/Carousel'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export const revalidate = 60 * 60 * 2

const getProductsFromStripe = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  return response.data
}

export default async function Home() {
  const data = await getProductsFromStripe()
  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format((price.unit_amount as number) / 100),
    }
  })

  return (
    <main className="ml-auto">
      <Carousel products={products} />
    </main>
  )
}
