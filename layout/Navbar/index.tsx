import { FaAirbnb, FaBars, FaShoppingBag } from 'react-icons/fa'
import { Badge, Container, ItemLink, Nav, NavItem, Wrapper } from "./styles"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Container background="#13131A" >
      <Wrapper>
        <FaBars size={24} color="#E1E1E1" /> 
        <ItemLink href={'/'}><FaAirbnb size={32} color="#FFF" /></ItemLink> 
        <ItemLink href={'/checkout'}><Badge>{cart.length}</Badge><FaShoppingBag size={24} color="#E1E1E1" /></ItemLink>  
        {/** 
         <Nav>
          <NavItem href={'/'} >Home</NavItem>
          <NavItem href={'/'} >Contact</NavItem>
          <NavItem href={'/'} >Login</NavItem>
        </Nav>
        */}
      </Wrapper>
    </Container>
  )
}

export default Navbar;