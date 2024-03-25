import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Purchase Successful | Ignite Shop',
}

export default function SuccessLayout({ children }: Props) {
  return (
    <>
      <meta name="robots" content="noindex" />
      <main className="w-full">{children}</main>
    </>
  )
}
