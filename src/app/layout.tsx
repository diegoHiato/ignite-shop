import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Project made to introduce Next.js with Stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-base-900 text-base-300 antialiased`}
      >
        <div className="flex flex-col items-start justify-center gap-8 min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
