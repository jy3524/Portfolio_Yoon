import { Container, List, ListItem, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const catwalk = () => {
  return (
    <Container>
      <Title>
        Virtual Production - Fashion Show Catwalk
      </Title>
      <List>
        <PortfolioImage src="/catwalk.png" alt="catwalk"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This virtual production short film was created by using Unreal Engine 5.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Virtual Fashion Show
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          This is a partial scene from the virtual production graduate-level coursework at NYU (DMGY 9103 Virtual Production Development).
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='fashion show'
            src="/catwalk_short.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          The 3D Character is from Ready Player Me.
        </ListItem>
      </List>
    </Container>
  )
}

export default catwalk