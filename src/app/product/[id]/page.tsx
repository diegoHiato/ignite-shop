'use client'
import { useParams } from 'next/navigation'

export default function Product() {
  const { id } = useParams()

  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-7xl mx-auto box-border">
      <div className="w-full max-w-xl h-[656px] rounded-lg p-1 bg-[linear-gradient(180deg,#1ea483_0%,#7465d4_100%)] flex items-center justify-center">
        <img src="" alt="" className="object-cover" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-base-300">T-shirt Beyond the limits</h1>
        <span className="mt-4 block text-3xl text-principal-300">R$7,90</span>

        <p className="mt-10 text-lg text-base-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
          aperiam eos consectetur libero nostrum cupiditate est aspernatur
          temporibus adipisci illum, officia inventore ullam sunt cumque. Eaque
          sunt mollitia dolor.
        </p>

        <button className="mt-auto bg-principal-500 border-0 text-white rounded-lg p-5 cursor-pointer font-bold text-lg hover:bg-principal-300 hover:transition-all">
          Buy it now
        </button>
      </div>
    </main>
  )
}
