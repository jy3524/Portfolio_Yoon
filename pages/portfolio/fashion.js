import { Container, Image, List, ListItem } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const fashion = () => {
  return (
    <Container>
      <Title>
        3D Fashion Design for MetaHuman
      </Title>
      <List>
        <PortfolioImage src="/thumb_hana.png" alt="fashion"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This fashion design project is created using Marvelous Designer and MetaHuman by Unreal Engine.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          Marvelous Designer & MetaHuman
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6} mb={6}>
          I customized the MetaHuman character and imported it into the Unreal Engine.
          And then, I used Marvelous Designer to create a custom cloth that fits the MetaHuman character.
        </ListItem>
        <Image src='/mar_des.png' alt="marvelous_designer"></Image>
        <Image src='/metahuman.png' alt="metahuman"></Image>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          Fashion Design for Metaverse and XR
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6} mb={6}>
          This project is for MetaHuman but 3D fashion design is not limited to making clothes for the MetaHuman. 
          It can be used to make customized fashion items for any 3D characters in Metaverse or people in the real world through Augmented Reality.
          I am interested in both fashion and technology so this project shows the beginning of what I am going to do in the future.
        </ListItem>
      </List>
    </Container>
  )
}

export default fashion