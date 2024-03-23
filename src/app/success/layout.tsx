import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Successful Purchase | Ignite Shop',
}

export default function SuccessLayout({ children }: Props) {
  return (
    <>
      <meta name="robots" content="noindex" />
      <div className="w-full">{children}</div>
    </>
  )
}
