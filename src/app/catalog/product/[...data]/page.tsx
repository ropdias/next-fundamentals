'use client'

import { use } from 'react'

interface ProductProps {
  params: Promise<{
    data: string[]
  }>
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

export default function Product({ params }: ProductProps) {
  const { data } = use(params)
  const [productId, size, color] = data

  console.log(params)
  function addToCart() {
    console.log('Adicionou ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
