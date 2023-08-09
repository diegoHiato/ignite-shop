import tshirt1Image from '@/assets/tshirts/1.png'
import { Product } from '@/components/Product'

export default function Home() {
  return (
    <main className="flex gap-12 min-h-[656px] w-full max-w-[calc(100vw-((100vw-1280px)/2))] ml-auto">
      <Product href="/" image={tshirt1Image} alt="Image from product" />
    </main>
  )
}
