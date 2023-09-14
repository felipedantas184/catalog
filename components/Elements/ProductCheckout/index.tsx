import Image from "next/image"
import { Buttons, Card, Category, ImageWrapper, Price, QntButton, Title } from "./styles"
import { Divider, FlexColumn } from "../styles"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from "@/redux/cart.slice";

const ProductCheckout = ({product}:any) => {
	const dispatch = useDispatch();

	return (
		<>
			<Card>
				<ImageWrapper href={'/'}>
					<Image src={product.imageUrl} alt={product.title} fill className={'image'} sizes="(max-width: 384px)" />
				</ImageWrapper>
				<FlexColumn style={{ flex: 2 }} >
					<Category>{product.category}</Category>
					<Title>{product.title}</Title>
					<Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price>
					<Buttons>
						<QntButton onClick={() => dispatch(decrementQuantity(product.id))} ><FaMinusCircle size={16} color='#13131A' /></QntButton>
						<p>{product.quantity}</p>
						<QntButton onClick={() => dispatch(incrementQuantity(product.id))} ><FaPlusCircle size={16} color='#13131A' /></QntButton>
					</Buttons>
				</FlexColumn>
			</Card>
			<Divider />
		</>
	)
}

export default ProductCheckout