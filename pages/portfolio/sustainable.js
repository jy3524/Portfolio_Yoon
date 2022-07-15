import { Container, List, ListItem, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const sustainable = () => {
  return (
    <Container>
      <Title>
        ReStore
      </Title>
      <List>
        <PortfolioImage src="/sustainable.png" alt="Sustainable"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This mobile app is built with React Native.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          About This Project:
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          The problem in the fashion industry is sustainability and ethical issue. 
          There are so many issues in this industry and I will introduce some of the problems. 
          First, the fashion industry is responsible for 8-10% of global carbon emissions. 
          Also, they use an excessive amount of resources to produce clothes. 
          The industry pollutes the water source by using fertilizer and chemicals for dyeing. 
          Lastly, the fashion industry is abusing both humans and animals by using animal furs and running sweatshops in developing countries.
          To fix some of the issues, we need to think about how to manufacture and source fashion products. 
          The fashion industry can try to use recycled, sustainable, and ethical materials.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          There is no 100% solution to the sustainable issue unless we stop consuming or producing. 
          However, that is not the option we have. What we can do is ‘less consume and less produce’ or ‘consume smart and produce sustainable way’. 
          One possible solution (but not perfect) is to establish a sustainable fashion brand. 
          To support sustainable fashion, I created a mobile shopping application where users can purchase sustainable fashion items.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Moodboard
        </ListItem>
        <PortfolioImage src="/moodboard.png" alt="Moodboard"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          High Fidelity Wireframe (Figma)
        </ListItem>
        <PortfolioImage src="/wireframe.png" alt="Wireframe"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Prototype (React Native)
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='sustainable fashion'
            src="/sustainable.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          Images via Unsplash.
        </ListItem>
      </List>
    </Container>
  )
}

export default sustainable