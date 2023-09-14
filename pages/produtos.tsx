import ProductsList from "@/components/Products"
import Layout from "@/layout"

import { collection, getDocs } from "firebase/firestore";
import fireDB from "@/firebase/initFirebase";


export async function getServerSideProps() {
  const DBProducts = await getDocs(collection(fireDB, "products"));
  const products: any = []
  DBProducts.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    products.push(obj)
  });

  return {
    props: {
      products
    }
  }
}

export default function ProductsPage({products}:any) {
  return (
    <>
      <Layout>
        <ProductsList products={products} />
      </Layout>
    </>
  )
}