import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion, fadeInUp } from 'framer-motion';

const About = () => {
  return (
    <Container>
      <Heading fontFamily="Gill Sans" fontSize={30} mb={4} align="center">
        About me
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
            whileHover={{ scale: 1.05 }}
            src="/Jeongin_Yoon.jpg" 
            alt='profile image'
          />
        </motion.div>
      </Box>
      <motion.div>
        <Text fontFamily="Gill Sans" fontSize={20} mb={4} align="center" marginTop={5}>
          Hello, My name is Jeongin. 
          I have an interdisciplinary background in Analytics, Business, Design, and Technology. 
          I hold a Master of Science degree in Business Analytics from Indiana University - Kelley School of Business. 
          Currently, I am studying Integrated Design and Media at New York University - Tandon School of Engineering. 
          I am interested in UX design/engineering and AR/VR. 
          With my diverse background, I am trying to apply my versatile knowledge to solve problems in various industries.
        </Text>
      </motion.div>
    </Container>
  );
}

export default About;