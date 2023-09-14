import { Container, FlexColumn, FlexRowSB, Wrapper } from "@/components/Elements/styles"
import { Category16, ImageWrapper, Price18, Title16 } from "./styles"
import Image from "next/image"
import { FaHeart, FaShare } from "react-icons/fa"
import { AddToCart, Favorite } from "@/components/Elements/Buttons/styles"
import { useDispatch } from 'react-redux'
import { addToCart } from "@/redux/cart.slice"

const ProductDetail = ({product, productId}:any) => {
	const dispatch = useDispatch()
	var productNew = {title: product.title, category: product.category, price: product.price, stock: product.stock, imageUrl: product.imageUrl, id: productId}

	return (
		<Container background="#FFF" style={{paddingTop: 0}} >
			<Wrapper>
				<ImageWrapper>
          <Image src={product.imageUrl} alt={product.title} fill className={'image'} />
        </ImageWrapper>
        <FlexColumn style={{marginTop: 24}} >
					<FlexRowSB>
  					<Category16>{product.category}</Category16>
						<FaShare size={16} color="#13131A" />
					</FlexRowSB>
          <Title16>{product.title}</Title16>
          <Price18>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price18>
				</FlexColumn>
        <FlexRowSB style={{paddingLeft: 8, paddingRight: 8, marginTop: 12}} >
          <AddToCart onClick={() => dispatch(addToCart(productNew))} >Adicionar ao Carrinho</AddToCart>
          <Favorite><FaHeart size={16} color='#13131A' /></Favorite>
        </FlexRowSB>
			</Wrapper>
		</Container>
	)
}

export default ProductDetail