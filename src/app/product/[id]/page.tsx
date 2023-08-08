"use client"
import { useParams } from "next/navigation"

export default function Product() {
  const { id } = useParams()

  return (
    <main>
      <h1>Product: {id}</h1>
    </main>
  )
}