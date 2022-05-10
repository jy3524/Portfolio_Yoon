import { Heading, Container, SimpleGrid} from '@chakra-ui/react';
import { PortGridItem } from '../components/grid';
import Section from '../components/section';

import thumbAR from '../public/thumbAR.png';

const Portfolio = () => {
  return (
    <Container>
      <Heading fontFamily="Gill Sans" fontSize={30} p={5} mb={4} align="center">
        Portfolio
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6} fontFamily="Gill Sans">
        <Section>
          <PortGridItem id="chinatown" title="Chinatown AR" thumbnail={thumbAR}>
            An Augmented Reality Mobile Application
          </PortGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;