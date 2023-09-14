import Image from "next/image"
import { Card, Category, ImageWrapper, Price, TextWrapper, Title } from "./styles"

const ProductCard = ({product}:any) => {
  return (
    <Card>
      <ImageWrapper href={`/produto/${product.id}`}>
        <Image src={product.imageUrl} alt={product.title} fill sizes="(max-width: 384px)" className={'image'} />
      </ImageWrapper>
      <TextWrapper href={'/produto'}>
        <Category>{product.category}</Category>
        <Title>{product.title}</Title>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price>
      </TextWrapper>
    </Card>
  )
}

export default ProductCard