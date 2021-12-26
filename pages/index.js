import { Box, Container, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }} flexGrow={1}>
        <Heading 
          as="h2" 
          alignItems="center" 
          align="center" 
          d="flex" 
          h="90vh" 
          justifyContent="center" 
          fontFamily="Courier" 
          fontWeight="medium"
        >
          Hi, My name is JEONGIN YOON.
          I am a creative technologist based in NYC. 
          I am passionate about UX design and engineering for AR/VR.
        </Heading>
      </Box>
    </Container>
  );
}

export default Home;