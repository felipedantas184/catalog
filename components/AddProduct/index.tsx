import { useState } from "react"
import { AddToCart } from "../Elements/Buttons/styles"
import { Container, FlexColumn, ImageWrapper, Wrapper } from "../Elements/styles"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import fireDB, { storage } from "@/firebase/initFirebase";
import { v4 } from "uuid";
import { useRouter } from "next/router"
import { addDoc, collection } from "firebase/firestore";

const AddProduct = () => {
  const router = useRouter()
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [data, setData] = useState({
    title: '',
    category: '',
    price: '',
    stock: '',
  })

  function handleChange(event: any) {
    setImageUpload(event.target.files[0])
  }

  const addProd = async (e: any) => {
    e.preventDefault()
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          addDoc(collection(fireDB, "products"), {
            title: data.title,
            category: data.category,
            price: data.price,
            stock: data.stock,
            imageUrl: url,
          })
          alert("Produto adicionado com sucesso!")
          router.push({ pathname: '/produtos' })
        })
      })
    } catch (error) {
      alert(error)
    }
  }


return (
  <Container background="#FFF">
    <Wrapper style={{ minHeight: '83vh', justifyContent: 'space-between', gap: 32 }} >
      <FlexColumn>
        <input type="file" onChange={handleChange} />
        <FlexColumn style={{ padding: 0 }} >
          <label>Produto</label>
          <input type="text" onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} />
        </FlexColumn>
        <FlexColumn style={{ padding: 0 }}>
          <label>Categoria</label>
          <input type="text" onChange={(e) => setData({ ...data, category: e.target.value })} value={data.category} />
        </FlexColumn>
        <FlexColumn style={{ padding: 0 }} >
          <label>Preço</label>
          <input type="number" onChange={(e) => setData({ ...data, price: e.target.value })} value={data.price} />
        </FlexColumn>
        <FlexColumn style={{ padding: 0 }}>
          <label>Estoque</label>
          <input type="number" onChange={(e) => setData({ ...data, stock: e.target.value })} value={data.stock} />
        </FlexColumn>
      </FlexColumn>
      <FlexColumn>
        <AddToCart onClick={addProd} >Adicionar Produto</AddToCart>
      </FlexColumn>
    </Wrapper>
  </Container>
)
}

export default AddProduct