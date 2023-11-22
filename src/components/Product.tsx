import Image from 'next/image'

interface ProductProps {
  href: string
  imageUrl: string
  alt: string
  name: string
  price: string
}

export const Product = ({ href, imageUrl, alt, name, price }: ProductProps) => {
  return (
    <article className="keen-slider__slide group relative bg-[linear-gradient(180deg,#1ea483_0%,#7465d4_100%)] rounded-lg flex items-center justify-center overflow-hidden">
      <a href={href} className="relative w-[520px] h-[480px]">
        <Image
          src={imageUrl}
          alt={alt}
          sizes="{witdh:520px; height:480px}"
          fill
          priority
        />
      </a>

      <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-[#000]/60 translate-y-[110%] opacity-0 transition-transform group-hover:translate-y-[0%] group-hover:opacity-100">
        <strong className="text-xl">{name}</strong>
        <span className="font-bold text-2xl text-principal-300">{price}</span>
      </footer>
    </article>
  )
}
