import ProductDetail from "@/components/Details/ProductDetail"
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout"
import { doc, getDoc } from "firebase/firestore";

export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const data = await getDoc(doc(fireDB, "products", id));
  const product = data.data()

  return {
    props: {
      product: product,
      productId: id,
    }
  }
}

export default function ProductsPage({product, productId}:any) {
  return (
    <>
      <Layout>
        <ProductDetail product={product} productId={productId} />
      </Layout>
    </>
  )
}