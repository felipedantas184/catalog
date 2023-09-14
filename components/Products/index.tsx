import { FaFilter } from "react-icons/fa"
import ProductCard from "../Elements/ProductCard"
import { Container, FlexColumn, FlexRowSB, Grid2, Text, Title, Wrapper } from "../Elements/styles"

const ProductsList = ({ products }: any) => {
	return (
		<Container background="#FFF" >
			<Wrapper>
				<FlexColumn style={{ marginBottom: 12 }} >
					<Title>Vestidos</Title>
					<FlexRowSB>
						<Text>32 Produtos</Text>
						<FaFilter size={16} color="#13131A" />
					</FlexRowSB>
				</FlexColumn>
				<Grid2>
					{products.map((product: any) => (
						<ProductCard key={product.id} product={product} />
					))}
				</Grid2>
			</Wrapper>
		</Container>
	)
}

export default ProductsList