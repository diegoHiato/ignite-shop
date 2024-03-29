import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  href: string
  imageUrl: string
  alt: string
  name: string
  price: string
}

export const Product = ({ href, imageUrl, alt, name, price }: ProductProps) => {
  return (
    <article className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-product-texture">
      <Link
        className="relative h-[480px] w-[520px]"
        href={href}
        prefetch={false}
      >
        <Image src={imageUrl} alt={alt} sizes="100%" fill priority />
      </Link>

      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-[#000]/60 p-8 opacity-0 transition-transform group-hover:translate-y-[0%] group-hover:opacity-100">
        <strong className="text-xl">{name}</strong>
        <span className="text-2xl font-bold text-custom-green-400">
          {price}
        </span>
      </footer>
    </article>
  )
}
