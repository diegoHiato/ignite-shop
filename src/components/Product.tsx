import Image, { StaticImageData } from 'next/image'

interface ProductProps {
  href: string
  image: StaticImageData
  alt: string
}

export const Product = ({ href, image, alt, ...props }: ProductProps) => {
  return (
    <article className="keen-slider__slide group relative bg-[linear-gradient(180deg,#1ea483_0%,#7465d4_100%)] rounded-lg flex items-center justify-center overflow-hidden">
      <a href={href}>
        <Image src={image} alt={alt} width={520} height={480} {...props} />
      </a>

      <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-[#000]/60 translate-y-[110%] opacity-0 transition-transform group-hover:translate-y-[0%] group-hover:opacity-100">
        <strong className="text-xl">{'Camiseta X'}</strong>
        <span className="font-bold text-2xl text-principal-300">
          {'R$ 79,90'}
        </span>
      </footer>
    </article>
  )
}
