import { Button, SecButton } from "@/components/Elements/Buttons/styles";
import { Box, ButtonWrapper, Container, Heading, ImageWrapper, Subtitle, Title, Wrapper } from "@/components/Elements/styles";
import Image from "next/image";

const Hero = () => { 
  return (
    <Container background="#FFF" >
      <Wrapper>
        <Box>
          <Heading>
            <Title>Os Nossos Mais Vendidos</Title>
            <Subtitle>Pague seu novo iPhone em até 12 parcelas ou economize 10% nos pagamentos à vista. Saiba mais</Subtitle>
            <ButtonWrapper>
              <Button>Comprar</Button>
              <SecButton>Comprar</SecButton>
            </ButtonWrapper>
          </Heading>
        </Box>
        <Box>
          <ImageWrapper>
            <Image src={'https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg'} alt="" fill />
          </ImageWrapper>
        </Box>
      </Wrapper>
    </Container>
  )  
}

export default Hero;