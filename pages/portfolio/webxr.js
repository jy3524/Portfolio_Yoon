import { Container, List, ListItem, Link, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const webxr = () => {
  return (
    <Container>
      <Title>
        WebXR
      </Title>
      <List>
        <PortfolioImage src="/webxr.png" alt="WebXR"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6} mb={6}>
          A-frame WebVR and Unity WebGL projects are in progress.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          Dancer
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6} mb={6}>
          This project is created using A-frame and AR.js.
        </ListItem>
        <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='https://marbled-rambunctious-seahorse.glitch.me/' isExternal>
          Try AR on your mobile device
        </Link>
        <ListItem fontFamily="Gill Sans" fontSize={18} mb={6}>
          Touch screen to make the dancer 2X bigger.
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='dancerAR'
            src="/dancerAR.mp4"
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

export default webxr