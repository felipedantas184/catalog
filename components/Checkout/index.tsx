import { AddToCart } from "../Elements/Buttons/styles"
import ItemCheckout from "../Elements/ItemCheckout"
import ProductCheckout from "../Elements/ProductCheckout"
import { Container, FlexColumn, FlexRowSB, Price18, PageTitle, Title16, Wrapper } from "../Elements/styles"
import { useSelector } from 'react-redux';

const Checkout = () => {
	const cart = useSelector((state: any) => state.cart);

	const getTotalPrice = () => {
    return cart.reduce(
      (accumulator:any, item:any) => accumulator + item.quantity * item.price,
      0
    );
  };

	return (
		<Container background="#FFF">
			<Wrapper style={{ minHeight: '83vh', justifyContent: 'space-between', gap: 32 }} >
				<FlexColumn>
					<PageTitle style={{ paddingLeft: 8, alignSelf: 'flex-start' }}>Carrinho</PageTitle>
					{cart.length === 0 ? (
						<Title16>Seu carrinho está vazio! =(</Title16>
					) : (
						<>
						{cart.map((product: any) => (
							<ProductCheckout key={product.id} product={product} />
						))}
							<ItemCheckout title={'Endereço'} options={['Rua Sen. Area Leão, 647']} />
							<ItemCheckout title={'Pagamento'} options={['Pix', 'Crédito']} />
							<ItemCheckout title={'Entrega'} options={['Padrão', 'Retirar na Loja']} />
						</>
					)}
				</FlexColumn>
				{cart.length === 0 ? (
					<Title16>Seu carrinho está vazio! =(</Title16>
				) : (
					<FlexColumn>
						<FlexRowSB style={{ paddingLeft: 8, paddingRight: 8 }} >
							<Title16>Total</Title16>
							<Price18>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(getTotalPrice())}</Price18>
						</FlexRowSB>
						<AddToCart>Adicionar ao Carrinho</AddToCart>
					</FlexColumn>
				)}
			</Wrapper>
		</Container>
	)
}

export default Checkout