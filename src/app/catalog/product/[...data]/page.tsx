import { AddToCartButton } from './add-to-cart-button'

interface ProductProps {
  params: Promise<{
    data: string[]
  }>
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma PARCIAL

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/ropdias')
  const user = await response.json()

  const { data } = await params
  const [productId, size, color] = data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
