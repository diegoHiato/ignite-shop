import logoImage from '@/assets/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="px-8 mx-auto w-full max-w-screen-xl">
      <Image src={logoImage} alt="Logo of Ignite Shop" />
    </header>
  )
}

export default Header
