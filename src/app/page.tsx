'use client'
import tshirt1Image from '@/assets/tshirts/1.png'
import tshirt2Image from '@/assets/tshirts/2.png'
import tshirt3Image from '@/assets/tshirts/3.png'
import tshirt4Image from '@/assets/tshirts/4.png'
import { Product } from '@/components/Product'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
  const [sliderRef] = useKeenSlider({ slides: { perView: 2.5, spacing: 48 } })

  return (
    <main
      className="keen-slider flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1280px)/2))] ml-auto"
      ref={sliderRef}
    >
      <Product href="/" image={tshirt1Image} alt="Image from product" />
      <Product href="/" image={tshirt2Image} alt="Image from product" />
      <Product href="/" image={tshirt3Image} alt="Image from product" />
      <Product href="/" image={tshirt4Image} alt="Image from product" />
    </main>
  )
}
