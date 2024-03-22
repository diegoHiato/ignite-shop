import logoImage from '@/assets/logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-xl px-8">
      <Image src={logoImage} alt="Logo of Ignite Shop" />
    </header>
  )
}
