import { Container, FlexRowSB } from "@/components/Elements/styles"
import { FaAirbnb } from 'react-icons/fa'
import { Item, Menu } from "./styles";

const Footer = () => {
  return (
    <Container background="#13131A" >
      <FlexRowSB style={{paddingLeft: 16, paddingRight: 16}} >
        <FaAirbnb size={24} color="#E1E1E1" />
        <Menu>
          <Item href={'/'}>Home</Item>
          <Item href={'/'}>Contact</Item>
        </Menu>
      </FlexRowSB>
    </Container>
  )
}

export default Footer;