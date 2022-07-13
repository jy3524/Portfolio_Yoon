// Modified from craftzdog-homepage (https://www.craftz.dog) by Takuya

import { Box, Container, Heading } from '@chakra-ui/react';
import NoSsr from '../components/no-ssr.js';
import Logo3D from '../components/Logo3D.js';

const Home = () => {
  return (
    <Container>
      <NoSsr>
        <Logo3D />
      </NoSsr>
      <Box display={{ md: 'flex' }} flexGrow={1}>
        <Heading 
          alignItems="center" 
          align="center" 
          d="flex"
          justifyContent="center" 
          fontFamily="Courier" 
          fontWeight="medium"
          size="lg"
        >
          Hi, My name is JEONGIN YOON 🇰🇷.
          I am a creative technologist based in NYC. 
          I am passionate about human-centered design and engineering for AR/VR.
        </Heading>
      </Box>
    </Container>
  );
}

export default Home;