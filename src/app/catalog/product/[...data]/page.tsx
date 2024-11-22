interface ProductProps {
  params: Promise<{
    data: string[]
  }>
}

export default async function Product({ params }: ProductProps) {
  const { data } = await params
  const [productId, size, color] = data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}
