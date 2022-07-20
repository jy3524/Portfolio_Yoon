import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion, fadeInUp } from 'framer-motion';

const About = () => {
  return (
    <Container>
      <Heading fontFamily="Gill Sans" fontSize={30} p={5} mb={4} align="center">
        About Me
      </Heading>
      <Box 
        flexShrink={0} 
        mt={{ base: 4, md: 0 }} 
        ml={{ md: 6 }} 
        align="center"
      >
        <motion.div variants={fadeInUp}>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            marginTop={5}
            src="/Holo_Headshot.jpg" 
            alt='profile image'
          />
        </motion.div>
      </Box>
      <motion.div>
        <Text fontFamily="Gill Sans" fontSize={20} mb={4} align="center" marginTop={5}>
          Hello, I am Jeongin Yoon from South Korea 🇰🇷. I am a creative technologist based in New York City.
          I have an interdisciplinary background in Analytics, Business, Design, and Technology. 
          I hold a Master of Science degree in Business Analytics from Indiana University - Kelley School of Business. 
          Previously, I worked for Nordstrom, Philip Morris International, and The New School. 
          Currently, I am studying Integrated Design and Media at New York University - Tandon School of Engineering. 
          Throughout my education and experience, I became passionate about creative technology, especially AR and VR.
          I have been working on a variety of projects using TypeScript, Three.js, React.js, React Native, Xcode (Swift & RealityKit), Unity, and Spark AR.  
          With my diverse background, I am applying my versatile knowledge to solve problems in various industries.
        </Text>
      </motion.div>
    </Container>
  );
}

export default About;