import { Container, List, ListItem, Link, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const scope = () => {
  return (
    <Container>
      <Title>
        3D Scope
      </Title>
      <List>
        <PortfolioImage src="/scope.png" alt="Scope"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Web Version
        </ListItem>
        <AspectRatio maxW="580" ratio={2} mt={6}>
          <iframe 
            title='WebScope'
            src="/Scope.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          I used Maya to build the 3D model and React with Three.js to create the scene above. 
          The 3D scope model is exported as a glTF file from 3D software and imported to the webpage.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          WebVR Version
        </ListItem>
        <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='https://jy3524.github.io/webvr0/build/' isExternal>
          Link to Live on GitHub Page
        </Link>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          For the VR version, I used React and A-Frame to import the 3D model into a WebVR world.
          While using the VR headset, click the VR button on the bottom right corner of the webpage to initiate the VR mode.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          AR Version
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='ARScope'
            src="/ARScope.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          For the AR version, I used Unity with Vuforia Engine to implement the image recognition feature.
          This AR app can recognize my profile image and show the 3D scope AR effect on top of the image.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Physical Computing Version
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='physical'
            src="/physical.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          For the physical computing version, I used Electron, Johnny-Five, and Arduino on top of Typescript and Three.js.
          Turning the potentiometer moves the scope left and right on the x-axis. Pressing the button randomly changes the color of the scope.
        </ListItem>
      </List>
    </Container>
  )
}

export default scope