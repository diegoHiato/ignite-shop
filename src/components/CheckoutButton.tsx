'use client'
import axios from 'axios'
import { useState } from 'react'

interface Props {
  priceId: string
}

export const CheckoutButton = ({ priceId }: Props) => {
  const [isCreatingCheckouSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false)

  async function handleClick() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/product/checkout', {
        priceId,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Fail to redirect')
    }
  }

  return (
    <button
      className="mt-auto cursor-pointer rounded-lg border-0 bg-principal-500 p-5 text-lg font-bold text-white hover:transition-all enabled:hover:bg-principal-300 disabled:cursor-not-allowed disabled:opacity-60"
      onClick={handleClick}
      disabled={isCreatingCheckouSession}
    >
      Buy it now
    </button>
  )
}
