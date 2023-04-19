import { Container, List, ListItem, Link, AspectRatio, Image, Center } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const webxr = () => {
  return (
    <Container>
      <Title>
        WebXR
      </Title>
      <List>
        <PortfolioImage src="/webxr.png" alt="WebXR"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          Dancer
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6} mb={6}>
          This WebAR project is created using A-frame and AR.js.
        </ListItem>
        <Center>
          <Image src='/webqr.png' alt="webqr" boxSize='300px'></Image>
        </Center>
        <Center>
          <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='https://marbled-rambunctious-seahorse.glitch.me/' isExternal>
            Scan the QR Code.
          </Link>
        </Center>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          Try the AR dancer on your mobile device. Touch screen to make the dancer 2X bigger.
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
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={12} mb={6}>
          Interactive Portfolio Website - VR
        </ListItem>
        <PortfolioImage src="/webvr.png" alt="WebVR"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6} mb={6}>
          This WebVR project is created using A-frame.
        </ListItem>
        <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='https://common-wholesale-protest.glitch.me/' isExternal>
          Try with your HMD device.
        </Link>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          Use your HMD device to enter a fully immersive VR website. 
          Clicking a link above and then clicking the VR button on the right bottom corner to enter VR mode.
          Locomotion with the left thumbstick on your left VR controller and turn around with the right thumbstick on your right VR controller.
          There are VR controller interactable elements in the scene.
          You can also move around with WASD keys and a mouse but you cannot interact with elements with a keyboard and mouse.
          This interactive VR website is a prototype landing page for a portfolio website to present 3D models and animations.
          There is also a routing feature so that I can link other VR or 3D interactive websites with this landing page.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={12} mb={6}>
          Unity VR - WebGL project is in progress.
        </ListItem>
      </List>
    </Container>
  )
}

export default webxr