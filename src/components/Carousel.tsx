'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Product } from './Product'

interface CaroulselProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export const Carousel = ({ products }: CaroulselProps) => {
  const [sliderRef] = useKeenSlider({ slides: { perView: 2.5, spacing: 48 } })

  return (
    <div
      className="keen-slider flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1280px)/2))]"
      ref={sliderRef}
    >
      {products?.map((product) => {
        return (
          <Product
            alt="Image of the product"
            href="/"
            imageUrl={product.imageUrl}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )
      })}
    </div>
  )
}
