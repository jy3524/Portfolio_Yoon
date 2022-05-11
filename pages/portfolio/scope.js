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
        <Link fontFamily="Gill Sans" fontSize={20} color="blue.200" href='https://jy3524.github.io/ACC_Homework_Repo/week9/dist/' isExternal>
          Link to Live on GitHub
        </Link>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          About This Project:
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          This project is to showcase the 3D model on the web.
          For the web version, I used Typescript, Three.js, and Vite to import the 3D model into a webpage.
          I built the 3D scope model using Maya. 
          The model is exported to the glTF file format and imported into the webpage by using Three.js.
          Viewers can drag and scroll to control the camera view.
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